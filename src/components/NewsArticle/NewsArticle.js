import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  console.log(props)
  return (
    <article>
      <img src={props.img}/>
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
    </article>
  )
}

export default NewsArticle;