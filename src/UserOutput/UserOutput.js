import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">   
            <p>User name: <span>{props.name}</span></p>
            <p>Hello <span>{props.name}!</span></p>
        </div>
    )
}

export default userOutput
