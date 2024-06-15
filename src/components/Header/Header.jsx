import { Link } from "react-router-dom"
import { HeadList, HeadSection } from "./Header.styled"

export const Header = () => {
    return(
        <HeadSection>
            <HeadList>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='movies'>MOVIES</Link>
                </li>
            </HeadList>
        </HeadSection>
    )
}
