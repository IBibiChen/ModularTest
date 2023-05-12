## Browserify 模块化使用教程
1. 创建项目结构
   ```
   |-js
     |-dist // 打包生成文件的目录
     |-src // 源码所在的目录
       |-module1.js
       |-module2.js
       |-module3.js
       |-app.js // 应用主源文件
   |-index.html
   |-package.json
     {
       "name": "browserify-test",
       "version": "1.0.0"
     }
   ```
2. 下载 browserify
  * 全局: npm install browserify -g
  * 局部: npm install browserify --save-dev
3. 定义模块代码
  * module1.js
    ```
    module.exports = {
        msg: 'module1',
        foo() {
            console.log('moudle1 foo()');
        }
    };
    ```
  * module2.js
    ```
    module.exports = function () {
        console.log('module2()');
    };
    ```
  * module3.js
    ```
    exports.foo = function () {
        console.log('module3 foo()');
    };
    
    exports.bar = function () {
        console.log('module3 bar()');
    };
    
    exports.arr = [2, 3, 5, 4, 1, 3, 5, 1];
    ```
  * app.js (应用的主 js)
    ```
    /**
     1. 定义暴露模块:
     // 暴露的本质是 exports
     module.exports = value;
     exports.xxx = value;
     2. 引入模块:
     var module = require(模块名或模块路径);
     */
    "use strict";
    // 引用模块，将其他的模块汇集到主模块
    let uniq = require('uniq');
    let fs = require('fs');
    
    let module1 = require('./module1');
    let module2 = require('./module2');
    let module3 = require('./module3');
    
    // 使用模块
    module1.foo();
    module2();
    module3.foo();
    module3.bar();
    
    console.log(uniq([1, 3, 1, 4, 3]));
    console.log(uniq(module3.arr));
    
    fs.readFile('app.js', function (error, data) {
        console.log(data.toString());
    });
    ```
* 打包处理 js:
  * browserify js/src/app.js -o js/dist/bundle.js 
* 页面使用引入:
  ```
  <script type="text/javascript" src="js/dist/bundle.js"></script> 
  ```