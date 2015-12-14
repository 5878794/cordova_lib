/**
 * Created by beens on 15/12/14.
 */


//cordova原生屏蔽垂直滚动条，使用该库可控制是否显示滚动条

//install CLI
//cordova plugin add cordova-android-scrollbar

//www
//https://github.com/mayflower/cordova-android-scrollbar


//显示滚动条
//CAPP.ScrollBar.show();




if(!window.CAPP){CAPP = {};}

CAPP.ScrollBar = {
    show:function(){
        this._run(true);
    },
    _run:function(state){
        mayflower.AndroidScrollbar.toggleVerticalScrollbarVisibility(state)
            .then(
            function() {
                console.log('Vertical scrollbar enabled');
            },
            function(error) {
                console.log('error', error);
            }
        );
    }
};