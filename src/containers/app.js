import React, { useState, useEffect } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../errorBoundary";
import { connect } from 'react-redux';
import { setSearchField } from "../actions/actions";



let mapStateToProps = state => ({
  searchField: state.searchField
});

let mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
});


function App(props) {
   const [cats, setCats] = useState([]);
   const {searchField, onSearchChange} = props;

   useEffect(() => {
    fetch("https://jsonplaceholder.cypress.io/todos/")
    .then((response) => response.json())
    .then((json) => {
      setCats(json);
    });
     return () => {
     }
   },[])


  let filteredCats = cats.filter((r) =>
    r.title.toLowerCase().includes(searchField.toLowerCase())
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
export default connect(mapStateToProps, mapDispatchToProps)(App)