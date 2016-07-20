// imports React as well as Component from within react as its own variable.
import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term} // setting value by state makes this a "controlled" component and its value can only be changed through change in state
          onChange={e=> this.onInputChange(e.target.value)}
          placeholder="Search Videos"
        />
      </div>
    );
  }

}

export default SearchBar;