// import React from 'react'

import AppleWatch from "@/components/Home/AppleWatch";
import Iphone from "@/components/Home/Iphone";
import LandingPart from "@/components/Home/LandingPart";
import NewestCollection from "@/components/Home/NewestCollection";
import { Newsletter } from "@/components/Home/Newsletter";

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
