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

        <div>
            <h1>Pedidos</h1>
            {pedidos.map((item, index) =>
                <div key={index}>

                    {item.status === 'inProgress' ?
                        <div>
                            <p>{' Mesa: ' + item.table}</p>

                            {item.pedidos.map((products, index) =>
                                <div key={index}>
                                    {products.type === 'hamburger' ?
                                        <div>
                                            <p>{'Quantidade: ' + products.count} - {products.name}</p>
                                            <div>
                                                <p>{'Hambúrguer: ' + products.meetSelect}</p>
                                            </div>
                                        </div>
                                        :
                                        <p>{'Quantidade: ' + products.count} - {products.name}</p>
                                    }
                                    <input type="checkbox" />
                                </div>
                            )}
                            <button onClick={() => confirmOrders(item)}> Confirmar </button>

                        </div>
                        : null}
                </div>
            )}
        </div>

    );
}


export default Cozinha;

