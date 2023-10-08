import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Single from './routes/Single';
import Nav from './Nav';

function App() {

  return (
    <div className="App bg-dark text-light">
        <Nav />
        {/* <h1 className="text-center">Anime List</h1> */}
        <div className="container">
            <Routes>
                <Route path="/" element={<Home url="https://api.consumet.org/anime/gogoanime/recent-episodes" title="Recent Releases" key="home" />} />
                <Route path="/:page" element={<Home url="https://api.consumet.org/anime/gogoanime/recent-episodes?page=" title="Recent Releases" />} />
                <Route path="/top-airing" element={<Home url="https://api.consumet.org/anime/gogoanime/top-airing" title="Top Airing" key="top-airing" />} />
                <Route path="/top-airing/:page" element={<Home url="https://api.consumet.org/anime/gogoanime/top-airing?page=" title="Top Airing" />} />
                {/* <Route path="/search/:search" element={<Home url="https://api.consumet.org/anime/gogoanime/" title="Search" />} /> */}
                <Route path="/show/:id" element={<Single />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
