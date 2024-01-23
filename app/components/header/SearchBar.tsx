import {SearchIcon} from "@heroicons/react/solid";

const SearchBar = () => {
  return (
    <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
      <input 
      type="text" 
      placeholder="Start Searching"
      className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      ></input>
      <SearchIcon  className="hidden md:inline-flex h-8  bg-blue-900 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
    </div>
  )
}

export default SearchBar;