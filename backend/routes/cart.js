import express from 'express';
import * as cartController from '../controllers/cartController.js';

const router = express.Router();

router.get('/:sessionId', cartController.getCart);
router.post('/:sessionId', cartController.addToCart);
router.put('/:sessionId/:productId', cartController.updateCartItem);
router.delete('/:sessionId/:productId', cartController.removeFromCart);
router.delete('/:sessionId/clear/all', cartController.clearCart);

export default router;
