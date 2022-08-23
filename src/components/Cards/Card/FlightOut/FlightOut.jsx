import React from "react";
import { arrivalCity, arrivalAirport, arrivalAirportCode, getTimeFromMins, formatterDepartureDate, formatterArrivalDate } from '../../../../Helpers/HelperFlightOut';

const FlightOut = (props) => {


    return (
        <div className={props.styles.flightOut}>
        <span>  
            {props.flight.flight.legs[0].segments[0].departureCity.caption + ', '}
            {props.flight.flight.legs[0].segments[0].departureAirport.caption + ' '} 
            <span className={props.styles.arrivalAirportCode}>
                ({props.flight.flight.legs[0].segments[0].departureAirport.uid})
            </span>
        </span>&#8594;
        <span>
            {arrivalCity(props.flight) + ', '}
            {arrivalAirport(props.flight) + ' '}
            <span className={props.styles.arrivalAirportCode}>
                ({arrivalAirportCode(props.flight)})
            </span>
        </span>
        <hr />
        <div className={props.styles.flightOutTime}>
            <div>{formatterDepartureDate(props.flight)}</div>
            <div>{getTimeFromMins(props.flight.flight.legs[0].duration)}</div>
            <div>{formatterArrivalDate(props.flight)}</div>
        </div>
        <div className={props.styles.isChange}>{props.flight.flight.legs[0].segments.length > 1 ? <span>1 пересадка</span> : <hr></hr>}</div>
        <div className={props.styles.carrier}>Рейс выполняет: {props.flight.flight.carrier.caption}</div>
    </div>
    )
}

export default FlightOut;



