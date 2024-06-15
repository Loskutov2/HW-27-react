import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrendMovie, TrendSection } from "./Trending.styled";

export const Trending = () => {
    const [trending, changeTrending] = useState(null)
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=92a2cb0c15011032f7e21c835abae121&language=en-US')
      .then(res => res.json())
      .then(res => changeTrending(res.results))
      .catch(err => console.error(err));
    return(
        trending&&<TrendSection>
            <ul>
                {trending
                .map((movie=>{
                    return(
                    <TrendMovie key={movie.id}>
                        <Link to={'movie/'+movie.id}>{movie['original_title']}</Link>
                    </TrendMovie>
                )}))
                }
            </ul>
        </TrendSection>
    )
}
