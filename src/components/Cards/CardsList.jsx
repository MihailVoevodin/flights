import React from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.css"

const CardsList = (props) => {

    return (
        <div className={styles.cardsList}>
            <Card store={props.store}/>
        </div>
    )
}

export default CardsList;