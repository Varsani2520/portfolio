
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link className="flex items-center" href="/">
           
            <img src="/Images/logo.png" style={{height:'100px'}}/>
           
          </Link>
        </div>
        <nav className="flex space-x-4 sm:space-x-6">
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Home
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            About
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Services
          </Link>
          <Link className="hover:text-gray-300 transition-colors" href="#">
            Contact
          </Link>
        </nav>
        <div className="text-sm mt-4 sm:mt-0">© 2024 Acme Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}

