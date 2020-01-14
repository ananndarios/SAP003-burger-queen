import React from 'react';
import Menu from './Menu';
import '../css/bootstrap.css';
import '../css/font-awesome.css';

function FullDay(props) {
    return (
        <>
        
            <section className="col-xs-12">
                <h3>  Menu Almoço e Janta </h3>
                <div>
                    <legend>Hamburgers</legend>
                    <span className="btn-group">
                        {props.menu.map((item) => item.type === "hamburger" ? <Menu name={item.name} price={item.price} key={item.id} onClick={() => props.onClick(item)} /> : false)}
                    </span>
                </div>
                <div>
                <legend>Acompanhamentos</legend>
                    <span className="btn-group">
                        {props.menu.map((item) => item.type === "sidedish" ? <Menu name={item.name} price={item.price} key={item.id} onClick={() => props.onClick(item)} /> : false)}
                    </span>
                </div>
                <div>
                <legend>Bebidas</legend>
                    <span className="btn-group">
                        {props.menu.map((item) => item.type === "beverage" ? <Menu name={item.name} price={item.price} key={item.id} onClick={() => props.onClick(item)} /> : false)}
                    </span>
                </div>
                <div>
                <legend>Adicionais</legend>
                    <span className="btn-group">
                        {props.menu.map((item) => item.type === "additional" ? <Menu name={item.name} price={item.price} key={item.id} onClick={() => props.onClick(item)} /> : false)}
                    </span>
                </div>
                <div>
                <legend>Carnes</legend>
                    <span className="btn-group">
                        {props.menu.map((item) => item.type === "beef" ? <Menu name={item.name} key={item.id} onClick={() => props.onClick(item)} /> : false)}
                    </span>
                </div>
            </section>
            
        </>
    );
}

export default FullDay;