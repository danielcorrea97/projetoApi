import React from "react";
import "./Magic.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Inicio from "./Inicio/Inicio"
import Cards from "./Cards/Cards";
import Sets from "./Sets/Sets";
import Types from "./Types/Types";
import Formats from "./Formats/Formats";

export default class Magic extends React.Component {
  render() {
    return (
      <div className="Magic">
        <BrowserRouter>
          <Menu />
          <Route path="/" exact component={Inicio}/>
          <Route path="/cards" component={Cards} />
          <Route path="/sets" component={Sets} />
          <Route path="/types" component={Types} />
          <Route path="/formats" component={Formats} />
        </BrowserRouter>
      </div>
    )
  }
}