import React from 'react';
import styles from './Card.module.css';
import { carrierLogo } from '../../../Helpers/HelperFlightOut';
import FlightOut from './FlightOut/FlightOut';
import FlightReturn from './FlightReturn/FlightReturn';


const Card = (props) => {

    const { flights } = props.store
    
    console.log(flights)
    return (
        <div>
            {flights.map(flight => <div className={styles.card} key={flight.flightToken}>
                <div className={styles.cardHeader}>
                    <img className={styles.cardLogo} src={carrierLogo(flight)} alt={flight.flight.carrier.caption} />
                    <div className={styles.price}>
                    {flight.flight.price.total.amount} <i className='fa fa-rub'></i><br/>
                    <span>Стоимость для одного взрослого пассажира</span>
                    </div>
                </div>

                <div className={styles.legs}>
                        <FlightOut flight={flight} styles={styles}/>
                        <hr className={styles.line}/>
                        <FlightReturn flight={flight} styles={styles}/>
                </div>
                <button className={styles.cardBtn}>Выбрать</button>
            </div>)}
        </div>
    )
}

export default Card;
