import Results from './Results';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'
import { ProgressBar, Form, Col, Button, FormControl } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'

class Tests extends Component {

    state = {
      lang_element: 0,
      progress_bar: 1,
      shuffled: false
    }
    
    handleOnSubmit = e => {
      e.preventDefault()
      debugger; 
        this.setState({
          lang_element: this.state.lang_element + 1,
          progress_bar: this.state.progress_bar + 1,
          shuffled: true
        })
    }

    shuffleArray = (array) => {
      if (this.state.shuffled ===false ) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }}
        return array;
    }

    render() {

      const rand_native_lang_list = this.shuffleArray(this.props.lists).slice(0,20).map((list) => list.native_language )  
      const progress = (this.state.progress_bar / rand_native_lang_list.length) * 100

      if ((rand_native_lang_list.length < this.state.progress_bar) && (rand_native_lang_list.length !== 0)) {
        return <Redirect to='/result'/>
      }

        return (
          <div>         
          <main role="main" className="container" align="center">
            
            <br />
            <h2>Test mode</h2>
            <br />
            <div align="left">
                Welcome to the Language Tester Test Mode. You will be tested on a random selection of 20 words that were entered in the 'List' tab. 
                Once you have completed the test you will be able to see your results in the results tab.
            </div>
            <br />
            <div align="left" >
            <h6>Test Progress</h6>  
            </div>
            <ProgressBar now={progress} label={Math.round(progress)+'%'} />
            <br />
            <br />
            
            <Form onSubmit={this.handleOnSubmit} >
          
              <div align="left">
            
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Native Language</Form.Label><br/>
                        <Button variant="primary" block align="left">{rand_native_lang_list[this.state.lang_element]}</Button> 
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Foreign Language</Form.Label>
                        <FormControl type="foreign_language" name="foreign_language" placeholder="Type your answer here" />
                    </Form.Group>
                    
                </Form.Row>

                <Button variant="success" type="submit" align="left">
                    Add Words
                </Button>
                
              </div>

            </Form>

          </main>
          </div>
          
          
        );
    }

  }

  const mapStateToProps = (state) => {
    console.log("I am state.", state)
    return {
      lists: state.listReducer.lists,
      loading: state.listReducer.loading
    }
  } 
  
  export default connect(mapStateToProps, { getLists } )(Tests);