import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export default function About() {
   return (<>
      <Header />
      <div className="bg-gray-100 py-20 px-10 lg:px-20 text-gray-400">
         <div className="text-center">
            <h1 className="text-3xl lg:text-6xl mt-5 lg:my-5 font-bold">About Apple</h1>
            <div className="flex justify-center gap-2 lg:gap-10 mt-5 lg:my-10">
               <p className="font-bold">Feyz Ibrahim</p>
               <p>|</p>
               <p>20 September 2023</p>
            </div>
            <p className="lg:px-40 my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
            <div className="relative flex flex-col items-center">
               <img src="./src/assets/aboutBG-cda6d5eb.png" alt="AboutBG" />
               <img src="/src/assets/logoGrey-81085dfe.png" alt="ex.iphones. Logo" className="w-3/12 xl:w-2/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
         </div>
         <div className="lg:px-20 lg:flex"><div>
            <h1 className="about-h1">Who ex.iphones. started</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            <h1 className="about-h1">Things we take for granted</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            <h1 className="about-h1">Future of ex.iphones.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            <h1 className="about-h1">Something nobody knows about us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
            <div className="bg-gradient-to-l from-gray-200 py-12 my-10">
               <h1 className="text-4xl italic font-semibold">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</h1>
            </div>
            <h1 className="about-h1">Where do we stand now</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p></div>
            <div className="lg:py-20 lg:mx-20 py-5 flex lg:block">
               <p className="mb-5">Share</p>
               <div className="about-social">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg></div>
               <div className="about-social">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg></div>
               <div className="about-social">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  </svg>
               </div>
               <div className="about-social">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  </svg>
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </>
   )
}