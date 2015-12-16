/**
 * Created by beens on 15/12/16.
 */



//cordova   屏幕长亮

//install CLI
//cordova plugin add cordova-plugin-powermanagement

//www
//https://www.npmjs.com/package/cordova-plugin-powermanagement



//屏幕长亮
//CAPP.notAutoOffScreen();
//取消控制
//CAPP.autoOffScreen();




if(!window.CAPP){CAPP = {};}

CAPP.notAutoOffScreen = function(){
    window.powermanagement.acquire();
};
CAPP.autoOffScreen = function(){
    window.powermanagement.release();
};