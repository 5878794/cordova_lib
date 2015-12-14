/**
 * Created by beens on 15/12/14.
 */




//cordova 控制系统软键盘

//install CLI
//cordova plugin add ionic-plugin-keyboard

//www
//https://www.npmjs.com/package/ionic-plugin-keyboard


//显示软键盘   ios不支持
//CAPP.KeyBoard.show();

//关闭软键盘
//CAPP.KeyBoard.close();

//监听键盘打开
//CAPP.KeyBoard.addEventShow(function(height){console.log("软键盘的高度:"+height)});

//监听键盘关闭
//CAPP.KeyBoard.addEventClose(fn);



//下面2个最好不要用
//隐藏ios的软件盘上的  功能键（上一个，下一个，done）   ios特有
//CAPP.KeyBoard.hideAccessoryBar(true/false);

//禁止ios的页面滚动            ios特有
// 注意：页面无法滚动，  需要在调解锁才能滑动，即使软键盘已关闭
//CAPP.KeyBoard.disableScroll(true/false);




if(!window.CAPP){CAPP = {};}




CAPP.KeyBoard = {
    //只支持ios    隐藏下一个，上一个，done 按钮
    hideAccessoryBar:function(state){
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(state);
    },
    //只支持ios    禁止系统滚动
    disableScroll:function(state){
        cordova.plugins.Keyboard.disableScroll(state);
    },
    //关闭键盘
    close:function(){
        cordova.plugins.Keyboard.close();
    },
    //只支持android   打开键盘
    show:function(){
        cordova.plugins.Keyboard.show();
    },
    //增加监听 键盘弹出时执行
    addEventShow:function(fn){
        window.addEventListener('native.keyboardshow', function(e){
            fn(e.keyboardHeight);
        });
    },
    //增加监听 键盘关闭时执行
    addEventClose:function(fn){
        window.addEventListener('native.keyboardhide', function(){
            fn();
        });
    }
};