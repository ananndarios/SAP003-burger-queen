import React from 'react';
import Button from './Button';

const ResumeItem = (props) => {
    return (
        <>
            <div className="resume-item">
                <span className="text-secondary"> {props.name} </span>
                <span className="text-muted"> R$ {props.price}</span>
                {
                    props.count
                        ? <span className="text-muted"> Quantidade: {props.count}</span>
                        : null
                }
                <Button className="btn btn-muted" onClick={props.onClick}>  Delete </Button>
            </div>

        </>
    )
}

export default ResumeItem;