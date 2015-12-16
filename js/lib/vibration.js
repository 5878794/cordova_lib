/**
 * Created by beens on 15/12/16.
 */



//cordova 震动

//install CLI
//cordova plugin add cordova-plugin-vibration

//www
//https://www.npmjs.com/package/cordova-plugin-vibration



//让设备震动
//注意：1000<=time<=5000
//CAPP.Vibration(time);




if(!window.CAPP){CAPP = {};}

CAPP.Vibration = function(time){
    navigator.vibrate(time)
};