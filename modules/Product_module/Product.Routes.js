import { Router } from "express";
import { add_product } from "./controller/add_product.js";
import { delete_product } from "./controller/delete_pro.js";
import { get_all_product } from "./controller/get_all_products.js";
import { update_product } from "./controller/update_product.js";


const router  = Router()
 

router.post('/add_product' , add_product) // add product
router.get('/' , get_all_product)  // get all products by users inforamtion
router.patch('/update_pro/:id' , update_product) // update product by product owner only 
router.delete('/delete_pro/:id' , delete_product)  // delete product by product owner only 

export default router;