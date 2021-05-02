import React from 'react';

const UpcomingAttraction = props => {

    return (
        <div className="card attraction-card" >
            <img src={props.image} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.synopsis}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Release Date: {props.date}</li>
                <li className="list-group-item">Park: {props.director}</li>
            </ul>
        </div>
    );
};

export default UpcomingAttraction;