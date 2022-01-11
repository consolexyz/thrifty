import React from "react";
import './menuitem-styles.scss'


const MenuItem = (props) => (
    <div className={`${props.size} menu-item`}style={{
        backgroundImage: `url(${props.imageUrl})`
    }}>
                <div  className="content">
                    <h1 className="title">{props.title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
)


export  default MenuItem