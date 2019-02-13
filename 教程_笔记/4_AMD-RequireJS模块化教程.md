## require.js 使用教程
1. 下载 require.js, 并引入
  * 官网: http://www.requirejs.cn/
  * github : https://github.com/requirejs/requirejs
  * 将 require.js 导入项目: js/libs/require.js 
2. 创建项目结构
  ```
  |-js
    |-libs
      |-require.js
    |-modules
      |-alerter.js
      |-dataService.js
    |-main.js
  |-index.html
  ```
3. 定义 require.js 的模块代码
  * dataService.js
    ```
    define(function () {
        let name = 'dataService.js';
    
        function getName() {
            return name;
        }
    
        // 暴露模块
        return {getName};
    });
    ```
  * alerter.js
    ```
    define(['dataService', 'jquery'], function (dataService, $) {
        let msg = 'alerter.js';
    
        function showMsg() {
            $('body').css('background', 'gray');
            alert(dataService.getName() + ', ' + msg);
        }
    
        // 暴露模块
        return {showMsg};
    });
    ```
4. 应用主(入口)js: main.js
  ```
  (function () {
      // 配置
      require.config({
          // 基本路径
          baseUrl: 'js/',
          // 映射: 模块标识名: 路径
          paths: {
              // 自定义模块
              'alerter': 'modules/alerter',
              'dataService': 'modules/dataService',
  
              // 库模块
              'jquery': 'libs/jquery-1.10.1',
              'angular': 'libs/angular'
          },
  
          // 配置不兼容 AMD 的模块
          shim: {
              angular: {
                  exports: 'angular'
              }
  
          }
      });
  
      // 引入模块使用
      require(['alerter', 'angular'], function (alerter, angular) {
          alerter.showMsg();
          console.log(angular);
      })
  })();
  ```
        
5. 页面使用模块:
  <!-- 引入 require.js 并指定 js 主文件的入口 -->
  <script src="js/libs/require.js" data-main="js/main.js"></script>
    
------------------------------------------------------------------------

6. 使用第三方基于 require.js 的框架(jquery)
  * 将 jquery 的库文件导入到项目: 
    * js/libs/jquery-1.10.1.js
  * 在 main.js 中配置 jquery 路径
    ```
    paths: {
          'jquery': 'libs/jquery-1.10.1'
    }
    ```
  * 在 alerter.js 中使用 jquery
    ```
    define(['dataService', 'jquery'], function (dataService, $) {
        let msg = 'alerter.js';
    
        function showMsg() {
            $('body').css('background', 'gray');
            alert(dataService.getName() + ', ' + msg);
        }
    
        // 暴露模块
        return {showMsg};
    });
    ```
------------------------------------------------------------------------

7. 使用第三方不基于 require.js 的框架(angular)
    * 将 angular.js 导入项目
    * js/libs/angular.js
   
  * 在 main.js 中配置
    ```
    (function () {
        // 配置
        require.config({
            // 基本路径
            baseUrl: 'js/',
            // 映射: 模块标识名: 路径
            paths: {
                // 自定义模块
                'alerter': 'modules/alerter',
                'dataService': 'modules/dataService',
    
                // 库模块
                'jquery': 'libs/jquery-1.10.1',
                'angular': 'libs/angular'
            },
    
            // 配置不兼容 AMD 的模块
            shim: {
                angular: {
                    exports: 'angular'
                }
    
            }
        });
    
        // 引入模块使用
        require(['alerter', 'angular'], function (alerter, angular) {
            alerter.showMsg();
            console.log(angular);
        })
    })();
    ```
 