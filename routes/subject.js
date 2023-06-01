const express = require('express');
const SubjectModel = require('../models/SubjectModel');
const router = express.Router();

router.get('/', async (req, res) => {
   var subjects = await SubjectModel.find({});
   res.render("subject/list", { subjects : subjects});
})

router.get('/delete/:id', async (req, res) => {
   await SubjectModel.findByIdAndDelete(req.params.id);
   res.redirect('/subject');
})

router.get('/add', (req, res) => {
   res.render('subject/add');
})

router.post('/add', async (req, res) => {
   var subject = req.body;
   await SubjectModel.create(subject);
   res.redirect('/subject');
})
router.get('/edit/:id', async (req, res) => {
    var subject = await SubjectModel.findById(req.params.id);
    res.render('subject/edit', { subject : subject});
 })
 
 router.post('/edit/:id', async (req, res) => {
    var subject = await SubjectModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/subject');
 })

module.exports = router;
