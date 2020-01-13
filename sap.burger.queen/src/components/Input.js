import React from 'react';

const Input = (props) => {
    
    return (
        <>
            
            <input className={props.class}  id={props.id} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
        </>
    );
};
export default Input;