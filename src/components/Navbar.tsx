import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
  <header className="bg-[#0f1115] text-white">
  <div className="container mx-auto flex items-center justify-between px-4 py-4">
    {/* Left side: Logo */}
    <a href="/">
      <img
        src="/costa-mesa-lobster-site/lovable-uploads/logo.png"
        alt="Lobster Grill Logo"
        className="h-16 w-auto"
      />
    </a>

        {/* Right side: Nav + Button */}
    <div className="flex items-center gap-8">
      <nav className="flex gap-8 text-lg font-semibold">
          <a href="#menu" className="text-[#fefae0] hover:text-red-600 transition">
            Menu
          </a>
          <a href="#location" className="text-[#fefae0] hover:text-red-600 transition">
            Visit Us
          </a>
          <a href="#contact" className="text-[#fefae0] hover:text-red-600 transition">
            Contact
          </a>
        </nav>

        {/* Order Now */}
        <a
          href="https://order.toasttab.com/online/lobster-grill-1750-newport-boulevard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Order Now
          </Button>
        </a>
      </div>
      </div>
    </header>
  )
}