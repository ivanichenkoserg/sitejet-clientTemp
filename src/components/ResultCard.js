import React, { Component } from 'react';
import { Table, Button, Badge} from 'react-bootstrap';

class Results extends Component {


  createTable = () => {
    
    // Adds table headings to the table 
    this.props.foreign_language.unshift('Translation')
    this.props.foreign_language_attempt.unshift('Your Attempt')
    this.props.native_language.unshift('Native Language')

    let table = []

    // Outer loop to create table rows
    for (let i = 0; i < this.props.foreign_language.length; i++) {
      let children = []

      //Inner loop to create tables

      //will add heading tags to the table
      if (i === 0 ) {
          children.push(<th>{this.props.native_language[i]}</th>)
          children.push(<th>{this.props.foreign_language[i]}</th>)
          children.push(<th>{this.props.foreign_language_attempt[i]}</th>)
          children.push(<th>{'Result'}</th>)
      }

      //will add normal cell tags to the table cells
      else {
          children.push(<td>{this.props.native_language[i]}</td>)
          children.push(<td>{this.props.foreign_language[i]}</td>)
          children.push(<td>{this.props.foreign_language_attempt[i]}</td>)
          
          //will add data values to the table for subsequent rows    
          if (this.props.foreign_language[i].toLowerCase() === this.props.foreign_language_attempt[i].toLowerCase()) {
            children.push(<td>{<Badge variant="success">Correct</Badge>}</td>)  
          }
          else {
            children.push(<td>{<Badge variant="danger">Incorrect</Badge>}</td>)
          }
      }
      
      //Create the parent and add the children (add the rows to the table)
      if (i===0) {
        table.push(<thead><tr>{children}</tr></thead>)
      }  
      else {table.push(<tr>{children}</tr>)}
      

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
  
  export default Results;