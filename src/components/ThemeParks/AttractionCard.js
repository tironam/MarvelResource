import React from 'react';

const AttractionCard = props => {
const {
    image,
    alt,
    name,
    synopsis,
    info,
    replace,
    locale,
    date
} = props; 

    return (
        <div className="card attraction-card" >
            <img src={image} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h4 className="card-title info">{name}</h4>
                <p className="card-text info">{synopsis}</p>
                <p className="card-text info">{info}</p>
                <p className="card-text info">{replace}</p>
            </div>
            <ul className="list-group list-group-flush" >
                <li className="list-group-item info" style={{ backgroundColor: 'transparent' }}>{locale}</li>
                <li className="list-group-item info" style={{ backgroundColor: 'transparent' }}>Opening Date: {date}</li>
            </ul>
        </div>
    );
};

export default AttractionCard;