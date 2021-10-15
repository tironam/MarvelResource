import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const InfoModal = (props) => {
    const {
        buttonLabel,
        className, 
        text,
        text2,
        title
    } = props

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <div>
            <Button color="" style={{ color: "white" }} onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {text}
                    {text2}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default InfoModal
