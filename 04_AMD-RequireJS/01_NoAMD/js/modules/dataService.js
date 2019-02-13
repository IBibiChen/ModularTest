// 定义一个没有依赖的模块
(function (window) {
    let name = 'dataService.js';

    function getName() {
        return name.toUpperCase()
    }

    window.dataService = {getName};
})(window);
