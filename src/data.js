const products = [

  { id: 1, name: "Dell A530", price: 150000, category: "Notebooks" },
  { id: 2, name: "Acer 14667", price: 230000, category: "Notebooks" },
  { id: 3, name: "HP Full v23", price: 190000, category: "Notebooks" },

  
  { id: 4, name: "Samsung S25 Ultra", price: 70000, category: "Celulares" },
  { id: 5, name: "Iphone 13 Pro", price: 100000, category: "Celulares" },
  { id: 6, name: "Xiaomi Redmi Note 7", price: 50000, category: "Celulares" },
  { id: 7, name: "Motorola G54", price: 27000, category: "Celulares" },


  { id: 8, name: "Smart TV BGH", price: 200000, category: "Televisores" },
  { id: 9, name: "Smart TV Samsung", price: 250000, category: "Televisores" },
  { id: 10, name: "Smart TV LG", price: 300000, category: "Televisores" },
  { id: 11, name: "Smart TV Philips", price: 140000, category: "Televisores" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export default products;