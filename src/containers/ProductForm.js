import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/products'
import { Form, Button, Col, FormControl } from 'react-bootstrap';

class ProductForm extends Component {
    state = {
        name: '',
        price: '',
        description: '',
        imglink: '',
        sold: false,
        loading: false
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChecked = event => { 
        this.setState({
            [event.target.name]: event.target.checked
        }) 
    }   

    handleOnSubmit = e => {
        e.preventDefault()
        const product = {...this.state}
        this.props.addProduct(product)
        this.setState({
            name: '',
            price: '',
            description: '',
            imglink: '',
            sold: false,
            loading: false  
        }) 
    }

    render () {
        return (
            <div className="col-md-6">
            <br />
            <div align="left">
                <h2>Product Form</h2>
            </div>
            <br />
            <Form onSubmit={this.handleOnSubmit}>
            <div align="left">
            
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Product</Form.Label>
                        <FormControl type="name" value={this.state.name} name="name" onChange={this.handleOnChange} placeholder="Enter product name" />
                    </Form.Group>
                
                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <FormControl type="price" value={this.state.price} name="price" onChange={this.handleOnChange} placeholder="Enter price" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Image Link</Form.Label>
                    <FormControl rows="1" value={this.state.imglink} name="imglink" onChange={this.handleOnChange} placeholder="Enter link to image of the product" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <FormControl as="textarea" rows="2" value={this.state.description} name="description" onChange={this.handleOnChange} placeholder="Enter description" />
                </Form.Group>

                <Form.Group >
                    <Form.Check custom type={'checkbox'} id={`custom-checkbox`} name="sold" label="Sold" onChange={this.handleChecked} />
                </Form.Group>

                <Button variant="primary" type="submit" align="left">
                    Add Product
                </Button>
                
            </div>
            </Form>

            </div>
        ) 
    } 
}

export default connect (null, { addProduct })(ProductForm)