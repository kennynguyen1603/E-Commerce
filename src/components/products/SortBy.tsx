import React from 'react'

export default function SortBy() {
  return (
    <div className='sortby'>
      <select name="sortby" id="sortby">
        <option value="featured">Featured</option>
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  )
}
