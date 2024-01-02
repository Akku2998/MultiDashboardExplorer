import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Movie, Movies, Pokemon, Pokemons,SocialMediaProfile,SocialMediaProfiles } from "./pages";


export function Navigation(){
  return(
    <Router>
      <>
        <Routes>
          <Route path="/movies/:id" Component={Movie} />
          <Route path="/pokemons/:id" Component={Pokemon} />
          <Route path="/socialMediaProfiles/:id" Component={SocialMediaProfile} />
          <Route path="/movies" Component={Movies} />
          <Route path="/pokemons" Component={Pokemons} />
          <Route path="/socialMediaProfiles" Component={SocialMediaProfiles} />
          <Route path="/" Component={Home} />
        </Routes>
      </>
    </Router>
  )

}