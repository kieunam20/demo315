const express = require('express');
const LecturerModel = require('../models/LecturerModel');
const router = express.Router();

router.get('/', async (req, res) => {
   var lecturers = await LecturerModel.find({});
   res.render("lecturer/list", { lecturers : lecturers});
})

router.get('/delete/:id', async (req, res) => {
   await LecturerModel.findByIdAndDelete(req.params.id);
   res.redirect('/lecturer');
})

router.get('/add', (req, res) => {
   res.render('lecturer/add');
})

router.post('/add', async (req, res) => {
   var lecturer = req.body;
   await LecturerModel.create(lecturer);
   res.redirect('/lecturer');
})
router.get('/edit/:id', async (req, res) => {
    var lecturer = await LecturerModel.findById(req.params.id);
    res.render('lecturer/edit', { lecturer : lecturer});
 })
 
 router.post('/edit/:id', async (req, res) => {
    var lecturer = await LecturerModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/lecturer');
 })

module.exports = router;
