import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";


const Header = () => {
  return (
  <header className="sticky top-0 z-50 bg-white shadow-md p-5">
    <div className="container grid grid-cols-3">
      <Link href="/" className="relative flex items-center h-10 my-auto">
        {/* <Image src="/images/paypal.png" fill alt="logo" className="object-contain object-left"/> */}
        <h1 className="text-4xl font-extrabold text-blue-900">Jobify<span className="text-blue-400">.</span></h1>
      </Link>
      <SearchBar />
      <Navbar />
    </div>
  </header>
  )
}

export default Header;