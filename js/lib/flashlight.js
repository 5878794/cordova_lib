/**
 * Created by beens on 15/12/14.
 */




//闪光灯


//install CLI
//cordova plugin add cordova-plugin-flashlight

//www
//https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin



//打开闪光灯
//CAPP.FlashLight.open();

//关闭闪光灯
//CAPP.FlashLight.close();

//开/关切换
//CAPP.FlashLight.toggle();

//获取当前是否打开闪光灯
//CAPP.FlashLight.isOpen();   //return true/false



if(!window.CAPP){CAPP = {};}


CAPP.FlashLight = {
    open:function(){
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                // switch on
                window.plugins.flashlight.switchOn(); // success/error callbacks may be passed
            }
        });
    },
    close:function(){
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
            }
        });
    },
    isOpen:function(){
        return (window.plugins.flashlight)?
            window.plugins.flashlight._isSwitchedOn : false;
    },
    toggle:function(){
        window.plugins.flashlight.available(function(isAvailable) {
            if (isAvailable) {
                window.plugins.flashlight.toggle(); // success/error callbacks may be passed
            }
        });
    }
};