import React from 'react'
import Mignifying from "../../assets/magnifying-glass.svg"

import './SearchBar.css'

const SearchBar = (text,image) => {
    return (
      <div className="searchBarContainer">
        <div className="textImageContainer">
            <span className={"searchBarText"}>¿Qué estás buscando?</span>
            <img src={Mignifying} alt="Mignifying Glass" />
        </div>
      </div>
    )
}

export default SearchBar