import React from 'react';

import {Game} from "./AddGame";
import {Link} from "react-router-dom";

type SortByState = "Recently added" | "Rating" | "Release year";

const Catalog = (props: { games: Game[]; deleteGame: (titleOfGameThatWillBeDeleted: string) => void; }) => {
    const [sortBy, setSortBy] = React.useState<SortByState>("Recently added");

    const sortGames = () => {
        switch (sortBy) {
            case "Recently added":
                return props.games;
            case "Rating":
                return props.games.sort((a, b) => b.rating - a.rating);
            case "Release year":
                return props.games.sort((a, b) => b.releaseYear - a.releaseYear);
        }
    }

    return(
        <>
            <select className="form-select form-select-sm" aria-label="select"
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as SortByState)}>

                <option value="Recently added">Recently added</option>
                <option value="Rating">Rating</option>
                <option value="Release year">Release year</option>
            </select>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Rating</th>
                <th scope="col">Developer</th>
                <th scope="col">Release Year</th>
                <th/>
                <th/>
            </tr>
            </thead>
    <tbody>
    {(sortGames().map((game:Game, index:number) => (
        <tr key={index.toString()}>
            <th>{game.title}</th>
            <th>{game.rating}</th>
            <th>{game.developer}</th>
            <th>{game.releaseYear}</th>
            <th>
                <Link to={`/game/${game.title}`} state={{ game }}>
                    <button className="btn btn-primary">
                        i
                    </button>
                </Link>
            </th>
            <th><button className="btn btn-danger" onClick={() => props.deleteGame(game.title)}>Delete</button></th>
        </tr>)))}
    </tbody>
    </table>
        </>
    )
}

export default Catalog;