'use strict';
import  React, {Component,PropTypes} from 'react';

import { connect } from 'react-redux';

class BookDetailContainer extends Component {

  static propTypes = {
    selectedBook: PropTypes.object.isRequired
  };

  render() {
    const {selectedBook} = this.props;
    if(selectedBook) {
      return (<div>
        <h1>{selectedBook.title}</h1>
      </div>);
    }
    else{
      return (<h1>Select Something!!</h1>)
    }
  }
}

function mapStateToProps(state) {

  const props = { selectedBook: state.selectedBook };
  return props;
}
export default connect(mapStateToProps,null)(BookDetailContainer);
