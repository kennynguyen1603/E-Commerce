import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function LandingPart() {
  return (
    <div className="LandingPart">
      <div className="content">
        <h1>Discover Most Affordable Apple products</h1>
        <p>Find the best, reliable and affordable apple products here. We focus on the product quality. Here you can find all the products apple ever made. Even the products apple officially stopped selling. So why you are waiting? Just order now!</p>
        <form>
          <input type="text" placeholder='Find the best product' />
          <CiSearch className='search' />
          <button>Search</button>
        </form>
      </div>
      <div className="img-iphone">
        <img src="https://s3-alpha-sig.figma.com/img/fc26/57b6/d0eb878086e0c38adfa66ff641c5f1fe?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtfqHegZ60DY-4350jSwbCHkr-e2TTKbIKVHvP9lo41aNL1baeU2RQzpTfo5zOGBIV5jBduruy5hYCpmDYEnWCYm8yeyYcfAfi2qUN8tZ-jL07RFoLejDkqgy3dvUkF8vwENAJEzUHdNsJkKR6ehIgwaCJOXIV9~0DvTGzC4oJxVvLT1kbCAN5Od9KCAwfTGNM~hHjGP2LFXCch5ITqAcoqk7-J6s6vbTTluByJe5LO4X0gmCOIppzGJuJgf~6RlcAFjkxUfnsn~MXHpKDCTb-1n46kxOMH87OcusDmCDChPN73JFs8fxbzYsfZJAA7hh~e7-y~R3TlRgcW3ysyN-w__" alt="" />
      </div>
    </div>
  )
}
