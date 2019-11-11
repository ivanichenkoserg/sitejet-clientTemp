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
        this.props.deleteList(this.props.id)
        this.setState({
          bgColor: 'success',
          text: 'Deleted' 
        }) 
      }

    render() {

      const {id, native_language, foreign_language} = this.props

      return (
        <div key={id} >
            <ButtonGroup>
                <Button variant="primary" size='lg' >{native_language}</Button>
                <Button variant="primary" size='lg' >{foreign_language}</Button>
                <Button variant="danger" onClick={this.handleDelete} variant={this.state.bgColor} size='lg'>{this.state.text}</Button>
            </ButtonGroup>
            <br />
            <br />
        </div>
      );
   
    }
  }
  
export default connect (null, { deleteList })(ListCard);