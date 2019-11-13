import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'
import { Table, Button, Form, Col, FormControl } from 'react-bootstrap';
import Lists from './Lists'

class Results extends Component {


  createTable = () => {
    
    this.props.foreign_language.unshift('Translation')
    this.props.foreign_language_attempt.unshift('Your Attempt')
    this.props.native_language.unshift('Native Language')

    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.props.foreign_language.length; i++) {
      let children = []

      //Inner loop to create children
          children.push(<td>{this.props.native_language[i]}</td>)
          children.push(<td>{this.props.foreign_language[i]}</td>)
          children.push(<td>{this.props.foreign_language_attempt[i]}</td>)
          
          if (i === 0) {
            children.push(<td>{'Result'}</td>)  
          }
          else if (this.props.foreign_language[i].toLowerCase() === this.props.foreign_language_attempt[i].toLowerCase()) {
            children.push(<td>{'Correct'}</td>)  
          }
          else {
            children.push(<td>{'Incorrect'}</td>)
          }
      
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)

    }

    return table

  }

    render() {
 
      return (
        <div>
          <main role="main" className="container" align="center"> 

          <div align='left'>
            <Button href='/' align='left'>Back to List</Button>
          </div>

          <br />

          <Table striped bordered hover >
            {this.createTable()}
          </Table>

          <b>Hit Ratio (% Success):</b> {Math.round(this.props.hit_ratio * 100) + '%'}

          <br />
          <br />
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
  
  export default connect(mapStateToProps, { getLists } )(Results);