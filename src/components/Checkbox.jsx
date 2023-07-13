import React from "react";
import '../style/Checkbox.scss'

const Checkbox = (props) => {

    return(
        <div className="checkbox">
            <input className="checkbox__input" type="checkbox" name={props.name} />
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    );
}

export default Checkbox;