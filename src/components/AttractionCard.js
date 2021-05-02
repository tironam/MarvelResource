import React from 'react';

const AttractionCard = props => {

    return (
        <div className="card attraction-card" >
            <img src={props.image} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title info">{props.name}</h5>
                <p className="card-text info">{props.synopsis}</p>
            </div>
            <ul className="list-group list-group-flush" >
                <li className="list-group-item info" style={{ backgroundColor: 'transparent' }}>{props.locale}</li>
                <li className="list-group-item info" style={{ backgroundColor: 'transparent' }}>Opening Date: {props.date}</li>
            </ul>
        </div>
        
    );
};

export default AttractionCard;