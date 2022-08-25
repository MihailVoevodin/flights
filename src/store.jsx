import data from './flights.json';

// Имитация state`а
export let store = data.flights;


// Функции сортировки и фильтрации state`а

// Сортировка
export const doFlightsSorting = (store, sortType) => {
    if (sortType === 'radio-1') {
        store.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
        return store
    } else if (sortType === 'radio-2') {
        store.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
        return store
    } else if (sortType === 'radio-3') {
        return store.sort((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
    }

}

// Фильтрация по чекбоксам с пересадкой или без
export const filterIsTransfer = (store, filters) => {
    if (filters.withTransfer && filters.withoutTransfer) {
        return store
    }
    if (filters.withTransfer) {
        return store.filter(f => f.flight.legs[0].segments.length === 2)
    } else if (filters.withoutTransfer) {
        return store.filter(f => f.flight.legs[0].segments.length === 1)
    } 
    return store
}

// Фильтрация по авиакомпании
export const filterAirCompany = (store, filters) => {
    if (filters.airCompanyLOT && filters.airCompanyAeroflot) {
        const LOTData = store.filter(f => f.flight.carrier.caption === 'LOT Polish Airlines')
        const AeroflotData = store.filter(f => f.flight.carrier.caption === 'Аэрофлот - российские авиалинии')
        return [...LOTData, ...AeroflotData]
    }
    if (filters.airCompanyLOT) {
        return store.filter(f => f.flight.carrier.caption === 'LOT Polish Airlines') 
    } else if (filters.airCompanyAeroflot) {
        return store.filter(f => f.flight.carrier.caption === 'Аэрофлот - российские авиалинии')
    }
    return store
}

// Фильтрация по цене
export const filterPrice = (store, priceFrom, priceTo) => {
    if (Number(priceTo) >= 22000) {
        return store.filter(f => (f.flight.price.total.amount > priceFrom && f.flight.price.total.amount < priceTo));
    } else if (Number(priceTo) <= 22000) {
        return store
    }
}
