import { liveData } from "../types/app";
import { getLive } from "../utils/api"
import LiveCard from "./LiveCard";
import MainHeading from "./MainHeading";


const Live = async () => {
  const liveData: liveData = await getLive();
  

  return (
    <section className="mt-12">
      <div className="container">
        <MainHeading title="Newest Immigration Laws" />
        <div className="flex gap-4 items-center justify-center flex-wrap">
       {liveData.map(item=>(
         <LiveCard key={item.img} img={item.img} title={item.title}/>
         ))}
         </div>
      </div>
    </section>
  )
}

export default Live;