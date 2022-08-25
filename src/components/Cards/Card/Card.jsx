import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import { carrierLogo } from '../../../Helpers/HelperGetCarrierLogo';
import FlightOut from './FlightOut/FlightOut';
import FlightReturn from './FlightReturn/FlightReturn';
import Pagination from '../../Pagination/Pagination';

const Card = ({ flights }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [flightsPerPage] = useState(5)

    useEffect(() => {
        setCurrentPage(1)
    }, [flights])

    const lastFlightIndex = currentPage * flightsPerPage
    const firstFlightIndex = lastFlightIndex - flightsPerPage
    const currentFlights = flights.slice(firstFlightIndex, lastFlightIndex)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    if (flights.length === 0) {
        return <div>Нет таких рейсов</div>
    }

    return (
        <div>
            {currentFlights.map(flight => <div className={styles.card} key={flight.flightToken}>
                <div className={styles.cardHeader}>
                    <img className={styles.cardLogo} src={carrierLogo(flight)} alt={flight.flight.carrier.caption} />
                    <div className={styles.price}>
                        {flight.flight.price.total.amount} <i className='fa fa-rub'></i><br />
                        <span>Стоимость для одного взрослого пассажира</span>
                    </div>
                </div>

                <div className={styles.legs}>
                    <FlightOut flight={flight} styles={styles} />
                    <hr className={styles.line} />
                    <FlightReturn flight={flight} styles={styles} />
                </div>
                <button className={styles.cardBtn}>Выбрать</button>
            </div>)}
            <Pagination flightsPerPage={flightsPerPage}
                totalFlightsLength={flights.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}

export default Card;
