/**
 * Created by ximing on 2016/5/5.
 */


var pixelRatio = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + '" />')
var html = document.getElementsByTagName('html')[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 40 + 'px';


function windowResize() {
    var html = document.getElementsByTagName('html')[0];
    var pageWidth = html.getBoundingClientRect().width;
    html.style.fontSize = pageWidth / 40+ 'px';
}

$(window).resize(function () {
    windowResize();
})
