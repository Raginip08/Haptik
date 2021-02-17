import React from 'react'
import PropTypes from 'prop-types'

const Pagination=(props)=>{
 const {totalPages, onPageClick}= props;
 const pageNumbers= [];
 for (let i = 1; i <= totalPages; i++) {
   pageNumbers.push(i);
 }

 const onClick=(e)=>{
    onPageClick(e.target.id);
 }
 return(
     <ul className="page" data-testid="pageList">
        {
            pageNumbers.map(number => {
                return (
                <li key={number} id={number} onClick={onClick}>
                    {number}
                </li>
                );
            })
        }
     </ul>
 )
}

Pagination.propTypes={
    totalPages: PropTypes.number,
    onPageClick: PropTypes.func
}

export default Pagination