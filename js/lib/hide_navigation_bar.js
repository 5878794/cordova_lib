/**
 * Created by beens on 15/12/16.
 */



//cordova 隐藏底部导航条  (返回。主页，菜单 按钮)

//install CLI
//cordova plugin add cordova-plugin-navigationbar

//www
//https://www.npmjs.com/package/cordova-plugin-navigationbar




//自动隐藏
//CAPP.NavigationBar.hide();




if(!window.CAPP){CAPP = {};}

CAPP.NavigationBar = {
    hide:function(){
        window.navigationbar.setUp(false);
        window.navigationbar.hideNavigationBar()
    }
};