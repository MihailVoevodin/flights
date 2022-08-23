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

export const carrierLogo = (f) => {
    if (f.flight.carrier.caption === 'Air France') {
        return airfrance
    } else if (f.flight.carrier.caption === 'KLM') {
        return KLM
    } else if (f.flight.carrier.caption === 'Аэрофлот - российские авиалинии') {
        return aeroflot
    } else if (f.flight.carrier.caption === 'TURK HAVA YOLLARI A.O.') {
        return turkish
    } else if (f.flight.carrier.caption === 'Finnair Oyj') {
        return finnair
    } else if (f.flight.carrier.caption === 'Air Baltic Corporation A/S') {
        return airBaltic
    } else if (f.flight.carrier.caption === 'Alitalia Societa Aerea Italiana') {
        return alitalia
    } else if (f.flight.carrier.caption === 'Brussels Airlines') {
        return brusselsair
    } else if (f.flight.carrier.caption === 'LOT Polish Airlines') {
        return LOTPolish
    } else if (f.flight.carrier.caption === 'Pegasus Hava Tasimaciligi A.S.') {
        return pegasus
    }
}

export const arrivalCity = (f) => {
    if (f.flight.legs[0].segments.length === 2) {
        if (!f.flight.legs[0].segments[1].arrivalCity) {
            return ''
        } else {
            return f.flight.legs[0].segments[1].arrivalCity.caption
        }
    } else {
        return f.flight.legs[0].segments[0].arrivalCity.caption
    }
}


export const arrivalAirport = (f) => {
    if (f.flight.legs[0].segments.length === 2) {
        console.log(f.flight.legs[0].segments[1].arrivalAirport.caption)
        return f.flight.legs[0].segments[1].arrivalAirport.caption
    } else {
        console.log(f.flight.legs[0].segments[0].arrivalAirport.caption)
        return f.flight.legs[0].segments[0].arrivalAirport.caption
    }
}