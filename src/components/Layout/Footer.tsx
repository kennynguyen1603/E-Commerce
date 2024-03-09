import "@/styles/footer.less";

export default function Footer() {
  return (
    <div className="bg-color-rev lg:h-screen text-white lg:flex pt-20 lg:pt-0" style={{ background: 'linear-gradient(-15deg, #383638 2.06%, #0b0b0b 33.08%)' }}>
      <div className="bg-zinc-900 mx-10 lg:mx-20 lg:my-16 lg:w-1/3 flex flex-col px-5 py-10 lg:p-10 rounded-3xl">
        <p className="navbar-p">Feedback</p>
        <h1 className="text-xl lg:text-3xl font-bold mb-5"><span className="text-gray-500">Looking for tailored assistance? </span>Simply ask for a call from our team</h1>
        <label htmlFor="email" className="text-gray-500 mb-2">Email</label><div className="flex items-center gap-3 border border-gray-400 p-2 rounded-lg mb-2">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <input type="email" name="email" placeholder="example@email.com" className="bg-transparent outline-none" /></div>
        <label htmlFor="username" className="text-gray-500 mb-2">Username</label>
        <div className="flex items-center gap-3 border border-gray-400 p-2 rounded-lg mb-2">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <input type="text" name="Username" placeholder="Enter your name" className="bg-transparent outline-none" /></div>
        <div className="mt-2">
          <button className="btn-blue ">Send Request</button>
        </div>
        <p className="mt-8 text-sm text-gray-500">Privacy</p>
      </div>
      <div className="lg:w-2/3 p-10 lg:my-20">
        <div className="lg:flex  mb-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:w-3/4 mb-5">
            <ul>
              <li className="navbar-p">Info</li>
              <li className="navbar-li">Company</li>
              <li className="navbar-li">Products</li>
              <li className="navbar-li">Engineering</li>
              <li className="navbar-li">Services</li>
              <li className="navbar-li">Productions</li>
            </ul>
            <ul>
              <li className="navbar-p mt-4 lg:mt-0">About Us</li>
              <li className="navbar-li">Gallery</li>
              <li className="navbar-li">Technologies</li>
              <li className="navbar-li">Contacts</li>
            </ul>
            <ul>
              <li className="navbar-p mt-4">Contact Us</li>
              <li className="navbar-li">+91 7356983827</li>
              <li className="navbar-li">hello@apple.com</li>
              <li className="navbar-li">Calicut, KL, INDIA</li>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <img src="./src/assets/logoGrey-81085dfe.png" alt="ex.iphones." className="w-1/3 lg:mx-auto" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2"><p className="navbar-span">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z">
              </path>
            </svg>
          </p>
            <p className="navbar-span">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z">
                </path>
              </svg>
            </p>
            <p className="navbar-span">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z">
                </path>
              </svg>
            </p>
            <p className="navbar-span">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z">
                </path>
              </svg>
            </p>
          </div>
          <p className="text-xs font-bold text-gray-500 lg:mr-14">Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </div>)
}
