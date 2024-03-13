import React from 'react'

const Card = (props) => {
    return (
        <div className="card m-2 border border-light" style={{minWidth: "28rem"}}>
           <img src={props.img} className="card-img-top" alt="..." height={300} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer bg-light">
                <button href={props.buttonUrl} type="button" className="btn btn-warning">Meet me</button>
                </div>
        </div>
    )
}

export default Card