'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(module1,module2);
// 引入其他的模块

// 语法：import xxx from '路径';

(0, _jquery2.default)('body').css('background', 'green');

(0, _module.foo)();
(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();
_module4.default.foo();