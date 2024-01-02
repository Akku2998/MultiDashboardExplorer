import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Card({ cardData, mode }){
  let navigate = useNavigate();

  const MultiViewCard = <div className="w-80 bg-white rounded-xl overflow-hidden shadow-md"> 
  <img
    className="h-48 w-full object-cover"
    src={cardData?.image}
    alt={`Poster for ${cardData.image}`}
  />
  <div className="p-6">
    <h2 className="font-bold text-xl mb-2">{cardData.movie}</h2>
    <p className="text-gray-700 text-base">{cardData.rating}</p>
    <Link to={cardData.imdb_url}>{cardData.imdb_url}</Link>
    <button onClick={()=> navigate(`/movies/${cardData.id}`)} className="bg-blue-500 text-white px-16 py-2 rounded-md text-sm">
        View Details
      </button>
  </div>
</div>

const SingleViewCard = <div>
  <div className="w-full flex flex-col items-center bg-white overflow-hidden shadow-md">
  <img
    className=""
    style={{
      height: "400px",
      width: "800px",
    }}
    src={`/${cardData?.image}`}
    alt={`Poster for ${cardData.image}`}
  />
  <div className="p-6">
    <h2 className="font-bold text-xl mb-2">{cardData.movie}</h2>
    <p className="text-gray-700 text-base">{cardData.rating}</p>
    <Link to={cardData.imdb_url}>{cardData.imdb_url}</Link>
  </div>
</div>
</div>
  return  mode === 'multiple' ? MultiViewCard : SingleViewCard;
}