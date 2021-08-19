var express = require('express');
var router = express.Router();
var checklogin = require('../commons/auth');
var productController = require('../controller/product');
var categoryController = require('../controller/category');
var upload = require('../commons/uploadImg');

/* GET home page. */
router.get('/', checklogin.check, async function (req, res, next) {
  let listSP = await productController.getListProd();
  res.render('product', { list: listSP });
});

/* GET Add prod page. */
router.get('/themSP', checklogin.check, async function (req, res, next) {
  let listLoaiSP = await categoryController.getListCate();
  res.render('addSP', { listLoaiSP });
});

/* POST Add prod page. */
router.post('/themSP', checklogin.check, upload.single('imgChosen'), async function (req, res, next) {
  if (req.file) {
    let imageUrl = req.file.originalname;
    req.body = { ...req.body, img: imageUrl }
  }
  await productController.addNew(req.body);
  res.redirect('/listSP');
});

/* GET Edit prod page. */
router.get('/suaSP/:id', checklogin.check, async function (req, res, next) {
  let id = req.params.id;
  let product = await productController.getProdById(id);
  let listLoaiSP = await categoryController.getListCate();
  res.render('suaSP', { product, listLoaiSP });
});

/* POST Edit prod page. */
router.post('/suaSP/:id', checklogin.check, upload.single('imgChosen'), async function (req, res, next) {
  if (req.file) {
    let imageUrl = req.file.originalname;
    req.body = { ...req.body, img: imageUrl }
  }
  let id = req.params;
  await productController.postEditProd(req.body, id);
  res.redirect('/listSP');
});

/* DELETE prod. */
router.delete('/delete/:id', checklogin.check, async function (req, res, next) {
  let { params } = req;
  await productController.deleteProd(params);

  res.json({ res: true });
});

/* GET Loai SP page. */
router.get('/categories', checklogin.check, function (req, res, next) {
  res.redirect('/loaiSP');
});

/* GET logout. */
router.get('/logout', checklogin.check, function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect('/login')
  })
});


module.exports = router;

