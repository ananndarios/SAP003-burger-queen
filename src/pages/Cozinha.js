import React, { useState, useEffect } from 'react';
import '../css/bootstrap.css'
import db from '../utils/firebaseconfig';
import Button from '../components/Button';


function Cozinha(props) {

    const [pedidos, setPedidos] = useState([]);
    const [pronto, setPronto] = useState([]);

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
            timeDone: new Date().getTime(),

        })
            .then(() => {
                setPronto([...pronto, { ...item, status: 'deliver', timeDone: new Date().getTime() }]);
            })
            if(item.status === 'deliver'){
                const index = pedidos.findIndex((i) => i.id === item.id)
                pedidos.splice(index, 1);
            }
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
                                        <p>{'Cliente: ' + item.client}</p>
                                        <p>{' Mesa: ' + item.table}</p>
                                        {item.pedidos.map((products, index) =>
                                            <div key={index} className="col-xs-12">

                                                <fieldset className="form-group">
                                                    <div className="form-check col-xs-12">
                                                        <label className="form-check-label"></label>
                                                    </div>
                                                    <div className="form-check disabled">
                                                        <label className="form-check-label">
                                                            <input type="checkbox"
                                                                className="form-check-input"
                                                                name="optionsRadios"
                                                                id="optionsRadios3"
                                                                value="option3"
                                                                disabled=""
                                                            />
                                                        </label>
                                                    </div>
                                                </fieldset>
                                                
                                                {products.type === 'hamburger' ?
                                                    <div>
                                                    <p>{'Quantidade: ' + products.count} - {products.name}</p>
                                                    </div>
                                                    :
                                                    <p>{'Quantidade: ' + products.count} - {products.name}</p>
                                                }
                                                
                                                </div>
                                            )}
                                        <Button className="btn-primary" onClick={() => confirmOrders(item)}> Confirmar </Button> <hr />
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

