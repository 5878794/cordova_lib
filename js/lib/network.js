/**
 * Created by beens on 16/3/23.
 */



//install CLI
//cordova plugin add cordova-plugin-network-information


//www
//https://www.npmjs.com/package/cordova-plugin-network-information



if(!window.CAPP){CAPP = {};}

CAPP.networkState = function(){
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI]     = 'wifi';
    states[Connection.CELL_2G]  = '2G';
    states[Connection.CELL_3G]  = '3G';
    states[Connection.CELL_4G]  = '4G';
    states[Connection.CELL]     = 'Cell';
    states[Connection.NONE]     = false;

    return states[networkState];
};


