import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

const MovieList = (movies) => {
  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
      {movies.movies.map((results) => (
        <MovieItem key={results.id} {...results} />
      ))}
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  position: relative;
`;

export default MovieList;
