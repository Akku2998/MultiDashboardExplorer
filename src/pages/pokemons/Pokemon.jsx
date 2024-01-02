import { PokemonCard} from "../../components/Card"
import { Layout } from "../../components";
import { usePokemonData } from "../../hooks"
import { useParams } from "react-router-dom"
export function Pokemon(){
  const params = useParams();
  const { data } = usePokemonData(params);
  console.log(data);
  return(
    <Layout hasBackButton={true}>
      <div className="mt-20">
      <PokemonCard pokeCardData={data || {}} mode='single' />
      </div>
    </Layout>
    // /* {JSON.stringify(data)} */}
  
  )}