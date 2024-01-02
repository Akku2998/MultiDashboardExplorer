import { Layout,Subheader } from "../../components"
import { SocialMediaCard } from "../../components/Card";
import { useAllSocialMediaData } from "../../hooks"
export function SocialMediaProfiles(){
  const { data } = useAllSocialMediaData();
  return(
    <Layout>
      <Subheader name="All Socia Media Profiles"/>
      {/* {JSON.stringify(data)} */}
      <div className='flex flex-wrap justify-center gap-10 mt-20'>
      {data?.map((abc)=>
        <SocialMediaCard socialCardData={abc} mode='multiple' />
      )}
      </div>
    </Layout>
  )
}