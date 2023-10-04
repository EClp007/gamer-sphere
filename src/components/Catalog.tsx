import React from 'react';

import {Game} from "./AddGame";

const Catalog = ({games}:any) => {
    return(
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Developer</th>
                <th scope="col">Release Year</th>
            </tr>
            </thead>
    <tbody>
    {games.map((game:Game) => (
        <tr>
            <th>{game.title}</th>
            <th>{game.rating}</th>
            <th>{game.developer}</th>
            <th>{game.releaseYear}</th>
        </tr>))}
    </tbody>
    </table>
    )
}

export default Catalog;