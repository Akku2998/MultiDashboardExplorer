import {Card, Layout, Subheader } from "../../components"
import { useAllMoviesData } from "../../hooks"
export function Movies() {

    const { data } = useAllMoviesData()
    
    return <Layout  name="Movie App"
    image="https://png.pngtree.com/element_our/20190603/ourmid/pngtree-movie-board-icon-image_1455346.jpg"
    placeholder="Search movies..."
    signButton="Sign In">
      <Subheader name="All Favourite Movies"/>
        <div className='flex flex-wrap justify-center gap-10 mt-20'>
    {data?.map((cardData) => <Card cardData={cardData} mode='multiple' />)}
    </div>
    </Layout>
}