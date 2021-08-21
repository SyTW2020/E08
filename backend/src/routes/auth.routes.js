import {Router} from 'express'
import * as authcontroller from '../controllers/auth.controller'

const router = Router()


router.post('/signup',authcontroller.signup)
router.post('/signin',authcontroller.signin)
router.post('/profile',authcontroller.dataProfile)

export default router;