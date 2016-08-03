// Even though this is a container it is really a blend of redux container and react component because it both displays data
// and connects the state data to the component.  In a real app, the component of book-list might be separate from the
// state-connected container (maybe named AllBooksList). It is the latter that is then used in the render function of the parent component

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">
          {book.title}
        </li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
      );
  }
}

// THIS IS THE CONTAINER AND WOULD BE IN ANOTHER FILE

// This connects the redux state to the react props
function mapStateToProps(state) {

  return {
    books: state.books  // the reducer returns a state with a property of books
  };
}

function mapDispatchToProps(dispatch) {

  // this binds the actions to dispatch which sends the results of the action to every reducer
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect is a special react-redux function that is the "glue" between our mapping functions and our react component
// it will give Booklist a prop of 'books' and 'selectBook'.  connect makes BookList a container in redux terminology.
// it also attaches the actions to the list
export default connect(mapStateToProps, mapDispatchToProps)(BookList);