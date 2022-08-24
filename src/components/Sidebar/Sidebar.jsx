import React from "react";
import styles from "./Sidebar.module.css"

const Sidebar = ({onSortChange, sortType, onFilters, filters}) => {

    return (
        <div>
            <div>
                Сортировать
                <div className={styles.formRadio}>
                    <input onChange={onSortChange} id="radio-1" type="radio" value="radio-1" checked={sortType === 'radio-1'}/>
                    <label htmlFor="radio-1">по возрастанию цены</label>
                </div>
                
                <div className={styles.formRadio}>
                    <input onChange={onSortChange} id="radio-2" type="radio" value="radio-2" checked={sortType === 'radio-2'}/>
                    <label htmlFor="radio-2">по убыванию цены</label>
                </div>
                
                <div className={styles.formRadio}>
                    <input onChange={onSortChange} id="radio-3" type="radio" value="radio-3" checked={sortType === 'radio-3'}/>
                    <label htmlFor="radio-3">по времени в пути</label>
                </div>
            </div>
            <div className={styles.filters}>
                <div>Фильтровать</div>
                <div><input id="withTransfer" type="checkbox" onChange={onFilters} checked={filters.withTransfer}/><label htmlFor="withTransfer">1 пересадка</label></div>
                <div><input id="withoutTransfer" type="checkbox" onChange={onFilters} checked={filters.withoutTransfer}/><label htmlFor="withoutTransfer">без пересадок</label></div>
                <div>Цена</div>
                <div><label htmlFor="priceFrom">От</label><input type="text" id="priceFrom" onChange={onFilters} value={filters.priceFrom} /></div>
                <div><label htmlFor="priceTo">До</label><input type="text" id="priceTo" onChange={onFilters} value={filters.priceTo} /></div>
                <div>Авиакомпании</div>
                <div><input id="airCompanyLOT" type="checkbox" onChange={onFilters} checked={filters.airCompanyLOT}/><label htmlFor="airCompanyLOT">LOT</label></div>
                <div><input id="airCompanyAeroflot" type="checkbox" onChange={onFilters} checked={filters.airCompanyAeroflot}/><label htmlFor="airCompanyAeroflot">Аэрофлот</label></div>
            </div>
        </div>
    )
}

export default Sidebar;