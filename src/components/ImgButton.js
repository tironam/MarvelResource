import React from 'react';
import { Button } from 'reactstrap';

const ImgButton = (props) => {
    return (
        <div className="text-center">
            <div className="col">
            <img 
                className="ImgButton"
                src={props.image}
                alt={props.alt}
            />
            </div>
            <div className="col">
                <Button color="danger">link</Button>
            </div>
        </div>
    );
};

export default ImgButton;