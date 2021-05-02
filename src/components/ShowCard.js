import React from 'react';

const ShowCard = props => {

    return (
        <div className="card movie-item" style={{ width: '22rem' }}>
            <img src={props.poster} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title info">{props.title}</h5>
                    <p className="card-text info">{props.synopsis}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item info movie-item">Disney+ Original Series</li>
                    <li className="list-group-item info movie-item">Release Date: {props.date}</li>
                    <li className="list-group-item info movie-item">Director(s): {props.director}</li>
                    <li className="list-group-item info movie-item">Head Writer: {props.writer}</li>
                    <li className="list-group-item info movie-item">Number of Episodes: {props.episodes}</li>
                </ul>
                <div className="card-body">
                    <a href={props.trailer} target="blank" className="card-link">Trailer</a>
                </div>
        </div>
    );
};

export default ShowCard; 