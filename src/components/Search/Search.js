import React from 'react';
import './style.css';

const Search = (props) => {
  return (
    <div className='block-search' >
      <input type="text" className={props.error ? 'error': ''} placeholder="Search for cities" onChange={props.handleChange} onKeyDown={props.handleKeyDown} />
    </div>
  )
}

export default Search
