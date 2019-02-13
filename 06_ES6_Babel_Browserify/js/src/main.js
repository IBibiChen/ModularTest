// 引入其他的模块

// 语法：import xxx from '路径';

// 引入第三方模块
import $ from 'jquery';

import {foo, bar} from './module1';
import {fun, fun2} from './module2';
import module3 from './module3';

// console.log(module1,module2);
$('body').css('background', 'green');


foo();
bar();
fun();
fun2();
module3.foo();