import React, { Component } from 'react';
import './Layout.css';
import Top from './components/LayoutTop';
import Search from './components/Search';
import { connect } from "react-redux";
import * as actionCreators from "./actions/index";
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MovieDetail from './components/MovieDetail';

class Layout extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Top />
        <div className="wrapper">          
          <Router>
            <Switch>
              <Route exact path="/home" render={(routerProps) => <MovieList {...routerProps} movies={this.props.movies} />}></Route>
              <Route exact path="/detail/:id" render={(routerProps) => <MovieDetail {...routerProps} />}></Route>
              <Redirect from="/" to="/home" />
            </Switch>
          </Router>
          
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Layout);