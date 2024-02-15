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
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
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
    color: "Grey",
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
    price: 109,
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
    color: "Grey",
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
    price: 109,
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
    color: "Green",
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
    prevPrice: 119,
    brand: "Nike",
    price: 89,
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
    color: "Orangered",
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
    prevPrice: 119,
    price: 89,
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
