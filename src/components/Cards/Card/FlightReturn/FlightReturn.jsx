import React from "react";
import { formatterDepartureDate, formatterArrivalDate, getTimeFromMins } from "../../../../Helpers/HelperFormatterTime";
import { departureCityFlightReturn, arrivalCityFlightReturn, arrivalAirport, arrivalAirportCode } from "../../../../Helpers/HelperGetPlacesData";

const FlightReturn = (props) => {

    return (
        <div className={props.styles.flightReturn}>
            <span>
                {departureCityFlightReturn(props.flight, 1)}
                {props.flight.flight.legs[1].segments[0].departureAirport.caption + ' '}
                <span className={props.styles.arrivalAirportCode}>
                    ({props.flight.flight.legs[1].segments[0].departureAirport.uid})
                </span>
            </span>&#8594;
            <span>
                {arrivalCityFlightReturn(props.flight, 1) + ', '}
                {arrivalAirport(props.flight, 1) + ' '}
                <span className={props.styles.arrivalAirportCode}>
                    ({arrivalAirportCode(props.flight, 1)})
                </span>
            </span>
            <hr />
            <div className={props.styles.flightOutTime}>
                <div>{formatterDepartureDate(props.flight, 1)}</div>
                <div>{getTimeFromMins(props.flight.flight.legs[1].duration)}</div>
                <div>{formatterArrivalDate(props.flight, 1)}</div>
            </div>
            {props.flight.flight.legs[1].segments.length > 1
                ? <div className={props.styles.isChange}><span>1 пересадка</span></div>
                : <hr className={props.styles.transferLine}></hr>}
            <div className={props.styles.carrier}>
                Рейс выполняет: {props.flight.flight.carrier.caption}
            </div>
        </div>
    )
}

export default FlightReturn;
