import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'
import { Table, Button, Badge} from 'react-bootstrap';

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
            children.push(<td>{<Badge variant="success">Correct</Badge>}</td>)  
          }
          else {
            children.push(<td>{<Badge variant="danger">Incorrect</Badge>}</td>)
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
            <Button href='/' align='left'>Back to List</Button> <br />
            <br />
            <b>Hit Ratio (% Success):</b>  {Math.round(this.props.hit_ratio * 100) + '%'} 
          </div>

          <br />

          <Table striped bordered hover >
            {this.createTable()}
          </Table>
          <br />
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
  
  export default connect(mapStateToProps, { getLists } )(Results);