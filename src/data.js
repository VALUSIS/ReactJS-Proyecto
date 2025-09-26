import dell from "./assets/DellPC.jpg";
import acer from "./assets/AcerPC.jpg";
import hp from "./assets/HpPC.jpg";

import samsung from "./assets/SamsungS25.jpg";
import iphone from "./assets/Iphone13.jpg";
import xiaomi from "./assets/Redmi7.jpg";
import motorola from "./assets/MotorolaG54.jpg";

import bgh from "./assets/BGHtv.jpg";
import samsTv from "./assets/SamsungTV.jpg";
import lg from "./assets/LGtv.jpg";
import philips from "./assets/PhilipsTV.jpg";

const products = [
  { id: 1, name: "Dell A530", price: 150000, category: "Notebooks", image: dell },
  { id: 2, name: "Acer 14667", price: 230000, category: "Notebooks", image: acer },
  { id: 3, name: "HP Full v23", price: 190000, category: "Notebooks", image: hp },

  { id: 4, name: "Samsung S25 Ultra", price: 70000, category: "Celulares", image: samsung },
  { id: 5, name: "Iphone 13 Pro", price: 100000, category: "Celulares", image: iphone },
  { id: 6, name: "Xiaomi Redmi Note 7", price: 50000, category: "Celulares", image: xiaomi },
  { id: 7, name: "Motorola G54", price: 27000, category: "Celulares", image: motorola },

  { id: 8, name: "Smart TV BGH", price: 200000, category: "Televisores", image: bgh },
  { id: 9, name: "Smart TV Samsung", price: 250000, category: "Televisores", image: samsTv },
  { id: 10, name: "Smart TV LG", price: 300000, category: "Televisores", image: lg },
  { id: 11, name: "Smart TV Philips", price: 140000, category: "Televisores", image: philips },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === parseInt(id))), 500);
  });
};
