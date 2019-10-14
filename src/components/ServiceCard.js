import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { deleteService } from '../actions/services'

class ServiceCard extends Component {

    state = {
      bgColor: 'primary'
    }

    info = () => { 
      if (this.props.sold === true) {
        return <Button variant="success">Sold</Button>
      } 
      else { 
        return <Button variant="primary">Available</Button>
      }
    }; 

    handleDelete = e => {
      this.props.deleteService(this.props.id)
      this.setState({
        bgColor: 'danger'
      }) 
    }

    render() {

      const {id, imglink, name, price, description} = this.props

      return ( 
        <div key={id} > 
          <Card>
            <Card.Img variant="top" src={imglink} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle >${price}</Card.Subtitle>
              <Card.Text>
                {description}
              </Card.Text>
              {this.info()} <Button variant={this.state.bgColor} onClick={this.handleDelete} >Delete</Button> 
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
  
export default connect (null, { deleteService })(ServiceCard);