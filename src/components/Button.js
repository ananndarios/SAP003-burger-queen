import React from 'react';
import '../css/bootstrap.css';


const Button = (props) => {
    function handleButton (event){
        event.preventDefault()
        props.onClick()
    };

    return(
        <button className={props.class} onClick={(e) => handleButton(e)} >{props.children}</button>

    );
};

export default Button;