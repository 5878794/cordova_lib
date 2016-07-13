/**
 * Created by beens on 15/12/13.
 */


//允许访问在线地址
//config.xml 中增加
//<allow-navigation href="*"/>
//<allow-navigation href="http://*/*" />
//<allow-navigation href="https://*/*" />


//解决页面加载过慢会报错退出的bug
//config.xml 中增加
//<preference name="loadUrlTimeoutValue" value="99999999" />



//屏蔽ios的弹性滚动
//config.xml 中增加
//<preference name="DisallowOverscroll" value="true" />



//解决页面meta 设置viewport的width无效的问题
//在...platforms/android/CordovaLib/src/org/apache/cordova/engine/SystemWebViewEngine.java
//   中initWebViewSettings方法中加入下面2行
//settings.setUseWideViewPort(true);
//settings.setLoadWithOverviewMode(true);