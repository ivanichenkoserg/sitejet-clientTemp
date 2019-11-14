import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { deleteList } from '../actions/lists'

class ListCard extends Component {

    state = {
      bgColor: 'danger',
      text: 'Delete'
    }

    handleDelete = () => {
    
      // will delete the specific entry from the list database  
      this.props.deleteList(this.props.id)

      // will change the colour of the delete button to green and the text on the delete button to deleted
        this.setState({
          bgColor: 'success',
          text: 'Deleted' 
        }) 
    
      }

    render() {

      // makes it possible to refer to props without typing this.props every time
      const {id, native_language, foreign_language} = this.props

      return (
        <div key={id} >
          {/* displays the native and foreign languages from the list database and a delete button */}
            <ButtonGroup>
                <Button variant="primary" size='lg' >{native_language}</Button>
                <Button variant="primary" size='lg' >{foreign_language}</Button>
                <Button variant={this.state.bgColor} onClick={this.handleDelete} size='lg'>{this.state.text}</Button>
            </ButtonGroup>
            <br />
            <br />
        </div>
      );
   
    }
  }
  
export default connect (null, { deleteList })(ListCard);