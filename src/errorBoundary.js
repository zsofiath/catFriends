import React, { Component, Fragment} from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            message: ''
        };
      }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.dir(error);
        console.dir(errorInfo);
        this.setState({
            message: 'Bad cat search'
        });
    }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return (
              <Fragment>
                <h1>{this.state.message}</h1>
                <p>It cannot be searched</p>
                <img alt="Unsearchable cat" src= "https://robohash.org/1?set=set4&100x100"/>
              </Fragment>
          
          );
        }

        return this.props.children; 
      }
}
