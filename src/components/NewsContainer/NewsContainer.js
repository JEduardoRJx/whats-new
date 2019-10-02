import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
  return (
    <section className='news-container'>
      {props.localNews.map(article => {
        return <NewsArticle headline={article.headline} img={article.img} description={article.description} url={article.url}/>
      })}
    </section>
  )
}

export default NewsContainer;