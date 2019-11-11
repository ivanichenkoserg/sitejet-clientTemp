import React, { Component } from 'react';
import { Form, Button, Col, FormControl, Container, Row } from 'react-bootstrap';

class Home extends Component {

    state = {
        native_language: '',
        foreign_language: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const product = {...this.state}
        debugger; 
        console.log(product)
        // this.props.addProduct(product)
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
          <Form onSubmit={this.handleOnSubmit}>
            <div align="left">
            
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Native Language</Form.Label>
                        <FormControl type="native_language" value={this.state.native_language} name="native_language" onChange={this.handleOnChange} placeholder="e.g. Rabbit" />
                    </Form.Group>

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
            <h2>List</h2>
            <br />
            <div align="center">
              <Container>
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                  <Col>
                      Delete
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </main>
      )
    }
  
  }
  
  export default Home;

