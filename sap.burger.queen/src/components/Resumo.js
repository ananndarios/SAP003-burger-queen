import React from 'react';
import Button from './Button';

const ResumeItem = (props) => {
    return (
        <>
            <div className="resume-item">
                <span className="menu-name menu-text">{props.name}</span>
                <span className="menu-price menu-text">R$ {props.price}</span>
                {
                    props.count
                        ? <span className="menu-price menu-text">Quantidade: {props.count}</span>
                        : null
                }
                <Button className="btn btn-primary" onClick={props.onClick}> </Button>
            </div>

        </>
    )
}

export default ResumeItem;