import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-[#0f1115] text-[#f4f0e6] py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Fresh Lobster Rolls &<br />Seafood in Costa Mesa
          </h1>
          <p className="mt-4 text-lg">
            Now open daily — Order online or visit us today! Takeaway only
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://order.toasttab.com/online/lobster-grill-1750-newport-boulevard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Order Now
              </Button>
            </a>
            <a href="#menu">
              <Button
                variant="outline"
                className="border-[#f4f0e6] text-[#f4f0e6] hover:bg-[#f4f0e6] hover:text-black"
              >
                See Full Menu
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full max-w-md flex-shrink-0">
          <img
            src="lovable-uploads/lobster-roll.png"
            alt="Lobster Roll"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
