import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from'./components/video-list';
import VideoDetail from './components/video-detail.js';

const API_KEY = ' AIzaSyBFFnTgaaWf85XRXeUpA501Yk7QJVYnYPg ';

// ES6 anonymous function; context for this is the enclosing context
// when returning a single line, the braces can be eliminated and so can 'return'
//const App = () => <div>Hello there!</div>;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch();
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
        console.log(videos);
      }
    );
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
};


// Attach the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
