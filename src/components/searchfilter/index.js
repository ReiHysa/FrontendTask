import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ExpandableFilter from "../../components/expandablefilter";
import { fetchByKeyword, fetchDiscover } from "../../fetcher";
import Filter from "../../images/filter-icon.png";

const SearchFilters = (props) => {
  const [searchValue, setSearchValue] = useState(null);
  const [filterClicked, setFilterClicked] = useState(false);
  const [yearValue, setYearValue] = useState(null);

  const handleType = (event) => {
    setSearchValue(event.target.value);
  };
  const change = (event) => {
    setYearValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      fetchByKeyword(searchValue, yearValue).then(props.setData);
    } else {
      fetchDiscover().then(props.setData);
    }
  }, [searchValue, yearValue, props.setData]);

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
        <div className="discover-components">
          <div className="search-component">
            <input
              type="search"
              placeholder="Search Movie"
              onChange={handleType}
            />

            <img
              src={Filter}
              onClick={() =>
                setFilterClicked((prevFilterClicked) => !prevFilterClicked)
              }
              alt="filter"
              className={filterClicked ? "filter-yes" : "filter-no"}
            />
          </div>
          <div className="year-component">
            <input
              type="number"
              min="1878"
              max="2099"
              placeholder="Year of release"
              onChange={change}
              className="year-input"
            />
          </div>
        </div>
      </SearchFiltersCont>

      <SearchFiltersCont
        className={filterClicked ? "show-content" : "hide-content"}
      >
        <CategoryTitle>Movie</CategoryTitle>
        <ExpandableFilter props={props} />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
};

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div``;

export default SearchFilters;
