import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({flightsPerPage, totalFlightsLength, currentPage, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFlightsLength / flightsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className={styles.paginationList}>
                {pageNumbers.map(number => (
                    <li className={styles.paginationItem} key={number}>
                        <a className={currentPage === number ? styles.active : undefined} href="!#" onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;
