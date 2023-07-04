import React from "react";
import '../style/Button.scss'

const Button = (props) => {

    return <button className="btn">{props.buttonText}</button>
}

export default Button;