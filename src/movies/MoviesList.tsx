import React from "react";
import IndividualMovie from "./individualMovie";
import { movieDTO } from "./movies.model";
import css from "./MovieList.module.css";
import Loading from "../utils/loading";
import GenericList from "../utils/genericList";

function MoviesList(props: moviesListProps) {
  return <GenericList list={props.movies} >
    <div className={css.div}>
      {props.movies?.map((movie) => (
        <IndividualMovie {...movie} key={movie.id} />
      ))}
    </div>
  </GenericList>;
}

export default MoviesList;

interface moviesListProps {
  movies?: movieDTO[];
}
