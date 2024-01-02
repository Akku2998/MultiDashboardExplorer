import { SocialMediaCard } from "../../components/Card";
import { Layout } from "../../components";
import { useSocialMediaData } from "../../hooks";
import { useParams } from "react-router-dom";
export function SocialMediaProfile(){
  const params = useParams();
  const { data } = useSocialMediaData(params);
  return(
    <Layout hasBackButton = {true}>
      <div className=" mt-20">
      <div className="flex justify-center items-center">
        <SocialMediaCard socialCardData={ data || {}} mode='single' />
      </div>
      </div>
    </Layout>
  )
}