var productServices = require('../services/product');
var categoryModel = require('../models/categoryModel');
var productModel = require('../models/productModel');

exports.getListProd = async function getListProd() {
    return await productServices.getListProd();
}

exports.addNew = async function addNew(params) {
    let { productName, price, published, idLoaiSP, img } = params;
    let newProd = {
        productName: productName,
        price: price,
        published: published,
        idLoaiSP: idLoaiSP,
        img: img,
    };

    return await productServices.addNew(newProd);
}

exports.getProdById = async function getProdById(params) {
    let id = params;
    return await productServices.getProdById(id);
}

exports.postEditProd = async (body, params) => {
    let {id} = params;
    let {productName, price, published, idLoaiSP, img} = body;
    let edittedProduct = {id ,productName, price, published, idLoaiSP, img};
    return await productServices.postEditProd(edittedProduct);
}

exports.deleteProd = async function deleteProd(params) {
    let {id} = params;
    return await productServices.deleteProd(id);
}

exports.search = async (keyWord) => {
    return await productServices.seach(keyWord);
}