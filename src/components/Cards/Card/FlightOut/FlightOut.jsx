import React from "react";
import { formatterDepartureDate, formatterArrivalDate, getTimeFromMins } from "../../../../Helpers/HelperFormatterTime";
import { arrivalCityFlightOut, arrivalAirport, arrivalAirportCode } from "../../../../Helpers/HelperGetPlacesData";

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
                {arrivalCityFlightOut(props.flight, 0) + ', '}
                {arrivalAirport(props.flight, 0) + ' '}
                <span className={props.styles.arrivalAirportCode}>
                    ({arrivalAirportCode(props.flight, 0)})
                </span>
            </span>
            <hr />
            <div className={props.styles.flightOutTime}>
                <div>{formatterDepartureDate(props.flight, 0)}</div>
                <div>{getTimeFromMins(props.flight.flight.legs[0].duration)}</div>
                <div>{formatterArrivalDate(props.flight, 0)}</div>
            </div>
            {props.flight.flight.legs[0].segments.length > 1
                ? <div className={props.styles.isChange}><span>1 пересадка</span></div>
                : <hr className={props.styles.transferLine}></hr>}
            <div className={props.styles.carrier}>
                Рейс выполняет: {props.flight.flight.carrier.caption}
            </div>
        </div>
    )
}

export default FlightOut;
