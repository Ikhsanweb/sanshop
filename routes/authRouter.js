import { Router } from 'express';
import {
  login,
  logout,
  refreshLogin,
  register,
} from '../controllers/authController.js';
import {
  validateLoginInput,
  validateRegisterInput,
} from '../middlewares/validationMiddleware.js';
const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.patch('/refresh-login', refreshLogin);
router.get('/logout', logout);

export default router;
