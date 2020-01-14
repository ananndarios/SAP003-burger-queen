import React, { useState, useEffect } from 'react';
import '../css/bootstrap.css'
import db from '../utils/firebaseconfig';
import Button from '../components/Button';
const hmh = require('hmh');

function Delivery() {

    const [delivery, setDelivery] = useState([]);
  
    useEffect(() => {
      db.collection('pedidos').where('status', '==', 'deliver')
        .onSnapshot((snap) => {
          const list = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setDelivery(list)
        })
    }, [])
  
    const finish = (item) => {
      db.collection('pedidos').doc(item.id).update({
          status: 'conclud',
          timeConclud: new Date().getTime(),
        })
    }
  
    return (
      <form className="form-group col-xs-12 jumbotron">
        <fieldset className="form-group">
      <div className="col-xs-12">
        <legend>Pedidos Prontos </legend>
        {delivery.map((item, index) => {
          const sendHour = `${new Date(item.timeSend).getHours()}h ${new Date(item.timeSend).getMinutes()}min`;
          const sendDelivery = `${new Date(item.timeDone).getHours()}h ${new Date(item.timeDone).getMinutes()}min`;
          const different = (hmh.diff(`${sendHour}`, `${sendDelivery}`).toString())
          return(
          <div key={index}>  
            {item.status === 'deliver' ?
              <div>
                <p>{'Mesa ' + item.table} - {item.client}</p>
                <div>
                   <div>
  
                    {item.pedidos.map((itens, index) =>
                      <div key={index} >
                        {itens.type === 'hamburger' ?
                          <div>
                            <p>Quantidade:{itens.count} - {itens.name}{' /' + itens.meetSelect}</p>
                          </div>
                          :
                          <p>Quantidade:{itens.count} - {itens.name}</p>
                        }
                      </div>
                    )}  
                  </div>
                  <Button onClick={() => finish(item)}> Entregue </Button>
                </div><hr />
                <div className="text-muted"> O seu pedido ficou pronto em: {different}</div>
              </div>
              : null}
          </div>
        )
      }
        )}
      </div>
      </fieldset>
      </form>
    );
  }

    export default Delivery;