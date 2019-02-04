const express = require('express');
const router = express.Router();

const patient = require('../models/patient');

const sendPatient =  (req, res) => res.json ({
     patient: res.locals.patient});
     const sendPatients =  (req, res) => res.json ({
        patient: res.locals.patients});
        const sendSuccess = (req, res) => res.json({
             message: 'success' });

             
             
router.get('/', patient.getAll, sendPatients);
router.post('/',  patient.create, sendPatient);
router.put('/:id', patient.update, sendPatient);
router.delete('/:id', patient.delete, sendSuccess);

module.exports = router;