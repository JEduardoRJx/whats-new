import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <form>
      <input 
      type='text' 
      placeholder='Search For News Articles Here...' 
      onChange={props.searchArticle}
      />
      <button className='search-form-btn'type='button'>Search Now</button>
    </form>
  )
}

export default SearchForm;