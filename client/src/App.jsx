import React from "react";
import Search from "./components/search/search";


const App = () => {

  const handleOnchange = (searchData) => {
    console.log(searchData);
  }
  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnchange}/>
      </div>
    </>
  );
};

export default App;
