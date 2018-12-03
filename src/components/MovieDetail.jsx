import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../actions/index"
import "./MovieDetail.css";

const Ratings = (props) => {
  if (props.list.length > 0) {
    return props.list.map((item, index) => {
      return (<span key={index}>{item.Source}: <strong>{item.Value}</strong>;  </span>);
    })
  }
  return <span />
}

class MovieDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.searchMovieDetail(id);
  }
  render() {
    let movie = this.props.movieDetail;
    return (
      <section className="movie-detail">
        <div className="row mt-4">
          <div className="col">
            <Link to="/home"> &lt;Back to Search Page</Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-3">
            <img src={movie.Poster} className="img-poster" />
          </div>
          <div className="col-sm-9 detail-content">
            <div><strong>Title: </strong>{movie.Title}</div>
            <div><strong>Actors: </strong>{movie.Actors}</div>
            <div><strong>Year: </strong>{movie.Year}</div>
            <div><strong>Awards: </strong>{movie.Awards}</div>
            <div><strong>Writer: </strong>{movie.Writer}</div>
            <div><strong>Type: </strong>{movie.Type}</div>
            <div><strong>Released: </strong>{movie.Released}</div>
            <div><strong>Genre: </strong>{movie.Genre}</div>
            <div><strong>Language: </strong>{movie.Language}</div>
            <div><strong>Country: </strong>{movie.Country}</div>
            <div>
              <strong>Ratings: </strong>
              <Ratings list={movie.Ratings} />
            </div>
            <div><strong>IMDb Rating: </strong>{movie.imdbRating}</div>
            <div><strong>IMDb Votes: </strong>{movie.imdbVotes}</div>
            <div><strong>Summary: </strong>{movie.Plot}</div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state, movieId: "" };
};

export default connect(
  mapStateToProps,
  actionCreators
)(MovieDetail);