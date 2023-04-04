import React from 'react'

const IncExp = (props) => {
    return (
        <div className='inc-exp'>
            <div className='inc'>
                <h4 className='vals' style={{marginBottom:"10px"}}>INCOME</h4>
                <h4 className='vals' style={{color:"green"}}>+${props.income}</h4>
            </div>
            <div className='exp'>
                <h4 className='vals'style={{marginBottom:"10px"}}>EXPENSE</h4>
                <h4 className='vals'style={{color:"red"}}>-${props.expense}</h4>
            </div>
        </div>
    )
}

export default IncExp
