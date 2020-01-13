import React from 'react';
import Menu from './Menu';
import '../css/bootstrap.css';
import '../css/font-awesome.css';

const Breakfast = (props) => {

    return (
        <>
            <section className="col-xs-12">
                <h3>  Café da Manhã </h3>
                <div>
                    <span className="btn-group">
                        {props.menu.map((item) => item.breakfast === true ? <Menu name={item.name} price={item.price} key={item.id} onClick={() => props.onClick(item)} /> : false)}
                    </span>
                </div>
            </section>
        </>
    );
}

export default Breakfast;