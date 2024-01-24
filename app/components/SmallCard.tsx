import Image from "next/image";
import { ExploreItem } from "../types/app";

type ExploreCardProps = ExploreItem;

const SmallCard = ({location, distance, img}: ExploreCardProps) => {
  return (
    <div className="flex items-center p-2 m-2 mt-5 rounded-lg text-slate-500 space-x-4 cursor-pointer shadow-md hover:shadow-lg transition">
      <div className="relative w-16 h-16">
        <Image src={img} alt="exploreData-img" fill className="rounded-lg"/>
      </div>
      <div className="">
        <h2 className="">{location}</h2>
        <h3 className="">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard;