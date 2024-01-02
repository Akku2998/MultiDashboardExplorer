export function Footer(){
  return(
    <>
    <footer className="bg-gray-800 text-white p-8 mt-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <p className="mr-4">&copy; 2023 Movie App. All rights reserved.</p>
          <div className="flex">
            <a href="#" className="text-white hover:underline mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:underline">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Subscription Form */}
        <form className="mt-8">
          <label className="block mb-2 text-sm text-white">Subscribe to our newsletter</label>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="py-2 px-4 border rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </footer>
    </>
  )
}