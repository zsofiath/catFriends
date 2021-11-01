import React, { useState, useEffect } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../errorBoundary";

export default function App() {
   const [cats, setCats] = useState([]);
   const [searchtext, setSearchText] = useState('');

   useEffect(() => {
    fetch("https://jsonplaceholder.cypress.io/todos/")
    .then((response) => response.json())
    .then((json) => {
      setCats(json);
    });
     return () => {
     }
   },[])


  const onSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  let filteredCats = cats.filter((r) =>
    r.title.toLowerCase().includes(searchtext.toLowerCase())
  );

  if (cats.length === undefined) return <div>Loading</div>;
  return (
    <div className="tc">
      <SearchBox searchChange={onSearchChange} />
      <ErrorBoundary>
        <Scroll>
          <CardList cats={filteredCats} />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
}
