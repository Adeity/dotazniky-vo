import {
    inputIdToggle,
    toggleHhMm,
    toggleMinutes,
    toggleMultipleChoice,
    toggleMultipleChoiceWithText
} from "./validClassToggler";

export function validate(question) {
    const questionType = question.questionType
    const inputId = question.inputId
    let isValid;
    let mChoice;
    switch (questionType) {
        case "hourRangeInput":
            isValid = validateHhMm(question.answer)
            toggleMinutes(isValid, inputId)
            break;
        case "hours":
            isValid = validateHours(question.answer)
            toggleMinutes(isValid, inputId)
            break;
        case "minutes":
            isValid = validateMinutes(question.answer)
            toggleMinutes(isValid, inputId)
            break;
        case "wholeNumber":
            isValid = validateMinutes(question.answer)
            toggleMinutes(isValid, inputId)
            break;
        case "hhmm":
            isValid = validateHhMm(question.answer)
            toggleHhMm(isValid, inputId)
            break;
        case "multipleChoice":
            isValid = validateMultipleChoice(question.answerLabel, question.answerValue)
            toggleMultipleChoice(isValid, question.answers.map(e => e.id))
            break;
        case "dzsYesNoSkip":
            isValid = validateMultipleChoice(question.answerLabel, question.answerValue)
            toggleMultipleChoice(isValid, question.answers.map(e => e.id))
            break;
        case "multipleChoiceWithText":
            const text = validateNotEmptyTExt(question.textValue)
            mChoice = validateMultipleChoiceWithTextMultipleChoice(question.answerLabel, question.answerValue)
            isValid = text && mChoice
            toggleMultipleChoiceWithText(mChoice, text, question.answers.map(e => e.id), question.inputId)
            break;
        case "twoChoiceWithText":
            const hasIsOptionOneFilled = question.isOptionOne !== null
            toggleMultipleChoice(hasIsOptionOneFilled, question.answers.map(e => e.id))
            if (!hasIsOptionOneFilled) {
                isValid = false;
                break;
            }
            if (question.isOptionOne === 'true') {
                isValid = new RegExp(question.optionOneRegex).test(question.optionOneInput)
            } else if (question.isOptionOne === 'false') {
                isValid = new RegExp(question.optionTwoRegex).test(question.optionTwoInput)
            }
            inputIdToggle(isValid, question.inputId)
            break;
    }
    return isValid;
}

function validateHours(answer) {
    // Convert the input to a number
    const number = Number(answer);

    if (typeof number === 'number' && number > 0) {
        return true;
    }
    return false;
}

function validateMinutes(answer) {
    // Convert the input to a number
    const number = Number(answer);

    if (typeof number === 'number' && number > 0 && Number.isInteger(number)) {
        return true;
    }
    return false;
}

function validateResearchNumber(researchNumber) {
    const split = researchNumber.split("_")
    if (split.length !== 2) {
        return false;
    }
    const l = validatePartOfResearchNumber(split[0])
    const r = validatePartOfResearchNumber(split[1])
    return l && r;
}

function validatePartOfResearchNumber(part) {
    if (part.length !== 3) {
        return false;
    }
    for (let i = 0; i < part.length; i++) {
        const c = part[i]
        if (!c.match(/^[a-zA-Z0-9]+$/i)) {
            return false;
        }
    }
    return true;
}

function validateHhMm(answer) {
    if (answer === null) {
        return false;
    }
    const answerArray = answer.split(":")
    if (answerArray.length !== 2) {
        return false;
    }
    const hh = answerArray[0]
    const mm = answerArray[1]

    const hhNumber = Number(hh);
    const hhValid = typeof hhNumber === 'number' && hhNumber >= 0 && hhNumber < 24;

    const mmNumber = Number(mm);
    const mmValid = typeof mmNumber === 'number' && mmNumber >= 0 && mmNumber < 60;

    return hhValid && mmValid
}

function validateMultipleChoice(actualAnswer, actualAnswerValue) {
    return actualAnswer !== "" && actualAnswerValue !== "";
}

function validateNotEmptyTExt(text) {
    return text.length > 0;
}

function validateMultipleChoiceWithTextMultipleChoice(actualAnswer, actualAnswerValue) {
    return actualAnswer !== "" && actualAnswerValue !== "";
}

function getValidityClassname(isValid) {
    if (isValid === true) {
        return "is-valid"
    } else if (isValid === false) {
        return "is-invalid"
    }
    return ""
}

