import Lists from '../containers/Lists';
import ListForm from '../containers/ListForm';
import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'

class Home extends Component {

    state = {
      native_language: '',
      foreign_language: ''
    }

    render() {

      return (
        <main role="main" className="container" align="center">
          <br />
        <h2>Language Tester</h2>
          <br />
            Welcome to language tester. Please enter a word in your native language and a foreign language.
          <div align="center">
          <br />

          <ListForm />
          
          </div>  
          <br />
          <div align="left">
          <br />
            {/* link to test mode */}
            <h2>List <Button variant="success" size='lg' href='/test'>Test Mode</Button> </h2> 
            <br />
            <div align="center">
              <Container>
                {/* will show loading until the web request is resolved */}
                {this.props.loading ? <h3>Loading...</h3> : < Lists />}  
              </Container>
            </div>
          </div>
        </main>
      )
    }
  
  }

  const mapStateToProps = (state) => {
    return {
      lists: state.listReducer.services,
      loading: state.listReducer.loading
    }
  }
  
  export default connect(mapStateToProps, { getLists } )(Home);
