import {ChangeEvent, useState} from "react";

export interface Game {
    title?: string
    rating?: number
    developer?: string
    releaseYear?: number
}

function AddGame({onSubmit}:any) {
    const [game, setGame] = useState<Game>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setGame(prevInputs => ({...game, [name]: value}));
    }

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(game)
        setGame({});
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="text-center">
                <div className="mb-3">
                    <label htmlFor="InputGameTitle">Title
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Enter game title"
                            value={game.title}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputGameRating">Rating
                        <input
                            className="form-control"
                            type="number"
                            name="rating"
                            placeholder="Enter game rating"
                            value={game.rating}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputGameDeveloper">Developer
                        <input
                            className="form-control"
                            type="text"
                            name="developer"
                            placeholder="Enter game developer"
                            value={game.developer}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputGameReleaseYear">Release Year
                        <input
                            className="form-control"
                            type="number"
                            name="releaseYear"
                            placeholder="Enter game release year"
                            value={game.releaseYear}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>

    )
}

export default AddGame;