import './App.css';
import React, {Component} from 'react';
import Header from './components/header.component';
import CardList from './components/card-list.component';
import Letters from './letters';
import {Container} from 'react-bootstrap';


class App extends Component {
        constructor(){
                super();

                this.state = {
                        letters: [],
                        clickedLetter: {},
                        searchText: ''
                };
        }

        
        render() {


                const searchText = this.state.searchText;
                const filteredLetters = Letters.filter(
                        letter => (letter.to.toLowerCase().startsWith(searchText.toLowerCase()) && this.state.searchText.length > 0)
                );

                return (
                        <div className ="App">
                                <Container>
                                        <Header
                                                changeHandler = { e => {
                                                        this.setState({searchText: e.target.value}); 
                                                }}
                                        />
                                        <CardList 
                                                letters={filteredLetters}
                                                clickedLetter={this.state.clickedLetter}
                                        />
                                </Container>
                        </div>
                );
        }
}

export default App;
