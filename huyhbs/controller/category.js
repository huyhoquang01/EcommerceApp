const { param } = require('../routes/listSP');
var categoryModel = require('../models/categoryModel');
var productModel = require('../models/productModel');
var categoryServices = require('../services/category')

exports.getListCate = async () =>{
    return await categoryServices.getListCate();
}

exports.postNewCategory = (params) => {
    let categoryName = params;
    let newcategory = {
        categoryName: categoryName,
    };

    categoryServices.addNew(newcategory);
}

exports.getEditCategory = async (params) => {
    let id = params;
    return await categoryServices.idEditCate(id);
}

exports.postEditCategory = async (body, params) => {
    let id = params;
    let {categoryName} = body;
    let edittedCategory = {id, categoryName};
    await categoryServices.editCate(edittedCategory);
}

exports.deleteCategory = async (params) => {
    let id = params;
    await categoryServices.deleteCate(id);
}