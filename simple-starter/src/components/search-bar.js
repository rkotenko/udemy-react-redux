// imports React as well as Component from within react as its own variable.
import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {term: ''};
  }

  render() {
    return (
      <div>
        <input
          value = {this.state.term} // setting value by state makes this a "controlled" component and its value can only be changed through change in state
          onChange={e => this.setState({term: e.target.value})}
        />
        Value of the input: {this.state.term}
      </div>
    );
  }

}

export default SearchBar;