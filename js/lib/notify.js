/**
 * Created by beens on 15/12/16.
 */



//cordova 设备通知

//install CLI
//cordova plugin add cordova-plugin-dialogs

//www
//https://github.com/apache/cordova-plugin-dialogs




//alert
//CAPP.alert("信息内容",
//    {
//        title:"",     //标题， 默认值：提示
//        btnName:""    //按钮名称  默认：确定
//    }
//);
//confirm
//CAPP.confirm("信息内容",
//    {
//        title:"",     //标题， 默认值：提示
//        btnYes:"",    //确定按钮名称  默认：确定
//        btnEsc:"",    //取消按钮名称  默认：取消
//        success:function(){},  //点btnYes  执行
//        cancel:function(){}    //点btnEsc  执行
//    }
//);
//弹出输入对话框
//CAPP.prompt("信息内容",
//    {
//        title:"",     //标题， 默认值：提示
//        btnYes:"",    //确定按钮名称  默认：确定
//        btnEsc:"",    //取消按钮名称  默认：取消
//        val:"",       //输入框中显示的值  默认：空
//        success:function(){},  //点btnYes  执行
//        cancel:function(){}    //点btnEsc  执行
//    }
//);
//响起通知声音    number：响几次
//CAPP.beep(1);






if(!window.CAPP){CAPP = {};}

CAPP.alert = function(msg,opt){
    opt = opt || {};
    var title = opt.title || "提示",
        btn = opt.btnName || "确定",
        callback = opt.callback || function(){};

    navigator.notification.alert(msg, callback, title, btn);
};
CAPP.confirm = function(msg,opt){
    opt = opt || {};
    var title = opt.title || "提示",
        btnYes = opt.btnYes || "确定",
        btnEsc = opt.btnEsc || "取消",
        success = opt.success || function(){},
        cancel = opt.cancel || function(){};


    navigator.notification.confirm(msg, function(a){
        if(a == 1){
            success();
        }else{
            cancel();
        }
    }, title, [btnYes,btnEsc]);
};
CAPP.prompt = function(msg,opt){
    opt = opt || {};
    var title = opt.title || "提示",
        btnYes = opt.btnYes || "确定",
        btnEsc = opt.btnEsc || "取消",
        ts = opt.val || "",
        success = opt.success || function(){},
        cancel = opt.cancel || function(){};

    navigator.notification.prompt(
        msg,
        function(rs){
            if(rs.buttonIndex == 1){
                success(rs.input1);
            }else{
                cancel();
            }
        },
        title,
        [btnYes,btnEsc],
        ts
    )
};
CAPP.beep = function(times){
    navigator.notification.beep(times);
};