import ProductManager from "./Cart.js";
import Products from "./Product.js";

const p1 = new Products("Carne", 245, "image1", 1, 36);
const p2 = new Products("Leche", 378, "image2", 2, 24);
console.log(p1);
const cart = new ProductManager();
cart.addProduct(p1);
cart.addProduct(p2);

console.log(cart.getProducts());
