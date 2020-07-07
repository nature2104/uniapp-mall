
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/category/category","pages/shopcart/shopcart","pages/me/me","pages/login/login","pages/order/creatOrder","pages/pay/pay","pages/pay/paySuccess","pages/me/set","pages/order/order","pages/product/productList","pages/product/productDetail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"个人商城","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/category/category","iconPath":"static/tab-cate.png","selectedIconPath":"static/tab-cate-current.png","text":"分类"},{"pagePath":"pages/shopcart/shopcart","iconPath":"static/tab-cart.png","selectedIconPath":"static/tab-cart-current.png","text":"购物车"},{"pagePath":"pages/me/me","iconPath":"static/tab-my.png","selectedIconPath":"static/tab-my-current.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-mall","compilerVersion":"2.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"请输入商品 如：项链","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"26","color":"#303133","float":"left","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类"}},{"path":"/pages/shopcart/shopcart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/me/me","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","titleNView":{"type":"transparent","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"24","color":"#303133","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"28","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom"}},{"path":"/pages/order/creatOrder","meta":{},"window":{"navigationBarTitleText":"创建订单"}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"支付"}},{"path":"/pages/pay/paySuccess","meta":{},"window":{"navigationBarTitleText":"支付成功"}},{"path":"/pages/me/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单"}},{"path":"/pages/product/productList","meta":{},"window":{"navigationBarTitleText":"商品列表"}},{"path":"/pages/product/productDetail","meta":{},"window":{"navigationBarTitleText":"商品详情","titleNView":{"type":"transparent"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});