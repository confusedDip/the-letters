import React from 'react';
import {Jumbotron, Row, Col} from 'react-bootstrap';
import InputBox from './input-box.component';
import './header.styles.css';

export default function Header(props) {
        return(
                <Jumbotron>
                        <h1>What’s up, mate?</h1>
                        <Row className="justify-content-center">
                                <Col xs={12} md={{span: 8}}>
                                        <p className="text-center mt-3">Hope you're doing well and staying safe with your family. I know the situation is tough, and we don't know if it is going to be tougher in the coming days. 
                                        All we can do is to hope for a better future, where we will no longer need to wear a mask or maintain social distancing, where we can actually meet and have a party together! Well, as you've received the
                                        URL of this website, you might be wondering what it actually is for. I have written some letters for some of the people I actually do care about. It's a small gesture to make you know that you do matter to me a lot! 
                                        As you've received it, make sure to know that I miss you and I do love you! Lots of love and positivity to you from my end.<br/><br/>With Love, Souradip</p>
                                </Col> 
                        </Row>
                        <Row className="justify-content-center mt-3">
                                <Col xs={12} md={{span: 8}} lg={{span: 6}}>
                                        <InputBox 
                                              placeholder="Enter your name here"
                                                changeHandler={props.changeHandler}
                                        />
                                </Col> 
                        </Row>
                </Jumbotron>
        );
}