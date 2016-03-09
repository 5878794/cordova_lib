/**
 * Created by beens on 15/12/14.
 */


//cordova 在页面上显示提示信息

//install CLI
//cordova plugin add cordova-plugin-x-toast

//www
//https://www.npmjs.com/package/cordova-plugin-x-toast


//显示信息
//CAPP.Message.show("message",{
//    duration:"short",           //显示时长   short, long  默认：short
//    position:"center",          //显示位置   'top', 'center', 'bottom'  默认：center
//    addPixelsY:0,               //y坐标修正  默认：0
//    success:function(){},
//    error:function(){}
//});
//隐藏信息  一般不需要调用，显示了会自动消失
//CAPP.Message.hide();





if(!window.CAPP){CAPP = {};}


CAPP.Message = {
    show:function(message,opt){
        opt = opt || {};
        var option = {
            message:message || "",
            duration:opt.duration || "short",       //持续时间：   short, long
            position:opt.position || "center",      //位置：   'top', 'center', 'bottom'
            addPixelsY:opt.addPixelsY  || 0         //y坐标修正
        };
        var success = opt.success || function(){},  //成功回调
            error = opt.error || function(){};      //失败回调

        window.plugins.toast.showWithOptions(
            option,
            success,
            error
        );

    },
    hide:function(){
        window.plugins.toast.hide();
    }
};