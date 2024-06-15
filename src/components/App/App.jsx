import HeaderPage from "Pages/HeaderPage";
import MoviePage from "Pages/MoviePage";
import NotFoundPage from "Pages/NotFound";
import TrendingPage from "Pages/TrendingPage";
import { Cast } from "components/Addi/Cast";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderPage/>}>
          <Route index element={<TrendingPage/>}/>
          <Route path='movie' element={<></>}/>
          <Route path='movie/:id' element={<MoviePage/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<p>mmmeroL</p>}/>
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
};
