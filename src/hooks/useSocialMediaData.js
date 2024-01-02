import { useEffect, useState } from "react";
import { fetchData } from "../services";

export function useSocialMediaData(p){
  const [data,setData] = useState();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchRequest = async() => {
    console.log("request", p.id)
    const data = await fetchData(`https://dummyapi.online/api/social-profiles/${p.id}`)
    setData(data);
  }

  useEffect(()=>{
    fetchRequest();
  },[]);

  return { data, setData}
}
