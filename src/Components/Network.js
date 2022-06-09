import React from 'react';
import './Style.css'

const Network = () => {
    return (
        <div className='network--container'>
            <div className="text--wrapper">
                <h1 className="heading">
                   Next Generation Digital Banking 
                </h1>
                <p className="desc">
                    Take your financial life online. Your easy bank account will be a one-stop-shop for spending, saving, budgeting, investing, and many more.
                </p>
                <button className="request-btn-show">Request Invite</button>
            </div>

            <div className="hero--img">
                <img src="../images/image-mockups.png" alt="mockup-image" />
            </div>
        </div>
    )
}


export default Network;