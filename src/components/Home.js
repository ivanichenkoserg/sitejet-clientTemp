import Lists from '../containers/Lists';
import Services from '../containers/Services';
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
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const list = {...this.state}
        this.props.addList(list)
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
          <br />
            <h2>List <Button variant="success" size='lg' >Test Mode</Button> </h2> 
            <br />
            <div align="center">
              <Container>
                {this.props.loading ? <h3>Loading...</h3> : < Lists />}  
              </Container>
            </div>
          </div>
        </main>
      )
    }
  
  }

  const mapStateToProps = (state) => {
    console.log("I am state.", state)
    return {
      lists: state.listReducer.services,
      loading: state.listReducer.loading
    }
  }
  
  export default connect(mapStateToProps, { getLists, addList } )(Home);
