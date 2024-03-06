import "@/styles/footer.less";

export default function Footer() {
  return (
    <div className="page-wrapper relative bg-gradient-to-br from-gray-800 to-black">
      <div className="footer px-20 w-full py-10 container flex mx-auto text-custom-gray">
        <div className="feedback mr-24 w-2/5 flex flex-col content-center bg-gray-900 bg-opacity-90">
          <div className="top px-6 py-6">
            <div className="intro mb-5 w-5/6">
              <p className="font-custom mb-4">FEEDBACK</p>
              <div className="text-white opacity-40 font-bold text-3xl">Seeking personalized support? <span className="font-inter text-white font-normal">Request a call from our team</span></div>
            </div>
            <form className="group flex flex-col">
              <input type="text" placeholder="Your Name" className="form px-4 py-2 bg-gray-800 rounded-lg text-white mb-5" />
              <input type="tel" placeholder="Phone Number" className="form px-4 py-2 bg-gray-800 rounded-lg text-white mb-10" />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-2/5 rounded-lg">Send Request</button>
            </form>
          </div>
          <p className="font-inter text-xs font-bold leading-4 text-left px-6 pt-10">Privacy</p>
        </div>
        <div className="main w-3/5 mt-14">
          <div className="top flex">
            <div className="section grid grid-cols-2 w-5/6">
              <div className="sectionInfo">
                <h5 className="font-custom mb-6">Info</h5>
                <ul className='custom-text'>
                  <li className="">Company</li>
                  <li className="">Products</li>
                  <li className="">Engineering</li>
                  <li className="">Services</li>
                  <li>Productions</li>
                </ul>
              </div>
              <div className="sectionAboutUs">
                <h5 className="font-custom mb-6 ">About Us</h5>
                <ul className='custom-text'>
                  <li className="">Gallery</li>
                  <li className="">Technologies</li>
                  <li>Contacts</li>
                </ul>
              </div>
              <div className="sectionContactUs mt-16">
                <h5 className="font-custom mb-6">Contact Us</h5>
                <div className='custom-text'>
                  <p>+91 73569 83827</p>
                  <p>help@exiphones.com</p>
                  <p>Calicut, KL, INDIA</p>
                </div>
              </div>  
            </div>
            <div className="logo flex justify-center w-1/6">
              <FaApple className="w-16 h-16"/>
            </div>
          </div>
          <div className="bottom flex items-center justify-between">
            <div className="flex pt-4 pr-4 pb-4 my-12">
              <a href="#" className="flex justify-center items-center w-11 h-11 mr-2 border border-blue-700 rounded-full text-white text-lg hover:bg-blue-700">
                <FaFacebookF />
              </a>
              <a href="#" className="flex justify-center items-center w-11 h-11 mx-2 border border-blue-700 rounded-full text-white text-lg hover:bg-blue-700">
                <FaInstagram />
              </a>
              <a href="#" className="flex justify-center items-center w-11 h-11 mx-2 border border-blue-700 rounded-full text-white text-lg hover:bg-blue-700">
                <FaYoutube />
              </a>
              <a href="#" className="flex justify-center items-center w-11 h-11 mx-2 border border-blue-700 rounded-full text-white text-lg hover:bg-blue-700">
                <FaTwitter />
              </a>
            </div>
            <p className="mb-0 font-inter text-custom-xs font-bold leading-4 text-right">&copy; 2023 — ex-iphones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
