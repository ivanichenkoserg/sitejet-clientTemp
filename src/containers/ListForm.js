import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions/lists'
import { Form, Button, Col, FormControl } from 'react-bootstrap';

class ListForm extends Component {

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

    render () {

        return (
        <div align="left">
          {/* displays the form */}
          <Form onSubmit={this.handleOnSubmit}>
            
            
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
                
            
            </Form>
            </div>
        ) 
    } 
}
        

export default connect (null, { addList })(ListForm)