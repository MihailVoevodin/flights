import React from "react";
import styles from "./Sidebar.module.css"
import { radioBtnsTypes } from "../../Consts/radioBtnTypes";
import { airCompaniesNames } from "../../Consts/airCompaniesNames";
import { getMinPrice } from "../../Utils/SortAndFilters";
import { transferFiltersIds, priceFiltersIds } from "../../Consts/filtersIds";
import RadioButton from "../../Common/RadioButton";
import FilterCheckbox from "../../Common/FilterCheckbox";
import FilterInput from "../../Common/FilterInput";

const Sidebar = ({ onSortChange, sortType, onFilters, filters }) => {

    return (
        <div>
            <div className={styles.sort}>
                <div className={styles.title}>Сортировать</div>
                <RadioButton
                    styles={styles}
                    onSortChange={onSortChange}
                    sortType={sortType}
                    radioBtnsTypes={radioBtnsTypes.INCREASE_PRICE} 
                    value={' - по возрастанию цены'}/>
                <RadioButton
                    styles={styles}
                    onSortChange={onSortChange}
                    sortType={sortType}
                    radioBtnsTypes={radioBtnsTypes.DECREASE_PRICE} 
                    value={' - по убыванию цены'}/>
                <RadioButton
                    styles={styles}
                    onSortChange={onSortChange}
                    sortType={sortType}
                    radioBtnsTypes={radioBtnsTypes.TIME} 
                    value={' - по времени в пути'}/>
            </div>
            <div className={styles.filters}>
                <div>
                    <div className={styles.title}>Фильтровать</div>
                    <FilterCheckbox filterId={transferFiltersIds.WITH_TRANSFER}
                        onFilters={onFilters}
                        filters={filters.withTransfer}
                        value={' - 1 пересадка'} />
                    <FilterCheckbox filterId={transferFiltersIds.WITHOUT_TRANSFER}
                        onFilters={onFilters}
                        filters={filters.withoutTransfer}
                        value={' - без пересадок'} />
                </div>
                <div>
                    <div className={styles.title}>Цена</div>
                    <FilterInput filterId={priceFiltersIds.PRICE_FROM}
                        onFilters={onFilters}
                        filters={filters.priceFrom}
                        value={'От '} />
                    <FilterInput filterId={priceFiltersIds.PRICE_TO}
                        onFilters={onFilters}
                        filters={filters.priceTo}
                        value={'До '} />
                </div>
                <div className={styles.airCompanies}>
                    <div className={styles.title}>Авиакомпании</div>
                    <div>
                        <input id={airCompaniesNames.LOT_POLISH_AIRLINES}
                            type="checkbox"
                            onChange={onFilters}
                            checked={filters.airCompanyLOT} />
                        <label htmlFor={airCompaniesNames.LOT_POLISH_AIRLINES}> - {airCompaniesNames.LOT_POLISH_AIRLINES} от {getMinPrice(airCompaniesNames.LOT_POLISH_AIRLINES)}</label>
                    </div>
                    <div>
                        <input id={airCompaniesNames.AEROFLOT}
                            type="checkbox"
                            onChange={onFilters}
                            checked={filters.airCompanyAeroflot} />
                        <label htmlFor={airCompaniesNames.AEROFLOT}> - {airCompaniesNames.AEROFLOT.slice(0, 15) + '...'} от {getMinPrice(airCompaniesNames.AEROFLOT)}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;