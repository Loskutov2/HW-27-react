import { useState } from "react"
import { CastList } from "./Addi.styled"
import { useParams } from "react-router-dom"

export const Cast = () => {
    const [credits, changeCredits] = useState(null)
    const {id} = useParams()
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=92a2cb0c15011032f7e21c835abae121&language=en-US`)
    .then(res=>res.json())
    .then(res=>changeCredits(res.cast))
    .catch(err=>console.log(err))
    return(
        credits&&<CastList>
            {credits.map(person=>{
                return <li key={person.id}>
                    <p>{person.name}</p>
                    <p>Character: {person.character}</p>
                    <img src={'https://image.tmdb.org/t/p/original'+person.profile_path} alt={person.name+"'s profie"} width='150px'/>
                </li>
            })}
        </CastList>
    )}