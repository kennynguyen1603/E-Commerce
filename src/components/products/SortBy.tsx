export default function SortBy({onSortBy}: {onSortBy: any}) {

  const optionSortby = [
    {name: 'popular', value: 'popular'},
    {name: 'Price', value: 'price'},
    {name: 'Rating', value: 'rating'},
    {name: 'Discount', value: 'discount'}
  ]

  const handleSortBy = (e: any) => {
    onSortBy((prev: any) => ({...prev, sortBy: e.target.value}));
  }
  return (
    <div className='sortby border-gray-950 ml-4 flex items-center space-x-2'>
      <label htmlFor="sortby" className="mr-2">Sort by:</label>
      <select name="sortby" id="sortby" onChange={handleSortBy} className="text-center">
        {optionSortby.map((option, index) => (
          <option key={index} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}
