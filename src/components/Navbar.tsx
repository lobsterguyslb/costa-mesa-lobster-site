import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <header className="bg-[#0f1115] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/costa-mesa-lobster-site/lovable-uploads/logo.png" alt="Lobster Grill Logo" className="h-20 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/menu" className="hover:underline">Menu</Link>
          <Link to="/location" className="hover:underline">Location</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
        <a
          href="https://order.toasttab.com/online/lobster-grill-1750-newport-boulevard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-red-600 hover:bg-red-700 text-white">Order Now</Button>
        </a>
      </div>
    </header>
  )
}
