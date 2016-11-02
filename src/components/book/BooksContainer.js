'use strict';
import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../../actions/bookActions';
import BookListComponent from './BookListComponent';
import {getAllItems}  from '../../selectors/commonSelectors';

/* Populated by react-webpack-redux:reducer */
class BooksContainer extends Component {

  onSelectBook = (book) => {
    this.props.actions.selectBook(book);
  };

  render() {
    return (
        <BookListComponent books={this.props.books} onSelectBook={this.onSelectBook}/>
    )
  }
}

BooksContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onSelectBook:PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {books: getAllItems(state.bookModule)};
}

function mapDispatchToProps(dispatch) {
  const actions = {
    selectBook
  };
  return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
