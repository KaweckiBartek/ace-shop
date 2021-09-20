import React, { FC } from "react"

import { IDiscountCodeComponentProps } from "./models"
import { VscDebugStackframeDot } from "react-icons/vsc"
import "./DiscountCode.scss"

const DiscountCode: FC<IDiscountCodeComponentProps> = ({
  input: keyword,
  onChange: setKeyword,
}) => {
  return (
    <div className="discount-code">
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

        <label
          className={keyword !== "" ? "Active" : ""}
          htmlFor="discountCode"
        >
          Wpisz kod rabatowy
        </label>
      </div>
    </div>
  )
}

export default DiscountCode
