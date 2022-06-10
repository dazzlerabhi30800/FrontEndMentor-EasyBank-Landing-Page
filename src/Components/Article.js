import React from 'react';
import './Style.css';
import ArticleData from './ArticleData';
import ArticleCard from './ArticleCard';

const Article = () => {
    const ArticleCardComp = ArticleData.map((data, index) => {
        return(
            <ArticleCard 
              data={data}
              key={index}
            />
        )
    })
    return (
        <div className='article--wrapper'>
            <h3 className="title">Latest Articles</h3>
            <div className="article--container">
                {ArticleCardComp}
            </div>
        </div>
    )
}

export default Article;