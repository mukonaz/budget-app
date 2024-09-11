import './App.css';
import AddItem from './components/additem';
import React,{ useState } from 'react';
import DisplayTransaction from './components/displayTransaction';


function App() {

  const [transaction, setTransaction] = useState ([])

  const Addtransaction = ((amount, item, transactionType) => {

    setTransaction((item) =>[...item, {
      amount:amount,
      item:item,
      transactionType:transactionType
    }])

  })

  return (
    <div className='container'>
      <DisplayTransaction list={transaction}/>
      <AddItem add={Addtransaction}/>
    </div>
    
  );
}

export default App;
