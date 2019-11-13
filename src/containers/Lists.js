import ListCard from '../components/ListCard';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'
import { Container, Button } from 'react-bootstrap';

class Lists extends Component {

    render() {

      const lists = this.props.lists.map((list, i) => <ListCard key={i} {...list} />)

      return (
        <div align='left'>
        <Button variant="outline-primary">Number of Words: {this.props.lists.length}</Button>
          <Container>
            <div className="container">
              <div className="row" >
                <div className="col-md-12" align="center"> 
                  <br />
                  {this.props.loading ? <h3>Loading...</h3> : lists} 
                </div>
              </div>
            </div>
          </Container>
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
  
  export default connect(mapStateToProps, { getLists } )(Lists);