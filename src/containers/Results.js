import ListCard from '../components/ListCard';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLists } from '../actions/lists'
import { Container} from 'react-bootstrap';

class Results extends Component {

    render() {

      const lists = this.props.lists.map((list, i) => <ListCard key={i} {...list} />)

      return (
        <div>
        
          <br />  
          <Container>
            <div className="container">
              <div className="row" >
                <div className="col-md-12" align="center"> 
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
    console.log("I am state.", state)
    return {
      lists: state.listReducer.lists,
      loading: state.listReducer.loading
    }
  } 
  
  export default connect(mapStateToProps, { getLists } )(Results);