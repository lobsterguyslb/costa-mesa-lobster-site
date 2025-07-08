import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="bg-[#0f1115] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/costa-mesa-lobster-site/lovable-uploads/logo.png"
            alt="Lobster Grill Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="flex gap-8 text-lg font-semibold">
          <a href="#menu" className="hover:underline">
            Menu
          </a>
          <a href="#visit" className="hover:underline">
            Visit Us
          </a>
          <a href="#contact" className="hover:underline">
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
    </header>
  )
}