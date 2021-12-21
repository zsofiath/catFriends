import React, { useEffect } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../errorBoundary";
import { connect } from 'react-redux';
import { requestCats, setSearchField } from "../actions/actions";



let mapStateToProps = state => ({
  searchField: state.searchCat.searchField,
  cats: state.requestCats.cats,
  isPending: state.requestCats.isPending,
  error: state.requestCats.error
});

let mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onRequestCats: () => dispatch(requestCats())
});


function App(props) {
   const {searchField, onSearchChange, cats, isPending, error, onRequestCats} = props;

   useEffect(() => {
    onRequestCats();
   },[])


  let filteredCats = cats.filter((r) =>
    r.title.toLowerCase().includes(searchField.toLowerCase())
  );

  if (error) return <div>{error}</div>;
  if (isPending) return <div>Loading</div>;
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