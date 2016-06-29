'use strict';
import React,{PropTypes} from 'react';
import Links from './common/LinksComponent';
import LoadingDots from './common/LoadingDotsComponent';
import {connect} from 'react-redux';
class App extends React.Component{

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

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state){
  return{
    loading:state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
