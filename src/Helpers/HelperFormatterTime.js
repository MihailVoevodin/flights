import React from 'react'

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

export const formatterDepartureDate = (flight, id) => {

    date = time = new Date(flight.flight.legs[id].segments[0].departureDate)
    
    return <div>
        {date.toLocaleString("ru", timeOptions)}
        <span style={{color: '#1E90FF'}}>
            {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
        </span>
    </div>
}

export const formatterArrivalDate = (flight, id) => {

    if (flight.flight.legs[id].segments.length === 2) {

        date = time = new Date(flight.flight.legs[id].segments[1].arrivalDate)
        
        return <div>
            {date.toLocaleString("ru", timeOptions)}
            <span style={{color: '#1E90FF'}}>
                {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
            </span>
        </div>
    } else {
        date = time = new Date(flight.flight.legs[id].segments[0].arrivalDate)
        
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
