import React from 'react';
import {Modal} from 'react-bootstrap';

export default function Letter(props){
        return(
                <Modal size="lg" show={props.show} onHide={props.closeLetter} centered>
                        <Modal.Header closeButton><h2>Dear {props.clickedLetter.pet_name},</h2></Modal.Header>
                        <Modal.Body>
                                <p className="text-justify">{props.clickedLetter.letter}</p>
                        </Modal.Body>
                        <Modal.Footer>
                                <p>With love, Souradip</p>
                        </Modal.Footer>
                </Modal>
        );
}