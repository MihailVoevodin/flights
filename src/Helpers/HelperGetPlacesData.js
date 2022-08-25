export const departureCityFlightReturn = (flight, id) => {
    if (!flight.flight.legs[id].segments[0].departureCity) {
        return 'Лондон, '
    } else {
        return flight.flight.legs[id].segments[0].departureCity.caption + ', '
    }
}

export const arrivalCityFlightOut = (flight, id) => {
    if (flight.flight.legs[id].segments.length === 2) {
        if (!flight.flight.legs[id].segments[1].arrivalCity) {
            return ''
        } else {
            return flight.flight.legs[id].segments[1].arrivalCity.caption
        }
    } else {
        return flight.flight.legs[id].segments[0].arrivalCity.caption
    }
}

export const arrivalCityFlightReturn = (flight, id) => {
    if (flight.flight.legs[id].segments.length === 2) {
        return flight.flight.legs[id].segments[1].arrivalCity.caption
    } else {
        return flight.flight.legs[id].segments[0].arrivalCity.caption
    }
}

export const arrivalAirport = (flight, id) => {
    if (flight.flight.legs[id].segments.length === 2) {
        return flight.flight.legs[id].segments[1].arrivalAirport.caption
    } else {
        return flight.flight.legs[id].segments[0].arrivalAirport.caption
    }
}

export const arrivalAirportCode = (flight, id) => {
    if (flight.flight.legs[id].segments.length === 2) {
        return flight.flight.legs[id].segments[1].arrivalAirport.uid
    } else {
        return flight.flight.legs[id].segments[0].arrivalAirport.uid
    }
}
