import { Card, Layout } from "../../components";
import { useMovieData } from "../../hooks"
import { useParams } from "react-router-dom"

export function Movie() {
  const params = useParams();
  const { data } = useMovieData(params)

  return (
    <Layout hasBackButton={true} >
      <div className="mt-20">
      <Card cardData={data || {}} mode='single' />
      </div>
    </Layout>
  )
}