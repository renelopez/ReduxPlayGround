'use strict';
import  React, {Component,PropTypes} from 'react';

import { connect } from 'react-redux';

import BookDetailComponent from './BookDetailComponent';

class BookDetailContainer extends Component {

  static propTypes = {
    selectedBook: PropTypes.object.isRequired
  };

  render() {
   return(
     <BookDetailComponent book={this.props.selectedBook} />
   )
  }
}

function mapStateToProps(state) {

  const props = { selectedBook: state.selectedBook };
  return props;
}
export default connect(mapStateToProps,null)(BookDetailContainer);
