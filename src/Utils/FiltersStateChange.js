import { transferFiltersIds, priceFiltersIds } from "../Consts/filtersIds"
import { airCompaniesNames } from "../Consts/airCompaniesNames"

// Функция меняющая локальный стейт фильтров 
export const onFiltersChange = (event, filters, setFilters) => {
    if (event.target.id === transferFiltersIds.WITH_TRANSFER) {
        if (filters.withTransfer === true) {
          setFilters({...filters, withTransfer : event.target.checked})
        } else if (filters.withTransfer === false) {
          setFilters({...filters, withTransfer : event.target.checked})
        }
    } else if (event.target.id === transferFiltersIds.WITHOUT_TRANSFER) {
        if (filters.withoutTransfer === true) {
          setFilters({...filters, withoutTransfer : event.target.checked})
        } else if (filters.withoutTransfer === false) {
          setFilters({...filters, withoutTransfer : event.target.checked})
        }
    } else if (event.target.id === priceFiltersIds.PRICE_FROM) {
        setFilters({...filters, priceFrom : event.target.value})
    } else if (event.target.id === priceFiltersIds.PRICE_TO) {
        setFilters({...filters, priceTo : event.target.value})
    } else if (event.target.id === airCompaniesNames.LOT_POLISH_AIRLINES) {
        if (filters.airCompanyLOT === true) {
          setFilters({...filters, airCompanyLOT : event.target.checked})
        } else if (filters.airCompanyLOT === false) {
          setFilters({...filters, airCompanyLOT : event.target.checked})
        }
    } else if (event.target.id === airCompaniesNames.AEROFLOT) {
      if (filters.airCompanyAeroflot === true) {
        setFilters({...filters, airCompanyAeroflot : event.target.checked})
      } else if (filters.airCompanyAeroflot === false) {
        setFilters({...filters, airCompanyAeroflot : event.target.checked})
      }
    }
  }
