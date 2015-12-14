/**
 * Created by beens on 15/12/12.
 */


//install CLI
//cordova plugin add https://github.com/Telerik-Verified-Plugins/NativePageTransitions


//www
//http://plugins.telerik.com/cordova/plugin/native-page-transitions


//页面切换过度效果（已增加回退后保存scroll高度的js）
//              （插件原理：抓屏然后加载另一个页面在滑动进来，
//               注意：执行后页面已跳转到新的页面，js执行新页面的，老的页面不执行
//               注意：每个页面都需要引用该js）



//切换到某个页面（滑动效果）
//CAPP.Page.slideTo({href:""});
//后退返回
//CAPP.Page.slideBack();



//其它效果暂未添加





if(!window.CAPP){CAPP = {};}


CAPP.Page = {
    //获取地址栏中当前html文件名称
    getHtmlName:function(){
        var url = window.location.href,
            l = url.lastIndexOf("/")+1;

        url = url.substr(l);
        return url.replace(window.location.search,"");
    },


    //页面滑动
    slideTo:function(opt){
        var options = {
                "direction"        :  opt.direction || "left",      //滑动方向  left|right|up|down
                "duration"         :  opt.duration || 500,          //动画时间  500ms
                "slowdownfactor"   :  opt.slowdownfactor || 1,      //动画重叠等级  1-4？   1：不重叠
                "iosdelay"         :  -1,                           //延迟开始时间，-1为手动切换
                "androiddelay"     :  -1,
                "winphonedelay"    :  -1,
                "fixedPixelsTop"   :  opt.fixedPixelsTop || 0,      //动画从页面顶部多少px开始(顶部导航不切换页面时使用)
                "fixedPixelsBottom":  opt.fixedPixelsBottom || 0,   //动画从页面底部多少px开始
                "href"             :  opt.href || ""               //跳转到哪个页面
            },
            successFn = opt.endFn || function(){},    //切换完成执行
            errorFn = opt.errorFn || function(){};     //切换失败执行

        if(!opt.notSave){
            this._saveSession();
        }


        window.plugins.nativepagetransitions.slide(
            options,
            function () {
                successFn();
            },
            function () {  // called in case you pass in weird values
                errorFn("页面暂时无法打开，请稍后重试！");
            }
        );
    },
    //页面滑动回退
    slideBack:function(){
        var url = this._getBackPageName();

        if(url){
            this.slideTo({
                href:url,
                direction:"right",
                notSave:true
            })
        }
    },


    flipTo:function(){

    },
    fadeTo:function(){

    },
    drawerTo:function(){

    },
    //保存页面跳转记录
    _saveSession:function(){
        var url = this.getHtmlName(),
            y = window.scrollY,
            x = window.scrollX,
            data = sessionStorage.getItem("_back_history_") || "[]";

        data = JSON.parse(data);



        data.push({
            url:url,
            x:x,
            y:y
        });

        sessionStorage.setItem("_back_history_",JSON.stringify(data));
    },
    //获取上个页面文件名
    _getBackPageName:function(){
        var data = sessionStorage.getItem("_back_history_") || "[]";

        data = JSON.parse(data);
        var l = data.length;


        if(l==0){
            return "";
        }

        return data[l-1].url;
    }
};




document.addEventListener("deviceready",function(){
    $(document).ready(function(){
        //获取记录中最后一个页面
        var data = sessionStorage.getItem("_back_history_") || "[]";
        data = JSON.parse(data);

        var url = CAPP.Page.getHtmlName(),
            l = data.length,
            _data = data[l-1];


        //判断是否是后退页面，重置后退页面的滚轮高度
        if(_data && _data.url == url){
            var x = _data.x,
                y = _data.y;
            window.scrollTo(x,y);

            data.pop();
            sessionStorage.setItem("_back_history_",JSON.stringify(data));

        }

        //页面切换
        window.plugins.nativepagetransitions.executePendingTransition(
            function(){},
            function(){}
        );
    });
},false);



