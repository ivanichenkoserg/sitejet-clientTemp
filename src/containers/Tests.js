import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'
import { ProgressBar, Form, Col, Button, FormControl } from 'react-bootstrap';
import Results from './Results';

class Tests extends Component {

    state = {
      lang_element: 0,
      progress_bar: 0,
      shuffled: false,
      native_language: [],
      foreign_language: [],
      foreign_language_attempt: []
    }

    handleOnSubmit = e => {
      e.preventDefault()

        this.setState({
          foreign_language: [...this.state.foreign_language,e.target[3].value],
          native_language: [...this.state.native_language,e.target[1].value],
          foreign_language_attempt: [...this.state.foreign_language_attempt,e.target[2].value],
          lang_element: this.state.lang_element + 1,
          progress_bar: this.state.progress_bar + 1,
          shuffled: true
        }) 
    }

    checkAccuracy = () => {
      
      let check = []
      let hit_ratio = 0

      for (let j=0 ; j < this.state.native_language.length ; j++)
        {
          if (this.state.foreign_language[j].toLowerCase() === this.state.foreign_language_attempt[j].toLowerCase()){
            check.push(1)
          }      
          else {check.push(0)}
        }
        
      hit_ratio = (check.reduce((a, b) => a + b, 0) / check.length)  

      return hit_ratio 
    }

    shuffleArray = (array) => {
      if (this.state.shuffled === false ) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          console.log(j)
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }}
        return array;
    }

    render() {

      const shuffledArray = this.shuffleArray(this.props.lists)
      const rand_native_lang_list = shuffledArray.slice(0,20).map((list) => list.native_language )
      const rand_foreign_lang_list = shuffledArray.slice(0,20).map((list) => list.foreign_language )
      const progress = (this.state.progress_bar / rand_native_lang_list.length) * 100

      if ((rand_native_lang_list.length === this.state.lang_element) && (rand_native_lang_list.length !== 0)) {

      const hit_ratio = this.checkAccuracy()

        return ( 
          <div>
            <br />
             < Results foreign_language={this.state.foreign_language} foreign_language_attempt={this.state.foreign_language_attempt} native_language={this.state.native_language} hit_ratio = {hit_ratio}/>
          </div>
        )
      }

        return (
          <div>         
          <main role="main" className="container" align="center">
            
            <br />
            <h2>Test Mode</h2>
            <br />
            <div align="left">
                Welcome to the Language Tester Test Mode. You will be tested on a random selection of 20 words that were entered in the 'List' tab. 
                Once you have completed the test you will be able to see your results.
                <br />
                <br />
                Please note that if you refresh the page or move to another tab, you will lose your test progress.
            </div>
            <br />  
            <div align="left" >
            <h6>Test Progress</h6>  
            </div>
            {}
            <ProgressBar now={progress} label={(progress !== 0) ? (Math.round(progress)+'%') : ''} />
            <br />
            <br />
            
            <Form onSubmit={this.handleOnSubmit} >
          
              <div align="left">
            
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Native Language</Form.Label><br/>
                        <Button variant="primary" block name='native_language' align="left">{rand_native_lang_list[this.state.lang_element]}</Button>
                        <FormControl type='hidden' value={rand_native_lang_list[this.state.lang_element]} /> 
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Foreign Language</Form.Label>
                        <FormControl name="foreign_language_attempt" placeholder="Type your answer here" />
                        <FormControl type='hidden' value={rand_foreign_lang_list[this.state.lang_element]} />
                    </Form.Group>
                    
                </Form.Row>

                <Button variant="success" type="submit" align="left">
                    Confirm Answer
                </Button>
                
              </div>

            </Form>

          </main>
          </div>
          
          
        );
    }

  }

  const mapStateToProps = (state) => {
    return {
      lists: state.listReducer.lists,
      loading: state.listReducer.loading
    }
  } 
  
  export default connect(mapStateToProps, { getLists } )(Tests);