import Lists from '../containers/Lists';
import React, { Component } from 'react';
import { Form, Button, Col, FormControl, Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getLists, addList } from '../actions/lists'

class Home extends Component {

    state = {
      native_language: '',
      foreign_language: ''
    }

    handleOnChange = event => {
    // will add the values the user types to state
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        
        // will destructure the state
        const list = {...this.state}
        
        // will dispatch the values in state to the backend
        this.props.addList(list)

        // will set the values in state back to default (empty)
        this.setState({
            native_language: '',
            foreign_language: ''
       }) 
    }

    render() {

      return (
        <main role="main" class="container" align="center">
          <br />
        <h2>Language Tester</h2>
          <br />
            Welcome to language tester. Please enter a word in your native language and a foreign language.
          <div align="center">
          <br />

          {/* displays the form */}
          <Form onSubmit={this.handleOnSubmit}>
            <div align="left">
            
                <Form.Row>
                    {/* creates a field to input a native language */}
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Native Language</Form.Label>
                        <FormControl type="native_language" value={this.state.native_language} name="native_language" onChange={this.handleOnChange} placeholder="e.g. Rabbit" />
                    </Form.Group>

                    {/* creates a field to input a foreign language */}
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Foreign Language</Form.Label>
                        <FormControl type="foreign_language" value={this.state.foreign_language} name="foreign_language" onChange={this.handleOnChange} placeholder="e.g. Hase" />
                    </Form.Group>
                    
                </Form.Row>

                <Button variant="primary" type="submit" align="left">
                    Add Words
                </Button>
                
            </div>
            </Form>
          </div>  
          <br />
          <div align="left">
          <br />
            {/* link to test mode */}
            <h2>List <Button variant="success" size='lg' href='/test'>Test Mode</Button> </h2> 
            <br />
            <div align="center">
              <Container>
                {/* will show loading until the web request is resolved */}
                {this.props.loading ? <h3>Loading...</h3> : < Lists />}  
              </Container>
            </div>
          </div>
        </main>
      )
    }
  
  }

  const mapStateToProps = (state) => {
    return {
      lists: state.listReducer.services,
      loading: state.listReducer.loading
    }
  }
  
  export default connect(mapStateToProps, { getLists, addList } )(Home);
