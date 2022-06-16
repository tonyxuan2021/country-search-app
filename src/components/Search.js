import React, {useRef} from "react";
import "./Search.scss";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useGlobalContext } from "../context";

const Search = () => {

    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')

    const searchCountry = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <div className="search__wrapper">
        <GiMagnifyingGlass />
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
