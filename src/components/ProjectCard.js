import React from 'react';

const ProjectCard = () => {
    
    return (
        <div className="card" style="width: 18rem;">
            <img src="https://lumiere-a.akamaihd.net/v1/images/p_thefalconandthewintersoldier_disneyplus_20653-1_a0638b8c.jpeg" className="card-img-top" alt="The Falcon and the Winter Soldier poster">
                <div className="card-body">
                    <h5 className="card-title">The Falcon and the Winter Soldier</h5>
                    <p className="card-text">Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.” </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Release Date: March 19, 2021</li>
                    <li className="list-group-item">Director: Kari Skogland</li>
                    <li className="list-group-item">Writer: Malcom Spellman</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
        </div>
    );
};

export default ProjectCard; 