import React from 'react';
import Button from './Button';

const Menu = (props) => {

    return (


        <Button class='menu' onClick={props.onClick}>
            <span className='menu-name'> {props.name}</span>
            <span className='menu-price'> R$ {props.price}</span>
            {
                props.count
                    ? <span className='menu-price'> Quantidade: {props.count}</span>
                    : null
            }
        </Button>
    );
}

export default Menu;