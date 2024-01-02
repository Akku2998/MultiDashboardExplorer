import { useEffect, useState } from "react";
import { fetchData } from "../services";
export function useAllMoviesData() {
    const [data, setData] = useState();
    const fetchRequest = async () => {
        const data = await fetchData('https://dummyapi.online/api/movies')
        setData(data)
    }
    useEffect(() => {
        fetchRequest();
    }, []);

    return { data, setData }

}