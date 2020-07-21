import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="episodeDetails">
                <p className="code">{props.code}</p>
                <div className="dot"></div>
                <p className="name">{props.name}</p>
            </div>
            <p className="date">{props.date}</p>
        </div>
    )
}

export default Card
