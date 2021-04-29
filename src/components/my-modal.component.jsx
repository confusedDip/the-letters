import React from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

export default function  MyModal(props){
        return(
                <Modal show={props.show} onHide={props.handleClose} centered>
                        
                                <Modal.Header closeButton>
                                        <Modal.Title>Hello {props.clickedLetter ? props.clickedLetter.pet_name : null}</Modal.Title>
                                </Modal.Header>
                                <Form>
                                <Modal.Body>
                                        <p>
                                        Excited much to read my letter?
                                        But wait, how will I know that you're actually my {props.clickedLetter ? props.clickedLetter.pet_name : null}?
                                        Okay, let's make it interesting! You only get to read my letter if you can answer this below question correctly!
                                        </p>
                                                <Form.Group>
                                                        <Form.Label>
                                                                {props.clickedLetter ? props.clickedLetter.question : null}
                                                        </Form.Label>
                                                        <Form.Control type="text" placeholder="Type your answer here (one word only)" onChange={props.handleAnswer} />
                                                        {
                                                                props.wrongAnswer?
                                                                <Form.Text className="text-danger">
                                                                        Really? You forgot already? Try again please!
                                                                </Form.Text>:
                                                                <Form.Text className="text-muted">
                                                                        I am pretty sure that only {props.clickedLetter ? props.clickedLetter.pet_name : null} knows the answer.
                                                                </Form.Text>
                                                        }
                                                </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                        <Button variant="secondary" onClick={props.handleClose}>
                                        Not sure?
                                        </Button>
                                        <Button variant="primary" onClick={props.checkAnswer}>
                                        Ready to go?
                                        </Button>
                                </Modal.Footer>
                                </Form>
                        </Modal>
        )
}
