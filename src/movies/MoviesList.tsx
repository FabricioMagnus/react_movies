import React from "react";
import IndividualMovie from "./individualMovie";
import { movieDTO } from "./movies.model";
import css from './MovieList.module.css'

function MoviesList(props: moviesListProps) {
  return (
    <div className={css.div}>
      {props.movies.map(movie=>
        <IndividualMovie {...movie} key={movie.id}/>
        )}      
    </div>
  );
}
export default MoviesList;

interface moviesListProps {
    movies: movieDTO[];
}