import express from 'express';
import * as exhibitionController from '../controllers/exhibitionController.js';

const router = express.Router();

router.get('/', exhibitionController.getExhibitions);
router.get('/:id', exhibitionController.getExhibitionById);
router.post('/', exhibitionController.createExhibition);
router.put('/:id', exhibitionController.updateExhibition);
router.delete('/:id', exhibitionController.deleteExhibition);

export default router;
