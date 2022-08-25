import React from "react";
import { arrivalCity, departureCity, arrivalAirport, arrivalAirportCode, getTimeFromMins, formatterDepartureDate, formatterArrivalDate } from '../../../../Helpers/HelperFlightReturn';

const FlightReturn = (props) => {



    return (
        <div className={props.styles.flightReturn}>
        <span>  
            {departureCity(props.flight)} 
            {props.flight.flight.legs[1].segments[0].departureAirport.caption + ' '} 
            <span className={props.styles.arrivalAirportCode}>
                ({props.flight.flight.legs[1].segments[0].departureAirport.uid})
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
            <div>{getTimeFromMins(props.flight.flight.legs[1].duration)}</div>
            <div>{formatterArrivalDate(props.flight)}</div>
        </div>
        {props.flight.flight.legs[0].segments.length > 1 ? <div className={props.styles.isChange}><span>1 пересадка</span></div> : <hr className={props.styles.transferLine}></hr>}
        <div className={props.styles.carrier}>Рейс выполняет: {props.flight.flight.carrier.caption}</div>
    </div>
    )
}

export default FlightReturn;