import React from "react";
import logo from "../../imgs/logo.png";
import SearchBar from "../SearchBar/SearchBar";

const revealSearchBar = () => {
  const hiddenSearch = document.getElementById("hidden-search");
  hiddenSearch.style.display = null;
  hiddenSearch.id = "search-box";
};

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A Place to </span>
          <span id="get-button" onClick={revealSearchBar}>
            get
          </span>
          <SearchBar />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
