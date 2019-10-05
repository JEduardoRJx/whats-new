import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article>
      <img src={props.img} alt='Article' />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
    </article>
  )
}

export default NewsArticle;