import React, { useState, useEffect } from 'react';
import '../css/bootstrap.css'
import db from '../utils/firebaseconfig';
import Button from '../components/Button';


function Delivery() {

    const [delivery, setDelivery] = useState([]);
  
    useEffect(() => {
      db.collection('pedidos').orderBy('timeDone')
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
          timeConclud: new Date(),
          timeHourC: new Date().getHours(),
          timeMinC: new Date().getMinutes(),
          timeSecC: new Date().getSeconds(),
        })
    }
  
    const time = (item) => {
      let seconds;
      let rest;
  
      if (((item.timeDateS)) === ((item.timeDateD))) {
        seconds = (((item.timeHourD * 3600) + (item.timeMinD * 60) + (item.timeSecD)) - ((item.timeHourS * 3600) + (item.timeMinS * 60) + (item.timeSecS)))
      }
      else {
        seconds = (((item.timeHourD * 3600) + (item.timeMinD * 60) + (item.timeSecD) + 86400) - ((item.timeHourS * 3600) + (item.timeMinS * 60) + (item.timeSecS)))
      }
  
      let horas = Math.floor(seconds / (60 * 60));
      rest = seconds % (60 * 60);
  
      let minutos = Math.floor(rest / 60);
      rest %= 60;
  
      let segundos = Math.ceil(rest);
  
      let hora = [horas + ' h, ', minutos + ' m e ', segundos + ' s.']
      return hora;
    }
  
  
    return (
      <div>
        <h1 >Pedidos Prontos </h1>
        {delivery.map((item, index) =>
          <div key={index}>
  
            {item.status === 'deliver' ?
              <div>
                <p>{'Mesa ' + item.table} - {item.client}</p>
                <div>
                  <div>
  
                    {item.resumo.map((itens, index) =>
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
                </div>
                <div> O seu pedido ficou pronto em: {time(item)}</div>
              </div>
              : null}
          </div>
        )}
      </div>
    );
  }

    export default Delivery;