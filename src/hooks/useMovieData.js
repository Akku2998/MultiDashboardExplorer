import { useEffect, useState } from "react";
import { fetchData } from "../services";

export function useMovieData(p){
  const [data,setData] = useState();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchRequest = async() => {
    const data = await fetchData(`https://dummyapi.online/api/movies/${p.id}`)
    setData(data);
  }

  useEffect(()=>{
    fetchRequest();
  },[]);

  return { data, setData}
}