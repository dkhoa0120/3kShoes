import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  customer1,
  customer2,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const itemList = [
  {
    id: 1,
    name: "NK Air Force 2 Shoes",
    target: "Men, Women",
    color: "Grey / White",
    cover: "/img/shoes1-cover.png",
    photo: [
      {
        id: 1,
        img: "/img/shoes-1.1.jpg",
      },
      {
        id: 2,
        img: "/img/shoes-1.0.jpg",
      },
      {
        id: 3,
        img: "/img/shoes-1.2.jpg",
      },
    ],
    amount: 1,
    brand: "Nike",
    price: 109.2,
    sizes: [
      {
        id: 1,
        size: 38,
      },
      {
        id: 2,
        size: 39,
      },
      {
        id: 3,
        size: 40,
      },
      {
        id: 4,
        size: 41,
      },
      {
        id: 6,
        size: 43,
      },
    ],
  },
  {
    id: 2,
    name: "SKC Grey And Black Running Shoes",
    cover: "/img/shoes2-cover.png",
    amount: 1,
    brand: "SKC",
    color: "Grey / Dark Smoke / White",
    target: "Kid",
    photo: [
      {
        id: 1,
        img: "/img/shoes-2.0.jpg",
      },
      {
        id: 2,
        img: "/img/shoes-2.1.jpg",
      },
      {
        id: 3,
        img: "/img/shoes-2.2.jpg",
      },
    ],
    price: 109.1,
    sizes: [
      {
        id: 1,
        size: 38,
      },
      {
        id: 2,
        size: 39,
      },
      {
        id: 3,
        size: 40,
      },
      {
        id: 4,
        size: 41,
      },
    ],
  },
  {
    id: 3,
    name: "NK Air Wineflow Running Shoes",
    amount: 1,
    target: "Men, Women, Kid",
    color: "White / Dusty Cactus / Cosmic Clay",
    cover: "/img/shoes3-cover.png",
    photo: [
      {
        id: 1,
        img: "/img/shoes-3.0.jpg",
      },
      {
        id: 2,
        img: "/img/shoes-3.1.jpg",
      },
      {
        id: 3,
        img: "/img/shoes-3.2.jpg",
      },
    ],
    prevPrice: 119.2,
    brand: "Nike",
    price: 119.2,
    sizes: [
      {
        id: 1,
        size: 38,
      },
      {
        id: 2,
        size: 39,
      },
      {
        id: 3,
        size: 40,
      },
    ],
  },
  {
    id: 4,
    name: "AD Torsion Running Shoes",
    target: "Men",
    amount: 1,
    color: "Safety Orange / Burnt Sunrise/ White",
    cover: "/img/shoes4-cover.png",
    photo: [
      {
        id: 1,
        img: "/img/shoes-4.0.jpg",
      },
      {
        id: 2,
        img: "/img/shoes-4.1.jpg",
      },
      {
        id: 3,
        img: "/img/shoes-4.2.jpg",
      },
    ],
    prevPrice: 119.0,
    price: 89.1,
    brand: "Adidas",
    sizes: [
      {
        id: 1,
        size: 38,
      },
      {
        id: 2,
        size: 39,
      },
      {
        id: 3,
        size: 40,
      },
      {
        id: 1,
        size: 41,
      },
    ],
  },
];

export const reviews = [
  {
    id: "12313as",
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    id: "1231qwe1s",
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];
