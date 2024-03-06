import React from 'react'

export default function SortBy({sortby}: {sortby: any}) {
  return (
    <div className='sortby'>
      <label htmlFor="sortby">Sort by</label>
      <select name="sortby" id="sortby">
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  )
}
