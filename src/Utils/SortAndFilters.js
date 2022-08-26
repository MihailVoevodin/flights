import { radioBtnsTypes } from '../Consts/radioBtnTypes';
import { airCompaniesNames } from '../Consts/airCompaniesNames';
import { store } from '../store';

// Функции сортировки и фильтрации state`а

// Сортировка
export const doFlightsSorting = (store, sortType) => {
    if (sortType === radioBtnsTypes.INCREASE_PRICE) {
        store.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
        return store
    } else if (sortType === radioBtnsTypes.DECREASE_PRICE) {
        store.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
        return store
    } else if (sortType === radioBtnsTypes.TIME) {
        return store.sort((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
    }
}

// Фильтрация по чекбоксам с пересадкой или без
export const filterIsTransfer = (store, filters) => {
    if (filters.withTransfer && filters.withoutTransfer) {
        return store
    }
    if (filters.withTransfer) {
        return store.filter(flight => flight.flight.legs[0].segments.length === 2)
    } else if (filters.withoutTransfer) {
        return store.filter(flight => flight.flight.legs[0].segments.length === 1 && flight.flight.legs[1].segments.length === 1)
    } 
    return store
}

// Фильтрация по авиакомпании
export const filterAirCompany = (store, filters) => {
    if (filters.airCompanyLOT && filters.airCompanyAeroflot) {
        const LOTData = store.filter(flight => flight.flight.carrier.caption === airCompaniesNames.LOT_POLISH_AIRLINES)
        const AeroflotData = store.filter(flight => flight.flight.carrier.caption === airCompaniesNames.AEROFLOT)
        return [...LOTData, ...AeroflotData]
    }
    if (filters.airCompanyLOT) {
        return store.filter(flight => flight.flight.carrier.caption === airCompaniesNames.LOT_POLISH_AIRLINES) 
    } else if (filters.airCompanyAeroflot) {
        return store.filter(flight => flight.flight.carrier.caption === airCompaniesNames.AEROFLOT)
    }
    return store
}

// Фильтрация по цене
export const filterPrice = (store, priceFrom, priceTo) => {
    if (Number(priceTo) >= 22000) {
        return store.filter(flight => (flight.flight.price.total.amount > priceFrom && flight.flight.price.total.amount < priceTo));
    } else if (Number(priceTo) <= 22000) {
        return store
    }
}

// Получение мнимального прайса по авиакомпании
export const getMinPrice = (airCompany) => {
    const LOTDataPrices = store.filter(flight => flight.flight.carrier.caption === airCompany).map(flight => flight.flight.price.total.amount)
    const minPrice = Math.min.apply(null, LOTDataPrices)
    return minPrice
}
