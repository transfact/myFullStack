import express from 'express';
const router = express.Router();
import controller from '../controller/Cmain.js';

router.get('/todos', controller.get_todo);
router.post('/todo', controller.post_todo);
router.patch('/todo/:todoId', controller.patch_todo);
router.delete('/todo/:todoId', controller.delete_todo);
export default router;
