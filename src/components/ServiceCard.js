import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class ServiceCard extends Component {

    info = () => { 
      if (this.props.sold === true) {
        return <Button variant="danger">Sold</Button>
      } 
      else { 
        return <Button variant="primary">Available</Button>
      }
    }; 

    render() {
      return ( 
        <div key={this.props.id} > 
          <Card>
            <Card.Img variant="top" src={this.props.imglink} />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Subtitle >${this.props.price}</Card.Subtitle>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              {this.info()} <Button variant="primary">Delete</Button> 
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
  export default ServiceCard;