var express = require('express');
var router = express.Router();
var checklogin = require('../commons/auth');
var categoryController = require('../controller/category');

/* GET home page. */
router.get('/', checklogin.check, async function (req, res, next) {
    let list = await categoryController.getListCate();
    res.render('loaiSP', { list });
});

/* GET Add category page. */
router.get('/themLoaiSP', checklogin.check, async function (req, res, next) {
    res.render('themLoaiSP');
});

/* POST Add category page. */
router.post('/themLoaiSP', checklogin.check, async function (req, res, next) {
    let { categoryName } = req.body;
    await categoryController.postNewCategory(categoryName);
    res.redirect('/loaiSP');
});

/* GET Edit prod new page. */
router.get('/suaLoaiSP/:id', checklogin.check, async function (req, res, next) {
    let id = req.params.id;
    let category = await categoryController.getEditCategory(id);
    res.render('suaLoaiSP', { category });
});

/* POST Edit prod page. */
router.post('/suaLoaiSP/:id', checklogin.check, async function (req, res, next) {
    let id = req.params.id;
    await categoryController.postEditCategory(req.body, id);
    res.redirect('/loaiSP');
});

/* DELETE prod. */
router.delete('/delete/:id', checklogin.check, async function (req, res, next) {
    let id = req.params.id;
    await categoryController.deleteCategory(id);
    res.send({ res: true });
});

/* GET logout. */
router.get('/logout', checklogin.check, function (req, res, next) {
    req.session.destroy(function (err) {
        res.redirect('/login')
    })
});

module.exports = router;

