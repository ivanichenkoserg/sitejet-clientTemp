import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ProgressBar, Form, Col, Button, FormControl } from 'react-bootstrap';
import Results from '../components/ResultCard';

class Tests extends Component {

    state = {
      lang_element: 0,
      progress_bar: 0,
      shuffled: false,
      native_language: [],
      foreign_language: [],
      foreign_language_attempt: []
    }

    // will trigger when the form submit button is clicked
    handleOnSubmit = e => {
      e.preventDefault()
      
        this.setState({

          // will add the values from the form into the relevant variables in state 
          foreign_language: [...this.state.foreign_language,e.target[3].value],
          native_language: [...this.state.native_language,e.target[1].value],
          foreign_language_attempt: [...this.state.foreign_language_attempt,e.target[2].value],

          // will then increment the progress bar and lang_element which selects the next element on the list of native language to display
          lang_element: this.state.lang_element + 1,
          progress_bar: this.state.progress_bar + 1,

          // Sets shuffled to true which indicates that the list of vocabulary words are randomised
          shuffled: true
        }) 
    }

    checkAccuracy = () => {
      
      let check = []
      let hit_ratio = 0

      for (let j=0 ; j < this.state.native_language.length ; j++)
        {
          //checks whether the user got their answers correct - returns 1 if they did and 0 if they didn't
          if (this.state.foreign_language[j].toLowerCase() === this.state.foreign_language_attempt[j].toLowerCase()){
            check.push(1)
          }      
          else {check.push(0)}
        }
      
      // calculates the hit ratio 
      hit_ratio = (check.reduce((a, b) => a + b, 0) / check.length)  

      return hit_ratio 
    }

    shuffleArray = (array) => {

    // algorithm below will shuffle the list of words randomly. If the list has previously been shuffled 
    // (i.e. shuffle flag set to true) it won't shuffle
      if (this.state.shuffled === false ) {
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

      // shuffles the array
      const shuffledArray = this.shuffleArray(this.props.lists)
      
      // extracts the native language words and foreign language words into seperate lists
      const rand_native_lang_list = shuffledArray.slice(0,20).map((list) => list.native_language )
      const rand_foreign_lang_list = shuffledArray.slice(0,20).map((list) => list.foreign_language )
      
      // calculates the progress (%) of the status bar
      const progress = (this.state.progress_bar / rand_native_lang_list.length) * 100

      // triggers if the progress bar has reached the end of the test, otherwise it continues to the return below
      if ((rand_native_lang_list.length === this.state.lang_element) && (rand_native_lang_list.length !== 0)) {
  
      const hit_ratio = this.checkAccuracy()

        return ( 
          <div>
            <br />
            {/* sends the list of native/foreign language words, answers and hit ratio to the results component which will then render on screen */}
             < Results foreign_language={this.state.foreign_language} foreign_language_attempt={this.state.foreign_language_attempt} native_language={this.state.native_language} hit_ratio = {hit_ratio}/>
          </div>
        )
      }

      // this is the main return that provides the progress bar and a form with the tests for user input
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
            <ProgressBar now={progress} label={ this.props.loading ? '' : ((progress !== 0) ? (Math.round(progress)+'%') : '') } />
            <br />
            <br />
            
            <Form onSubmit={this.handleOnSubmit} >
          
              <div align="left">
            
                <Form.Row>

                    {/* displays the native language word in the from of a button whilst creating a hidden form field to  */}
                    {/* send the actual native word to handlesubmit on submission */}
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Native Language</Form.Label><br/>
                        <Button variant="primary" block name='native_language' align="left">{this.props.loading ? <h7>Loading...</h7> : rand_native_lang_list[this.state.lang_element]}</Button>
                        <FormControl type='hidden' value={rand_native_lang_list[this.state.lang_element]} /> 
                    </Form.Group>

                    {/* allows the user to input what they think the correct foreign language word is whilst sending a hidden form field with the answer to handlesubmit  */}
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
  
  export default connect(mapStateToProps)(Tests);