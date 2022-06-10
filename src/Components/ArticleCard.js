import React from 'react';
import './Style.css';

const ArticleCard = ({ data }) => {
    return (
        <div className="article--card">
            <img src={data.image} alt="" />
            <div className="info--wrapper">
                <span className="author">{data.author}</span>
                <h4 className="headline">
                    {data.headline}
                </h4>
                <p className="info">
                    {data.info}
                </p>
            </div>
        </div>
    )
}

export default ArticleCard