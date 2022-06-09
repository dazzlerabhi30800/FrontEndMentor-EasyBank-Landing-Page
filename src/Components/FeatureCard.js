import React from 'react';
import './Style.css'

const FeatureCard = (props) => {
    return(
        <div className="feature--card">
                    <img src={props.item.image} alt="" />
                    <h3 className="title">{props.item.title}</h3>
                    <span className="about">
                        {props.item.desc}
                    </span>
        </div>
    )
}

export default FeatureCard;