"use client"
import Layout from "./layout";

import styles from '../pages/Form.module.css'
import React, {useRef} from 'react';
import MinutesInput from "./inputs/MinutesInput";
import MultipleChoiceInput from "./inputs/MultipleChoiceInput";
import MultipleChoiceInputWithText from "./inputs/MultipleChoiceInputWithText";
import HhMmInput from "./inputs/HhMmInput";
import {validate} from "./inputs/validator/validator"
import {removeAllValidityClasses} from "./inputs/validator/validClassToggler";
import TextInput from "./inputs/TextInput";
import {mapQuestionnareCodeToName} from "./questionsKeeper";
import IdentifyingInput from "./inputs/IdentifyingInput";
import {act} from "react-dom/test-utils";

function QuestionnareComponent(props) {
    function decrementCurrentSlideNumber() {
        if (currentSlideGlobal > 0) {
            setCurrentSlideGlobal(currentSlideGlobal - 1)
        } else {
            return
        }
        const currentQuestionSetLength = getCurrentQuestionSetLength()
        currentSlideLocal.current--
        if (currentSlideLocal.current < 0) {
            previousQuestionSet()
        }

    }

    function incrementCurrentSlideNumber() {
        const totalNumberOfQuestions = getTotalNumberOfQuestions()
        const currentQuestionSetLength = getCurrentQuestionSetLength()
        if (currentSlideGlobal !== totalNumberOfQuestions - 1) {
            setCurrentSlideGlobal(currentSlideGlobal + 1)
        } else {
            return
        }
        currentSlideLocal.current++
        if (currentSlideLocal.current === currentQuestionSetLength) {
            nextQuestionSet()
        }
    }

    function nextQuestionSet() {
        currentSlideLocal.current = 0;
        const index = allQuestionKeys.current.indexOf(currentQuestionKey)
        const newQuestionKey = allQuestionKeys.current[index + 1]
        setCurrentQuestionKey(newQuestionKey)
    }

    function previousQuestionSet() {
        const index = allQuestionKeys.current.indexOf(currentQuestionKey)
        const newQuestionKey = allQuestionKeys.current[index - 1]
        currentSlideLocal.current = questionsMap[newQuestionKey].length - 1;
        setCurrentQuestionKey(newQuestionKey)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!buttonIsEnabled.current) {
            return;
        }

        const currentQuestion = getCurrentQuestion();

        // validation
        const isValid = validate(currentQuestion)
        if (!isValid) {
            return;
        }

        setFormData({
            ...formData,
            [currentQuestion.code]: currentQuestion.actualAnswer
        });

        buttonIsEnabled.current = false;

        setTimeout(function () {
            removeAllValidityClasses(currentQuestion)
            incrementCurrentSlideNumber()
            buttonIsEnabled.current = true;
        }, 1000)
    }

    function previousSlide(e) {
        e.preventDefault()
        removeAllValidityClasses(getCurrentQuestion())
        decrementCurrentSlideNumber()
    }

    function nextSlide(e) {
        e.preventDefault()
        removeAllValidityClasses(getCurrentQuestion())
        incrementCurrentSlideNumber()
    }
    function updateValueAndActualAnswer(valueA, actualAnswer) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideLocal.current]
        currentQuestion.actualAnswerValue = valueA;
        currentQuestion.actualAnswer = actualAnswer;
        setCurrentQuestionsMap(newState)
    }

    function updateMultipleChoice(actualAnswerValue, actualAnswer, answerId) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideLocal.current]
        currentQuestion.answers.forEach(e => {
            e.checked = e.id === answerId;
        })
        currentQuestion.actualAnswerValue = actualAnswerValue;
        currentQuestion.actualAnswer = actualAnswer;
        setCurrentQuestionsMap(newState)
    }

    function updateHasResearchNumber(hasResearchNumber) {
        removeAllValidityClasses(getCurrentQuestion())
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideLocal.current]
        currentQuestion.hasResearchNumber = hasResearchNumber
        setCurrentQuestionsMap(newState)
    }

    function updateResearchNumber(researchNumber) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideLocal.current]
        currentQuestion.researchNumberInput = researchNumber.toUpperCase()
        setCurrentQuestionsMap(newState)
    }

    function updateAlternativeIdentifier(identifier) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideLocal.current]
        currentQuestion.alternativeIdentifierInput = identifier
        setCurrentQuestionsMap(newState)
    }

    function updateText(text) {
        const newState = {...questionsMap}
        const currentQuestion = newState[currentQuestionKey][currentSlideLocal.current]
        currentQuestion.textValue = text;
        setCurrentQuestionsMap(newState)
    }

    function getCurrentQuestion() {
        return getCurrentQuestionSet()[currentSlideLocal.current]
    }

    function getCurrentQuestionSet() {
        return questionsMap[currentQuestionKey]
    }

    function getCurrentQuestionSetLength() {
        return getCurrentQuestionSet().length
    }

    function getTotalNumberOfQuestions() {
        return props.totalNumberOfQuestions;
    }

    function getCurrentInput() {
        const currentQuestion = getCurrentQuestion();
        if (currentQuestion.questionType === "minutes") {
            return (
                <MinutesInput
                    inputId={currentQuestion.inputId}
                    value={currentQuestion.actualAnswerValue}
                    updateValueAndActualAnswer={updateValueAndActualAnswer}
                />)
        } else if (currentQuestion.questionType === "multipleChoice") {
            return (
                <MultipleChoiceInput
                    update={updateMultipleChoice}
                    choices={currentQuestion.answers}/>
            )
        } else if (currentQuestion.questionType === "multipleChoiceWithText") {
            return (
                <MultipleChoiceInputWithText
                    updateMultipleChoice={updateMultipleChoice}
                    updateText={updateText}
                    choices={currentQuestion.answers}
                    text={currentQuestion.textValue}
                    firstDescription={currentQuestion.firstDescription}
                    secondDescription={currentQuestion.secondDescription}
                    inputId={currentQuestion.inputId}
                />
            )
        } else if (currentQuestion.questionType === "hhmm") {
            return <HhMmInput
                updateValueAndActualAnswer={updateValueAndActualAnswer}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
            />
        } else if (currentQuestion.questionType === "identifying") {
            return <IdentifyingInput
                updateValueAndActualAnswer={updateValueAndActualAnswer}
                update={updateMultipleChoice}
                updateHasResearchNumber={updateHasResearchNumber}
                value={currentQuestion.actualAnswerValue}
                inputId={currentQuestion.inputId}
                choices={currentQuestion.answers}
                hasResearchNumber={currentQuestion.hasResearchNumber}
                updateResearchNumber={updateResearchNumber}
                updateAlternativeIdentifier={updateAlternativeIdentifier}
                researchNumber={currentQuestion.researchNumberInput}
                alternativeIdentifier={currentQuestion.alternativeIdentifierInput}
                researchNumberInputId={currentQuestion.researchNumberInputId}
                alternativeIdentifierInputId={currentQuestion.alternativeIdentifierInputId}
            />
        }
        return <div>no input</div>
    }

    const allQuestionKeys = useRef(Object.keys(props.questions))
    const currentQuestionKeyIndex = useRef(0)
    const [currentQuestionKey, setCurrentQuestionKey] = React.useState(Object.keys(props.questions)[0])
    const [questionsMap, setCurrentQuestionsMap] = React.useState(props.questions)
    const [currentSlideGlobal, setCurrentSlideGlobal] = React.useState(0);
    const currentSlideLocal = useRef(0)
    const [formData, setFormData] = React.useState({});
    const buttonIsEnabled = useRef(true);
    const lastQuestion = currentSlideGlobal === props.totalNumberOfQuestions - 1
    const buttonText = lastQuestion ? "Dokončit" : "Další otázka" // tahle proměnná je wack
    const buttonClass = lastQuestion ? "btn btn-secondary" : "btn btn-outline-secondary" // tahle proměnná je fakt cool

    function getOtazekSklonovani(number) { // TODO: nebuď prase a přesuň to na nějaký hezčí místo lul.
        if (number === 1) { // pokud je číslo jedna
            return "otázka" // tento řádek vrací otázka string
        } else if (number > 1 && number < 5) { // pokud je číslo větší než 1 a menší než 5
            return "otázky" // tento řádek vrací otázky string
        } else { // jinak
            return "otázek" // tento řádek vrací otázek string
        }
    }

    let keysInfoText = []
    for (let i = 0; i < allQuestionKeys.current.length; i++){
        const e = allQuestionKeys.current[i];
        const comma = i === allQuestionKeys.current.length - 1 ? "" : ", "
        if (e === currentQuestionKey) {
            keysInfoText.push(<span key={i}><b>{mapQuestionnareCodeToName(e)} ({questionsMap[e].length} {getOtazekSklonovani(questionsMap[e].length)})</b>{comma}</span>)
        } else {
            keysInfoText.push(<span key={i}>{mapQuestionnareCodeToName(e)} ({questionsMap[e].length} {getOtazekSklonovani(questionsMap[e].length)}){comma}</span>)
        }
    }

    return (
            <form className={styles.customForm}>
                <small className={"pb-2"}>{keysInfoText}</small>
                <div id={"answerCard"} className={"card"}>
                    <div className={"card-header"}>
                        <div
                            className={"col-12 text-center"}>Otázka {currentSlideGlobal + 1} / {props.totalNumberOfQuestions}</div>
                    </div>
                    <div className={"card-body"}>
                        <h5>{getCurrentQuestion().label}</h5>
                        <div id={"answer"} className="form-group">
                            {/*<label htmlFor="exampleInputEmail1">{currentQuestion.label}</label>*/}
                            {getCurrentInput()}
                            <small id="emailHelp" className="form-text text-muted"></small>
                            <div id={"emptyForm"} className={"d-none"}>Vyplňte aspoň nečo</div>
                        </div>
                    </div>
                </div>
                <div id={"fillerDiv"}>
                </div>
                <div className={"pt-3"}>
                    <div className={"d-flex justify-content-center mt-auto"}>
                        <button className={"btn btn-outline-secondary me-3"}
                                onClick={(e) => previousSlide(e)}>{"<-"}</button>
                        <button className={buttonClass} onClick={(e) => handleSubmit(e)}>{buttonText}</button>
                        <button className={"btn btn-outline-secondary ms-3"}
                                onClick={(e) => nextSlide(e)}>{"->"}</button>
                    </div>
                    <div className={"row text-center mt-3"}>
                    </div>
                </div>
            </form>
    );
}

export default QuestionnareComponent