import { useNavigate } from "react-router-dom";
export function PokemonCard({ pokeCardData,mode }){
  let navigate = useNavigate();
  
const MultiViewCard = <div className="max-w-xs mx-auto bg-white rounded-md overflow-hidden shadow-lg my-4">
  <img className="w-full" src= {pokeCardData?.image_url} alt={pokeCardData?.name} />
  <div className="p-4">
    <h3 className="text-lg font-semibold">{pokeCardData?.name}</h3>
    <p>
    <span className="font-bold">Type: </span>
      {pokeCardData?.type}
    </p>
    <p>
    <span className="font-bold">Hitpoints: </span>
      {pokeCardData?.hitpoints}
    </p>
    <div className="flex space-x-2 justify-center mb-2 font-bold">
    <span>Ability:</span>
          {pokeCardData?.abilities?.map((ability, index) => (
            <p key={index} className="bg-blue-700 text-white px-1.5 py-1 rounded-full text-xs">
              {ability}
            </p>
          ))}
        </div>
        <div className="flex space-x-2 justify-center mb-2 font-bold ">
          <span>Evolutions:</span>
          {pokeCardData?.evolutions?.map((evolution, index) => (
            <p key={index} className="bg-green-500 text-white  px-1.5 py-1 rounded-full text-xs">
              {evolution}
            </p>
          ))}
        </div>
    <p className="flex space-x-2 justify-center mb-2">
    <span className="font-bold">Location: </span>
     {pokeCardData?.location}</p>
  </div>
  <button onClick={()=> navigate(`/pokemons/${pokeCardData.id}`)} className="bg-blue-500 text-white px-16 py-2 rounded-md text-sm">
        View Details
      </button>
</div>

const SingleViewCard = <div className="w-full flex flex-col items-center bg-white overflow-hidden shadow-md">
  <img className=""
    style={{
      height: "400px",
      width: "400px",
     }} src= {pokeCardData?.image_url} alt={pokeCardData?.name} />
  <div className="p-4">
    <h3 className="text-lg font-semibold">{pokeCardData?.name}</h3>
    <p>
    <span className="font-bold">Type: </span>
      {pokeCardData?.type}
    </p>
    <p>
    <span className="font-bold">Hitpoints: </span>
      {pokeCardData?.hitpoints}
    </p>
    <div className="flex space-x-2 justify-center mb-2 font-bold">
    <span>Ability:</span>
          {pokeCardData?.abilities?.map((ability, index) => (
            <p key={index} className="bg-blue-700 text-white px-1.5 py-1 rounded-full text-xs">
              {ability}
            </p>
          ))}
        </div>
        <div className="flex space-x-2 justify-center mb-2 font-bold ">
          <span>Evolutions:</span>
          {pokeCardData?.evolutions?.map((evolution, index) => (
            <p key={index} className="bg-green-500 text-white  px-1.5 py-1 rounded-full text-xs">
              {evolution}
            </p>
          ))}
        </div>
    <p className="flex space-x-2 justify-center mb-2">
    <span className="font-bold">Location: </span>
     {pokeCardData?.location}</p>
  </div>
</div>

return  mode === 'multiple' ? MultiViewCard : SingleViewCard;
}