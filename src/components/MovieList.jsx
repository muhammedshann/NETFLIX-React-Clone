import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieList.css';
import N from '../assets/netflix_N.png';

function MovieList() {
    const [movies, setmovies] = useState([]);
    const api_key = 'e302de9c9cfc5e028a7de4bd2ed35330';
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
            .then(response => response.json())
            .then(data => setmovies(data.results))
            .catch(error => console.log('Error fetching movies:', error));
    },[]);

    async function handleClick(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`);
        const data = await response.json();
        const videos = data.results;
        const trailer = videos.find(video => video.type === "Trailer");
        console.log('Trailer:', trailer);
        if (trailer) {
            navigate(`/player/${trailer.key}`);
        } else {
            alert("No trailer available for this movie");
        }
    } catch (error) {
        console.log('Error fetching trailer:', error);
    }
}


    return (
        <div className="sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 px-35">
            <ul className='grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-8'>
                {movies.map(movie => (
                    <li className='relative hover-effect' key={movie.id} onClick={() => handleClick(movie.id)}>
                        <img src={N} alt="N" className="absolute top-1 left-1 w-5 z-10" />
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="{movie.title}" className="card-img-top"/>
                        <p className='text-sm mt-3 text-white'>{movie.release_date}</p>
                    </li>
                ))}
            </ul>
            <button className="mt-10 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 mx-auto block">Show More</button>

        </div>
    )
}
export default MovieList;