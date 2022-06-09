import React from "react";

const UpcomingMovie = (props) => {
  const { id, poster, alt, title, synopsis, date, director, writer } = props;

  return (
    <div className="card movie-item" style={{ width: "22rem" }} id={id}>
      <img src={poster} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title info">{title}</h5>
        <p className="card-text info">{synopsis}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item movie-item info">
          Release Date: {date}
        </li>
        <li className="list-group-item movie-item info">
          Director(s): {director}
        </li>
        <li className="list-group-item movie-item info">Writer(s): {writer}</li>
      </ul>
    </div>
  );
};

export default UpcomingMovie;
