import React from 'react'

const Button = ({ click }) => {
    return (
        <div className="button">
            <button onClick={click}>Prew</button>
            <button onClick={click}>Next</button>
        </div>
    )
}

export default Button