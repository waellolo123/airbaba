import Image from "next/image";
import { ExploreItem } from "../types/app";

type ExploreCardProps = ExploreItem;

const SmallCard = ({location, distance, img}: ExploreCardProps) => {
  return (
    <div className="">
      <div className="relative w-16 h-16">
        <Image src={img} alt="exploreData-img" fill/>
      </div>
      <div className="">
        <h2 className="">{location}</h2>
        <h3 className="">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard;