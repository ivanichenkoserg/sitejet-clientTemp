import ServiceCard from '../components/ServiceCard';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getServices } from '../actions/services'
import { CardColumns } from 'react-bootstrap';

class Services extends Component {

    render() {

      const services = this.props.services.map((service, i) => <ServiceCard key={i} {...service} />)

      return (
        <div>
          <br />
          <div className="row justify-content-center">
            <h2>Services</h2>
          </div>
          <br />
          <CardColumns>
            <div className="container">
              <div className="row" >
                <div className="col-md-12" align="left">
                  {this.props.loading ? <h3>Loading...</h3> : services} 
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
      services: state.serviceReducer.services,
      loading: state.serviceReducer.loading
    }
  } 
  
  export default connect(mapStateToProps, { getServices } )(Services);