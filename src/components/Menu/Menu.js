import React from 'react';
import './Menu.css'
import localIcon from './images/local.svg'
import technologyIcon from './images/technology.svg'
import entertainmentIcon from './images/entertainment.svg'
import scienceIcon from './images/science.svg'
import healthIcon from './images/health.svg'

const Menu = ({ changeArticle }) => {
  return (
    <nav>
      <h1>What's <span>New?</span></h1>
      <button 
      className='localNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >
        <img className='icon' src={localIcon} alt='local icon' />
        Local News
        </button>

      <button 
      className='technologyNews' 
      type='button'
      onClick={event => changeArticle(event)} 
      >
        <img className='icon' src={technologyIcon} alt='technology icon' /> 
        Technology
      </button>

      <button 
      className='entertainmentNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >
        <img className='icon' src={entertainmentIcon} alt='entertainment icon' />
        Entertainment
      </button>

      <button className='scienceNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >
        <img className='icon' src={scienceIcon} alt='science icon' />
        Science
      </button>

      <button className='healthNews' 
      type='button' 
      onClick={event => changeArticle(event)} 
      >
        <img className='icon' src={healthIcon} alt='health icon' />
        Health
      </button>
    </nav>
  )
}

export default Menu;