class ProductsManager {
	constructor(products = []) {
		this.products = [...products];
	}

	addProduct(product) {
		this.products.push(product);
	}

	getProducts() {
		return this.products;
	}

	getProductsById(id) {
		return this.products.find((product) => product.id === id);
	}
	node;
}

class Products {
	constructor(title, price, thumbnail, code, stock) {
		this.title = title;
		this.price = price;
		this.thumbnail = thumbnail;
		this.code = code;
		this.stock = stock;
	}
}

const p1 = new Products("Carne", 245, "image1", 1, 36);
const p2 = new Products("Leche", 378, "image2", 2, 24);

/* console.log(p1);
console.log(p2); */

const cart = new ProductsManager();

cart.addProduct(p1);
cart.addProduct(p2);

console.log(cart.getProducts());
