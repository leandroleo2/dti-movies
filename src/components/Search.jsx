import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/index"
import { Redirect } from 'react-router-dom'


class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(event) {
    let value = event.target.value;
    this.setState({ search: { title: value } });
  }

  async handleSearch() {
    console.log(this.props.history);
    let title = this.state.search.title;
    let movies = await this.props.searchMovies(title);
    if(this.props.history.location.pathname != "/home")
      this.props.history.push('/home');
  }

  render() {
    return (
      <section className="wrapper">
        <div className="row mt-5">
          <div className="col-sm-1"><h3>Title:</h3></div>
          <div className="col-sm-4">
            <input className="form-control" onChange={(event) => this.handleInputChange(event)} type="text" name="title" id="title" />
          </div>
          <div className="col-sm-2"><button className="btn btn-primary" onClick={() => this.handleSearch()}>Search</button></div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Search);