import React, { FC } from "react"

import { IHeaderComponentProps } from "./models"
import "./Header.scss"
import SearchBar from "../SearchBar"

const Header: FC<IHeaderComponentProps> = ({ input, updateInput }) => {
  return (
    <div className="header">
      <SearchBar {...{ input }} onChange={updateInput} />
    </div>
  )
}

export default Header
