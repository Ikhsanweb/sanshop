import { Router } from 'express';
import {
  getAllUsers,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
const router = Router();

router.get('/', [authorizePermissions('admin'), getAllUsers]);
router.get('/get-current-user', getCurrentUser);
router.patch(
  '/update-user',
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default router;
