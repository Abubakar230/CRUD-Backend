import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/product.controller.js";
const router = Router()

router.route("/product").get(getAllProducts)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct)
router.route("/product/:id").delete(deleteProduct)

export default router