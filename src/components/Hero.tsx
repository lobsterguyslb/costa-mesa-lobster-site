import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-[#0f1115] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Fresh Lobster Rolls &<br />Seafood in Costa Mesa
          </h1>
          <p className="mt-4 text-lg">
            Now open daily — Order online or visit us today! Takeaway only
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="https://order.toasttab.com/online/lobster-grill-1750-newport-boulevard" target="_blank" rel="noopener noreferrer">
              <Button className="bg-red-600 hover:bg-red-700 text-white">Order Now</Button>
            </a>
            <a href="#menu">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                See Full Menu
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-md">
          <img
  src="/costa-mesa-lobster-site/lovable-uploads/lobster-roll.png"
  alt="Lobster Roll"
  className="rounded-xl shadow-xl"
/>
        </div>
      </div>
    </section>
  )
}