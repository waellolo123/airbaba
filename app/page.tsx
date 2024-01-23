import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Explore />
    </main>
  );
}
