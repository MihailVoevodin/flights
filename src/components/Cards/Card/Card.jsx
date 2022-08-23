import React from 'react';
import styles from './Card.module.css';
import { arrivalCity, carrierLogo, arrivalAirport } from '../../../Helpers/HelperCard';


const Card = (props) => {

    const { flights } = props.store

    const arrivalAirportCode = (f) => {
        if (f.flight.legs[0].segments.length === 2) {
            return f.flight.legs[0].segments[1].arrivalAirport.uid
        } else {
            return f.flight.legs[0].segments[0].arrivalAirport.uid
        }
    }

    console.log(flights)
    return (
        <div>
            {flights.map(f => <div key={f.flightToken}>
                <div className={styles.cardHeader}>
                    <img className={styles.cardLogo} src={carrierLogo(f)} alt={f.flight.carrier.caption} />
                    <div className={styles.price}>
                    {f.flight.price.total.amount} <i className='fa fa-rub'></i><br/>
                    <span>Стоимость для одного взрослого пассажира</span>
                    </div>
                </div>

                <div className={styles.legs}>
                        <div className={styles.flightThere}>
                            <span>  
                                {f.flight.legs[0].segments[0].departureCity.caption}, 
                                {f.flight.legs[0].segments[0].departureAirport.caption + ' '} 
                                <span className={styles.arrivalAirportCode}>({f.flight.legs[0].segments[0].departureAirport.uid})</span>
                            </span>&#8594;
                            <span>
                                {arrivalCity(f) + ', '}
                                {arrivalAirport(f) + ' '}
                                <span className={styles.arrivalAirportCode}>({arrivalAirportCode(f)})</span>
                            </span>
                        </div>
                        <hr />
                        <div className={styles.flightReturn}>

                        </div>
                </div>
            </div>)}
        </div>
    )
}

export default Card;
