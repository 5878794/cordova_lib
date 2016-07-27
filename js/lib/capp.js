/**
 * Created by beens on 15/12/14.
 */



if(!window.CAPP){CAPP = {};}






//退出app
CAPP.Exit = function(){
    navigator.app.exitApp();
};


//页面准备好
CAPP.ready = (function(){
    var a = 0,
        isReady = false,
        cache = [];

    var init = function(){
        a++;
        if(a == 2){
            isReady = true;
            run();
        }
    };

    document.addEventListener("deviceready",function(){
        init();
    },false);
    $(document).ready(function(){
        init();
    });



    var run = function(){
        for(var i = 0,l=cache.length;i<l;i++){
            cache[i]();
        }
    };


    return function(fn){
        if(isReady){
            fn();
        }else{
            cache.push(fn);
        }
    };

})();