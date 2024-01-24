import Image from "next/image";


const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image src="/images/job.jpg" fill alt="bannerimg" className="object-cover object-left"/>
      <div className="absolute w-full h-full bg-black/50"></div>
      <div className="absolute top-1/2 w-full text-center">
       <p className="text-6xl leading-15 text-white font-extrabold">Find your dream job</p> 
       <button className="mt-5 text-white bg-blue-900 px-10 py-4 shadow-md rounded-full font-bold">Looking for immigration?</button>
      </div>
    </div>
  )
}

export default Banner;