/**
 * Created by beens on 15/12/17.
 */

//cordova loading

//install CLI
//cordova plugin add cordova-plugin-spinner

//www
//https://www.npmjs.com/package/cordova-plugin-spinner





if(!window.CAPP){CAPP = {};}

CAPP.loading = {
    show:function(text){
        SpinnerPlugin.activityStart(text);
    },
    hide:function(){
        SpinnerPlugin.activityStop();
    }
};