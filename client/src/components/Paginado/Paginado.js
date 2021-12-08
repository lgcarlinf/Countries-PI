import React from 'react'
import './Paginado.css'
export const Paginado = ({allCountries,countriesPerPage,paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
   
    return (
        <nav className='containerPaginate'>
            <ul className='paginado'>
              
           
                {
                    pageNumbers.map(number => (
                        
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} className={"page-link"}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </nav>
    )
}
