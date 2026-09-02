const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const tourController = require('../controller/tourcontroller');

//get all tours

router.get('/tours', tourController.getAllTours);
router.get('/tours/:id', tourController.getTourById);
router.post('/tours', tourController.addTour); 
router.put('/tours/:id', tourController.updateTour);
router.delete('/tours/:id', tourController.deleteTourById);
module.exports = router;