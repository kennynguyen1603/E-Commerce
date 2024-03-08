import { IoSearchOutline } from "react-icons/io5";
export default function SearchBar({onSearch}: {onSearch: any}) {
  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onSearch((prev : any) => ({...prev, search: e.target.value}));
  }
  return (
    <div className='searchbar flex relative w-8/12 ml-2 mb-4'>
      <input type="text" placeholder="Search..." onChange={handleOnSearch} className="w-full rounded-md h-10 text-lg p-2 focus:border-none focus:outline-none focus:ring-2 focus:ring-stone-200"/>
      <IoSearchOutline className='searchbar-icon absolute right-2 top-3 text-lg cursor-pointer'/>
    </div>
  )
}
