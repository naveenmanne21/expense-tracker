import './App.css';
import { useState, useEffect } from 'react';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncExp from './Components/IncExp';
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

function App() {

  const [data, setData] = useState("");
  const [money, setMoney] = useState("");
  const [history, setHistory] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance,setBalance] = useState(0);


  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    history.forEach((item) => {
      if (item.amount.charAt(0) === "+") {
        totalIncome += parseInt(item.amount);
      }
      else if(item.amount.charAt(0)==="-"){
        totalExpense += -(parseInt(item.amount));
      }
    })
    setIncome(totalIncome)
    setExpense(totalExpense);
  }, [history]);

  useEffect(() => {
    let balance=income-expense;
    setBalance(balance);

  },[income,expense])

  function handleTextChange(val) {

    setData(val);
  }
  function handleAmountChange(val) {
    setMoney(val)
  }
  function addHistory() {
    setHistory([...history, {
      text: data,
      amount: money
    }])

    setData("");
    setMoney("");
  }

  return (
    <div>
      <Header />
      <Balance data={balance}/>
      <IncExp income={income} expense={expense} />
      <TransactionList data={history} />
      <AddTransaction addToArray={addHistory} text={data} amount={money} handleText={handleTextChange} handleAmount={handleAmountChange} />
    </div>
  );
}

export default App;
