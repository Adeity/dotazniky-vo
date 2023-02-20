/**
 * U multiple choice slouzi 'answer' jako 'answer', cili ciselna hodnota
 */

const inTheLastString = "Jak často: "
export const psqi = {
    psqi:
        {
            q1: {
                questionType: "hhmm",
                label: "V kolik hodin jste obvykle během posledního měsíce večer ulehl(a) do postele? (hh:mm)",
                inputId: "psqigmtHhmm",
                answer: ""
            },
            q2: {
                questionType: "minutes",
                label: "Jak dlouho (v minutách) vám obvykle každý večer během posledního měsíce trvalo než jste usnul(a)?",
                inputId: "psqiasleepTimeMinutes",
                answer: "",
            },
            q3: {
                questionType: "hhmm",
                label: "V kolik hodin jste obvykle během posledního měsíce ráno vstával(a) z postele? (hh:mm)",
                inputId: "psqihhMmGmtoo",
                answer: ""
            },
            q4: {
                questionType: "hhmm",
                label: "(hh:mm) Kolik hodin za noc jste minulý měsíc obvykle opravdu spal(a)? (To se může lišit od počtu strávených v posteli.)",
                inputId: "psqihhMmTimeOfSleep",
                answer: ""
            },
            q5a: {
                questionType: "multipleChoice",
                label: inTheLastString + "Nemohl jste usnout do 30 min",
                inputId: "idsevenpsqione",
                answers: [
                    {
                        id: "never7psqi1",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi1",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi1",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi1",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5b: {
                questionType: "multipleChoice",

                label: inTheLastString + "Vzbudil(a) jste se uprostřed noci nebo brzy ráno.",

                inputId: "7psqi2",
                answers: [
                    {
                        id: "never7psqi2",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi2",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi2",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi2",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5c: {
                questionType: "multipleChoice",
                label: inTheLastString + "Musel(a) jste vstávat a jít na záchod.",

                inputId: "7psqi3",
                answers: [
                    {
                        id: "never7psqi3",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi3",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi3",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi3",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5d: {
                questionType: "multipleChoice",
                label: inTheLastString + "Nemohl(a) jste dobře dýchat.",
                inputId: "7psqi4",
                answers: [
                    {
                        id: "never7psqi4",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi4",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi4",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi4",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5e: {
                questionType: "multipleChoice",
                label: inTheLastString + "Hlasitě jste kašlal(a) nebo chrápal(a).",

                inputId: "7psqi5",
                answers: [
                    {
                        id: "never7psqi5",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi5",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi5",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi5",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5f: {
                questionType: "multipleChoice",
                label: inTheLastString + "Bylo Vám příliš chladno.",

                inputId: "7psqi6",
                answers: [
                    {
                        id: "never7psqi6",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi6",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi6",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi6",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5g: {
                questionType: "multipleChoice",

                label: inTheLastString + "Bylo Vám příliš horko.",

                inputId: "7psqi7",
                answers: [
                    {
                        id: "never7psqi7",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi7",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi7",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi7",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5h: {
                questionType: "multipleChoice",

                label: inTheLastString + "Měl(a) jste špatné sny",

                inputId: "7psqi8",
                answers: [
                    {
                        id: "never7psqi8",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi8",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi8",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi8",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5i: {
                questionType: "multipleChoice",

                label: inTheLastString + "Měl(a) jste bolesti.",

                inputId: "7psqi9",
                answers: [
                    {
                        id: "never7psqi9",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi9",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi9",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi9",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q5j: {
                questionType: "multipleChoiceWithText",
                label: "Prosím, popište jiné důvody, kvůli kterým jste se musel(a) vzbudit. a jak často v týdnu.",
                firstDescription: "Důvody popište slovy. Jestliže žádné další důvody neexistují, zadejte \"nejsou\".",
                secondDescription: "Vyberte jednu z možností znázorňující, jak často jste se potýkal s problémy, které jste popsal v předchozim políčku.",
                inputId: "7psqi10",
                answers: [
                    {
                        id: "never7psqi10",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeek7psqi10",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeek7psqi10",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeek7psqi10",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                textValue: ""
            },
            q6: {
                questionType: "multipleChoice",

                label: "Jak byste celkově ohodnotil(a) kvalitu svého spánku během posledního měsíce?",

                inputId: "psqi8",
                answers: [
                    {
                        id: "verygoodpsqi8",
                        label: "Velmi dobrá",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "quitegoodpsqi8",
                        label: "Docela dobrá",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "quitebadpsqi8",
                        label: "Docela špatná",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "verybadpsqi8",
                        label: "Velmi špatná",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: ""
            },
            q7: {
                questionType: "multipleChoiceWithText",

                label: "Kolikrát jste během posledního měsíce užil(a) léky nebo jiné přípravky, které vám pomáhají usnout a spát (na lékařský předpis nebo bez předpisu + jaké to byly?",
                firstDescription: "Napište, jaké léky nebo jiné přípravky užíváte. Jestliže žádné neužíváte, zadejte \"nejsou\".",
                secondDescription: "Vyberte jednu z možností znázorňující, jak často užíváte léky či jiné přípravky, které jste popsal v předchozim políčku.",

                inputId: "psqi9",
                answers: [
                    {
                        id: "neverpsqi9",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },

                    {
                        id: "lessThanOneWeekpsqi9",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeekpsqi9",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeekpsqi9",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
                textValue: ""
            },
            q8: {
                questionType: "multipleChoice",
                label: "Jak často jste se během minulého měsíce cítil(a) ospalý/á při řízení auta, při jídle nebo při jiné společenské činnosti?",

                inputId: "psqi10",
                answers: [
                    {
                        id: "neverpsqi10",
                        label: "Nikdy během posledního měsíce",
                        value: 1,
                        checked: false
                    },

                    {
                        id: "lessThanOneWeekpsqi10",
                        label: "Méně než jednou týdně",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeekpsqi10",
                        label: "Jednou nebo dvakrát za týden",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeekpsqi10",
                        label: "Třikrát nebo vícekrát za týden",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
            },
            q9: {
                questionType: "multipleChoice",

                label: "Jak těžké bylo pro vás během posledního měsíce udržet si dostatek elánu pro dokončení činností?",

                inputId: "psqi11",
                answers: [
                    {
                        id: "neverpsqi11",
                        label: "Vůbec to nebylo těžké",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "lessThanOneWeekpsqi11",
                        label: "Jen nepatrně těžké",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "OnceOrTwicePerWeekpsqi11",
                        label: "Poněkud těžké",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "thriceOrFourTimesPerWeekpsqi11",
                        label: "Velmi těžké",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
            },
            q10: {
                questionType: "multipleChoice",

                label: "Spí ve vašem bytě nebo ve vaší posteli ještě někdo jiný?",

                inputId: "psqi12",
                answers: [
                    {
                        id: "noonepsqi12",
                        label: "Nikdo nespí v posteli ani v mém bytě",
                        value: 1,
                        checked: false
                    },
                    {
                        id: "someonedifferentroompsqi12",
                        label: "Někdo spí v mém bytě ale v jiné místnosti",
                        value: 2,
                        checked: false
                    },
                    {
                        id: "someonesameroompsqi12",
                        label: "Někdo spí ve stejné místnosti ale ne ve stejné posteli",
                        value: 3,
                        checked: false
                    },
                    {
                        id: "someoensamebedpsqi12",
                        label: "Někdo se mnou spí ve stejné posteli",
                        value: 4,
                        checked: false
                    },
                ],
                answerLabel: "",
                answer: "",
            },
            freeDaysGnt: {
                questionType: "hhmm",
                label: "O volných dnech chodím spát v (hh:mm)",
                inputId: "psqiFdGnt",
                answer: ""
            },
            freeDaysGmt: {
                questionType: "hhmm",
                label: "O volných dnech vstávám v (hh:mm)",
                inputId: "psqiFdGmt",
                answer: ""
            },
            workDaysGnt: {
                questionType: "hhmm",
                label: "O pracovních dnech chodím spát v (hh:mm)",
                inputId: "psqiWdGnt",
                answer: ""
            },
            workDaysGmt: {
                questionType: "hhmm",
                label: "O pracovních dnech vstávám v (hh:mm)",
                inputId: "psqiWdGmt",
                answer: ""
            },
        }
}

export const mctq = {
    mctq: [
        {
            questionType: "minutes",

            label: "jak dlohou v minutach mctq 1",

            inputId: "asleepTimeMinutes",
            answers: [],
            actualAnswer: "",
            actualanswer: ""
        },
        {
            questionType: "hhmm",

            label: "jak dlohou v minutach mctq 2",

            inputId: "gmtHhmm",
            answers: [],
            actualAnswer: "",
            actualanswer: ""
        },
    ]
}

const meq = {
    meq: [
        {
            questionType: "hhmm",

            label: "meq 1",

            inputId: "gmtHhmm",
            answers: [],
            actualAnswer: "",
            actualanswer: ""
        },
    ]
}
const pss = {
    pss: [
        {
            questionType: "hhmm",

            label: "pss 1",

            inputId: "gmtHhmm",
            answers: [],
            actualAnswer: "",
            actualanswer: ""
        },
    ]
}
const dzs = {
    dzs: [
        {
            questionType: "hhmm",

            label: "dzs 1",

            inputId: "gmtHhmm",
            answers: [],
            actualAnswer: "",
            actualanswer: ""
        },
    ]
}
const demo = {
    demo: [
        {
            questionType: "hhmm",

            label: "demo 1",

            inputId: "gmtHhmm",
            answers: [],
            actualAnswer: "",
            actualanswer: ""
        },
    ]
}

const id = {
    id: {
        id: {
            questionType: "identifying",
            label: "Jste účastníkem Výzkumu Odolnosti a obdrželi jste výzkumné číslo?",
            inputId: "identifyingText",
            answers: [
                {
                    id: "identifyingHasResearchNumberYes",
                    label: "Ano",
                    value: true,
                    checked: false
                },
                {
                    id: "identifyingHasResearchNumberNo",
                    label: "Ne",
                    value: false,
                    checked: false
                },
            ],
            researchNumberInput: "",
            alternativeIdentifierInput: "",
            hasResearchNumber: null,
        },
    }
}

export function mapQuestionnareCodeToName(code) {
    switch (code) {
        case 'psqi':
            return "PSQI"
        case 'mctq':
            return "MCTQ"
        case 'meq':
            return "MEQ"
        case 'pss':
            return "Škála vnímaného stresu"
        case 'dzs':
            return "Dotazník životní spokojenosti"
        case 'demo':
            return "Demografický dotazník"
        case 'id':
            return "Identifikační část"
        default:
            break;
    }
}

export function getJointQuestions(params) {
    const {error, isArray, valid} = parametersAreValid(params);
    if (valid !== true) {
        return {
            valid: false,
            jointQuestions: null,
            totalNumberOfQuestions: 0,
            error: error
        }
    }

    const {totalNumberOfQuestions, jointQuestions} = getJointQuestionsLul(params, isArray)

    return {
        valid: true,
        jointQuestions: jointQuestions,
        totalNumberOfQuestions: totalNumberOfQuestions,
        error: error
    }
}


function getJointQuestionsLul(params, isArray) {
    let psqiBool = false
    let mctqBool = false
    let meqBool = false
    let pssBool = false
    let dzsBool = false
    let demoBool = false
    const res = {}
    Object.assign(res, id)
    if (isArray) {
        for (let i = 0; i < params.length; i++) {
            let e = params[i]
            switch (e) {
                case 'psqi':
                    if (psqiBool) {
                        break;
                    }
                    Object.assign(res, psqi)
                    psqiBool = true
                    break
                case 'mctq':
                    if (mctqBool) {
                        break;
                    }
                    Object.assign(res, mctq)
                    mctqBool = true
                    break
                case 'meq':
                    if (meqBool) {
                        break;
                    }
                    Object.assign(res, meq)
                    meqBool = true
                    break
                case 'pss':
                    if (pssBool) {
                        break;
                    }
                    Object.assign(res, pss)
                    pssBool = true
                    break
                case 'dzs':
                    if (dzsBool) {
                        break;
                    }
                    Object.assign(res, dzs)
                    dzsBool = true
                    break
                case 'demo':
                    if (demoBool) {
                        break;
                    }
                    Object.assign(res, demo)
                    demoBool = true
                    break
                default:
                    break;
            }
        }
    } else {
        switch (params) {
            case 'psqi':
                if (psqiBool) {
                    break;
                }
                Object.assign(res, psqi)
                psqiBool = true
                break
            case 'mctq':
                if (mctqBool) {
                    break;
                }
                Object.assign(res, mctq)
                mctqBool = true
                break
            case 'meq':
                if (meqBool) {
                    break;
                }
                Object.assign(res, meq)
                meqBool = true
                break
            case 'pss':
                if (pssBool) {
                    break;
                }
                Object.assign(res, pss)
                pssBool = true
                break
            case 'dzs':
                if (dzsBool) {
                    break;
                }
                Object.assign(res, dzs)
                dzsBool = true
                break
            case 'demo':
                if (demoBool) {
                    break;
                }
                Object.assign(res, demo)
                demoBool = true
                break
        }
    }
    let totalNumberOfQuestions = 0;
    Object.keys(res).forEach(e => {
        totalNumberOfQuestions += Object.keys(res[e]).length
    })
    return {
        jointQuestions: res,
        totalNumberOfQuestions: totalNumberOfQuestions
    };
}

const qs = ['psqi', 'mctq', 'meq', 'pss', 'dzs', 'demo']

function parametersAreValid(params) {
    let valid = true;
    let isArray = Array.isArray(params)
    let error = null;
    if (params === undefined) {
        return {
            valid: false,
            isArray: isArray,
            error: 'Chybí parametr dotazníku v URL.'
        };
    }
    if (isArray) {
        for (let i = 0; i < params.length; i++) {
            const e = params[i];
            if (!qs.includes(e)) {
                valid = false
                return {
                    valid: false,
                    isArray: isArray,
                    error: 'Dotazník \"' + e + '\" neexistuje.'
                }
            }
        }
    } else {
        if (!qs.includes(params)) {
            return {
                valid: false,
                isArray: isArray,
                error: 'Dotazník ' + params + ' neexistuje.'
            }
        }
    }
    return {
        valid: true,
        isArray: isArray,
        error: error
    };
}