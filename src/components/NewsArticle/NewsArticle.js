import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  console.log(props.url)
  return (
    <article>
      <img src={props.img} alt='Article' />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <a href={props.url} target='_blank'>READ MORE HERE --></a>
    </article>
  )
}

export default NewsArticle;