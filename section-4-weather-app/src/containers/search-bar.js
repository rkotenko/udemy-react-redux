import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value});
  }

  render() {
    return (
      <form>
        <div className="input-group">
          <input
            className="form-control"
            placeholder="search for city forecast"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </div>
      </form>
      );
   }
}

export default SearchBar;
/*function mapStateToProps(state) {

}

export default connect(mapStateToProps)(SearchBar);*/