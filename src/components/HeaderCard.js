import React from 'react';

const HeaderCard = props => {

    // const jumboStyles = {
    //     backgroundImage: 'url(' + {props.image} + ')';
    //     backgroundSize: 'cover';
    // }

    return (
        // <div className="card bg-dark text-white attraction-card header-card">
        //     <img src={props.image} className="card-img header-img" alt="..." />
        //         <div className="card-img-overlay">
        //             <h5 className="card-title header-card-text">{props.name}</h5>
        //             <p className="card-text">{props.text}</p>
        //             {/* <p className="card-text">Last updated 3 mins ago</p> */}
        //         </div>
        // </div>
        <div className="jumbotron jumbotron-fluid bg-primary">
            <div className="container">
                <div className="card-img-overlay">
                    <h1 className="display-4 text">MARVEL IN THE DISNEY PARKS</h1>
                    <p className="lead text">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;