import React from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.css"

const CardsList = ({flights, filters}) => {
    return (
        <div className={styles.cardsList}>
            <Card flights={flights} filters={filters}/>
        </div>
    )
}

export default CardsList;