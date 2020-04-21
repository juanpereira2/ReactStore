import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Details from "./Components/Details";
import ProductList from "./Components/ProductList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <ProductList></ProductList>
        <Details></Details>
        <Cart></Cart>
        <Default></Default>
      </React.Fragment>
    );
  }
}

export default App;
