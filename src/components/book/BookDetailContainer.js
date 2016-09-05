'use strict';
import  React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';

import BookDetailComponent from './BookDetailComponent';

class BookDetailContainer extends Component {

  render() {
    return (
        <BookDetailComponent book={this.props.selectedBook}/>
    )
  }
}

BookDetailContainer.propTypes = {
  selectedBook: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {selectedBook: state.books.selectedBook}
}
export default connect(mapStateToProps)(BookDetailContainer);
