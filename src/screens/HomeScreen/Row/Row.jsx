import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from "../../../axios"

const Row = ({ title, fetch, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetch);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetch]);
    console.log(movies)
    return (
        <section>
            <div className='row'>
                <h2>{title}</h2>
                <div className="row__posters">
                    {movies.map(movie => (
                        ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <div className='movie__title'><img
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                key={movie.id}
                                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                                {!isLargeRow && <p>{movie?.title || movie?.name}</p>}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Row