import { Router } from 'express';
import {
  getAllUsers,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';
const router = Router();

router.get('/', [authorizePermissions('admin'), getAllUsers]);
router.get('/get-current-user', getCurrentUser);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
