;/*FB_PKG_DELIM*/

__d("BanzaiLogger",["cr:9989"],(function(a,b,c,d,e,f,g){function h(a){return{log:function(c,d){b("cr:9989").post("logger:"+c,d,a)},create:h}}a=h();c=a;g["default"]=c}),98);
__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){var g=function(){function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};b=a;f["default"]=b}),66);
__d("CometEnvironmentSite",[],(function(a,b,c,d,e,f){a=Object.freeze({NONE:0,GENERIC_COMET_DO_NOT_USE:1,COMET_ON_MOBILE:2,COMET_ON_INSTAGRAM_DO_NOT_USE:3,FB_ACCOUNTS_CENTER:5,CANVAS:6,IG_WWW:7,FRL_ACCOUNTS_CENTER:8,NOVI_CHECKOUT:9,ENTERPRISE_CENTER:10,BIZ_WEB:11,BUSINESS_FB:12,HORIZON_WORLDS:14,FB_WEB:15,WHATSAPP:17,META_DOT_COM:18,OCULUS_DOT_COM:19,FRL_FAMILY_CENTER:20,WHATSAPP_FAQ:23,IG_ACCOUNTS_CENTER:24,ADS_MANAGER_ON_BLUE:25,MESSENGER_FAMILY_CENTER:26,META_WORK_PORTFOLIO:27,BARCELONA_WEB:29,FB_FAMILY_CENTER:30,CANDIDATE_PORTAL:31,META_HELP:32,FRL_AUTH:33,META_LLAMA:34,IG_GEN_AI_STUDIO:35,FB_GEN_AI_STUDIO:36,IG_FAMILY_CENTER:37,IG_PRIVACY_CENTER:38,IG_HELP_CENTER:39,ABOUT_META:40,IG_GEN_AI_IMAGINE:41,FB_GEN_AI_IMAGINE:42,INTERNALFB:43,COMMERCE_MANAGER:44,QUEST_DEV_CENTER:45,ABRA:46,META_BUG_BOUNTY:47,CTRL_VERSE_DATA_COLLECTION:48,META_CONTENT_LIBRARY_UI:49,SUPPORT_PORTAL:50,MSE_RATING_TOOL:51,MEDIA_PORTAL:52,COMMERCE_PERMISSION_WIZARD:53,SA_DEMO_BOOKING:55,COMMERCE_EXTENSION:56,FB_PRIVACY_CENTER:57,ADS_MANAGER_ON_COMET:58,FB_HELP_CENTER:59,MONETIZATION_DOGFOODING:61,AI_DEMOS:62,DEVELOPER_PLATFORM:63,PARTNERSHIP_ADS_HUB:64,INSTAGRAM_ABOUT:65,TRANSPARENCY:66,BUSINESS_USER_PROFILE_MANAGED_ACCOUNT:67,WHATSAPP_FLOWS:68,GENERATIVE_OFFENSIVE_ASSESSMENT_TOOL:69,SHOPIFY_APP:70,LLAMA_DEV_CENTER:71,KADABRA:72,THREADS_FAMILY_CENTER:73,PAYMENTS:74});f["default"]=a}),66);
__d("getOrCreateDOMID",["uniqueID"],(function(a,b,c,d,e,f,g){function a(a){a.id||(a.id=c("uniqueID")());return a.id}g["default"]=a}),98);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){function a(a,b){a.setAttribute("data-ownerid",c("getOrCreateDOMID")(b))}function b(a,b){b=b;while(b){if(c("containsNode")(a,b))return!0;b=h(b)}return!1}function h(a){a=a;var b;while(a){if(a.getAttribute&&(b=a.getAttribute("data-ownerid")))return c("ge")(b);a=a.parentNode}return null}function e(a,b){a=a;var e;while(a&&!d("CSS").hasClass(a,b))a.getAttribute&&(e=a.getAttribute("data-ownerid"))?a=c("ge")(e):a=a.parentNode;return a}g.register=a;g.containsIncludingLayers=b;g.getContext=h;g.parentByClass=e}),98);
__d("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}f["default"]=a}),66);
__d("EventListener",["cr:5695"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:5695")}),98);
__d("getElementText",["isElementNode","isTextNode"],(function(a,b,c,d,e,f,g){var h=null;function a(a){if(c("isTextNode")(a))return a.data;else if(c("isElementNode")(a)){if(h===null){var b=document.createElement("div");h=b.textContent!=null?"textContent":"innerText"}return a[h]}else return""}g["default"]=a}),98);
__d("isContentEditable",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a;while(a instanceof HTMLElement){if(a.contentEditable==="true"||a.contentEditable==="plaintext-only")return!0;a=a.parentElement}return!1}f["default"]=a}),66);
__d("isElementInteractive",["isContentEditable"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set(["EMBED","INPUT","OBJECT","SELECT","TEXTAREA"]),i=new Set(["button","checkbox","radio","submit"]);function a(a){if(!a instanceof HTMLElement)return!1;var b=c("isContentEditable")(a),d=h.has(a.nodeName);a=a instanceof HTMLInputElement&&i.has(a.type);return(b||d)&&!a}g["default"]=a}),98);
__d("KeyEventController",["Bootloader","DOMQuery","Event","Run","emptyFunction","getElementText","isContentEditable","isElementInteractive","isEmpty"],(function(a,b,c,d,e,f,g){var h,i=null,j={BACKSPACE:[8],TAB:[9],RETURN:[13],ALT:[18],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],NUMPAD_ADD:[43],NUMPAD_SUBSTRACT:[45],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],"`":[192],"[":[219],"]":[221],PAGE_UP:[33],PAGE_DOWN:[34],END:[35],HOME:[36],SPACE:[32],KP_DOT:[46,110],"-":[189],"=":[187],FORWARD_SLASH:[191]},k=(a={},a[8]=1,a[9]=1,a[13]=1,a[27]=1,a[32]=1,a[37]=1,a[63234]=1,a[38]=1,a[63232]=1,a[39]=1,a[63235]=1,a[40]=1,a[63233]=1,a[46]=1,a);b=function(){function a(){var a=this;this.handlers={};["keyup","keydown","keypress"].forEach(function(b){return document.addEventListener(b,a.onkeyevent.bind(a,"on"+b))})}var b=a.prototype;b.mapKey=function(a){a=a;if(/^[0-9]$/.test(a+"")){typeof a!=="number"&&(a=a.charCodeAt(0)-48);return[48+a,96+a]}a+="";var b=j[a.toUpperCase()];return b?b:[a.toUpperCase().charCodeAt(0)]};b.onkeyevent=function(a,b){var d=b;d=c("Event").$E(d);b=this.handlers[d.keyCode]||this.handlers[d.which];if(b)for(var e=0;e<b.length;e++){var f=b[e].callback,g=b[e].filter;try{if(!g||g(d,a)){g=function(){var b=f(d,a),e=d.which||d.keyCode;c("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut").setKey(d.key||"").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted",d.isTrusted).log()},"KeyEventController");if(b===!1)return{v:c("Event").kill(d)}}();if(typeof g==="object")return g.v}}catch(a){}}return!0};b.resetHandlers=function(){for(var a in this.handlers)if(Object.prototype.hasOwnProperty.call(this.handlers,a)){var b=this.handlers[a].filter(function(a){return a.preserve()});b.length?this.handlers[a]=b:delete this.handlers[a]}};a.getInstance=function(){return i||(i=new a())};a.defaultFilter=function(b,d){b=c("Event").$E(b);return a.filterEventTypes(b,d)&&a.filterEventTargets(b,d)&&a.filterEventModifiers(b,d)};a.filterEventTypes=function(a,b){return b==="onkeydown"?!0:!1};a.filterEventTargets=function(a,b){b=a.getTarget();return!c("isElementInteractive")(b)||a.keyCode in k&&(d("DOMQuery").isNodeOfType(b,["input","textarea"])&&b.value.length===0||c("isContentEditable")(b)&&c("getElementText")(b).length===0)};a.filterEventModifiers=function(a,b){return a.ctrlKey||a.altKey||a.metaKey||a.repeat?!1:!0};a.registerKeyAcrossTransitions=function(b,d,e,f){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);return a.registerKey(b,d,e,f,c("emptyFunction").thatReturnsTrue)};a.registerKey=function(b,e,f,g,i){f===void 0&&(f=a.defaultFilter);g===void 0&&(g=!1);i===void 0&&(i=c("emptyFunction").thatReturnsFalse);b=b;var j=a.getInstance(),k=b==null?[]:j.mapKey(b);(h||(h=c("isEmpty")))(j.handlers)&&d("Run").onLeave(j.resetHandlers.bind(j));var l={};for(var m=0;m<k.length;m++){b=""+k[m];(!j.handlers[b]||g)&&(j.handlers[b]=[]);var n={callback:e,filter:f,preserve:i};l[b]=n;j.handlers[b].push(n)}return{remove:function(){for(var a in l){if(j.handlers[a]&&j.handlers[a].length){var b=j.handlers[a].indexOf(l[a]);b>=0&&j.handlers[a].splice(b,1)}delete l[a]}}}};a.registerKeyForButtonCallback=function(b,c){return a.registerKey(b,function(){c.click();return!1})};return a}();g["default"]=b}),98);
__d("KeyStatus",["Event","ExecutionEnvironment"],(function(a,b,c,d,e,f,g){var h,i=null,j=null;function k(){j||(j=c("Event").listen(window,"blur",function(){i=null,l()}))}function l(){j&&(j.remove(),j=null)}function a(a){i=c("Event").getKeyCode(a),k()}function b(){i=null,l()}if((h||c("ExecutionEnvironment")).canUseDOM){f=document.documentElement;if(f)if(f.addEventListener)f.addEventListener("keydown",a,!0),f.addEventListener("keyup",b,!0);else if(f.attachEvent){f=f.attachEvent;f("onkeydown",a);f("onkeyup",b)}}function d(){return!!i}function e(){return i}g.isKeyDown=d;g.getKeyDownCode=e}),98);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("react-compiler-runtime",[],(function(a,b,c,d,e,f){"use strict";var g=null;function a(a){return g.H.useMemoCache(a)}function b(a){g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE}f.c=a;f.initReactCompilerRuntime=b}),66);
__d("react-forget-runtime",["invariant","CometEnvironmentSite","DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE","FBLogger","SiteData","err","gkx"],(function(a,b,c,d,e,f,g,h){var i=null,j=null,k=!1,l=a.console,m=[],n={};a=c("gkx")("21075");var o="Jest-Only Fatal: ",p=a?o:"";function q(a){if(!k){var b=c("err")(o+a);l.error(o+a+"\n"+b.stack);k=!0;c("FBLogger")("React").warn("React compiler guard functions used in production.")}}["useCallback","useContext","useEffect","useImperativeHandle","useInsertionEffect","useLayoutEffect","useMemo","useReducer","useRef","useState","useDebugValue","useDeferredValue","useTransition","useMutableSource","useSyncExternalStore","useId","useCacheRefresh","useOptimistic"].forEach(function(a){n[a]=function(){var a="[React] Unexpected React hook call {name} from a React Forget compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') ";q(a)}});var r=["useMemoCache","unstable_useMemoCache","readContext","unstable_isNewReconciler","getCacheSignal","getCacheForType","use"];a=function(){var a=r[s];n[a]=function(){if(j==null)throw c("FBLogger")("React").mustfixThrow("React Forget internal error: unexpected null dispatcher");else{var b;return(b=j)[a].apply(b,arguments)}}};for(var s=0;s<r.length;s++)a();function b(a){i.H==null;var b=i.H;if(b==null)return;if(a===0){m.push(b);m.length===1&&(j=b);if(b===n){var d="[React] Unexpected call to custom hook or component from a React Forget compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked.";q(d)}i.H=n}else if(a===1){d=m.pop();if(d==null)throw c("FBLogger")("React").mustfixThrow("React Forget internal error: unexpected null in guard stack");m.length===0&&(j=null);i.H=d}else if(a===2)m.push(b),j!=null&&(i.H=j);else if(a===3){d=m.pop();if(d==null)throw c("FBLogger")("React").mustfixThrow("React Forget internal error: unexpected null in guard stack");i.H=d}}function d(a){t=a.isValidElement,i=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,a.unstable_useContextWithBailout,a.useContext}a=!1;function e(a,b){l.log(a,b)}var t=null;function u(a){return(a=t==null?void 0:t(a))!=null?a:!1}var v=new Set();function f(a,b,d,e,f,g){function i(a,b,c,h){c=p+"Forget change detection: "+f+":"+g+" ["+e+"]: "+d+c+" changed from "+a+" to "+b+" (depth "+h+")";if(v.has(c))return;v.add(c);l.error(c)}var j=2;function k(a,b,d,e){if(e>j)return;else if(a===b)return;else if(typeof a!==typeof b)i("type "+typeof a,"type "+typeof b,d,e);else if(typeof a==="object"){typeof b==="object"||h(0,18576);if(a===null||b===null)(a!==null||b!==null)&&i("type "+(a===null?"null":"object"),"type "+(b===null?"null":"object"),d,e);else if(a instanceof Map)if(!(b instanceof Map))i("Map instance","other value",d,e);else if(a.size!==b.size)i("Map instance with size "+a.size,"Map instance with size "+b.size,d,e);else for(var f=a,g=Array.isArray(f),l=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var m;if(g){if(l>=f.length)break;m=f[l++]}else{l=f.next();if(l.done)break;m=l.value}m=m;var n=m[0];m=m[1];!b.has(n)?i("Map instance with key "+String(n),"Map instance without key "+String(m),d,e):k(m,b.get(n),d+".get("+String(n)+")",e+1)}else if(b instanceof Map)i("other value","Map instance",d,e);else if(a instanceof Set)if(!(b instanceof Set))i("Set instance","other value",d,e);else if(a.size!==b.size)i("Set instance with size "+a.size,"Set instance with size "+b.size,d,e);else for(m=b,n=Array.isArray(m),l=0,m=n?m:m[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(n){if(l>=m.length)break;g=m[l++]}else{l=m.next();if(l.done)break;g=l.value}f=g;a.has(f)||i("Set instance without element "+String(f),"Set instance with element "+String(f),d,e)}else if(b instanceof Set)i("other value","Set instance",d,e);else if(Array.isArray(a)||Array.isArray(b))if(!Array.isArray(a)||!Array.isArray(b))i("type "+(Array.isArray(a)?"array":"object"),"type "+(Array.isArray(b)?"array":"object"),d,e);else if(a.length!==b.length)i("array with length "+a.length,"array with length "+b.length,d,e);else for(g=0;g<a.length;g++)k(a[g],b[g],d+"["+g+"]",e+1);else if(u(a)||u(b))!u(a)||!u(b)?i("type "+(u(a)?"React element":"object"),"type "+(u(b)?"React element":"object"),d,e):c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(a).type!==c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(b).type?i("React element of type "+String(c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(a).type.name),"React element of type "+String(c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(b).type.name),d,e):k(c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(a).props,c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(b).props,"[props of "+d+"]",e+1);else{for(f in b)f in a||i("object without key "+f,"object with key "+f,d,e);for(l in a)!(l in b)?i("object with key "+l,"object without key "+l,d,e):k(a[l],b[l],d+"."+l,e+1)}}else if(typeof a==="function")return;else isNaN(a)||isNaN(b)?isNaN(a)!==isNaN(b)&&i(""+(isNaN(a)?"NaN":"non-NaN value"),""+(isNaN(b)?"NaN":"non-NaN value"),d,e):a!==b&&i(String(a),String(b),d,e)}k(a,b,"",0)}g.$dispatcherGuard=b;g.initReactForgetRuntime=d;g.shouldLogRender=a;g.logRender=e;g.$structuralCheck=f}),98);
__d("setupReactRefresh",["cr:1108857"],(function(a,b,c,d,e,f,g){}),34);
__d("shimReactSecretInternals_DEPRECATED",["FBLogger","justknobx"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set();function i(a,b){b===void 0&&(b="warn");if(c("justknobx")._("1806")){if(h.has(a))return;h.add(a);var d=c("FBLogger")("react","secret-internals-shim-"+a);b==="warn"?d.warn("Access to a renamed property of React's secret internals: %s. A library or hack needs to be updated.",a):d.mustfix("Access to a renamed property of React's secret internals: %s. A library or hack needs to be updated.",a)}}function a(a){var b=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;Object.assign(b,{ReactCurrentDispatcher:{get current(){return b.H},set current(a){b.H=a}},ReactCurrentCache:{get current(){i("ReactCurrentCache-current-get");return b.A},set current(a){i("ReactCurrentCache-current-set"),b.A=a}},ReactCurrentBatchConfig:{get transition(){i("ReactCurrentBatchConfig-transition-get");return b.T},set transition(a){i("ReactCurrentBatchConfig-transition-set"),b.T=a}},ReactCurrentOwner:{get current(){var a=b.A;return a===null?null:a.getOwner()},set current(a){i("ReactCurrentOwner-current-set","mustfix")}}});a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b}g["default"]=a}),98);
__d("React",["FBLogger","cr:1294158","react-compiler-runtime","react-forget-runtime","setupReactRefresh","shimReactSecretInternals_DEPRECATED"],(function(a,b,c,d,e,f){b("setupReactRefresh");a=b("cr:1294158");b("shimReactSecretInternals_DEPRECATED")(a);b("react-forget-runtime").initReactForgetRuntime(a);b("react-compiler-runtime").initReactCompilerRuntime(a);var g=a.createFactory;a.createFactory=function(){b("FBLogger")("react","createfactory").mustfix("React.createFactory is not supported anymore");return g.apply(void 0,arguments)};e.exports=a}),null);
__d("ReactDOM",["consolePatchForReact","cr:1293","cr:1294159","cr:7162","cr:734","err","setupReactRefresh"],(function(a,b,c,d,e,f,g){var h,i;b("setupReactRefresh");b("consolePatchForReact");function a(){throw c("err")("This React API is not available on Workplace.")}e=b("cr:734")?b("cr:734")(b("cr:1294159").createPortal):b("cr:1294159").createPortal;function d(a,c,d){return b("cr:1294159").hydrateRoot(a,c,babelHelpers["extends"]({onRecoverableError:function(a){if(a!=null&&typeof a.message==="string"){var b=a.message;if(b.indexOf("The server could not finish this Suspense boundary")!==-1||b.indexOf("Minified React error #419;")!==-1||b.indexOf("This Suspense boundary received an update")!==-1||b.indexOf("Minified React error #421;")!==-1)return}typeof reportError==="function"&&reportError(a)}},d))}f=(f=b("cr:1293")==null?void 0:b("cr:1293").findDOMNode)!=null?f:a;h=(h=b("cr:7162")==null?void 0:b("cr:7162").render_DEPRECATED)!=null?h:a;i=(i=b("cr:7162")==null?void 0:b("cr:7162").unmountComponentAtNode_DEPRECATED)!=null?i:a;g.createPortal=e;g.createRoot=b("cr:1294159").createRoot;g.hydrateRoot=d;g.flushSync=b("cr:1294159").flushSync;g.useFormStatus=b("cr:1294159").useFormStatus;g.useFormState=b("cr:1294159").useFormState;g.version=b("cr:1294159").version;g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b("cr:1294159").__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b("cr:1294159").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;g.unstable_batchedUpdates=b("cr:1294159").unstable_batchedUpdates;g.unstable_createEventHandle=b("cr:1294159").unstable_createEventHandle;g.findDOMNode=f;g.render=h;g.unmountComponentAtNode=i}),98);
__d("ReactDOMCompatibilityLayer",["ReactDOM"],(function(a,b,c,d,e,f,g){"use strict";var h=typeof WeakMap==="function"?new WeakMap():new Map();function a(a,b){var c=h.get(b);c==null&&(c=d("ReactDOM").createRoot(b),h.set(b,c));b=null;var e=a.props.ref;d("ReactDOM").flushSync(function(){var d;return(d=c)==null?void 0:d.render(typeof a.type==="string"||((d=a.type)==null?void 0:(d=d.prototype)==null?void 0:d.isReactComponent)?babelHelpers["extends"]({},a,{props:babelHelpers["extends"]({},a.props,{ref:function(a){typeof e==="function"?e(a):e!=null&&(e.current=a),b=a}})}):a)});return b}function b(a){if(a==null)return!1;var b=h.get(a);if(b){d("ReactDOM").flushSync(function(){b.unmount()});h["delete"](a);return!0}return!1}g.render_DEPRECATED=a;g.unmountComponentAtNode_DEPRECATED=b}),98);
__d("ReactDOM_DEPRECATED",["ReactDOMCompatibilityLayer","cr:1293","err","setupReactRefresh"],(function(a,b,c,d,e,f,g){b("setupReactRefresh");function a(){throw c("err")("This React API is not available on Workplace.")}f=(e=b("cr:1293").findDOMNode)!=null?e:a;g.findDOMNode_DEPRECATED=f;g.render_DEPRECATED=d("ReactDOMCompatibilityLayer").render_DEPRECATED;g.unmountComponentAtNode_DEPRECATED=d("ReactDOMCompatibilityLayer").unmountComponentAtNode_DEPRECATED}),98);
__d("isValidReactElement",[],(function(a,b,c,d,e,f){var g=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function a(a){return!!(typeof a==="object"&&a!==null&&a.$$typeof===g)}f["default"]=a}),66);
__d("setImmediate",["TimeSlice","TimerStorage","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a){var b,d=function(){c("TimerStorage").unset(c("TimerStorage").IMMEDIATE,b);for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];Function.prototype.apply.call(a,this,e)};c("TimeSlice").copyGuardForWrapper(a,d);for(var e=arguments.length,f=new Array(e>1?e-1:0),g=1;g<e;g++)f[g-1]=arguments[g];b=c("setImmediateAcrossTransitions").apply(void 0,[d].concat(f));c("TimerStorage").set(c("TimerStorage").IMMEDIATE,b);return b}g["default"]=a}),98);
__d("Layer",["invariant","ArbiterMixin","BehaviorsMixin","CSS","ContextualThing","DOM","DataStore","Event","FBLogger","HTML","KeyEventController","KeyStatus","Parent","ReactDOM_DEPRECATED","Style","ge","isNode","isValidReactElement","mixin","react","removeFromArray","setImmediate"],(function(a,b,c,d,e,f,g,h){var i,j,k=j||c("react"),l=(i||(i=d("react"))).useLayoutEffect;b("KeyStatus");var m=[],n=function(b){babelHelpers.inheritsLoose(a,b);function a(a,d){var e;e=b.call(this)||this;e._config=a||{};if(d){e._configure(e._config,d);a=e._config.addedBehaviors||[];e.enableBehaviors(e._getDefaultBehaviors().concat(a))}else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");return e}var e=a.prototype;e.init=function(a){this._configure(this._config,a);a=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(a));this._initialized=!0;return this};e._configure=function(a,b){var e=this;if(b){var f=c("isNode")(b),g=typeof b==="string"||c("HTML").isHTML(b);this.containsReactComponent=c("isValidReactElement")(b);!f&&!g&&!this.containsReactComponent&&c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");if(g)b=c("HTML")(b).getRootNode();else if(this.containsReactComponent){f=document.createElement("div");q(b,f,function(){e.inform("reactshow"),e.updatePosition()});b=this._reactContainer=f}}this._root=this._buildWrapper(a,b);a.attributes&&c("DOM").setAttributes(this._root,a.attributes);a.classNames&&a.classNames.forEach(d("CSS").addClass.bind(null,this._root));d("CSS").addClass(this._root,"uiLayer");a.causalElement&&(this._causalElement=c("ge")(a.causalElement));a.permanent&&(this._permanent=a.permanent);a.isStrictlyControlled&&(this._isStrictlyControlled=a.isStrictlyControlled);d("DataStore").set(this._root,"layer",this)};e._getDefaultBehaviors=function(){return[]};e.getCausalElement=function(){return this._causalElement};e.setCausalElement=function(a){this._causalElement=a;return this};e.getInsertParent=function(){return this._insertParent||document.body};e.getRoot=function(){this._root||(this._destroyed?c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."):c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));return this._root};e.getContentRoot=function(){return this.getRoot()};e._buildWrapper=function(a,b){return b};e.setInsertParent=function(a){a&&(this._shown&&a!==this.getInsertParent()&&(c("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this._insertParent=a);return this};e.showAfterDelay=function(a){window.setTimeout(this.show.bind(this),a)};e.show=function(){var b=this;if(this._shown)return this;var e=this.getRoot();e!=null||h(0,5142);this.inform("beforeshow");c("Style").set(e,"visibility","hidden");c("Style").set(e,"overflow","hidden");d("CSS").show(e);c("DOM").appendContent(this.getInsertParent(),e);this.updatePosition()!==!1?(this._shown=!0,this.inform("show"),a.inform("show",this),this._permanent||window.setTimeout(function(){b._shown&&m.push(b)},0)):d("CSS").hide(e);c("Style").set(e,"visibility","");c("Style").set(e,"overflow","");c("Style").set(e,"opacity","1");this.inform("aftershow");return this};e.hide=function(a){if(this._isStrictlyControlled){this._shown&&this.inform("runhide",a);return this}return this._hide()};e._hide=function(){if(this._hiding||!this._shown||this.inform("beforehide")===!1)return this;this._hiding=!0;this.inform("starthide")!==!1&&this.finishHide();return this};e.conditionShow=function(a){return a?this.show():this._hide()};e.finishHide=function(){if(this._shown){this._permanent||c("removeFromArray")(m,this);this._hiding=!1;this._shown=!1;var b=this.getRoot();b!=null||h(0,5143);d("CSS").hide(b);this.inform("hide");a.inform("hide",this)}};e.isShown=function(){return this._shown};e.updatePosition=function(){return!0};e.destroy=function(){this.containsReactComponent&&d("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(this._reactContainer);this.finishHide();var b=this.getRoot();c("DOM").remove(b);this.destroyBehaviors();this.inform("destroy");a.inform("destroy",this);d("DataStore").remove(b,"layer");this._root=this._causalElement=null;this._destroyed=!0};a.init=function(a,b){a.init(b)};a.initAndShow=function(a,b){a.init(b).show()};a.show=function(a){a.show()};a.showAfterDelay=function(a,b){a.showAfterDelay(b)};a.getTopmostLayer=function(){return m[m.length-1]};a.informBlur=function(a){o=null;p=null;var b=m.length;if(!b)return;while(b--){var c=m[b],e=c.getContentRoot();e!=null||h(0,5144);if(d("ContextualThing").containsIncludingLayers(e,a))return;if(c.inform("blur",{target:a})===!1||c.isShown())return}};return a}(c("mixin")(c("ArbiterMixin"),c("BehaviorsMixin")));Object.assign(n,c("ArbiterMixin"));Object.assign(n.prototype,{_destroyed:!1,_initialized:!1,_root:null,_shown:!1,_hiding:!1,_causalElement:null,_reactContainer:null});c("Event").listen(document.documentElement,"keydown",function(a){if(c("KeyEventController").filterEventTargets(a,"keydown"))for(var b=m.length-1;b>=0;b--)if(m[b].inform("key",a)===!1)return!1;return!0},c("Event").Priority.URGENT);var o;c("Event").listen(document.documentElement,"mousedown",function(a){o=a.getTarget()});var p;c("Event").listen(document.documentElement,"mouseup",function(a){p=a.getTarget(),c("setImmediate")(function(){o=null,p=null})});c("Event").listen(document.documentElement,"click",function(a){var b=o,e=p;o=null;p=null;var f=m.length;if(!f)return;f=a.getTarget();if(f!==e||f!==b)return;if(!c("DOM").contains(document.documentElement,f))return;if(f.offsetWidth!=null&&!f.offsetWidth)return;if(d("Parent").byClass(f,"generic_dialog"))return;n.informBlur(f)});function q(a,b,e){c("setImmediate")(function(){d("ReactDOM_DEPRECATED").render_DEPRECATED(k.jsx(r,{onRender:e,children:a}),b)})}function r(a){var b=a.children,c=a.onRender;l(function(){c()},[c]);return b}r.displayName=r.name+" [from "+f.id+"]";g["default"]=n}),98);
__d("PluginCSSReflowHack",["Style"],(function(a,b,c,d,e,f,g){function a(a){setTimeout(function(){var b="border-bottom-width",d=c("Style").get(a,b);c("Style").set(a,b,parseInt(d,10)+1+"px");c("Style").set(a,b,d)},1e3)}g.trigger=a}),98);
__d("PluginMessage",["Arbiter","CSS","DOM","DOMEventListener"],(function(a,b,c,d,e,f,g){var h="platform/plugins/checkbox_connect/access_token";function a(){d("DOMEventListener").add(window,"message",function(a){if(/\.facebook\.com$/.test(a.origin)&&i().test(a.data)){a=JSON.parse(a.data.substring(24));"type"in a&&(a.type==="messenger_checkbox"?j(a):a.type==="customer_chat"&&l(a))}})}function i(){return new RegExp("^SOCIALPLUGIN_AUTH_POPUP:")}function j(a){var b=document.getElementById("plugin-MN-commerce-identity"),e=document.getElementById("plugin-MN-commerce-identity-profile-picture"),f=document.getElementById("plugin-MN-commerce-identity-profile-name"),g=document.getElementById("web-plugin-checkbox-form");b!=null&&e!=null&&f!=null&&g!=null&&(a.can_personalize===!0?(k(e,a.profile_photo),k(f,a.profile_name),d("CSS").show(b),k(g,a.checkbox),a.access_token!=null&&c("Arbiter").inform(h,a.access_token)):d("CSS").hide(b))}function k(a,b){var d=document.createElement("div");c("DOM").setContent(d,b);b=d.firstChild;b!=null&&a.replaceWith(b)}function l(a){var b=window.require("Arbiter");"ArbiterData"in a?b.inform(a.ArbiterEvent,a.ArbiterData):b.inform(a.ArbiterEvent)}g.MESSENGER_CHECKBOX_ACCESS_TOKEN_LOGIN_ARBITER=h;g.listen=a}),98);
__d("getViewportDimensions",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=function(){var a=null;return function(){var b=document.body;if(b==null)return null;(a==null||!b.contains(a))&&(a=document.createElement("div"),a.style.left=Number.MAX_SAFE_INTEGER+"px",a.style.width="100%",a.style.height="100%",a.style.position="fixed",b.appendChild(a));return a}}();function i(){var a;document.documentElement&&(a=document.documentElement.clientWidth);a==null&&document.body&&(a=document.body.clientWidth);return a||0}function j(){var a;document.documentElement&&(a=document.documentElement.clientHeight);a==null&&document.body&&(a=document.body.clientHeight);return a||0}function k(){return{width:window.innerWidth||i(),height:window.innerHeight||j()}}k.withoutScrollbars=function(){return c("UserAgent").isPlatform("Android")?k():{width:i(),height:j()}};k.layout=function(){var a,b=h();return{width:(a=b==null?void 0:b.clientWidth)!=null?a:i(),height:(a=b==null?void 0:b.clientHeight)!=null?a:j()}};g["default"]=k}),98);
__d("isFalsey",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||!Boolean(a)}f["default"]=a}),66);
__d("PopupWindow",["DOMDimensions","DOMQuery","FlowMigrationUtilsForLegacyFiles","Layer","Popup","getViewportDimensions","isFalsey"],(function(a,b,c,d,e,f,g){var h={allowShrink:!0,strategy:"vector",timeout:100,widthElement:null};function b(a){Object.assign(h,a),window.setInterval(i,h.timeout)}function i(){var a=c("getViewportDimensions")(),b=j(),e=c("Layer").getTopmostLayer();if(e){e=(e=e.getRoot())==null?void 0:e.firstChild;e||d("FlowMigrationUtilsForLegacyFiles").invariantViolation("topMostLayer.getRoot().firstChild is null.");var f=d("DOMDimensions").getElementDimensions(e);f.height+=d("DOMDimensions").measureElementBox(e,"height",!0,!0,!0);f.width+=d("DOMDimensions").measureElementBox(e,"width",!0,!0,!0);b.height=Math.max(b.height,f.height);b.width=Math.max(b.width,f.width)}e=b.height-a.height;f=b.width-a.width;f<0&&c("isFalsey")(h.widthElement)&&(f=0);f=f>1?f:0;c("isFalsey")(h.allowShrink)&&e<0&&(e=0);if(e||f)try{window.console&&window.console.firebug,window.resizeBy(f,e),f&&window.moveBy(f/-2,0)}catch(a){}}function j(){var b=d("DOMDimensions").getDocumentDimensions();if(h.strategy==="offsetHeight"){var e=document.body;if(!e)d("FlowMigrationUtilsForLegacyFiles").invariantViolation("document.body is null.");else{b.height=(e=e.offsetHeight)!=null?e:0}}if(c("isFalsey")(h.widthElement)&&typeof h.widthElement==="string"){e=d("DOMQuery").scry(document.body,h.widthElement)[0];e&&(b.width=d("DOMDimensions").getElementDimensions(e).width)}e=a.Dialog;e&&e.max_bottom&&e.max_bottom>b.height&&(b.height=e.max_bottom);return b}function e(a,b,c,e){return d("Popup").open(a,c,b,e)}g._opts=h;g.init=b;g._resizeCheck=i;g._getDocumentSize=j;g.open=e}),98);
__d("PluginConfirm",["DOMEvent","DOMEventListener","PlatformVersioning","PluginMessage","PopupWindow","URI"],(function(a,b,c,d,e,f){var g;function h(a){Object.assign(this,{plugin:a,confirm_params:{},return_params:(g||(g=b("URI"))).getRequestURI().getQueryData()}),this.addReturnParams({ret:"sentry"}),delete this.return_params.hash}Object.assign(h.prototype,{addConfirmParams:function(a){Object.assign(this.confirm_params,a)},addReturnParams:function(a){Object.assign(this.return_params,a);return this},start:function(){var a=b("PlatformVersioning").versionAwareURI(new(g||(g=b("URI")))("/plugins/error/confirm/"+this.plugin)).addQueryData(this.confirm_params).addQueryData({secure:g.getRequestURI().isSecure(),plugin:this.plugin,return_params:JSON.stringify(this.return_params)});this.popup=b("PopupWindow").open(a.toString(),320,486);b("PluginMessage").listen();return this}});h.starter=function(a,b,c){a=new h(a);a.addConfirmParams(b||{});a.addReturnParams(c||{});return a.start.bind(a)};h.listen=function(a,c,d,e){b("DOMEventListener").add(a,"click",function(a){new(b("DOMEvent"))(a).kill(),h.starter(c,d,e)()})};e.exports=h}),null);
__d("PluginPageActionLogger",["BanzaiLogger","DOMEventListener","DOMQuery","ODS"],(function(a,b,c,d,e,f,g){var h;function a(a,b,e,f,g,i,j,k,l,m){function n(g,i){g=d("DOMQuery").scry(f,"."+g)[0];if(!g)return;d("DOMEventListener").add(g,"click",function(f){(h||(h=d("ODS"))).bumpEntityKey(2966,"platform_www","platform.plugin.page.action"),c("BanzaiLogger").log("PagePluginActionsLoggerConfig",{page_id:b,page_plugin_action:i,page_plugin_action_type:"click",referer_url:e,is_sdk:a})})}n(g,"page_like");n(i,"page_unlike");n(j,"page_avatar");n(k,"page_permalink");n(l,"page_share");n(m,"page_cta")}g.initializeClickLoggers=a}),98);
__d("SubscriptionsHandler",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function i(a){return a.remove||a.reset||a.unsubscribe||a.cancel||a.dispose}function j(a){i(a).call(a)}a=function(){function a(){this.$1=[]}var b=a.prototype;b.addSubscriptions=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.every(i)||h(0,3659);this.$1!=null?this.$1=this.$1.concat(b):b.forEach(j)};b.engage=function(){this.$1==null&&(this.$1=[])};b.release=function(){this.$1!=null&&(this.$1.forEach(j),this.$1=null)};b.releaseOne=function(a){var b=this.$1;if(b==null)return;var c=b.indexOf(a);c!==-1&&(j(a),b.splice(c,1),b.length===0&&(this.$1=null))};return a}();g["default"]=a}),98);
__d("csx",[],(function(a,b,c,d,e,f){function a(a){throw new Error("csx: Unexpected class selector transformation.")}f["default"]=a}),66);
__d("randomInt",["invariant"],(function(a,b,c,d,e,f,g,h){function a(a,b){a=b===void 0?[0,a]:[a,b];b=a[0];a=a[1];a>b||h(0,1180,a,b);return Math.floor(b+Math.random()*(a-b))}g["default"]=a}),98);