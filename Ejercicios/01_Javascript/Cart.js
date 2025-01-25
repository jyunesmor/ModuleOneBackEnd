export default class ProductManager {
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
}
