var categoryModel = require('../models/categoryModel');
var productModel = require('../models/productModel');

var danhSachLoaiSP = [
    { id: 1, categoryName: 'China phone' },
    { id: 2, categoryName: 'Pha ke phone' },
    { id: 3, categoryName: 'Spec phone' },
    { id: 4, categoryName: 'Gi do phone' },
]

exports.getListCate = async function getListCate(){
    return await categoryModel.find();
}

exports.addNew = async (category) => {
    const newCategory = new categoryModel(category);
    await newCategory.save()
}

exports.idEditCate = async (id) => {
    return await categoryModel.findById(id);
}

exports.editCate = async (edittedCategory) => {
    let cate = await categoryModel.findById(edittedCategory.id);
    if (cate) {
        cate.categoryName = edittedCategory.categoryName;
    }
    await cate.save();
}

exports.deleteCate = async (id) => {
    await categoryModel.remove({_id: id});
}
