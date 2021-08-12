import {Router} from 'express'
import * as productcontroller from '../controllers/products.controller'
import {verify} from '../middlewares'
const router = Router()


router.post('/',[verify.verifytoken, verify.isModerador ],productcontroller.createProduct)
router.get('/',productcontroller.getProducts)
router.get('/:productId',productcontroller.getProductById)
router.put('/:productId',verify.verifytoken,productcontroller.updateProductById)
router.delete('/:productId',[verify.verifytoken, verify.isModerador ],productcontroller.deleteProductById)

export default router;

