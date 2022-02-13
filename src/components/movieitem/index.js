import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchGenres } from "../../fetcher";

const MovieItem = (props) => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    fetchGenres(props.id).then(setValues);
  }, [props.id]);

  return (
    <MovieItemWrapper>
      <LeftCont>
        <img
          alt={props.original_title}
          src={`https://image.tmdb.org/t/p/w200${props.poster_path}`}
          className="movie-image"
        />
      </LeftCont>
      <RightCont>
        <div className="movie-headers">
          <h2>{props.original_title}</h2>
          <h3>{props.vote_average}</h3>
        </div>
        <div className="genres">
          {values.map((genres) => (
            <p className="light-green-text" key={genres.id}>
              <strong>{genres.name} </strong>
            </p>
          ))}
        </div>
        <p className="overview">{props.overview}</p>
        <p className="light-green-text">{props.release_date}</p>
      </RightCont>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: flex;
  padding: 20px;
  height: 200px;
  gap: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;

export default MovieItem;
