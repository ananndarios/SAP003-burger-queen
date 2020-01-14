import React from 'react';
import Button from './Button';
import '../css/bootstrap.css';
import '../css/font-awesome.css'; 

const Menu = (props) => {

    return (

        <div className="col-xs-12">
            <Button className='btn btn-primary' onClick={props.onClick}> 
                <span className='menu-name'> {props.name}</span>
                <span className='menu-price'> R$ {props.price}</span>
                {
                    props.count
                        ? <span className='menu-price'> Quantidade: {props.count}</span>
                        : null
                }</Button>
        </div>
    );
}

export default Menu;