import React from 'react';
import './Button.css'

const Button = (props) => {
    const btnClass = `Button ${props.btnType}`;
    return (
        <button className={btnClass} onClick={props.clicked}>{props.children}</button>
    );
};


export default Button;