import { ExploreData } from "../types/app";
import { getExplore } from "../utils/api";
import MainHeading from "./MainHeading";
import SmallCard from "./SmallCard";


const Explore = async () => {
  const exploreData: ExploreData = await getExplore();
  
  
  return (
    <section className="container pt-6">
     <MainHeading title="Latest Jobs Posted" />
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     {exploreData.map((item)=>(
       <SmallCard  key={item.img} img={item.img} distance={item.distance} location={item.location}/>
       ))}
       </div>
    </section>
  )
}

export default Explore;