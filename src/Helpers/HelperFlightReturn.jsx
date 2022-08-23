export const departureCity = (flight) => {
    if (!flight.flight.legs[1].segments[0].departureCity) {
        return 'Лондон, '
    } else {
        return flight.flight.legs[1].segments[0].departureCity.caption + ', '
    }
}

export const arrivalCity = (flight) => {
    if (flight.flight.legs[1].segments.length === 2) {
        return flight.flight.legs[1].segments[1].arrivalCity.caption
    } else {
        return flight.flight.legs[1].segments[0].arrivalCity.caption
    }
}

export const arrivalAirport = (flight) => {
    if (flight.flight.legs[1].segments.length === 2) {
        return flight.flight.legs[1].segments[1].arrivalAirport.caption
    } else {
        return flight.flight.legs[1].segments[0].arrivalAirport.caption
    }
}

export const arrivalAirportCode = (flight) => {
    if (flight.flight.legs[1].segments.length === 2) {
        return flight.flight.legs[1].segments[1].arrivalAirport.uid
    } else {
        return flight.flight.legs[1].segments[0].arrivalAirport.uid
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

    date = time = new Date(flight.flight.legs[1].segments[0].departureDate)
    
    return <div>
        {date.toLocaleString("ru", timeOptions)}
        <span style={{color: '#1E90FF'}}>
            {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
        </span>
    </div>
}

export const formatterArrivalDate = (flight) => {

    if (flight.flight.legs[1].segments.length === 2) {

        date = time = new Date(flight.flight.legs[1].segments[1].arrivalDate)
        
        return <div>
            {date.toLocaleString("ru", timeOptions)}
            <span style={{color: '#1E90FF'}}>
                {time.toLocaleString("ru", dateOptions).split(',').reverse().join(' ')}
            </span>
        </div>
    } else {
        date = time = new Date(flight.flight.legs[1].segments[0].arrivalDate)
        
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