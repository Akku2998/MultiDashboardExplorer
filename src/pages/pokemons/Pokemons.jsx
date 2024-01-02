import {Layout, Subheader } from "../../components";
import { PokemonCard } from "../../components/Card/PokemonCard";
import { useAllPokemonsData } from "../../hooks";
export function Pokemons(){
  const { data } = useAllPokemonsData();
  return(
    <Layout >
      <Subheader name="All Favourites Pokemons" />
      {/* {JSON.stringify(data)} */}
      <div className='flex flex-wrap justify-center gap-10 mt-20'>
      {data?.map((abc)=>
        <PokemonCard pokeCardData={abc} mode='multiple'/>
      )}
      </div>
    </Layout>
  )
}