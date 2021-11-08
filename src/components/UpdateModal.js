import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpdateModal = (props) => {
    const {
        buttonLabel,
        className,
        title
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div style={{ "textAlign": "center", "color": "#cc0000" }}>
            <Button color="danger" onClick={toggle} className="navbar-text" style={{ "fontSize": "25px"}}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <ul>
                        <li>Updated the poster for Spider-Man: No Way Home - 11.7.21</li>
                        <li>Updated the poster for Hawkeye - 10.24.21</li>
                        <li>Updated the release dates for Doctor Strange in the Multiverse of Madness, Thor: Love and Thunder, Black Panther: Wakanda Forever, The Marvels, and Ant-Man and the Wasp: Quantumania - 10.21</li>
                    </ul>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default UpdateModal;
