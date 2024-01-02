import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export function Navbar(props){
  let navigate = useNavigate();

  return(
  <div>
    <nav  className="text-5xl p-4 text-center font-bold bg-gradient-to-r from-red-900 via-pink-900 to-red-900">
      <div className="container mx-auto flex items-center justify-between">
        {props.hasBackButton && <Button onClick={()=> navigate(-1)} className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-sm">Back</Button>}
        {/* Logo */}
        <div className="flex items-center">
          {props.image && <img
             src={props.image}
            alt="Movie Logo"
            className="h-8 mr-2"
          />}
          {props.name && <span className="text-white font-semibold text-xl">{props.name}</span>}
        </div>
        {props.placeholder && <div className="flex items-left">
          <input
            type="text"
            //placeholder="Search movies..."
            placeholder={props.placeholder}
            className="px-8 py-1 mr-1 border rounded-md text-sm"
          />
          <button className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-sm">
            Search
          </button>
        </div>}

        <div className="flex items-center">
        {props.signButton && <button className="bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            Sign In
          </button>}
        </div>
      </div>
    </nav>
    </div>

  )
}
