import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import MovieCard from './components/MovieCard/MovieCard';
import List from './pages/list/List';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     {/* <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< List />}></Route>
        <Route exact path='/about' element={< Blogs />}></Route>
        <Route exact path='/contact' element={< NoPage />}></Route>
      </Routes>
    </BrowserRouter> */}

    <MovieCard></MovieCard>
    
    </div>
  );
}

export default App;
