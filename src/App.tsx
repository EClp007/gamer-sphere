import AddGame, {Game} from "./components/AddGame";
import Catalog from "./components/Catalog";
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {
    const [games, setGames] = useState<Game[]>([]);

    const addGame = (newGame:Game) => {
        setGames([...games, newGame]);
    };

    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">GamerSphere</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                <Routes>
                    <Route path="/catalog" element={<Catalog games={games}/>} />
                    <Route path="/addGame" element={<AddGame onSubmit={addGame}/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;