import { ExploreData } from "../types/app";
import { getExplore } from "../utils/api";
import SmallCard from "./SmallCard";


const Explore = async () => {
  const exploreData: ExploreData = await getExplore();
  
  
  return (
    <section className="container pt-6">
     <h2 className="text-4xl font-semibold pb-5 text-slate-500">Latest Jobs Posted</h2>
     {exploreData.map((item)=>(
       <SmallCard  key={item.img} img={item.img} distance={item.distance} location={item.location}/>
     ))}
    </section>
  )
}

export default Explore;