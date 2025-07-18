import express from 'express';
import { type Router } from 'express';
import { authMiddleware } from '@/middleware/auth.middleware.js';
import {
  registerValidators,
  loginValidators,
} from '@/validators/auth.validators.js';
import {
  registerController,
  registerWithRoleController,
  loginController,
  refreshController,
  logoutController,
  userController,
} from '@/controllers/auth.controller.js';

const router: Router = express.Router();

router.post('/register', registerValidators, registerController);
router.post(
  '/create-user',
  registerValidators,
  authMiddleware,
  registerWithRoleController,
);
router.post('/login', loginValidators, loginController);
router.post('/refresh', refreshController);
router.post('/logout', authMiddleware, logoutController);
router.get('/user', authMiddleware, userController);

export default router;
