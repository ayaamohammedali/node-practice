import { Router } from 'express'
import { get_users, get_users_age } from './contoller/get_users.js'
import { signIn } from './contoller/signin.js'
import { signUp } from './contoller/SignUp.js'

const router = Router()

router.get('/By_Ages', get_users_age) // get users between range of ages
router.get('/', get_users) // get all users
router.post('/signup', signUp) // Sign up
router.post('/signin', signIn) // Sign In

export default router
