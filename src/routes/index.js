const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Eva Helm Site' });
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Eva Helm'});
});

module.exports = router;