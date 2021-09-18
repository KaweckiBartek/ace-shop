import React, { FC } from "react"

import { ISearchBarComponentProps } from "./models"
import { BiSearchAlt } from "react-icons/bi"
import { VscDebugStackframeDot } from "react-icons/vsc"
import "./SearchBar.scss"

const SearchBar: FC<ISearchBarComponentProps> = ({
  input: keyword,
  onChange: setKeyword,
}) => {
  return (
    <div className="search-bar">
      <div className="search-bar-label floating-label--searchBox">
        <VscDebugStackframeDot style={{ display: "none" }} />
        <input
          className="search-bar__input"
          key="SearchBar"
          id="searchBar"
          value={keyword}
          placeholder=""
          onChange={event => setKeyword(event.target.value)}
        />
        <span>
          <BiSearchAlt className="search-bar__icon" />
        </span>
        <label className={keyword !== "" ? "Active" : ""} htmlFor="searchBar">
          Wpisz szukaną fraze
        </label>
      </div>
    </div>
  )
}

export default SearchBar
