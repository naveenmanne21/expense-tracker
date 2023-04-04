// import React, { useState } from 'react'

const AddTransaction = (props) => {
    // const [text,setText]=useState("");
    // const [amount,setAmount]=useState(0);

    function textHandle(e){
        props.handleText(e.target.value);
    }
    function amountHandle(e){
        props.handleAmount(e.target.value);
    }
    function handleButton(e){
        e.preventDefault();
        props.addToArray()

    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className='formSections'>
                    <label htmlFor='text'>Text</label>
                    <input onChange={textHandle} name="text" value={props.text} placeholder='enter text...' type="textarea" />
                </div>
                <div className='formSections'>
                    <label htmlFor='text'>Amount</label>
                    <input onChange={amountHandle} name="amount" value={props.amount} placeholder='enter amount' type="textarea" />
                </div>
                <button onClick={handleButton}>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
