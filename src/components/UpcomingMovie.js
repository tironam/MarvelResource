import React from 'react';

const UpcomingMovie = props => {

    return (
        <div className="card movie-item" style={{ width: '22rem' }}>
            <img src={props.poster} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title info">{props.title}</h5>
                <p className="card-text info">{props.synopsis}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item movie-item info">Release Date: {props.date}</li>
                <li className="list-group-item movie-item info">Director(s): {props.director}</li>
                <li className="list-group-item movie-item info">Writer(s): {props.writer}</li>
            </ul>
        </div>
    );
};

export default UpcomingMovie;