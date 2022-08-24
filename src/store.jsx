import data from './flights.json';


export let store = data.flights;
console.log(store[0].flight.legs[0].segments.length)


export const doFlightsSorting = (store, sortType) => {
    if (sortType === 'radio-1') {
        store.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
        return store
    } else if (sortType === 'radio-2') {
        store.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
        return store
    } else if (sortType === 'radio-3') {
        store.sort((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
        return store
    }

}

export const filterWithTransfer = (store, filters) => {
    return store.filter(f => f.flight.legs[0].segments.length === 2)
}

export const filterWithoutTransfer = (store, filters) => {
    return store.filter(f => f.flight.legs[0].segments.length === 1)
}

export const filterAirCompanyLOT = (store, filters) => {
    return store.filter(f => f.flight.carrier.caption === 'LOT Polish Airlines')
}

export const filterAirCompanyAeroflot = (store, filters) => {
    return store.filter(f => f.flight.carrier.caption === 'Аэрофлот - российские авиалинии')
}

export const filterPrice = (store, priceFrom, priceTo) => {
    if (Number(priceTo) >= 22000) {
        return store.filter(f => (f.flight.price.total.amount > priceFrom && f.flight.price.total.amount < priceTo));
    } else if (Number(priceTo) <= 22000) {
        return store
    }
}