/**
 * Created by beens on 15/12/17.
 */



//cordova canvas保存成图片并返回图片地址
// ios不返回地址。。。模拟器里面，真机需要测试

//install
//cordova plugin add https://github.com/devgeeks/Canvas2ImagePlugin.git


//www
//https://github.com/devgeeks/Canvas2ImagePlugin


//CAPP.canvas2Image({
//    canvasId:"test",              //canvas的id
//    success:function(imgSrc){     //成功返回保存的图片地址
//        console.log(imgSrc);
//    },
//    error:function(msg){          //失败返回错误原因
//        console.log(msg)
//    }
//});





if(!window.CAPP){CAPP ={};}


CAPP.canvas2Image = function(opt){
    opt = opt || {};
    var canvasId = opt.canvasId,
        success = opt.success,
        error = opt.error;


    window.canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){
            success(msg);
        },
        function(err){
            error(err);
        },
        document.getElementById(canvasId)
    );
};