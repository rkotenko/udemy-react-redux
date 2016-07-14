import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = ' AIzaSyBFFnTgaaWf85XRXeUpA501Yk7QJVYnYPg ';

// Create a new component.  This should produce some html

// ES6 anonymous function; context for this is the enclosing context
// when returning a single line, the braces can be eliminated and so can 'return'
//const App = () => <div>Hello there!</div>;

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


// Attach the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
