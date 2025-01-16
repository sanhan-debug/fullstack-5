import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProductByID, updateProduct } from "../Controllers/productController.js";

export const productRouter = new Router()

productRouter.get("/products",getAllProducts)
productRouter.get("/products/:id",getProductByID)
productRouter.post("/products",addProduct)
productRouter.put("/products/:id",updateProduct)
productRouter.delete("/products/:id",deleteProduct)
