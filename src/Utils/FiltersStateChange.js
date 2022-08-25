// Функция меняющая локальный стейт фильтров 
export const onFiltersChange = (event, filters, setFilters) => {
    if (event.target.id === 'withTransfer') {
        if (filters.withTransfer === true) {
          setFilters({...filters, withTransfer : event.target.checked})
        } else if (filters.withTransfer === false) {
          setFilters({...filters, withTransfer : event.target.checked})
        }
    } else if (event.target.id === 'withoutTransfer') {
        if (filters.withoutTransfer === true) {
          setFilters({...filters, withoutTransfer : event.target.checked})
        } else if (filters.withoutTransfer === false) {
          setFilters({...filters, withoutTransfer : event.target.checked})
        }
    } else if (event.target.id === 'priceFrom') {
        setFilters({...filters, priceFrom : event.target.value})
    } else if (event.target.id === 'priceTo') {
        setFilters({...filters, priceTo : event.target.value})
    } else if (event.target.id === 'airCompanyLOT') {
        if (filters.airCompanyLOT === true) {
          setFilters({...filters, airCompanyLOT : event.target.checked})
        } else if (filters.airCompanyLOT === false) {
          setFilters({...filters, airCompanyLOT : event.target.checked})
        }
    } else if (event.target.id === 'airCompanyAeroflot') {
      if (filters.airCompanyAeroflot === true) {
        setFilters({...filters, airCompanyAeroflot : event.target.checked})
      } else if (filters.airCompanyAeroflot === false) {
        setFilters({...filters, airCompanyAeroflot : event.target.checked})
      }
    }
  }