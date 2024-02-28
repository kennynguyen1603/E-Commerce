// import React from 'react'

import AppleWatch from "@/components/home/AppleWatch";
import Iphone from "@/components/home/Iphone";
import LandingPart from "@/components/home/LandingPart";
import NewestCollection from "@/components/home/NewestCollection";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div>
      <LandingPart />
      <NewestCollection />
      <Iphone />
      <AppleWatch />
      <Newsletter />
    </div>
  )
}
