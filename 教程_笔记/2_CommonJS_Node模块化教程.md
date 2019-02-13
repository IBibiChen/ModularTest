## Node.js 模块化教程
1. 下载安装 node.js
2. 创建项目结构
  ```
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-app.js
  |-package.json
    {
      "name": "commonJS-node",
      "version": "1.0.0"
    }
  ```
3. 下载第三方模块
  * npm install uniq --save
4. 模块化编码
  * module1.js
    ```
    /**
     * 使用 module.exports = value 向外暴露一个对象
     */
    "use strict";
    module.exports = {
        msg: 'module1',
        foo() {
            console.log('moudle1 foo()');
        }
    };
    ```
  * module2.js
    ```
    /**
     * 使用 module.exports = value 向外暴露一个函数
     */
    "use strict";
    module.exports = function () {
        console.log('module2()');
    };
    ```
  * module3.js
    ```
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
    ```
  * app.js 
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
    
    let module1 = require('./modules/module1');
    let module2 = require('./modules/module2');
    let module3 = require('./modules/module3');
    
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
5. 通过 node 运行 app.js
  * 命令: node app.js
  * 工具: 右键 --> 运行