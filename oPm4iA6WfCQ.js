;/*FB_PKG_DELIM*/

__d("isBarcelonaURI",[],(function(a,b,c,d,e,f){function a(a){var b=a.getProtocol();a=a.getDomain();return(b==="http"||b==="https")&&(a==="threads.net"||a.endsWith(".threads.net")||a==="threads.com"||a.endsWith(".threads.com"))}f["default"]=a}),66);
__d("isLinkshimURI",["LinkshimHandlerConfig","isBarcelonaURI","isFacebookURI","isMessengerDotComURI"],(function(a,b,c,d,e,f,g){"use strict";b=c("LinkshimHandlerConfig").linkshim_host.split(".");var h=b[b.length-1];function a(a){var b=a.getPath();if((b==="/l.php"||b.indexOf("/si/ajax/l/")===0||b.indexOf("/l/")===0||b.indexOf("l/")===0)&&(c("isFacebookURI")(a)||c("isMessengerDotComURI")(a)))return!0;if(b==="/linkshim"&&c("isBarcelonaURI")(a))return!0;if(b===c("LinkshimHandlerConfig").linkshim_path&&a.isSubdomainOfDomain(h)){b=a.getQueryData();if(b[c("LinkshimHandlerConfig").linkshim_enc_param]!=null&&b[c("LinkshimHandlerConfig").linkshim_url_param]!=null)return!0}return!1}g["default"]=a}),98);
__d("FBLynxBase",["$","LinkshimHandlerConfig","URI","cr:7736","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";var g;function h(a){if(!b("isLinkshimURI")(a))return null;a=a.getQueryData().u;return!a?null:a}var i={logAsyncClick:function(a){i.swapLinkWithUnshimmedLink(a);a=a.getAttribute("data-lynx-uri");if(!a)return;b("cr:7736").log(a)},originReferrerPolicyClick:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;i.logAsyncClick(a);setTimeout(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},swapLinkWithUnshimmedLink:function(a){var c=a.href,d=h(new(g||(g=b("URI")))(c));if(!d)return;a.setAttribute("data-lynx-uri",c);a.href=d},revertSwapIfLynxURIPresent:function(a){var b=a.getAttribute("data-lynx-uri");if(!b)return;a.removeAttribute("data-lynx-uri");a.href=b}};e.exports=i}),null);
__d("FBLynx",["Base64","Event","FBLynxBase","LinkshimHandlerConfig","Parent","URI"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,setupDelegation:function(a){a===void 0&&(a=!1);if(!document.documentElement)return;if(document.body==null){if(a)return;window.setTimeout(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;var c=function(a){var c=i.getMaybeLynxLink(a.target);if(!c)return;var d=c[0];c=c[1];var e=c,f=new(g||(g=b("URI")))(c.href),j;if(b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&(c.dataset&&c.dataset.attributes)){j=b("Base64").decodeObject(c.dataset.attributes);if(j&&j.open_link){var k;for(k in j)k!=="open_link"&&f.addQueryData(k,j[k]);k=c.cloneNode(!0);k.href=f.toString();e=k}}switch(d){case"async":case"asynclazy":b("FBLynxBase").logAsyncClick(e);break;case"origin":b("FBLynxBase").originReferrerPolicyClick(e);break;case"hover":i.hoverClick(e);break}b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&j&&j.open_link&&(a.preventDefault(),h(f,window.open("",e.target),!0))};b("Event").listen(document.body,"click",c);b("LinkshimHandlerConfig").middle_click_requires_event&&b("Event").listen(document.body,"mouseup",function(a){a.button==1&&c(a)});b("Event").listen(document.body,"mouseover",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"asynclazy":case"origin":case"hover":i.mouseover(a);break}});b("Event").listen(document.body,"contextmenu",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"hover":case"origin":i.contextmenu(a);break;case"asynclazy":break}})},getMaybeLynxLink:function(a){a=b("Parent").byAttribute(a,"data-lynx-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lynx-mode");switch(c){case"async":case"asynclazy":case"hover":case"origin":return[c,a];default:return null}}return null},hoverClick:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)},mouseover:function(a){b("FBLynxBase").swapLinkWithUnshimmedLink(a)},contextmenu:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)}};e.exports=i}),null);
__d("XLynxAsyncCallbackControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/si/linkclick/ajax_callback/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FBLynxLogging",["AsyncRequest","ODS","XLynxAsyncCallbackControllerRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b=c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});new(c("AsyncRequest"))(b).setData({lynx_uri:a}).setErrorHandler(function(a){a=a.getError();(h||(h=d("ODS"))).bumpEntityKey(3861,"linkshim","click_log.post.fail."+a)}).setTransportErrorHandler(function(a){a=a.getError();(h||(h=d("ODS"))).bumpEntityKey(3861,"linkshim","click_log.post.transport_fail."+a)}).send()}g.log=a}),98);
__d("VideoDisplayTimePlayButton",["CSS","DataStore","Event"],(function(a,b,c,d,e,f,g){"use strict";var h={},i="_spinner";function a(a){return d("DataStore").get(a,"clicked",!1)}function b(a,b){var e=a.id;h[e]=c("Event").listen(a,"click",function(){b&&(d("CSS").hide(a),d("CSS").show(b)),d("DataStore").set(a,"clicked",!0)});b&&(h[e+i]=c("Event").listen(b,"click",function(){b&&d("CSS").hide(b),d("CSS").show(a),d("DataStore").set(a,"clicked",!1)}))}function e(a){a=a.id;Object.prototype.hasOwnProperty.call(h,a)&&h[a].remove();a=a+i;Object.prototype.hasOwnProperty.call(h,a)&&h[a].remove()}g.getClicked=a;g.register=b;g.unregister=e}),98);
__d("VideosRenderingInstrumentation",["DataStore","VideoPlayerHTML5Experiments","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){var h;function i(a){var b=c("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers?(h||(h=c("performanceAbsoluteNow")))():Date.now();d("DataStore").set(a,"videos_rendering_instrumentation",b);return b}function a(a){var b=d("DataStore").get(a,"videos_rendering_instrumentation",NaN);Number.isNaN(b)&&(b=i(a));return b}g.storeRenderTime=i;g.retrieveRenderTime=a}),98);