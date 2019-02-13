## sea.js 简单使用教程
1. 下载 sea.js, 并引入
  * 官网: http://seajs.org/
  * github : https://github.com/seajs/seajs
  * 将 sea.js 导入项目: js/libs/sea.js 
2. 创建项目结构
  ```
  |-js
    |-libs
      |-sea.js
    |-modules
      |-module1.js
      |-module2.js
      |-module3.js
      |-module4.js
      |-main.js
  |-index.html
  ```
3. 定义 sea.js 的模块代码
  * module1.js
    ```
    // 定义没有依赖的模块
    define(function (require, exports, module) {
        // 内部变量数据
        var data = 'BibiChen';
    
        // 内部函数
        function foo() {
            console.log('module1 show() ' + data);
        }
    
        // 向外暴露
        module.exports = {foo};
    });
    ```
  * module2.js
    ```
    define(function (require, exports, module) {
    
        let msg = 'module2';
    
        function bar() {
            console.log(msg);
        }
    
        module.exports = bar;
    });
    ```
  * module3.js
    ```
    define(function (require, exports, module) {
        const data = 'module3';
    
        function fun() {
            console.log(data);
        }
    
        exports.module3 = {fun};
    });
    ```
  * module4.js
    ```
    define(function (require, exports, module) {
        let msg = 'module4';
    
        // 引入依赖模块(同步)
        let module2 = require('./module2');
        module2();
    
        // 引入依赖模块(异步)
    
        require.async('./module3', function (m3) {
            console.log('异步引入依赖模块3');
            m3.module3.fun();
        });
    
        function fun2() {
            console.log(msg);
        }
    
        exports.fun2 = fun2;
    });
    ```
  * main.js : 主(入口)模块
    ```
    define(function (require) {
        var m1 = require('./module1');
        var m4 = require('./module4');
        m1.foo();
        m4.fun2();
    });
    ```
4. index.html:
  ```
  <!--
      使用 seajs:
        1. 引入 sea.js 库
        2. 如何定义导出模块 :
          define()
          exports
          module.exports
        3. 如何依赖模块:
          require()
        4. 如何使用模块:
          seajs.use()
  -->
  <script type="text/javascript" src="js/libs/sea.js"></script>
  <script type="text/javascript">
      seajs.use('./js/modules/main');
  </script>
  ```
        
    
       