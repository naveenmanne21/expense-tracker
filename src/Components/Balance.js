import React from 'react'

const Balance = (props) => {
    return (
        <div>
            <h4>YOUR BALANCE</h4>
            <h2>${props.data}</h2>
        </div>

    )
}

export default Balance
