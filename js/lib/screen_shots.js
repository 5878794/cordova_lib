/**
 * Created by beens on 15/12/16.
 */



//cordova 屏幕截图

//install CLI
//cordova plugin add https://github.com/gitawego/cordova-screenshot.git

//www
//https://www.npmjs.com/package/com.darktalker.cordova.screenshot



//CAPP.ScreenShots({
//    quality:50,                   //图片质量，默认50
//    success:function(filePath){   //成功回调返回保存的图片路径
//        console.log(filePath);
//    },
//    error:function(error){        //失败回调返回错误信息
//        console.log(error);
//    }
//});





if(!window.CAPP){CAPP = {};}

CAPP.ScreenShots = function(opt){
    opt = opt || {};
    var quality = opt.quality || 50,
        successFn = opt.success || function(){},
        errorFn = opt.error || function(){};


    navigator.screenshot.save(function(error,res){
        if(error){
            errorFn(error);
        }else{
            successFn(res.filePath);
        }
    },'jpg',quality);
};