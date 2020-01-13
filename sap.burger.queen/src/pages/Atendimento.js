import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import db from '../utils/firebaseconfig';
import Breakfast from '../components/Breakfast';
import FullDay from '../components/FullDay';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import ResumeItem from '../components/Resumo';


function Atendimento() {

  const [menu, setMenu] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    db.collection('menu').get()
      .then((snapshot => {
        snapshot.forEach(doc =>
          setMenu((currentState) => [...currentState, doc.data()]));

      }));

  }, []);

  const sendRequest = () => {
    
    if (pedidos.length && table && client) {
      db.collection('pedidos').add({
        pedidos,
        total,
        client,
        table: parseInt(table),
        timeSend: new Date(),
        timeDateS: new Date().getDate(),
        timeHourS: new Date().getHours(),
        timeMinS: new Date().getMinutes(),
        timeSecS: new Date().getSeconds(),
        status: 'inProgress',
      })
        .then(() => {
          setPedidos([])
          setTotal(0)
          setClient('')
          setTable('')
        })
    }
    else if (!pedidos.length) {
      alert('Selecione um produto para gerar o pedido')
    }
    else if (!table) {
      alert('Insira o número da mesa')
    }
    else if (!client) {
      alert('Insira o nome do cliente')
    }
  }

  const items = (addItem) => {
      if (!pedidos.includes(addItem)) {
          addItem.count = 1
          setPedidos([...pedidos, addItem])
      } else {
          addItem.count += 1
          setPedidos([...pedidos])
      }

      setTotal(total + (addItem.price))
  }

  const deleteItem = (addItem) => {
    const index = pedidos.indexOf(addItem)
    pedidos.splice(index, 1)
    setPedidos([...pedidos])
    const updateTotal = total - (addItem.price * addItem.count);
    setTotal(updateTotal)
  }

  return (
    <>
      <form className="form-horizontal col-xs-12 jumbotron">
        <legend>Menu</legend>
        <Breakfast menu={menu} onClick={items}/>
        <FullDay menu={menu} onClick={items} />
        <div className="col-xs-12">
          <legend> Meus Pedidos</legend>
          <div className="input-group ">
            <span className="input-group-addon"><i className="fa fa-user-circle"></i></span>
            <Input
              type='text'
              id='cliente'
              placeholder='Nome do cliente'
              value={client}
              onChange={(event) => setClient(event.target.value)}
            />
          </div><hr />
          <div className="input-group">
            <span className="input-group-addon" ><i className="fa fa-user-circle"></i></span>
            <Input
              type='number'
              id='mesa'
              placeholder='Número da mesa'
              value={table}
              onChange={(event) => setTable(event.target.value)}
            />
          </div>
          <section>
            <div>
              {pedidos.map(orders => <ResumeItem key={orders.id} name={orders.name} price={orders.price} count={orders.count} onClick={(event) => deleteItem(orders, event)} />)}
            </div>
            <p>Total: R${pedidos.reduce((acc, curr) => acc + curr.price * curr.count, 0) + ",00"} </p>
            <div>
            <Button className='btn-primary' onClick={sendRequest}> Enviar Pedido </Button>
            </div>
          </section>
        </div>

      </form>
    </>
  );
};

export default Atendimento;