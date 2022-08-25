import { useState } from 'react';
import './App.css';
import CardsList from './components/Cards/CardsList';
import Sidebar from './components/Sidebar/Sidebar';
import { radioBtnsTypes } from './Consts/radioBtnTypes';
import { doFlightsSorting, filterAirCompany, filterIsTransfer, filterPrice } from './Utils/SortAndFilters';
import { store } from './store';
import { onFiltersChange } from './Utils/FiltersStateChange';

function App() {
  const [sortType, setsortType] = useState(radioBtnsTypes.INCREASE_PRICE)
  const [filters, setFilters] = useState({
    withTransfer: false,
    withoutTransfer: false,
    priceFrom: 0,
    priceTo: 100000,
    airCompanyLOT: false,
    airCompanyAeroflot: false,
  })

  let flights = store

  const onSortChange = (event) => {
    setsortType(event.target.value)
  }

  const onFilters = (event) => {
    onFiltersChange(event, filters, setFilters)
  }

  flights = filterPrice(store, Number(filters.priceFrom), Number(filters.priceTo))
  flights = filterIsTransfer(flights, filters)
  flights = filterAirCompany(flights, filters)
  flights = doFlightsSorting(flights, sortType)

  return (
    <div className="App">
      <div className='layout'>
        <Sidebar onSortChange={onSortChange} sortType={sortType} onFilters={onFilters} filters={filters}/>
        <CardsList flights={flights}/>
      </div>
    </div>
  );
}

export default App;
