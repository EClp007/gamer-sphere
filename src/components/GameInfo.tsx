import React from 'react';
import { useLocation } from 'react-router-dom';

const GameInfo = () => {
    const location = useLocation();
    const { game } = location.state || {};

    if (!game) {
        return <p>No game information found</p>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>{game.title}</h2>
                    <p>Rating: {game.rating}</p>
                    <p>Developer: {game.developer}</p>
                    <p>Release Year: {game.releaseYear}</p>
                </div>
                <div className="col">
                    <img src={game.cover} className="img-thumbnail float-end"
                         width="160" height="160"
                         alt={game.title + " cover not found"}/>
                </div>
            </div>
        </div>
    );
};

export default GameInfo;