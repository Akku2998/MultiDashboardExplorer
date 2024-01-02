import { useEffect, useState } from "react"
import { fetchData } from "../services";


export function useAllSocialMediaData(){
  const [data,setData] = useState();

  const fetchRequest = async()=>{
    const data = await fetchData('https://dummyapi.online/api/social-profiles')
    setData(data)  
  }


useEffect(()=>{
  fetchRequest();
},[]);

  return {data,setData}
}