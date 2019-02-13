/**
 * 使用 exports.xxx = value 向外暴露一个对象
 */
"use strict";
exports.foo = function () {
    console.log('module3 foo()');
};

exports.bar = function () {
    console.log('module3 bar()');
};

exports.arr = [2, 3, 5, 4, 1, 3, 5, 1];