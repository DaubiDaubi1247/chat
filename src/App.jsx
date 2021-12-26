import React from "react"
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/header-container/headerContainer';
import NavBar from './components/nav-bar/navBar';
import { Route, Routes } from 'react-router-dom';
import FilmDescContainer from "./components/films/film-full-desc/filmDescContainer";
import FilmsContainer from "./components/films/films-container/filmsContainer";
import MainNews from "./components/news/main-news";

<FilmsContainer />


function App() {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <NavBar />
      <main>
        <Routes>
          <Route path="/films" element={<FilmsContainer />} />
          <Route path="films/:idFilm" element={<FilmDescContainer/>}/>
          <Route path="/news" element={<MainNews/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

//http://localhost:3000/films/tt10872600

//http://localhost:3000/films/tt10872600