"use client";
import {SearchIcon, UserIcon} from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



const SearchBar = () => {
 const [input, setInput] = useState("");
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());
 const [numOfGuests, setNumOfGuests] = useState(1);

 const selectionRange = {
  startDate,
  endDate,
  key: 'selection',
}

 const handleSelect = (ranges: RangeKeyDict) => {
   setStartDate(ranges.selection.startDate as Date);
   setEndDate(ranges.selection.endDate as Date);
   
 }

  return (
  <>
    <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
      <input 
      type="text" 
      placeholder="Start Searching"
      className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
      onChange={(e)=>setInput(e.target.value)}
      ></input>
      <SearchIcon  className="hidden md:inline-flex h-8  bg-blue-900 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
    </div>
    {input && (<div className=" absolute flex flex-col col-span-3 mx-auto left-[50%] top-[100%] translate-x-[-50%]">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        rangeColors={["#1e3a8a"]}
        minDate={new Date()}
      />
      <div className="flex items-center border-b bg-white p-4">
        <h2 className=" flex-grow font-semibold text-slate-500">Number of Guests</h2>
        <UserIcon className="h-5 text-slate-500"/>
        <input
        className="w-12 pl-2 text-lg outline-none text-blue-900" 
        value={numOfGuests}
        min={1}
        onChange={(e)=>setNumOfGuests(Number(e.target.value))}
        type="number" />
      </div>
      <div className="flex items-center bg-white p-4 gap-4">
        <button type="button" className="flex-grow text-slate-500 border border-slate-500 rounded-full py-2" onClick={()=>setInput("")}>Cancel</button>
        <Link href="/" className="flex-grow bg-blue-900 py-2 rounded-full text-center text-white">Search</Link>
      </div>
    </div>)}
  </>
  )
}

export default SearchBar;