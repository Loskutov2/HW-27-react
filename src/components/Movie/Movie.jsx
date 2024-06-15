import { GoArrowLeft } from "react-icons/go";
import { Addictional, GoBackBtn, Info } from "./Movie.styled";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Movie = () => {
    const {id} = useParams()
    const [details, changeDetails] = useState(null)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=92a2cb0c15011032f7e21c835abae121&language=en-US`)
      .then(res => res.json())
      .then(res => changeDetails(res))
      .catch(err => console.error(err));
    if(details){
    return(
        <>
            <GoBackBtn type="button"><Link to='/'><GoArrowLeft/>GO BACK</Link></GoBackBtn>
            <Info>
                <img src={'https://image.tmdb.org/t/p/original'+details.poster_path} alt="movie image" />
                <div>
                    <h2>{details.title}</h2>
                    <p>User Score: {details.vote_average*10}%</p>
                    <ul>
                        <li>
                            <h2>Overview</h2>
                            <p>{details.overview}</p>
                        </li>
                        <li>
                            <h2>Genres</h2>
                            <p>{details.genres.map(genre=>genre.name+' ')}</p>
                        </li>
                    </ul>
                </div>
            </Info>
            <Addictional>
                <h2>Addictional information</h2>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>                
            </Addictional>
            <Outlet/>
        </>
    )}
    else{return <p>Loading...</p>}}