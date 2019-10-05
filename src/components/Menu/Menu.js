import React from 'react';
import './Menu.css'

const Menu = ({ changeArticle }) => {
  // console.log("hi", changeArticle)
  return (
    <nav>
      <h1>What's <span>New?</span></h1>
      <button 
      className='localNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >IMG Local News</button>

      <button 
      className='technologyNews' 
      type='button'
      onClick={event => changeArticle(event)} 
      >IMG Technology</button>

      <button 
      className='entertainmentNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >IMG Entertainment</button>

      <button className='scienceNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >IMG Science</button>

      <button className='healthNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >IMG Health</button>
    </nav>
  )
}

export default Menu;