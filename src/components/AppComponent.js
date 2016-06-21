'use strict';
import React from 'react';
import Links from './common/LinksComponent';
import LoadingDots from './common/LoadingDotsComponent';
import {connect} from 'react-redux';
class App extends React.Component{

  propTypes={
    loading:React.PropTypes.bool.isRequired
  };


  render(){
    return(
        <div>
          <Links />
          { this.props.loading && <LoadingDots interval={100} dots={20} /> }
          { this.props.children }
        </div>
    )
  }
}

function mapStateToProps(state){
  return{
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
