export default function Contact() {
   return (
      <div>
         <div className="lg:flex lg:gap-1 p-2 bg-white rounded-lg shadow-xl">
            <div className="relative lg:w-2/5 bg-black text-white p-10 rounded-lg overflow-clip">
               <h1 className="text-xl lg:text-3xl font-semibold">Contact Information</h1>
               <p className="lg:text-xl lg:mb-20 text-gray-400">Say something to start a live chat!</p>
               <p className="contact-li items-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>+91 73569 83827</p>
               <p className="contact-li items-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>chat@ex.iphones.com</p>
               <p className="contact-li pb-20">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>7th Avenue, <br /> ex.iphones. park, Calicut, KL</p>
               <div className="flex gap-2"><p className="navbar-span">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg></p>
                  <p className="navbar-span">
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     </svg>
                  </p>
                  <p className="navbar-span">
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     </svg>
                  </p>
                  <p className="navbar-span">
                     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     </svg>
                  </p>
               </div>
               <div className="bg-white w-32 h-32 rounded-full opacity-25 absolute bottom-12 right-12">
               </div>
               <div className="bg-white w-52 h-52 rounded-full opacity-25 absolute -bottom-16 -right-16">
               </div>
            </div>
            <form className=" lg:w-3/5 text-gray-500 p-5 lg:p-12">
               <div className="lg:grid lg:grid-cols-2 lg:gap-5 ">
                  <div>
                     <p>
                        <label htmlFor="firstName">First Name</label>
                     </p><input className="contact-input" type="text" name="firstName" id="firstName" placeholder="Enter your First name" />
                  </div><div><p>
                     <label htmlFor="secondName">Second Name</label></p>
                     <input className="contact-input" type="text" name="secondName" id="secondName" placeholder="Enter your Second Name" />
                  </div>
                  <div><p><label htmlFor="email">Email</label></p>
                     <input className="contact-input" type="email" name="email" id="email" placeholder="Enter your Email" />
                  </div>
                  <div>
                     <p>
                        <label htmlFor="phoneNumber">Phone Number</label></p>
                     <input className="contact-input" type="phone" name="phone" id="phone" placeholder="Enter your Phone Number" /
                     ></div></div><p><label htmlFor="subject">Select Subject?</label>
               </p>
               <div className="lg:flex gap-4"><p><input type="radio" name="general" id="general" /> General Inquiry</p>
                  <p>
                     <input type="radio" name="general" id="general" /> General Inquiry</p>
                  <p>
                     <input type="radio" name="general" id="general" /> General Inquiry</p>
                  <p>
                     <input type="radio" name="general" id="general" /> General Inquiry</p></div>
               <p className="mt-8">
                  <label htmlFor="message">Message</label></p>
               <input className="contact-input" type="text" name="message" id="message" placeholder="Enter your Message" />
               <input type="submit" className="btn-blue mt-5 lg:mt-0 text-white font-semibold" value="Send Message" />
            </form>
         </div>
      </div>
   );
}