import AddGame, {Game} from "./components/AddGame";
import Catalog from "./components/Catalog";
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./components/Home";
import './App.css'
import DataInitializer from "./components/DataInitializer";
import GameInfo from "./components/GameInfo";

function App() {
    const [games, setGames] = useState<Game[]>(DataInitializer);

    const addGame = (newGame: Game) => {
        setGames([...games, newGame]);
    };

    const deleteGame = (titleOfGameThatWillBeDeleted: string) => {
        setGames(prevState => prevState.filter(function (game) {
            return game.title !== titleOfGameThatWillBeDeleted;
        }))
    };

    return (
        <Router>

            <div className="app">

                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">GamerSphere</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/addGame">Add Game</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="header">
                    <h1 className="h1">GamerSphere</h1>
                    <p className="p">Your Ultimate Gaming Destination</p>
                </header>

                <section className="section">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/catalog" element={<Catalog games={games} deleteGame={deleteGame}/>}/>
                        <Route path="/addGame" element={<AddGame games={games} onSubmit={addGame}/>}/>
                        <Route path="/game/:title" element={<GameInfo />} />
                    </Routes>
                </section>

                <footer className="footer">
                    <p>&copy; 2023 GamerSphere. All rights reserved.</p>
                </footer>

            </div>

        </Router>
    );
}

export default App;