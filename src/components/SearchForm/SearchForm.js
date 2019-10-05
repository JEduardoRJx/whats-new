import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form>
      <input type='text' placeholder='Search For News Articles Here...' />
      <button className='search-form-btn'type='button'>Search Now</button>
    </form>
  )
}

export default SearchForm;