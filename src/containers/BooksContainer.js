
import React ,{ Component,PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {selectBook} from '../actions/bookActions';
import BookListComponent from '../components/BookListComponent';

/* Populated by react-webpack-redux:reducer */
class BooksContainer extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired
  };

  onSelectBook=(book) => {
    this.props.actions.selectBook(book);
  };

  render() {
    return(
      <BookListComponent books={this.props.books} onSelectBook={this.onSelectBook}/>
    )
  }
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { books: state.books };
  return props;
}
 function mapDispatchToProps(dispatch) {
   const actions = {
     selectBook
   };
   return { actions: bindActionCreators(actions, dispatch) };
 }
export default connect(mapStateToProps,mapDispatchToProps)(BooksContainer);
