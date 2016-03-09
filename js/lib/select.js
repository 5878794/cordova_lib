/**
 * Created by beens on 15/12/14.
 */




//cordova 系统原生的select

//install CLI
//cordova plugin add cordova-plugin-listpicker

//www
//https://github.com/roberthovhannisyan/PhoneGap-Plugin-ListPicker


//CAPP.SelectShow({
//    title:"请选择数字",      //标题
//    lists:[                 //显示的列表
//        {text:"1",value:"a1"},
//        {text:"2",value:"a2"}
//    ],
//    selected:"a2",          //默认选中哪个，为空不选中
//    okBtn:"好",              //确认button名字，android不显示
//    escBtn:"不好",
//    success:function(a){        //选择后返回value值
//        console.log(a)
//    }
//});






if(!window.CAPP){CAPP = {};}


CAPP.SelectShow = function(opt){

    var title = opt.title || "请选择",
        lists = opt.lists || [],
        selected = opt.selected || lists[0].value,
        okBtn = opt.okBtn || "完成",
        escBtn = opt.escBtn || "取消",
        success = opt.success || function(){};


    var config = {
        title: title,
        items: lists,
        selectedValue: selected,
        doneButtonLabel: okBtn,
        cancelButtonLabel: escBtn
    };

    // Show the picker
    window.plugins.listpicker.showPicker(config,
        function(item) {
            success(item);
        },
        function() {
            //cancel fn
        }
    );


};
