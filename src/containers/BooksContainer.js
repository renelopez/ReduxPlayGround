/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
/* Populated by react-webpack-redux:reducer */
class App extends Component {

  propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired
  };

  render() {
    const {items} = this.props;
    return <Books items={items}/>;
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
// function mapDispatchToProps(dispatch) {
//   /* Populated by react-webpack-redux:action */
//   const actions = {
//     editItem: require('./editItem.js')
//   };
//   const actionMap = { actions: bindActionCreators(actions, dispatch) };
//   return actionMap;
// }
export default connect(mapStateToProps)(App);
