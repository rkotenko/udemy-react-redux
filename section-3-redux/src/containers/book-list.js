// Even though this is a container it is really a blend of redux container and react component because it both displays data
// and connects the state data to the component.  In a real app, these should be separate
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title} </li>
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

// This connects the redux state to the react props
function mapStateToProps(state) {

  return {
    books: state.books  // the reducer returns a state with a property of books
  };
}

// connect is a special react-redux function that is the "glue" between our mapping function and our react component
// it will give Booklist a prop of 'books'
export default connect(mapStateToProps)(BookList);