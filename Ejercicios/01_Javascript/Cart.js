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

	removeProductsById(id) {
		this.products = this.products.filter((product) => product.code !== id);
		return this.products;
	}
}
