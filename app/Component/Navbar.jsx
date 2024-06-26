
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer"

export default function Navbar() {
  return (
    <>

      <header className="flex h-16 items-center justify-between  md:px-52 border-b border-gray-200 dark:border-gray-800 ">
        <Link className="flex items-center" href="#">
          <img src="/Images/logo.png" style={{ height: '100px' }} />
          <span className="sr-only">Ranjani Varsani</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden text-white" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6 " />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="lg:hidden" side="left">

            <div className="grid gap-6 p-6 text-white">
              <Link className="flex items-center gap-2 text-lg font-semibold " href="#">
                <HomeIcon className="h-6 w-6 " />
                Home
              </Link>
              <Link className="flex items-center gap-2 text-lg font-semibold" href="#about">
                <InfoIcon className="h-6 w-6" />
                About
              </Link>
              <Link className="flex items-center gap-2 text-lg font-semibold" href="#projects">
                <ServerIcon className="h-6 w-6" />
                Projects
              </Link>
              <Link className="flex items-center gap-2 text-lg font-semibold" href="#services">
                <ServerIcon className="h-6 w-6" />
                Services
              </Link>
              <Link className="flex items-center gap-2 text-lg font-semibold" href="#contacts">
                <ContactIcon className="h-6 w-6" />
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <nav className="hidden lg:flex items-center gap-10 text-lg font-medium">
          <Link href="#home" className="hover-underline">
            Home
          </Link>
          <Link href="#about" className="hover-underline">
            About
          </Link>
          <Link href="#projects" className="hover-underline">
            Projects
          </Link>
          <Link href="#services" className="hover-underline">
            Services
          </Link>
          <Link href="#contact" className="hover-underline">
            Contact
          </Link>
        </nav>


      </header>

    </>
  )
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}



function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}