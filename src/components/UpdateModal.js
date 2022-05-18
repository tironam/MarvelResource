import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UpdateModal = (props) => {
  const { buttonLabel, className, title } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{ textAlign: "center", color: "#cc0000" }}>
      <Button
        color="danger"
        onClick={toggle}
        className="navbar-text"
        style={{ fontSize: "25px" }}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <ul>
            <li>
              Updated info for "Avengers Assemble: Flight Force" attraction on
              Marvel & The Disney Parks page - 5.18.22
            </li>
            <li>
              Updated title, poster, and trailer for She-Hulk: Attorney at Law -
              5.18.22
            </li>
            <li>Update buttons on home page - 5.11.22</li>
            <li>
              Updated Phase 4 & Beyond page with new posters for Ms. Marvel,
              Thor Love And Thunder, I Am Groot, She-Hulk, Secret Invasion,
              Ironheart, added trailers for Thor Love And Thunder and Ms.
              Marvel, and updated release dates and info. - 5.1.22
            </li>
            <li>
              Updated home page to remove Disney+ Day and Hawkeye, add Guardians
              of the Galaxy: Cosmic Rewind and Ms. Marvel, update Moon Knight
              banner. - 5.1.22
            </li>
            <li>
              Updated home page with new images from Moon Knight and Doctor
              Strange in the Multiverse of Madness
            </li>
          </ul>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UpdateModal;
