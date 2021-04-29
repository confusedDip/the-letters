import React,{Component} from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import MyModal from './my-modal.component';
import Letter from './letter.component';
import './card-list.styles.css';


export default class CardList extends Component {

        constructor() {
                super();

                this.state = {
                        showModal: false,
                        clickedLetter: {},
                        givenAnswer: '',
                        wrongAnswer: false,
                        showLetter: false,
                }
        }

        handleClose = () => this.setState({ showModal: false});
        handleShow = (letter) => this.setState({showModal: true, clickedLetter: letter});
        handleAnswer = (e) => this.setState({givenAnswer: e.target.value})
        checkAnswer = () =>{
                if(this.state.givenAnswer.toLowerCase() !== this.state.clickedLetter.answer.toLowerCase()){
                        this.setState({wrongAnswer: true});
                }else{
                        this.setState({wrongAnswer:false, showModal: false, showLetter: true});
                }
        }
        closeLetter = () => this.setState({ showLetter: false});

        render(){
                return(
                        <>
                                <Row className="mb-5">
                                {
                                        this.props.letters.map(letter =>
                                                <>
                                                        <Col xs={12} md={6} lg={4} key={letter.id}>
                                                                <Card className="mt-5" key={letter.id}>
                                                                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                                        <Card.Body>
                                                                                <Card.Title>{letter.to}</Card.Title>
                                                                                <Card.Text>{letter.description}</Card.Text>
                                                                                <Button variant="primary" onClick={() => this.handleShow(letter)}>
                                                                                        Read the Letter!
                                                                                </Button>
                                                                        </Card.Body>
                                                                </Card>
                                                        </Col>

                                                </>
                                        )
                                }
                                </Row>
                                <MyModal 
                                        show={this.state.showModal}
                                        handleClose={this.handleClose}
                                        clickedLetter={this.state.clickedLetter}
                                        wrongAnswer = {this.state.wrongAnswer}
                                        handleAnswer ={this.handleAnswer}
                                        checkAnswer ={this.checkAnswer}
                                />
                                <Letter
                                        show={this.state.showLetter}
                                        clickedLetter={this.state.clickedLetter}
                                        closeLetter={this.closeLetter}
                                />
                        </>
                );
        }
}