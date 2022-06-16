import React, { useRef,useEffect } from "react";
import "./Search.scss";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <div className="search__wrapper">
        <input
          className="search__input"
          name="search"
          placeholder="Search for a country..."
          ref={searchValue}
          onChange={searchCountry}
        ></input>
      </div>
    </form>
  );
};

export default Search;
