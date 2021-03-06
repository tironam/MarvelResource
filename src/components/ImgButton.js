import React from 'react'
import './ImgButton.css'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const ImgButton = (props) => {
const {
    href,
    image,
    alt,
    link,
    name,
    text
} = props

    return (
            <div className="ImgButton">
                <HashLink className="ImgButton-link" to={href}>
                    <div className="ImgButton-wrap">
                        <img 
                            className="ImgButton-img"
                            src={image}
                            alt={alt}
                        />
                    </div>
                    <div>
                        <h1 className="btn-text">{link}</h1>
                        <p className="info-text">{name}</p>
                        <p className="info-text">{text}</p>
                    </div>
                </HashLink>
            </div>
    )
}

export default ImgButton