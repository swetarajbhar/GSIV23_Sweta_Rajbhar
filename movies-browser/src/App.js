import ReactDOM from "react-dom/client";
import MovieCard from './components/MovieCard/MovieCard';
import TopNavBar from './components/TopNavBar/TopNavBar';
import MovieList from './pages/MovieList/MovieList';
import NoPage from './pages/NoPage';
import MovieDetails from '../src/pages/MovieDetails/MovieDetails';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DEFAULT,LIST,DETAILS,OTHERS
} from '../src/globals/utils/routes';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route exact path={`${DEFAULT}`} element={< MovieList />}></Route>
        <Route exact path={`${LIST}`} element={< MovieList />}></Route>
        <Route exact path={`${DETAILS}/:movieId`} element={< MovieDetails />}></Route>
        <Route exact path={`${OTHERS}`} element={< NoPage />}></Route>
      </Routes>
    </BrowserRouter>

    {/* <MovieCard></MovieCard> */}
    {/* <TopNavBar></TopNavBar> */}
    {/* <Details/> */}
    </div>
  );
}

export default App;
