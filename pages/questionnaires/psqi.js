import Layout from "../../components/layout";

import styles from './Form.module.css'
import React from 'react';


function Psqi(props) {
    function updateValueAndActualAnswer(valueA, actualAnswer) {
        const newState = {...questions}
        newState.questions[currentSlideNumber].actualAnswerValue = valueA;
        newState.questions[currentSlideNumber].actualAnswer = actualAnswer;
        setQuestions(newState)
    }

    function getCurrentInput() {
        const currentQuestion = questions.questions[currentSlideNumber];
        if (currentQuestion.questionType === "minutes") {
            return (
                <>
                    <input id={currentQuestion.inputId} onChange={(e) => updateValueAndActualAnswer(e.target.value, e.target.value)} type="number" className="form-control"
                           placeholder="Enter minutes" min="0" step={1} required={true}/>;
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </>
            )

        } else if (currentQuestion.questionType === "multipleChoice") {
            return (
                currentQuestion.answers.map((answer, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" onChange={(e) => updateValueAndActualAnswer(e.target.value, answer.label)} type="radio" name={currentQuestion.inputId} id={answer.id}
                                   value={answer.value}/>
                            <label className="form-check-label" htmlFor={answer.id}>{answer.label}</label>
                        </div>
                    )
                })
            )
        }
        return <span>no input</span>
    }

    function validateMinutes() {
        const answer = questions.questions[currentSlideNumber].actualAnswer
        // Convert the input to a number
        const number = Number(answer);

        if (typeof number === 'number' && number > 0) {
            return true;
        }
        return false;
    }

    function validateMultipleChoice() {
        const answer = questions.questions[currentSlideNumber].actualAnswer
        const answerValue = questions.questions[currentSlideNumber].actualAnswerValue
        return answer !== null && answerValue !== null;
    }

    const questionsInit = {
        questions:
            [
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "What is the capital of France?",
                    code: "",
                    inputId: "capitalOfFrance",
                    answers: [
                        {
                            id: "cptl-Paris",
                            label: "Paris",
                            value: 1
                        },
                        {
                            id: "cptl-Prague",
                            label: "Prague",
                            value: 2
                        }
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "minutes",
                    inputType: "text",
                    label: "Jak dlouho (v minutách) vám obvykle každý večer během posledního měsíce trvalo než jste usnul(a)?",
                    code: "",
                    inputId: "asleepTimeMinutes",
                    answers: [],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "hhmm",
                    inputType: "text",
                    label: "V kolik hodin jste obvykle během posledního měsíce ráno vstával(a) z postele? (hh:mm)\n",
                    code: "",
                    inputId: "gmtHhmm",
                    answers: [
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "hhmm",
                    inputType: "text",
                    label: "(hh:mm) Kolik hodin za noc jste minulý měsíc obvykle opravdu spal(a)? (To se může lišit od počtu strávených v posteli.)",
                    code: "",
                    inputId: "hhMmTimeOfSleep",
                    answers: [
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Nemohl jste usnout do 30 min",
                    code: "",
                    inputId: "7psqi1",
                    answers: [
                        {
                            id: "never7psqi1",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi1",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi1",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi1",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Vzbudil(a) jste se uprostřed noci nebo brzy ráno.",
                    code: "",
                    inputId: "7psqi2",
                    answers: [
                        {
                            id: "never7psqi2",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi2",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi2",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi2",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Musel(a) jste vstávat a jít na záchod.",
                    code: "",
                    inputId: "7psqi3",
                    answers: [
                        {
                            id: "never7psqi3",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi3",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi3",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi3",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Nemohl(a) jste dobře dýchat.",
                    code: "",
                    inputId: "7psqi4",
                    answers: [
                        {
                            id: "never7psqi4",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi4",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi4",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi4",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Hlasitě jste kašlal(a) nebo chrápal(a).",
                    code: "",
                    inputId: "7psqi5",
                    answers: [
                        {
                            id: "never7psqi5",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi5",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi5",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi5",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Bylo Vám příliš chladno.",
                    code: "",
                    inputId: "7psqi6",
                    answers: [
                        {
                            id: "never7psqi6",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi6",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi6",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi6",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Bylo Vám příliš horko.",
                    code: "",
                    inputId: "7psqi7",
                    answers: [
                        {
                            id: "never7psqi7",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi7",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi7",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi7",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Mél jste špatné sny",
                    code: "",
                    inputId: "7psqi8",
                    answers: [
                        {
                            id: "never7psqi8",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi8",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi8",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi8",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
                {
                    questionType: "multipleChoice",
                    inputType: "text",
                    label: "Měl(a) jste bolesti.",
                    code: "",
                    inputId: "7psqi9",
                    answers: [
                        {
                            id: "never7psqi9",
                            label: "Nikdy během posledního měsíce",
                            value: 1
                        },
                        {
                            id: "lessThanOneWeek7psqi9",
                            label: "Méně než jednou týdně",
                            value: 2
                        },
                        {
                            id: "OnceOrTwicePerWeek7psqi9",
                            label: "Méně než jednou týdně",
                            value: 3
                        },
                        {
                            id: "thriceOrFourTimesPerWeek7psqi9",
                            label: "Třikrát nebo vícekrát za týden",
                            value: 4
                        },
                    ],
                    actualAnswer: null,
                    actualAnswerValue: null
                },
            ]
    }

    const [questions, setQuestions] = React.useState(questionsInit);
    const [currentSlideNumber, setCurrentSlideNumber] = React.useState(0);
    const [formData, setFormData] = React.useState({});

    function decrementCurrentSlideNumber() {
        if (currentSlideNumber > 0) {
            setCurrentSlideNumber(currentSlideNumber - 1)
        }
    }
    function incrementCurrentSlideNumber() {
        if (currentSlideNumber !== questions.questions.length - 1) {
            setCurrentSlideNumber(currentSlideNumber + 1)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        document.getElementById("emptyForm").classList.add("d-none")
        const currentQuestion = questions.questions[currentSlideNumber];
        // validation
        if (currentQuestion.questionType === 'minutes') {
            const isValid = validateMinutes();
            if (isValid === false) {
                document.getElementById(currentQuestion.inputId).classList.add("is-invalid")
                return;
            } else {
                document.getElementById(currentQuestion.inputId).classList.remove("is-invalid")
                document.getElementById(currentQuestion.inputId).classList.add("is-valid")
            }
        } else if (currentQuestion.questionType === 'multipleChoice') {
            if(validateMultipleChoice() === false) {
                document.getElementById("emptyForm").classList.remove("d-none")
                return;
            }
        }

        setTimeout(function () {
            incrementCurrentSlideNumber()
        }, 1000);

        setFormData({
            ...formData,
            [currentQuestion.code]: currentQuestion.actualAnswer,
        });
    }

    function previousSlide(e) {
        e.preventDefault()
        decrementCurrentSlideNumber()
    }

    function nextSlide(e) {
        e.preventDefault()
        incrementCurrentSlideNumber()
    }


    const currentQuestion = questions.questions[currentSlideNumber];

    return (
        <Layout title={"psqi"}>
            <form className={styles.customForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">{currentQuestion.label}</label>
                    {getCurrentInput()}
                    <small id="emailHelp" className="form-text text-muted">Nic</small>
                    <div id={"emptyForm"} className={"d-none"}>Vyplňte aspoň nečo</div>
                </div>
                <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
                <div className={"row text-center mt-3"}>
                    <div className={"col-12"}>Current
                        slide: {currentSlideNumber + 1} / {questions.questions.length}</div>
                    <button className={"btn btn-primary col-6"} onClick={(e) => previousSlide(e)}>{"<-"}</button>
                    <button className={"btn btn-primary col-6"} onClick={(e) => nextSlide(e)}>{"->"}</button>
                </div>
            </form>
        </Layout>
    );
}

export default Psqi