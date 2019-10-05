import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
  const newsKey = Object.keys(props);
  return (
    <section className='news-container'>
      {props[newsKey[0]].map(article => {
        return <NewsArticle 
        key={article.id} 
        headline={article.headline} img={article.img} description={article.description} url={article.url}/>
      })}
    </section>
  )
}

export default NewsContainer;