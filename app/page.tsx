
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GreatestSection from "./components/GreatestSection";
import Live from "./components/Live";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Explore />
      <Live />
      <GreatestSection img="/images/man.jpg" title="Need Help to find job?" description="We can guide you to find your dream job" linkText="chat with professional"/>
      <Footer />
    </main>
  );
}
