import ProductManager from "./Cart.js";
import Products from "./Product.js";

const cart = new ProductManager();

const p1 = new Products("Carne", 245, "image1", 1, 36);
const p2 = new Products("Leche", 378, "image2", 2, 24);
const p3 = new Products("Aceite", 1489, "image3", 3, 47);

cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);

cart.removeProductsById(2);

console.table(cart.getProducts());
