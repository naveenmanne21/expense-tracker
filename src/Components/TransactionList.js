import React from 'react'

const TransactionList = (props) => {
        
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    props.data.map((item, index) => {
                        return <li key={index} className="minus">
                            {item.text} <span>{item.amount}</span>
                            <button className="delete-btn">x</button>
                        </li>

                    })
                }

            </ul>
        </>
    )
}

export default TransactionList
