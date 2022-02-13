import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import * as colors from "../../colors";

import { fetchDiscover, fetchGenreTitles } from "../../fetcher";
import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const Discover = () => {
  const [data, setData] = useState(null);
  const [results, setResults] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState();
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ]);

  // PRELOAD THE GENERAL MOVIES

  useEffect(() => {
    const fetchingData = () => {
      fetchDiscover().then(setData);
      fetchGenreTitles().then(setGenreOptions);
    };

    fetchingData();
  }, []);

  useEffect(() => {
    if (data) {
      const settingData = () => {
        setResults(data.results);
        setTotalCount(data.total_results);
      };
      settingData();
    }
  }, [data]);

  // KEYWORD AND YEAR PARAMETER FILTER (TRIGGER API)

  return (
    <DiscoverWrapper className="discover-page">
      <MobilePageTitle className="title-disc">Discover</MobilePageTitle>{" "}
      <div className="discover-main">
        <MovieFilters className="mov-fil">
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            setData={setData}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults className="mov-res">
          {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
          <MovieList movies={results || []} genres={genreOptions || []} />
        </MovieResults>
      </div>
    </DiscoverWrapper>
  );
};
// }

const DiscoverWrapper = styled.main`
  padding: 60px 35px;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header`
  position: relative;
  bottom: 40px;
  left: 70px;
  color: black;
  font-size: 30px;
`;

export default Discover;
