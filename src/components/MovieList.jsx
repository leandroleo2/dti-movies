import React from 'react';
import { Link } from "react-router-dom";
import Search from './Search';
import "./MovieList.css";

const MoviesGrid = (props) => {
  if (props.movies.length > 0) {
    return props.movies.map((item, index) => {
      return (
        <div key={index} className="row mt-4">
          <div className="col-sm-1">
            <img src={item.Poster} className="img-poster" />
          </div>
          <div className="col-sm-10">
            <div><strong>Title: </strong><Link to={`detail/${item.imdbID}`}> {item.Title}</Link></div>
            <div><strong>Year: </strong>{item.Year}</div>
            <div><strong>IMDB ID: </strong>{item.imdbID}</div>
            <div><strong>Type: </strong>{item.Type}</div>
          </div>
        </div>
      )
    })
  }

  return <div />
}

class MovieList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search {...this.props} />
        <div className="grid-movie">
          <MoviesGrid movies={this.props.movies} />
        </div>
      </React.Fragment>
    )
  }
}
export default MovieList;