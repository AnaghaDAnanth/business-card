import React from "react"
import pin from "../images/pin.jpg"

function Card(props) {
    return(
        <div className="card">
            <div className="card--item">
                <img className="card--img" src={props.img} />
                <div className="card--title-details">
                    <div className="card--location-deets">
                        <img className="card--pin-logo" src={pin}/>
                        <h3 className="light-font"> {props.country} </h3>
                        <a className="card--google-link" href={props.link}> View on Google Maps </a>
                    </div>
                    <div className="card--details">
                        <h1> {props.place} </h1>
                        <p className="card--date"> {props.date} </p>
                        <p className="card--locn-desc"> {props.description} </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Card