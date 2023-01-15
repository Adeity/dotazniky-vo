import React from "react";

export default function MultipleChoiceWithInput(props){
    return (
        props.choices.map((choice, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input"
                           onChange={(e) => props.updateValueAndActualAnswer(e.target.value, choice.label)}
                           type="radio"
                           name=""
                           id={choice.id}
                           value={choice.value}/>
                    <label className="form-check-label" htmlFor={choice.id}>{choice.label}</label>
                </div>
            )
        })
    )
}

export function validate(input) {

}
