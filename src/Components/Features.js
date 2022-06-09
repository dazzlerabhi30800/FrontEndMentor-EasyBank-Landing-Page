import React from 'react';
import './Style.css'
import FeatureCard from './FeatureCard';
import data from './FeatureData';
import FeatureData from './FeatureData';

const Features = () => {
    const FeatureCardComp = data.map((item, index) => {
        return(
            <FeatureCard
                item={item}
                key={index}
            />
        )
    } )
    return(
        <div className="features--container">
            <div className="text--wrapper">
                <h2 className="heading">Why Choose Easybank?</h2>
                <p className="desc">
                    We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                </p>
            </div>

            <div className="features--wrapper">
                {FeatureCardComp}
            </div>
        </div>
    )
}

export default Features