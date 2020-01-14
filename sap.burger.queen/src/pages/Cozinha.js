import React, { useState, useEffect } from 'react';
import '../css/bootstrap.css'
import db from '../utils/firebaseconfig';


function Cozinha(props) {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        db.collection('pedidos').orderBy('timeSend')
            .onSnapshot((snap) => {
                const list = snap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setPedidos(list)
            })
    }, []);


    const confirmOrders = (item) => {

        db.collection('pedidos').doc(item.id).update({
            status: 'deliver',
            timeDone: new Date(),
            timeDateD: new Date().getDate(),
            timeHourD: new Date().getHours(),
            timeMinD: new Date().getMinutes(),
            timeSecD: new Date().getSeconds(),
        })
    }

    return (
        <>
            <form className="form-group col-xs-12 jumbotron">
                <fieldset className="form-group">
                    <div className="col-xs-12">
                        <legend>Pedidos</legend>
                        {pedidos.map((item, index) =>
                            <div key={index}>

                                {item.status === 'inProgress' ?
                                    <div className="col-xs-12">
                                        <p>{' Mesa: ' + item.table}</p>
                                        {item.pedidos.map((products, index) =>
                                            <div key={index} className="col-xs-12">

                                                <fieldset clasName="form-group">
                                                    <div className="form-check col-xs-12">
                                                        <label className="form-check-label"></label>
                                                    </div>
                                                    <div class="form-check disabled">
                                                        <label class="form-check-label">
                                                            <input type="checkbox" 
                                                            class="form-check-input" 
                                                            name="optionsRadios" 
                                                            id="optionsRadios3" 
                                                            value="option3" 
                                                            disabled="" 
                                                            />
                                                        </label>
                                                    </div>
                                                </fieldset>

                                                {products.type === 'hamburger' ?
                                                    <div className="col-xs-12">
                                                        <p>{'Quantidade: ' + products.count} - {products.name}</p>
                                                        <div className="col-xs-12">
                                                            <p>{'Hambúrguer: ' + products.meetSelect}</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <p>{'Quantidade: ' + products.count} - {products.name}</p>
                                                }
                                                {/* <fieldset clasName="form-group">
                                                    <div className="form-check col-xs-12">
                                                        <label className="form-check-label">
                                                            <input className="form-check-input" type="checkbox" value="" checked="" />
                                                        </label>
                                                    </div>
                                                    <div class="form-check disabled">
                                                        <label class="form-check-label">
                                                            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled=""/>
                                                        </label>
                                                    </div>
                                                 </fieldset> */}
                                            </div>

                                        )}
                                        <button className="btn-primary" onClick={() => confirmOrders(item)}> Confirmar </button>

                                    </div>
                                    : null}
                            </div>
                        )}
                    </div>
                </fieldset>

            </form>
        </>
    );
}


export default Cozinha;

