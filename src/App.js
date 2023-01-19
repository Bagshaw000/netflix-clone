import React from "react";
import Row from "./Row";
import './App.css';
import requests from './request'
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
