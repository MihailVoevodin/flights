import React from 'react'

import airfrance from '../assets/carriers/airfrance.png'
import aeroflot from '../assets/carriers/aeroflot.png'
import KLM from '../assets/carriers/KLM.png'
import turkish from '../assets/carriers/turkish.png'
import finnair from '../assets/carriers/finnair.png'
import airBaltic from '../assets/carriers/airBaltic.png'
import alitalia from '../assets/carriers/alitalia.png'
import brusselsair from '../assets/carriers/brusselsair.png'
import LOTPolish from '../assets/carriers/LOTPolish.png'
import pegasus from '../assets/carriers/pegasus.png'

export const carrierLogo = (flight) => {
    if (flight.flight.carrier.caption === 'Air France') {
        return airfrance
    } else if (flight.flight.carrier.caption === 'KLM') {
        return KLM
    } else if (flight.flight.carrier.caption === 'Аэрофлот - российские авиалинии') {
        return aeroflot
    } else if (flight.flight.carrier.caption === 'TURK HAVA YOLLARI A.O.') {
        return turkish
    } else if (flight.flight.carrier.caption === 'Finnair Oyj') {
        return finnair
    } else if (flight.flight.carrier.caption === 'Air Baltic Corporation A/S') {
        return airBaltic
    } else if (flight.flight.carrier.caption === 'Alitalia Societa Aerea Italiana') {
        return alitalia
    } else if (flight.flight.carrier.caption === 'Brussels Airlines') {
        return brusselsair
    } else if (flight.flight.carrier.caption === 'LOT Polish Airlines') {
        return LOTPolish
    } else if (flight.flight.carrier.caption === 'Pegasus Hava Tasimaciligi A.S.') {
        return pegasus
    }
}

export const arrivalCity = (flight) => {
    if (flight.flight.legs[0].segments.length === 2) {
        if (!flight.flight.legs[0].segments[1].arrivalCity) {
            return ''
        } else {
            return flight.flight.legs[0].segments[1].arrivalCity.caption
        }
    } else {
        return flight.flight.legs[0].segments[0].arrivalCity.caption
    }
}


export const arrivalAirport = (flight) => {
    if (flight.flight.legs[0].segments.length === 2) {
        return flight.flight.legs[0].segments[1].arrivalAirport.caption
    } else {
        return flight.flight.legs[0].segments[0].arrivalAirport.caption
    }
}

export const arrivalAirportCode = (flight) => {
    if (flight.flight.legs[0].segments.length === 2) {
        return flight.flight.legs[0].segments[1].arrivalAirport.uid
    } else {
        return flight.flight.legs[0].segments[0].arrivalAirport.uid
    }
}

const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',

}

const dateOptions = {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
}

let date = '';
let time = '';

export const formatterDepartureDate = (flight) => {

    date = time = new Date(flight.flight.legs[0].segments[0].departureDate)
    
    return <div>
        {date.toLocaleString("ru", timeOptions)}
        <span style={{color: '#1E90FF'}}>
            {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
        </span>
    </div>
}

export const formatterArrivalDate = (flight) => {

    if (flight.flight.legs[0].segments.length === 2) {

        date = time = new Date(flight.flight.legs[0].segments[1].arrivalDate)
        
        return <div>
            {date.toLocaleString("ru", timeOptions)}
            <span style={{color: '#1E90FF'}}>
                {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
            </span>
        </div>
    } else {
        date = time = new Date(flight.flight.legs[0].segments[0].arrivalDate)
        
        return <div>
            {date.toLocaleString("ru", timeOptions)}
            <span style={{color: '#1E90FF'}}>
                {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
            </span>
        </div>
    }
}

export const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + ' ч ' + minutes + ' мин';
};