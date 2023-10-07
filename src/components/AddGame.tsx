import {ChangeEvent, useState} from "react";


export interface Game {
    title: string
    rating: number
    developer: string
    releaseYear: number
    cover: string
}

interface Alert {
    active: boolean
    message: string
    color: string
}

function AddGame(props: { games: { title: string; }[]; onSubmit: (game: Game) => void; }) {
    const [game, setGame] = useState<Game>({title: "", rating: 0, developer: "", releaseYear: 1970, cover: ""});
    const [showAlert, setAlert] = useState<Alert>({active: false, message: "", color: ""});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAlert({active: false, message: "", color: ""})
        const {name, value} = event.target;
        setGame(() => ({...game, [name]: value}));
    }

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        const isDuplicateTitle = props.games.some((existingGame: {
            title: string;
        }) => existingGame.title === game.title);
        if (isDuplicateTitle) {
            setAlert({active: true, message: "A game with this title already exists.", color: "danger"})
        } else {
            setAlert({active: true, message: "Game added successfully.", color: "success"})
            props.onSubmit(game);
            setGame({title: "", rating: 0, developer: "", releaseYear: 1970, cover: ""});
        }
        event.preventDefault();
    }


    return (
        <>
            {showAlert.active && <div className={"alert alert-" + showAlert.color} role="alert">
                {showAlert.message}
            </div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="InputGameTitle">Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Enter game title"
                            value={game.title}
                            onChange={handleChange}
                        />
                    </div>
                    <label htmlFor="InputGameRating">Rating</label>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-11">
                                <input
                                    className="form-range"
                                    type="range"
                                    name="rating"
                                    placeholder="Enter game rating"
                                    value={game.rating}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">{game.rating}</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputGameDeveloper">Developer</label>
                        <input
                            className="form-control"
                            type="text"
                            name="developer"
                            placeholder="Enter game developer"
                            value={game.developer}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputGameReleaseYear">Release Year</label>
                        <input
                            className="form-control"
                            type="number"
                            name="releaseYear"
                            placeholder="Enter game release year"
                            min="1970"
                            max="2023"
                            value={game.releaseYear}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="InputGameCover" className="form-label">Cover</label>
                        <input className="form-control"
                               type="file"
                               name="cover"
                               value={game.cover}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddGame;