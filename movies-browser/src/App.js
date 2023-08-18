import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import MovieCard from './components/MovieCard/MovieCard';
import TopNavBar from './components/TopNavBar/TopNavBar';
import List from './pages/list/List';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './pages/details/Details';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< List />}></Route>
        <Route exact path='/list' element={< List />}></Route>
        <Route exact path='/details' element={< Details />}></Route>
        <Route exact path='*' element={< NoPage />}></Route>
      </Routes>
    </BrowserRouter>

    {/* <MovieCard></MovieCard> */}
    {/* <TopNavBar></TopNavBar> */}
    {/* <Details/> */}
    </div>
  );
}

export default App;
