import React, { Component } from "react";
import CardList from "../components/cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../errorBoundary";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.cypress.io/todos/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          cats: json,
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  };

  render() {
    let filteredCats = this.state.cats.filter((r) =>
      r.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    )
    if (this.state.cats.length == undefined) return <div>Loading</div>;
    return (
      <div className="tc">
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundary>
          <Scroll>
            <CardList cats={filteredCats} />
          </Scroll>
        </ErrorBoundary>
      </div>
    );
  }
}
