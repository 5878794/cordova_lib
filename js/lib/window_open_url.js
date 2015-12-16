/**
 * Created by beens on 15/12/15.
 */




//cordova 打开一个网页

//install CLI
//cordova plugin add cordova-plugin-inappbrowser

//www
//https://www.npmjs.com/package/cordova-plugin-inappbrowser



//打开一个地址
//CAPP.WindowOpenUrl.open({
//    //打开的地址
//    url:"http://www.baidu.com",
//    //打开方式  _blank（app自身），_system（系统浏览器中）
//    target:"_blank",
//    //是否显示地址栏
//    location:false,
//    //初始是否隐藏。（可以用事件监听在加载完成后显示）
//    hidden:false,
//    //ios 关闭按钮文字
//    closebuttoncaption:"关闭",
//    //ios 关闭弹性滚动
//    disallowoverscroll:true,
//    //ios 允许自动播放
//    mediaPlaybackRequiresUserAction:true,
//    //ios 允许在线视频回退？
//    allowInlineMediaPlayback:true,
//    //打开页面切换效果 fliphorizontal,crossdissolve,coververtical
//    transitionstyle:"coververtical",
//    //关闭按钮位置  top,bottom
//    toolbarposition:"top",
//    //页面加载完成执行
//    loadedFn:function(){
//        this.show();    //显示页面     hidden=true时可以这样显示
//        var _this = this;
//        setTimeout(function(){
//            _this.close();  //页面关闭
//        },10000)
//    },
//    //需要注入的js和css文件  路径相对index.html
//    addJsFiles:["a.js",...],
//    addCssFiles:["a.css",...]
//});
//关闭打开的页面
//CAPP.WindowOpenUrl.close();
//显示  （初始隐藏时调用）
//CAPP.WindowOpenUrl.show();







if(!window.CAPP){CAPP = {};}


CAPP.WindowOpenUrl = {
    _obj:null,
    open:function(opt){
        var js_files = opt.addJsFiles || [],
            css_files = opt.addCssFiles || [],
            js_codes = "",
            css_codes = "",
            _this = this;

        this._readFiles(js_files,function(js){
            js_codes = js;
            _this._readFiles(css_files,function(css){
                css_codes = css;
                opt.addJsFiles = js_codes;
                opt.addCssFiles = css_codes;
                _this._run(opt);
            })
        });
    },
    _run:function(opt){
            //打开的地址
        var url = opt.url,
            //打开方式  _blank（app自身），_system（系统浏览器中）
            target = opt.target || "_blank",
            //是否显示地址栏
            location = opt.location || false,
            //是否隐藏。（可以用事件监听是否加载完成在显示）
            hidden = opt.hidden || false,
            //ios 关闭按钮文字
            closebuttoncaption = opt.closeButtonText || "关闭",
            //ios 关闭弹性滚动
            disallowoverscroll = opt.disallowoverscroll || true,
            //ios 允许自动播放
            mediaPlaybackRequiresUserAction = true,
            //ios 允许在线视频回退？
            allowInlineMediaPlayback = true,
            //打开页面切换效果 fliphorizontal,crossdissolve,coververtical
            transitionstyle = "coververtical",
            //关闭按钮位置  top,bottom
            toolbarposition = "top",
            loadedFn = opt.loadedFn || function(){},
            addJsCode = opt.addJsFiles || "",
            addCssCode = opt.addCssFiles || "";






        var options = {
            location:(location)? "yes" : "no",
            hidden:(hidden)? "yes" : "no",
            disallowoverscroll : (disallowoverscroll)? "yes" : "no",
            closebuttoncaption:closebuttoncaption,
            mediaPlaybackRequiresUserAction:(mediaPlaybackRequiresUserAction)? "yes" : "no",
            allowInlineMediaPlayback:(allowInlineMediaPlayback)?"yes":"no",
            transitionstyle: transitionstyle,
            toolbarposition:toolbarposition
        };
        var send_options = "";
        for(var key in options){
            if(options.hasOwnProperty(key)){
                send_options+= key+"="+options[key]+","
            }
        }
        send_options = send_options.substr(0,send_options.length-1);


        var _this = this;
        this._obj = cordova.InAppBrowser.open(url,target,send_options);
        this._obj.addEventListener("loadstop",function(){
            if(addJsCode){
                _this._obj.executeScript({code:addJsCode});
            }
            if(addCssCode){
                _this._obj.insertCSS({code:addCssCode});
            }
            loadedFn.call(_this);
        });
    },
    close:function(){
        this._obj.close();
    },
    show:function(){
        this._obj.show();
    },
    _readFiles:function(files,endFn){
        var texts = [];

        var getFile = function(filename){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', filename , true);
            xhr.responseType = 'text';
            xhr.onload = function() {
                texts.push(this.response);
                getFiles();
            };

            xhr.send();
        };

        var getFiles = function(){
            if(files.length == 0){
                endFn(texts.join(""));
            }else{
                var file = files.shift();
                getFile(file);
            }




        };

        getFiles();
    }
};