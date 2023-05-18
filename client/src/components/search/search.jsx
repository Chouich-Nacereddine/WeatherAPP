import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import "./search.css";
import { geoUrl, geoApi } from "../../APIs/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
      `${geoUrl}/cities?countryIds=MA&namePrefix=${inputValue}`,
      geoApi
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude} `,
              label: `${city.name} , ${city.countryCode}`,
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };
  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <>
      <div className="container">
        <AsyncPaginate
          debounceTimeout={600}
          value={search}
          onChange={handleOnchange}
          loadOptions={loadOptions}
        />
      </div>
    </>
  );
};

export default Search;
