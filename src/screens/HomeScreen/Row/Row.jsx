import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from "../../../axios"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useNavigate } from 'react-router-dom';

const Row = ({ title, fetch, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetch);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetch]);
    console.log(movies)
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handelClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl (urlParams.get('v'));
                })
                .catch((error) => console.log(error));
        }
    }

return (
    <section>
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <div className='movie__title'>
                            <img
                                onClick={() => {
                                    handelClick(movie)
                                }}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                            {!isLargeRow && <p>{movie?.title || movie?.name}</p>}
                        </div>
                    )
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>
    </section>
)
}

export default Row