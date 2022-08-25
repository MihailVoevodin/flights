import React from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.css"

const CardsList = ({flights}) => {

    return (
        <div className={styles.cardsList}>
            <Card flights={flights}/>
        </div>
    )
}

export default CardsList;
