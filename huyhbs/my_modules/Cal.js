
exports.tinhToan = (string) => {
    // let phepTinh = `${string}`;
    // for (let i = 0; i < phepTinh.length; i++) {
        
    // }
    return evil(`${string}`);
}
function evil(fn) {
    return new Function('return ' + fn)();
}