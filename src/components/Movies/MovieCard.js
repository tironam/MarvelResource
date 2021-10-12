import React from 'react';

const MovieCard = props => {
    const {
        poster,
        alt,
        title,
        synopsis,
        date,
        director,
        writer,
        trailer
    } = props;

    return (
        <div className="card" style={{ width: '22rem', backgroundColor: 'transparent' }}>
            <img src={poster} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title info">{title}</h5>
                    <p className="card-text info">{synopsis}</p>
                </div>
            <ul className="list-group list-group-flush">
                    <li className="list-group-item info movie-item" >Release Date: {date}</li>
                    <li className="list-group-item info movie-item" >Director(s): {director}</li>
                    <li className="list-group-item info movie-item" >Writer(s): {writer}</li>
                </ul>
                <div className="card-body">
                    <a href={trailer} target="blank" className="card-link">Trailer</a>
                </div>
        </div>
    );
};

export default MovieCard; 