var categoryServices = require('./category');
var categoryModel = require('../models/categoryModel');
var productModel = require('../models/productModel');

var danhSach = [
    { id: 1, productName: 'Nokia', price: 2000, published: '2020-05-20', idLoaiSP: 1, img: 'http://localhost:3000/images/meo1.jpg' },
    { id: 2, productName: 'Nokia C1', price: 3000, published: '2020-05-20', idLoaiSP: 1, img: 'http://localhost:3000/images/download.jpg' },
]

exports.getListProd = async function getListProd() {
    let products = await productModel.find().populate('idLoaiSP');
    return products;
}

exports.addNew = async function addNew(product) {
    const newPro = new productModel(product);
    return await newPro.save()
}

exports.getProdById = async function getProdById(id) {
    return await productModel.findById(id);
}

exports.postEditProd = async (product) => {
    let prod = await productModel.findById(product.id);
    if (prod) {
        prod.productName = product.productName;
        prod.price = product.price;
        prod.published = product.published;
        prod.idLoaiSP = product.idLoaiSP;
        if (product.img) {
            prod.img = product.img;
        }

    }
    return await prod.save();

}

exports.deleteProd = async function deleteProd(id) {
    return await productModel.remove({_id: id});
}

exports.seach = async (keyWord) => {
    return await productModel.find({productName: keyWord}, 'productName price');
}