import React, {useState} from "react";
import Header from '../components/Header/Header';
import Navbar from '../components/NavBar/Navbar';
import ListasArchivo from '../components/Listas/ListasArchivo';



function Archive() {
  const [searchTerm, setSearchTerm] = useState('');

  function ToggleSearchBox() {
    document.querySelector(".SearchBox").classList.toggle("hidden");
    document.getElementById("SearchInput").value = "";
    setSearchTerm("");

    if (!document.querySelector(".SearchBox").classList.contains("hidden")) {
      document.getElementById("SearchInput").focus();
    }
  }

  const SearchInputChanged = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <Header />
      <div class="content">
        <div className="ListHeader">
          <h1>Archivo</h1>
          <button className="SearchButton" onClick={ToggleSearchBox}><span className="icon-magnifying-glass SearchIcon"></span></button>
          <div className="SearchBox hidden">
            <input id="SearchInput" type="text" placeholder="Buscar..." value={searchTerm} onChange={SearchInputChanged}/>
            <button className="SearchButton" onClick={ToggleSearchBox}><span className="icon-xmark SearchIcon"></span></button>
          </div>
        </div>
      </div>
      <ListasArchivo searchTerm = {searchTerm}/>
      <Navbar />
    </div>
  );
}

export default Archive;
