var entityType = getUrlParam('entityType'); //搜索类型
var entitySx = getUrlParam('entitySx'); //搜索属性
var sxMax = getUrlParam('sxMax'); //搜索属性最大值
var sxMin = getUrlParam('sxMin'); //搜索属性最小值
var id = getUrlParam('id'); //实体id
var adminpages = getUrlParam('adminpages') == null ? 1 : getUrlParam('adminpages') ; //后台分页
var latest = getUrlParam('latest'); //是否取最新版本的实体数据，默认为true
var version = getUrlParam('version'); //实体版本号，非必要参数。但如果 latest 为false，则这个参数必须为一个长整形数字，用于标识指定的实体副本
var zsusername = $.cookie('zsusername');
//前台搜索按钮
layui.use(['form','layer'], function(){
    var form = layui.form;
    var layer = layui.layer;
    form.render();

    


    /*
        历史版本弹出层
       */
    // $('.lsbb').on('click',function(){
    //     layer.open({
    //         id:'lsbb',
    //         type: 2,
    //         title:'编辑历史',
    //         area: ['1000px', '550px'],
    //         content: './menuOpen/lsbb.html', //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
    //         success: function(layero, index){
    //             var body = layer.getChildFrame('body', index);
    //             var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
    //             iframeWin.child(entityType,id);
    //         }
    //     });
    // });

});
//获取地址栏参数
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数
    if (r != null) {
        // return unescape(r[2]);
        return decodeURI(r[2]);
    } else {
        return null;
    }
}
//时间戳 转 字符串 1995-12-05 00:00:00
function getTime(str){

    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth()+1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        // oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
        oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
    return oTime;

}
//补0操作
function getzf(num){
    if(parseInt(num) < 10){
        num = '0'+num;
    }
    return num;
}
//详情页 url 跳转字符换拼接
function comUrl(entityType,id,latest,version){
    var str = '?id=' + id + '&latest=' + latest + '&version=' + version + '&entityType=' + entityType;
    return str;
}


//获取随机颜色
function randomColor1(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    if(r < 16){
        r = "0"+r.toString(16);
    }else{
        r = r.toString(16);
    }
    if(g < 16){
        g = "0"+g.toString(16);
    }else{
        g = g.toString(16);
    }
    if(b < 16){
        b = "0"+b.toString(16);
    }else{
        b = b.toString(16);
    }
    return "#"+r+g+b;
}

//深色
var getRandomColor1 = function() {
    return '#' +
        (function(color) {
            return(color += '0123401234abcabc' [Math.floor(Math.random() * 16)]) &&
            (color.length == 6) ? color : arguments.callee(color);
        })('');
};

//浅色
var getRandomColor2 = function() {
    return '#' +
        (function(color) {
            return(color += '5678956789defdef' [Math.floor(Math.random() * 16)]) &&
            (color.length == 6) ? color : arguments.callee(color);
        })('');
};