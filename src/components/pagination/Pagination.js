import React from 'react';
import './Pagination.css';


function Pagination(props) {
    return (
        <div className='paginationContainer'>
            {
                props.nos.map((no) => <span key={no} className='cell' onClick={() => props.onPageChange(no)}>{no}</span>)
            }
        </div>
    );
}

export default Pagination;