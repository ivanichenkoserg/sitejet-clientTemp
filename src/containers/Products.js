import ProductCard from '../components/ProductCard';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from '../actions/products'
import { CardColumns } from 'react-bootstrap';

class Products extends Component {

    render() {
      const products = this.props.products.map((product) => <ProductCard id={product.id} name={product.name} 
        price={product.price} description={product.description} sold={product.sold} imglink={product.imglink} />)

      return (
        <div>
          <br />
          <div className="row justify-content-center">
            <h2>Products</h2>
          </div>
          <br />
          <CardColumns>
            <div className="container">
              <div className="row" >
                <div className="col-md-12" align="left"> 
                  {this.props.loading ? <h3>Loading...</h3> : products} 
                </div>
              </div>
            </div>
          </CardColumns>
        </div>
      );
    }

  }

  const mapStateToProps = (state) => {
    console.log("I am state.", state)
    return {
      products: state.productReducer.products,
      loading: state.productReducer.loading
    }
  } 
  
  export default connect(mapStateToProps, { getProducts } )(Products);