import Image from "next/image";
import Link from "next/link";

type GreatestSectionProps = {
  img: string;
  title: string;
  description: string;
  linkText: string;
}

const GreatestSection = ({img, title, description, linkText}: GreatestSectionProps) => {
  return (
    <div className="container relative">
    <div className="relative h-96 min-w-[300px]">
     <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl -z-10" alt=""/>
    </div>
    <div className="absolute top-32 left-12">
     <h3 className="text-4xl mb-3 w-64">{title}</h3>
     <p>{description}</p>
     <Link href="/" className="text-sm px-4 py-2 rounded-lg mt-5 text-white bg-blue-900">{linkText}</Link>
    </div>
    </div>
  )
}

export default GreatestSection;