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
                            Updated home page with new images from Moon Knight and Doctor Strange in the Multiverse of Madness
                        </li>
                        <li>
                            Updated FAQ page to reflect Netflix shows leaving Netflix
                        </li>
                        <li>
                            Updated poster for Moon Knight and poster and trailer for Doctor Strange in the Multiverse of Madness - 2.14.22
                        </li>
                        <li>
                            Added Moon Knight to homepage - 1.18.22
                        </li>
                        <li>
                            Updated Moon Knight with poster - 1.18.22
                        </li>
                        <li>
                            Updated Doctor Strange in the Multiverse of Madness info - 12.21
                        </li>
                        <li>Updated trailer for Spider-Man: No Way Home - 12.8.21</li>
                        <li>Updated "What's on now?" section on homepage - 12.8.21</li>
                    </ul>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default UpdateModal;
