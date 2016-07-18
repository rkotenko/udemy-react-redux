import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from'./components/video-list';

const API_KEY = ' AIzaSyBFFnTgaaWf85XRXeUpA501Yk7QJVYnYPg ';



// ES6 anonymous function; context for this is the enclosing context
// when returning a single line, the braces can be eliminated and so can 'return'
//const App = () => <div>Hello there!</div>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });  // ES6 allows using just the name of the property when key/property have same name
        console.log(videos);
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};


// Attach the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
