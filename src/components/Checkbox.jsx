import React from "react";
import '../style/Checkbox.scss'

const Checkbox = (props) => {

    const check = (event) => {
        props.onCheck(event.target.checked)
    }

    return(
        <div className="checkbox">
            <input onChange={check} className="checkbox__input" type="checkbox" name={props.name} />
            <label className="checkbox__text" htmlFor={props.name}>{props.name}</label>
        </div>
    );
}

export default Checkbox;