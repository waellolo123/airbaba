import Image from "next/image";
import { LiveItem } from "../types/app"

type LiveCardProps = LiveItem;

const LiveCard = ({title, img}: LiveCardProps) => {
  return (
    <div className="p-4 shadow-md rounded-lg hover:shadow-lg transition">
      <div className="relative h-80 w-80">
        <Image src={img} alt="" fill className="rounded-lg"/>
      </div>
      <h3 className="text-center mt-3">{title}</h3>
    </div>
  )
}

export default LiveCard;