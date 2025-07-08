import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const menu = [
  {
    title: "Our Featured Menu",
    description:
      "What's everyone raving about? Here are some of our customer favorites!",
    items: [
      { name: "Lobster Roll", price: "$24.99" },
      { name: "Calamares", price: "$14.99" },
      { name: "Lobster Mac and Cheese", price: "$22.50" },
      { name: "Clam Chowder", price: "$9.99" },
    ],
  },
  {
    title: "Rolls",
    items: [
      {
        name: "Clobster Roll",
        price: "$19.95",
        description:
          "Crab and lobster. Served Warm Connecticut or Chilled Maine style",
      },
      {
        name: "Maine Style Lobster Roll",
        price: "$20.95",
        description:
          "Chilled. Lobster, lemon herb aioli, green onion, and old bay",
      },
      {
        name: "Cajun Shrimp Roll",
        price: "$13.95",
        description: "Grilled. Cajun shrimp, mayo, and green onion",
      },
      {
        name: "Crab Roll",
        price: "$15.95",
        description:
          "Lump crab served Warm Connecticut or Chilled Maine style",
      },
      {
        name: "Connecticut Style Lobster Roll",
        price: "$20.95",
        description:
          "Warm lobster, butter, mayo, green onion, and old bay",
      },
      {
        name: "Cali Truffle Roll",
        price: "$21.95",
        description:
          "Chilled Maine. Lobster, truffle oil, herb mayo, avocado, cucumber, carrots, red onion, lettuce, celery, old bay, and green onions",
      },
    ],
  },
  {
    title: "Tacos",
    items: [
      {
        name: "Lobster Tacos",
        price: "$15.25",
        description:
          "Maine lobster with premium seafood, pico de gallo, chipotle aioli, shredded lettuce",
      },
      {
        name: "Chicken Tacos",
        price: "$10.00",
        description:
          "3 per order. Shredded chicken, pico de gallo, shredded lettuce.",
      },
      {
        name: "Barbacoa Tacos",
        price: "$12.50",
        description: "Beef barbacoa, cheese, lettuce.",
      },
      {
        name: "Cajun Shrimp Tacos",
        price: "$14.50",
        description:
          "Grilled shrimp, lemon dill aioli, pico de gallo, shredded lettuce",
      },
    ],
  },
  {
    title: "Quesadillas",
    items: [
      {
        name: "Lobster Quesadilla",
        price: "$16.00",
        description: "Maine lobster with cheese and premium seafood",
      },
      {
        name: "Barbacoa Quesadilla",
        price: "$13.25",
        description: "Beef barbacoa, cheese, salsa, lemon dill aioli.",
      },
      {
        name: "Chicken Quesadilla",
        price: "$11.00",
        description:
          "Marinated chicken, cheese, with salsa and lemon dill aioli.",
      },
      {
        name: "Arugula & Cheese Quesadilla",
        price: "$7.00",
        description: "Served with salsa",
      },
    ],
  },
  {
    title: "Soups",
    items: [
      {
        name: "Lobster Bisque",
        price: "$8.00 - $15.00",
        description: "Smooth and creamy bisque",
      },
      {
        name: "New England Clam Chowder",
        price: "$8.00 - $15.00",
        description: "Traditional white clam chowder",
      },
      {
        name: "Tomato Soup",
        price: "$5.00 - $9.00",
        description: "Fresh & creamy tomato soup",
      },
    ],
  },
  {
    title: "Fries & Sides",
    items: [
      {
        name: "Fried Calamari Fries",
        price: "$9.50",
        description:
          "Panko breaded calamari strips served with cocktail sauce",
      },
      {
        name: "Flaming Hot Lobster Fries",
        price: "$21.75",
        description:
          "A large portion of fries with buttered lobster, cheese sauce, flaming hot Cheetos, and jalapeño.",
      },
      {
        name: "Fries/Regular",
        price: "$6.00",
        description: "Classic crispy french fries",
      },
      {
        name: "Sweet Potato Waffle Fries",
        price: "$6.00 - $9.00",
        description: "Crispy sweet potato waffle cut fries",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="px-4 py-10 md:px-6">
      {menu.map((section, i) => (
        <section key={i} className="mb-14">
          <h2 className="text-center text-3xl font-bold text-neutral-900 mb-2">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-center text-neutral-500 mb-6">
              {section.description}
            </p>
          )}

          <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
            {section.items.map((item, j) => (
              <div
                key={j}
                className="border-b border-neutral-200 py-4 last:border-b-0"
              >
                <div className="flex items-center justify-between font-semibold text-neutral-900">
                  <div>{item.name}</div>
                  <div className="text-red-500">{item.price}</div>
                </div>
                {item.description && (
                  <p className="text-sm text-neutral-500 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            ))}

           <div className="flex justify-center pt-6">
        <a
          href="https://order.toasttab.com/online/lobster-grill-1750-newport-boulevard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Order Now
          </Button>
        </a>
      </div>
    </div>
  </section>
))}
