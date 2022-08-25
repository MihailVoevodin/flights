import React from 'react'

const FilterCheckbox = ({filterId, onFilters, filters, value}) => {
    return (
        <div>
            <input id={filterId}
                type="checkbox"
                onChange={onFilters}
                checked={filters} />
            <label htmlFor={filterId}>{value}</label>
        </div>
    )
}

export default FilterCheckbox;