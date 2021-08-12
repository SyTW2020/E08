import {Router} from 'express'
import * as authcontroller from '../controllers/auth.controller'

const router = Router()


router.post('/signup',authcontroller.signup)
router.post('/signin',authcontroller.signin)

export default router;