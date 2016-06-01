/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React ,{ Component,PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {selectBook} from '../actions/bookActions';

/* Populated by react-webpack-redux:reducer */
class BooksContainer extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    let itemsToRender = this.props.items.map((item) => {
      return(
        <li key={item.title} className="list-group-item" onClick={() => {this.props.actions.selectedBook(item)}}>
          <span>{item.title}</span>
          <span>{item.price}</span>
        </li>
      );
    });

    return (
      <div className="col-md-5">
        <ul className="list-group">
          {itemsToRender}
        </ul>
      </div>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = { items: state.books };
  return props;
}
 function mapDispatchToProps(dispatch) {
   /* Populated by react-webpack-redux:action */
   return { actions: bindActionCreators(selectBook, dispatch) };
 }
export default connect(mapStateToProps,mapDispatchToProps)(BooksContainer);
