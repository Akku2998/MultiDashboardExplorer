import { useEffect,useState } from "react";
import { fetchData } from "../services";
export function useAllPokemonsData(){
  const[data,setData]=useState();
  console.log("ddd",data)
  const fetchRequest = async()=>{
    const data=await fetchData("https://dummyapi.online/api/pokemon");
    setData(data);
  }
  useEffect(()=>{
    fetchRequest();
  },[]);

  return { data, setData }
}