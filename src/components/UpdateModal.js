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
                        <li>
                            Updated Doctor Strange in the Multiverse of Madness info on 
                        </li>
                        <li>Updated trailer for Spider-Man: No Way Home - 12.8.21</li>
                        <li>Updated "What's on now?" section on homepage - 12.8.21</li>
                        <li>Added a Disney+ day button on the home page - 11.13.21</li>
                        <li>Added new shows to Phase 4 & Beyond section that were announced on Disney+ Day - 11.12.21</li>
                    </ul>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default UpdateModal;
