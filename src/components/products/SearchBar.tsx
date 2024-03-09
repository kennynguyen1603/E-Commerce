import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar({onSearch}: {onSearch: any}) {

  return (
    <div className='searchbar flex relative w-8/12'>
      <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} className="w-full rounded-md h-10 text-lg p-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-stone-200"/>
      <IoSearchOutline className='searchbar-icon absolute right-2 top-3 text-lg cursor-pointer'/>
    </div>
  )
}
