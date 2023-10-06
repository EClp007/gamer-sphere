import React from 'react';

import {Game} from "./AddGame";

const Catalog = (props: { games: Game[]; deleteGame: (titleOfGameThatWillBeDeleted: string) => void; }) => {
    return(
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Developer</th>
                <th scope="col">Release Year</th>
                <th/>
            </tr>
            </thead>
    <tbody>
    {props.games.map((game:Game, index:number) => (
        <tr key={index.toString()}>
            <th>{game.title}</th>
            <th>{game.rating}</th>
            <th>{game.developer}</th>
            <th>{game.releaseYear}</th>
            <th><button className="btn btn-danger" onClick={() => props.deleteGame(game.title)}>Delete</button></th>
        </tr>))}
    </tbody>
    </table>
    )
}

export default Catalog;