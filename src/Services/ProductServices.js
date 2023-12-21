import GenericService from "./GenericServices";
import React from "react";

class ProductService extends GenericService {
  constructor() {
    super();
  }

  addProduct = (name, price, url, description) =>
    this.post("products", { name, price, url, description });
  deleteProduct = (_id) => this.delete("products/" + _id);
  updateProduct = (_id, data) => this.put("products/" + _id, data);
  getProduct = (_id) => this.get("products/" + _id);
  getAllProduct = () => this.get("products/");
}
let productService = new ProductService();
export default productService;
