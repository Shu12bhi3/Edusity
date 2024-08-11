import React from 'react'
import './Title.css'

const Title = ({subTtitle, title}) =>{
    return (
        <div className="title">
            <p>{subTtitle}</p>  
            <h2>{title}</h2>
        </div>
    )
}

export default Title