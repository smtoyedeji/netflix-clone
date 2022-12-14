// import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Row from './components/Row';
import requests from './requests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Jumbotron />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
