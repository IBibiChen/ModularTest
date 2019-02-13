/*
 定义有依赖的模块
 */
define(['dataService', 'jquery'], function (dataService, $) {
    let msg = 'alerter.js';

    function showMsg() {
        $('body').css('background', 'gray');
        alert(dataService.getName() + ', ' + msg);
    }

    // 暴露模块
    return {showMsg};
});