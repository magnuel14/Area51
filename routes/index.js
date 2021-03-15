var express = require('express');
//solo pra vizulizar fragmentos
var visucontrol= require('../controladores/vi_frag');
var visu= new visucontrol();
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: 'Area 51',
        fragmentos: 'Principal/inicio'});

});

//Funcionalidades
router.get('/verAbout', visu.verAbout);
router.get('/verBlogD', visu.verBlogsD);
router.get('/verBlog', visu.verBlog);
router.get('/verContact', visu.vercontact);
router.get('/verPortafolio', visu.verServicios);


module.exports = router;
