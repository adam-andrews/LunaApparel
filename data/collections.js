import SummerCollection from "@images/SummerOutfit.jpg";
import FallCollection from "@images/FallOutfit.jpg";
import WinterCollection from "@images/WinterOutfit.jpg";

export const collections = [
  {
    name: "Summer",
    href: "/summer",
    imageSrc: SummerCollection.src,
    imageAlt: "Person with summer apparel",
    description: "Look cool and stay cool with this years summer apparel",
  },
  {
    name: "Autumn",
    href: "/autumn",
    imageSrc: FallCollection.src,
    imageAlt: "Person with autumn apparel",
    description:
      "Developed and designed for the colder months, this years autumn apparel is sure to keep you warm",
  },
  {
    name: "Winter",
    href: "/winter",
    imageSrc: WinterCollection.src,
    imageAlt: "Person with winter apparel",
    description:
      "Keep warm and look good with this years winter apparel, designed to keep you warm and stylish",
  },
];
