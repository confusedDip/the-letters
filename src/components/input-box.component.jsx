import React from 'react';
import {Form} from 'react-bootstrap';

export default function InputBox(props){
        return(
                <Form.Control 
                        type = "text"
                        placeholder = {props.placeholder} 
                        onChange = {props.changeHandler} 
                > 
                </Form.Control>
        );
}