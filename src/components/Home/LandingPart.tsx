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
        <img src="https://s3-alpha-sig.figma.com/img/fc26/57b6/d0eb878086e0c38adfa66ff641c5f1fe?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YNUaFSD0IdktjvGNx6elZtBabvvIOv~e8sNpix-ihMFn7sl-sOH2MW23LBRD91xRrUt1tlU752F3lU0MF9M0Q4c1rzxemjRA2B4Ioz3y3--avq9cbFlGxbFcEi0mFo1IDRVnOpOBp37kcBMC9lzGllbI6L6J9HXm0~nuGeYtlpwxyhoeOPg-SsHrB0Kwv~hXyVXfOy9EpCyjJxd-2zB3q81Y7~CMVso345pzHOEgpmEN3Sk8GuS1tVzmbNLODluJPzp74QJ8P5lzNO2ATO1sVk5pIR~xVBnoljESWxwLpWtQdtJ9h-Zv8Ys6N9DtKyDR-mKoez2bFRxoEnmP8zDgAA__" alt="" />
      </div>
    </div>
  )
}
