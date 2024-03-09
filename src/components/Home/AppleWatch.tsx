import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { productData, responsive } from '@/data/dataAppleWatch';
import ProductsApplewatch from "../products/ProductsApplewatch";
export default function AppleWatch() {
  const product = productData.map(item => (
    <ProductsApplewatch
      name={item.name}
      url={item.imgUrl}
      price={item.price}
      status={item.status} />
  ))
  return (
    <div className="AppleWatch">
      <div className="banner">
        <img
          src="https://cdn.hoanghamobile.com/i/preview/Uploads/2021/10/08/apple-watch-s7-3.png"
          alt=""
        />
        <h1>Apple Watch</h1>
        <img
          src="https://www.att.com/scmsassets/global/devices/other/apple/apple-watch-ultra-2-49mm/defaultimage/titanium-blue-alpine-loop-medium-hero-zoom.png"
          alt=""
        />
      </div>
      <div className="side">
        <div className="AppleWatch-spec">
          <Carousel responsive={responsive}>{product}</Carousel>
        </div>
      </div>
    </div>
  );
}
