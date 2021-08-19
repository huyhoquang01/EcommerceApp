var express = require('express');
var productController = require('../controller/product');
var router = express.Router();
var upload = require('../commons/uploadImg');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let danhSach = await productController.getListProd();
  await res.json(danhSach);
});

/* GET detail page. */
router.get('/listSP/:id', async function (req, res, next) {
  let id = req.params.id;
  let product = await productController.getProdById(req.params);
  res.json({ product });
});

/* POST Add prod page. */
router.post('/themSP', upload.single('imgChosen'), async function (req, res, next) {
  if (req.file) {
    let imageUrl = req.file.originalname;
    req.body = { ...req.body, img: imageUrl }
  }
  const p = await productController.addNew(req.body);
  res.json(p);
});

/* POST Edit prod page. */
router.post('/suaSP/:id', upload.single('imgChosen'), async function (req, res, next) {
  if (req.file) {
    let imageUrl = req.file.originalname;
    req.body = { ...req.body, img: imageUrl }
  }
  let id = req.params;
  const p = await productController.postEditProd(req.body, id);
  res.json(p);
});

/* DELETE prod. */
router.delete('/delete/:id', async function (req, res, next) {
  let { params } = req;
  const p = await productController.deleteProd(params);

  res.json({ res: true, p});
});

/* POST search sp. */
router.post('/search', async function (req, res, next) {
  let {body} = req;
  const p = await productController.search(body.keyWord);
  res.json(p);
});

module.exports = router;

