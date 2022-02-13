import React, { useEffect, useState } from "react";

import Checkbox from "../checkbox";

const ExpandableFilter = (props) => {
  // You need to create your own checkbox component with a custom checkmark
  const [genre, setGenre] = useState(null);
  const [toggleGenre, setToggleGenre] = useState(false);

  const [ratings, setRatings] = useState(null);
  const [toggleRatings, setToggleRatings] = useState(false);

  const [language, setLanguage] = useState(null);
  const [toggleLanguage, setToggleLanguage] = useState(null);

  const Value = props;

  useEffect(() => {
    setGenre(props.props.genres);
    setRatings(props.props.ratings);
    setLanguage(props.props.languages);
  }, [Value, props.props.genres, props.props.ratings, props.props.languages]);

  return (
    <>
      {toggleGenre ? (
        <>
          {" "}
          <h2 onClick={() => setToggleGenre(false)}>- Select genre(s)</h2>
          {genre ? (
            <>
              {genre.genres.map((genres) => (
                <Checkbox key={genres.name} {...genres} />
              ))}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <h2 onClick={() => setToggleGenre(true)}>+ Select genre(s)</h2>
      )}

      {toggleRatings ? (
        <>
          {" "}
          <h2 onClick={() => setToggleRatings(false)}>- Select min.vote</h2>
          {genre ? (
            <>
              {ratings.map((r) => (
                <Checkbox key={r.name} {...r} />
              ))}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <h2 onClick={() => setToggleRatings(true)}>+ Select min.vote</h2>
      )}

      {toggleLanguage ? (
        <>
          {" "}
          <h2 onClick={() => setToggleLanguage(false)}>- Select language</h2>
          {language ? (
            <>
              {language.map((l) => (
                <Checkbox key={l.name} {...l} />
              ))}
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <h2 onClick={() => setToggleLanguage(true)}>+ Select language</h2>
      )}
    </>
  );
};
export default ExpandableFilter;
