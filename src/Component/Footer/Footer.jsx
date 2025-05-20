export default function Footer() {
    return (
      <footer className="bg-[#18182B] text-white pt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
            <h2 className="text-2xl font-semibold text-center lg:text-left">
              Want Us To Email You About Special Offers And Updates?
            </h2>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 w-full lg:w-[350px] rounded-l-md text-black"
              />
              <button className="bg-sky-500 text-white px-6 py-3 rounded-r-md hover:bg-sky-600">
                Subscribe Now
              </button>
            </div>
          </div>
  
          <hr className="border-gray-600 mb-10" />
  
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-semibold mb-3">Site Map</h3>
              <div className="h-1 w-10 bg-sky-600 mb-3"></div>
              <ul className="space-y-2">
                <li>Home</li>
                <li>DashBoard</li>
                <li>Login</li>
                <li>Register</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
              <div className="h-1 w-10 bg-sky-600 mb-3"></div>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Social Contact</h3>
              <div className="h-1 w-10 bg-sky-600 mb-3"></div>
              <ul className="space-y-2">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Support</h3>
              <div className="h-1 w-10 bg-sky-600 mb-3"></div>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Contact Support</li>
              </ul>
            </div>
          </div>
  
          <div className="relative">
            <div className="absolute bottom-[-80px] right-0 flex gap-2">
              <div className="w-24 h-24 bg-[#00548E] rotate-45"></div>
              <div className="w-24 h-24 bg-[#2E9CFA] rotate-45"></div>
            </div>
          </div>
  
          <div className="text-center text-sm text-gray-400 pt-24 pb-6">
            Vereda Digital Learning © 2023
          </div>
        </div>
      </footer>
    );
  }
  