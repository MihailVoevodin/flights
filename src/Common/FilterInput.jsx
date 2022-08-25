import React from 'react'

const FilterInput = ({ filterId, onFilters, filters, value }) => {
    return (
        <div>
            <label htmlFor={filterId}>{value}</label>
            <input type="number"
                id={filterId}
                onChange={onFilters}
                value={filters} 
                pattern='/[^0-9]/g'/>
        </div>
    )
}

export default FilterInput;