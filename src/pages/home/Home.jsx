import { Layout } from "../../components"
import { Subheader } from "../../components"
import { useNavigate } from "react-router-dom";
export function Home() {
    let navigate = useNavigate();
    return <Layout>
          <Subheader name="Dashboards" />
          <div className='flex flex-wrap justify-center gap-10 mt-20'>
          <div className="w-80 bg-white rounded-xl overflow-hidden shadow-md mb=20">
  <img
    className="h-48 w-full object-cover"
    src={"images/movie.jpg"}
    alt={`Poster for`}
  />
  <div className="p-6">
    <button onClick={()=> navigate(`/movies`)} className="bg-blue-500 text-white px-16 py-2 rounded-md text-sm">
        Movies
      </button>
  </div>
  </div>
  <div className="w-80 bg-white rounded-xl overflow-hidden shadow-md mb=20">
  <img
    className="h-48 w-full object-cover"
    src={"images/pokemon.jpg"}
    alt={`Poster for`}
  />
  <div className="p-6">
    <button onClick={()=> navigate(`/pokemons`)} className="bg-blue-500 text-white px-16 py-2 rounded-md text-sm">
        Pockmons
      </button>
  </div>
</div>
<div className="w-80 bg-white rounded-xl overflow-hidden shadow-md mb=20">
  <img
    className="h-48 w-full object-cover"
    src={"images/social_media.jpg"}
    alt={`Poster for`}
  />
  <div className="p-6">
    <button onClick={()=> navigate(`/socialMediaProfiles`)} className="bg-blue-500 text-white px-16 py-2 rounded-md text-sm">
        Social Media Profile 
      </button>
  </div>
</div>
</div>

    </Layout>
}