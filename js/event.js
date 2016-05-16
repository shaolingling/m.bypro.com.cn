/**
 * Created by ximing on 2016/5/13.
 */



$(document).on("pageInit", function(e, pageId, $page) {
    $.init();
    $(document).on('click','.alert-text',function () {
        $.alert('请先登录');
        window.location.href = "./sign.html";
    });

    if(pageId == "details") {


        var imgWidth = $("body").width();
        $("#swiper img").height(imgWidth);
        $("#swiper img").width(imgWidth);


        //baidu map api init
        var mp = new BMap.Map('map');
        mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);

    }
});

