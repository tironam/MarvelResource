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
                        <li>Added a Disney+ day button on the home page - 11.13.21</li>
                        <li>Added new shows to Phase 4 & Beyond section that were announced on Disney+ Day - 11.12.21</li>
                        <li>Updated What's Next button on homepage to reflect next MCU movie coming out - 11.12.21</li>
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
