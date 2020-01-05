import React from 'react';

const Input = (props) => {
    
    return (
        <div className={props.class}>
            <label className={props.class} htmlFor={props.id}>{props.title}: </label>
            <input className={props.class} id={props.id} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
        </div>
    );
};
export default Input;