import React from 'react';

const ProjectCard = props => {

    return (
        <div className="card" style={{ width: '22rem' }}>
            <img src={props.poster} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.synopsis}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Release Date: {props.date}</li>
                    <li className="list-group-item">Director: {props.director}</li>
                    <li className="list-group-item">Writer: {props.writer}</li>
                </ul>
                {/* <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div> */}
        </div>
    );
};

export default ProjectCard; 