import React from 'react'

const RadioButton = ({onSortChange, radioBtnsTypes, styles, sortType}) => {

    return (
        <div className={styles.formRadio}>
            <input onChange={onSortChange}
                id={radioBtnsTypes}
                type="radio"
                value={radioBtnsTypes}
                checked={sortType === radioBtnsTypes} />
            <label htmlFor={radioBtnsTypes}> - по возрастанию цены</label>
        </div>
    )
}

export default RadioButton;