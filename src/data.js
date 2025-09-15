const products = [
  { id: 1, nombre: "Dell A530", precio: 150000, category: "Notebooks" },
  { id: 2, nombre: "Acer 14667", precio: 230000, category: "Notebooks" },
  { id: 3, nombre: "HP Full v23", precio: 190000, category: "Notebooks" },

  { id: 4, nombre: "Samsung S25 Ultra", precio: 70000, category: "Celulares" },
  { id: 5, nombre: "Iphone 13 Pro", precio: 100000, category: "Celulares" },
  { id: 6, nombre: "Xiaomi Redmi Note 7", precio: 50000, category: "Celulares" },
  { id: 7, nombre: "Motorola G54", precio: 27000, category: "Celulares" },

  { id: 8, nombre: "Smart TV BGH", precio: 200000, category: "Televisores" },
  { id: 9, nombre: "Smart TV Samsung", precio: 250000, category: "Televisores" },
  { id: 10, nombre: "Smart TV LG", precio: 300000, category: "Televisores" },
  { id: 11, nombre: "Smart TV Philips", precio: 140000, category: "Televisores" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(id)));
    }, 1000);
  });
};
