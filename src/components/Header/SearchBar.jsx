import React,{ useState} from "react";
import Mignifying from "../../assets/magnifying-glass.svg";

import "./SearchBar.css";

const SearchBar = () => {
  const [busqueda,setBusqueda] = useState("")

  const realizarBusqueda = () => {
    busqueda != "" ? window.alert(`Realizando búsqueda de: ${busqueda}`) : window.alert(`Escribe algo en la barra de búsqueda`);
    setBusqueda("");
  }

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        value={busqueda}
        className={"searchBarText"}
        placeholder="¿Qué estás buscando?"
        onChange={e => setBusqueda(e.target.value)}
      />
      <button onClick={e=>realizarBusqueda(busqueda)}>
        <img src={Mignifying} alt="Mignifying Glass" />
      </button>
    </div>
  );
};

export default SearchBar;
