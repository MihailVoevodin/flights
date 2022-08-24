import { useState } from 'react';
import './App.css';
import CardsList from './components/Cards/CardsList';
import Sidebar from './components/Sidebar/Sidebar';
import { doFlightsSorting, filterAirCompanyAeroflot, filterAirCompanyLOT, filterPrice, filterWithoutTransfer, filterWithTransfer, store } from './store';
import { onFiltersChange } from './Utils/FiltersStateChange';


function App() {
  // сделать енам с айдишниками радио
  const [sortType, setsortType] = useState('radio-1')
  const [filters, setFilters] = useState({
    withTransfer: false,
    withoutTransfer: false,
    priceFrom: 0,
    priceTo: 100000,
    airCompanyLOT: false,
    airCompanyAeroflot: false,
  })

  const onSortChange = (event) => {
    setsortType(event.target.value)
  }

  const onFilters = (event) => {
    onFiltersChange(event, filters, setFilters)
  }

    let flights = doFlightsSorting(store, sortType)

    if (filters.withTransfer) {
      flights = filterWithTransfer(store, filters);
    }

    if (filters.withoutTransfer) {
      flights = filterWithoutTransfer(store, filters);
    }
    if (filters.withoutTransfer && filters.withTransfer) {
      flights = doFlightsSorting(store, sortType)
    }

    if (filters.airCompanyLOT) {
      flights = filterAirCompanyLOT(store, filters)
    }

    if (filters.airCompanyAeroflot) {
      flights = filterAirCompanyAeroflot(store, filters)
    }

    if (filters.airCompanyAeroflot && filters.airCompanyLOT) {
      const data = [...filterAirCompanyAeroflot(store, filters), ...filterAirCompanyLOT(store, filters)]
      flights = doFlightsSorting(data, sortType)
    }

    // flights = filterPrice(store, Number(filters.priceFrom), Number(filters.priceTo))
    
  console.log(flights)
  console.log(filters)

  return (
    <div className="App">
      <div className='layout'>
        <Sidebar onSortChange={onSortChange} sortType={sortType} onFilters={onFilters} filters={filters}/>
        <CardsList flights={flights} filters={filters}/>
      </div>
    </div>
  );
}

export default App;
