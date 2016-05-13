/**
 * Created by ximing on 2016/5/13.
 */
$.init();

$(document).on('click','.alert-text',function () {
    $.alert('请先登录');
    window.location.href = "./sign.html";
});