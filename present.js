/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: fontface | backgroundsize | borderimage | borderradius | boxshadow | flexbox | hsla | multiplebgs | opacity | rgba | textshadow | cssanimations | csscolumns | generatedcontent | cssgradients | cssreflections | csstransforms | csstransforms3d | csstransitions | applicationcache | canvas | canvastext | draganddrop | hashchange | history | audio | video | indexeddb | input | inputtypes | localstorage | postmessage | sessionstorage | websockets | websqldatabase | webworkers | geolocation | inlinesvg | smil | svg | svgclippaths | touch | webgl | iepp | cssclasses | addtest | teststyles | testprop | testallprops | hasevent | prefixes | domprefixes | load
 */
;window.Modernizr=function(a,b,c){function H(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return w("dragstart")&&w("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius")},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(x=I.toLowerCase(),e[x]=r[I](),u.push((e[x]?"":"no-")+x));e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*! jQuery v1.7 jquery.com | jquery.org/license */
(function(a,b){function cA(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cx(a){if(!cm[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cn||(cn=c.createElement("iframe"),cn.frameBorder=cn.width=cn.height=0),b.appendChild(cn);if(!co||!cn.createElement)co=(cn.contentWindow||cn.contentDocument).document,co.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),co.close();d=co.createElement(a),co.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cn)}cm[a]=e}return cm[a]}function cw(a,b){var c={};f.each(cs.concat.apply([],cs.slice(0,b)),function(){c[this]=a});return c}function cv(){ct=b}function cu(){setTimeout(cv,0);return ct=f.now()}function cl(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ck(){try{return new a.XMLHttpRequest}catch(b){}}function ce(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cd(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function cc(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bG.test(a)?d(a,e):cc(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)cc(a+"["+e+"]",b[e],c,d);else d(a,b)}function cb(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function ca(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bV,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=ca(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=ca(a,c,d,e,"*",g));return l}function b_(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bR),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bE(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bz:bA;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bB(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function br(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bi,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bq(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bp(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bp)}function bp(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bo(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bn(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bm(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bl(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function X(a){var b=Y.split(" "),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function W(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(R.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function V(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function N(){return!0}function M(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.add(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return a!=null&&m.test(a)&&!isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(I)return I.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())}),typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return e});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){return i.done.apply(i,arguments).fail.apply(i,arguments)},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,unknownElems:!!a.getElementsByTagName("nav").length,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",enctype:!!c.createElement("form").enctype,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.lastChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-999px",top:"-999px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;f(function(){var a,b,d,e,g,h,i=1,j="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",l="visibility:hidden;border:0;",n="style='"+j+"border:5px solid #000;padding:0;'",p="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>";m=c.getElementsByTagName("body")[0];!m||(a=c.createElement("div"),a.style.cssText=l+"width:0;height:0;position:static;top:0;margin-top:"+i+"px",m.insertBefore(a,m.firstChild),o=c.createElement("div"),o.style.cssText=j+l,o.innerHTML=p,a.appendChild(o),b=o.firstChild,d=b.firstChild,g=b.nextSibling.firstChild.firstChild,h={doesNotAddBorder:d.offsetTop!==5,doesAddBorderForTableAndCells:g.offsetTop===5},d.style.position="fixed",d.style.top="20px",h.fixedPosition=d.offsetTop===20||d.offsetTop===15,d.style.position=d.style.top="",b.style.overflow="hidden",b.style.position="relative",h.subtractsBorderForOverflowNotVisible=d.offsetTop===-5,h.doesNotIncludeMarginInBodyOffset=m.offsetTop!==i,m.removeChild(a),o=a=null,f.extend(k,h))}),o.innerHTML="",n.removeChild(o),o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[f.expando]:a[f.expando]&&f.expando,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[f.expando]=n=++f.uuid:n=f.expando),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[f.expando]:f.expando;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)?b=b:b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" "));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];if(!arguments.length){if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}return b}e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!a||j===3||j===8||j===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g},removeAttr:function(a,b){var c,d,e,g,h=0;if(a.nodeType===1){d=(b||"").split(p),g=d.length;for(;h<g;h++)e=d[h].toLowerCase(),c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1)}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return b;h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/\.(.*)$/,A=/^(?:textarea|input|select)$/i,B=/\./g,C=/ /g,D=/[^\w\s.|`]/g,E=/^([^\.]*)?(?:\.(.+))?$/,F=/\bhover(\.\S+)?/,G=/^key/,H=/^(?:mouse|contextmenu)|click/,I=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,J=function(a){var b=I.exec(a);b&&
(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},K=function(a,b){return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||a.id===b[2])&&(!b[3]||b[3].test(a.className))},L=function(a){return f.event.special.hover?a:a.replace(F,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=L(c).split(" ");for(k=0;k<c.length;k++){l=E.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,namespace:n.join(".")},p),g&&(o.quick=J(g),!o.quick&&f.expr.match.POS.test(g)&&(o.isPositional=!0)),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d){var e=f.hasData(a)&&f._data(a),g,h,i,j,k,l,m,n,o,p,q;if(!!e&&!!(m=e.events)){b=L(b||"").split(" ");for(g=0;g<b.length;g++){h=E.exec(b[g])||[],i=h[1],j=h[2];if(!i){j=j?"."+j:"";for(l in m)f.event.remove(a,l+j,c,d);return}n=f.event.special[i]||{},i=(d?n.delegateType:n.bindType)||i,p=m[i]||[],k=p.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;if(c||j||d||n.remove)for(l=0;l<p.length;l++){q=p[l];if(!c||c.guid===q.guid)if(!j||j.test(q.namespace))if(!d||d===q.selector||d==="**"&&q.selector)p.splice(l--,1),q.selector&&p.delegateCount--,n.remove&&n.remove.call(a,q)}else p.length=0;p.length===0&&k!==p.length&&((!n.teardown||n.teardown.call(a,j)===!1)&&f.removeEvent(a,i,e.handle),delete m[i])}f.isEmptyObject(m)&&(o=e.handle,o&&(o.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"",(g||!e)&&c.preventDefault();if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,n=null;for(m=e.parentNode;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length;l++){m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d);if(c.isPropagationStopped())break}c.type=h,c.isDefaultPrevented()||(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=(f.event.special[c.type]||{}).handle,j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click"))for(m=c.target;m!=this;m=m.parentNode||this){o={},q=[];for(k=0;k<e;k++)r=d[k],s=r.selector,t=o[s],r.isPositional?t=(t||(o[s]=f(s))).index(m)>=0:t===b&&(t=o[s]=r.quick?K(m,r.quick):f(m).is(s)),t&&q.push(r);q.length&&j.push({elem:m,matches:q})}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){p=j[k],c.currentTarget=p.elem;for(l=0;l<p.matches.length&&!c.isImmediatePropagationStopped();l++){r=p.matches[l];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=(i||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},focus:{delegateType:"focusin",noBubble:!0},blur:{delegateType:"focusout",noBubble:!0},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?N:M):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=N;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=N;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=N,this.stopPropagation()},isDefaultPrevented:M,isPropagationStopped:M,isImmediatePropagationStopped:M},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]=f.event.special[b]={delegateType:b,bindType:b,handle:function(a){var b=this,c=a.relatedTarget,d=a.handleObj,e=d.selector,g,h;if(!c||d.origType===a.type||c!==b&&!f.contains(b,c))g=a.type,a.type=d.origType,h=d.handler.apply(this,arguments),a.type=g;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(A.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;A.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return A.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=M;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=M);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),G.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),H.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw"Syntax error, unrecognized expression: "+a};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var O=/Until$/,P=/^(?:parents|prevUntil|prevAll)/,Q=/,/,R=/^.[^:#\[\.,]*$/,S=Array.prototype.slice,T=f.expr.match.POS,U={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(W(this,a,!1),"not",a)},filter:function(a){return this.pushStack(W(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?T.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=T.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(V(c[0])||V(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=S.call(arguments);O.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!U[a]?f.unique(e):e,(this.length>1||Q.test(d))&&P.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",Z=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,ba=/<([\w:]+)/,bb=/<tbody/i,bc=/<|&#?\w+;/,bd=/<(?:script|style)/i,be=/<(?:script|object|embed|option|style)/i,bf=new RegExp("<(?:"+Y.replace(" ","|")+")","i"),bg=/checked\s*(?:[^=]|=\s*.checked.)/i,bh=/\/(java|ecma)script/i,bi=/^\s*<!(?:\[CDATA\[|\-\-)/,bj={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bk=X(c);bj.optgroup=bj.option,bj.tbody=bj.tfoot=bj.colgroup=bj.caption=bj.thead,bj.th=bj.td,f.support.htmlSerialize||(bj._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after"
,arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Z,""):null;if(typeof a=="string"&&!bd.test(a)&&(f.support.leadingWhitespace||!$.test(a))&&!bj[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(_,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bg.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bl(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,br)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!be.test(j)&&(f.support.checkClone||!bg.test(j))&&!f.support.unknownElems&&bf.test(j)&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bn(a,d),e=bo(a),g=bo(d);for(h=0;e[h];++h)g[h]&&bn(e[h],g[h])}if(b){bm(a,d);if(c){e=bo(a),g=bo(d);for(h=0;e[h];++h)bm(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bc.test(k))k=b.createTextNode(k);else{k=k.replace(_,"<$1></$2>");var l=(ba.exec(k)||["",""])[1].toLowerCase(),m=bj[l]||bj._default,n=m[0],o=b.createElement("div");b===c?bk.appendChild(o):X(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=bb.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&$.test(k)&&o.insertBefore(b.createTextNode($.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bq(k[i]);else bq(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bh.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bs=/alpha\([^)]*\)/i,bt=/opacity=([^)]*)/,bu=/([A-Z]|^ms)/g,bv=/^-?\d+(?:px)?$/i,bw=/^-?\d/,bx=/^([\-+])=([\-+.\de]+)/,by={position:"absolute",visibility:"hidden",display:"block"},bz=["Left","Right"],bA=["Top","Bottom"],bB,bC,bD;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bB(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bx.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bB)return bB(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bE(a,b,d);f.swap(a,by,function(){e=bE(a,b,d)});return e}},set:function(a,b){if(!bv.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bt.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bs,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bs.test(g)?g.replace(bs,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bB(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bC=function(a,c){var d,e,g;c=c.replace(bu,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bD=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bv.test(f)&&bw.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bB=bC||bD,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bF=/%20/g,bG=/\[\]$/,bH=/\r?\n/g,bI=/#.*$/,bJ=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bK=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bL=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bM=/^(?:GET|HEAD)$/,bN=/^\/\//,bO=/\?/,bP=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bQ=/^(?:select|textarea)/i,bR=/\s+/,bS=/([?&])_=[^&]*/,bT=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bU=f.fn.load,bV={},bW={},bX,bY,bZ=["*/"]+["*"];try{bX=e.href}catch(b$){bX=c.createElement("a"),bX.href="",bX=bX.href}bY=bT.exec(bX.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bU)return bU.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bP,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bQ.test(this.nodeName)||bK.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bH,"\r\n")}}):{name:b.name,value:c.replace(bH,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?cb(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),cb(a,b);return a},ajaxSettings:{url:bX,isLocal:bL.test(bY[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bZ},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:b_(bV),ajaxTransport:b_(bW),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cd(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=ce(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bJ.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bI,"").replace(bN,bY[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bR),d.crossDomain==null&&(r=bT.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bY[1]&&r[2]==bY[2]&&(r[3]||(r[1]==="http:"?80:443))==(bY[3]||(bY[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),ca(bV,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bM.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bO.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bS,"$1_="+x);d.url=y+(y===d.url?(bO.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bZ+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=ca(bW,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)cc(g,a[g],c,e);return d.join("&").replace(bF,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cf=f.now(),cg=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cf++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cg.test(b.url)||e&&cg.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cg,l),b.url===j&&(e&&(k=k.replace(cg,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ch=a.ActiveXObject?function(){for(var a in cj)cj[a](0,1)}:!1,ci=0,cj;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ck()||cl()}:ck,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ch&&delete cj[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++ci,ch&&(cj||(cj={},f(a).unload(ch)),cj[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cm={},cn,co,cp=/^(?:toggle|show|hide)$/,cq=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cr,cs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],ct;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cw("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cx(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cw("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cw("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cx(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cp.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=cq.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cw("show",1),slideUp:cw("hide",1),slideToggle:cw("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=ct||cu(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cr&&(cr=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=ct||cu(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cr),cr=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now))}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cy=/^t(?:able|d|h)$/i,cz=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cA(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cy.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cz.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cz.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cA(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cA(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);

/*!
Deck JS - deck.core
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
The deck.core module provides all the basic functionality for creating and
moving through a deck.  It does so by applying classes to indicate the state of
the deck and its slides, allowing CSS to take care of the visual representation
of each state.  It also provides methods for navigating the deck and inspecting
its state, as well as basic key bindings for going to the next and previous
slides.  More functionality is provided by wholly separate extension modules
that use the API provided by core.
*/
(function($, deck, document, undefined) {
	var slides, // Array of all the uh, slides...
	current, // Array index of the current slide
	$container, // Keeping this cached
	
	events = {
		/*
		This event fires whenever the current slide changes, whether by way of
		next, prev, or go. The callback function is passed two parameters, from
		and to, equal to the indices of the old slide and the new slide
		respectively. If preventDefault is called on the event within this handler
		the slide change does not occur.
		
		$(document).bind('deck.change', function(event, from, to) {
		   alert('Moving from slide ' + from + ' to ' + to);
		});
		*/
		change: 'deck.change',
		
		/*
		This event fires at the beginning of deck initialization, after the options
		are set but before the slides array is created.  This event makes a good hook
		for preprocessing extensions looking to modify the deck.
		*/
		beforeInitialize: 'deck.beforeInit',
		
		/*
		This event fires at the end of deck initialization. Extensions should
		implement any code that relies on user extensible options (key bindings,
		element selectors, classes) within a handler for this event. Native
		events associated with Deck JS should be scoped under a .deck event
		namespace, as with the example below:
		
		var $d = $(document);
		$.deck.defaults.keys.myExtensionKeycode = 70; // 'h'
		$d.bind('deck.init', function() {
		   $d.bind('keydown.deck', function(event) {
		      if (event.which === $.deck.getOptions().keys.myExtensionKeycode) {
		         // Rock out
		      }
		   });
		});
		*/
		initialize: 'deck.init' 
	},
	
	options = {},
	$d = $(document),
	
	/*
	Internal function. Updates slide and container classes based on which
	slide is the current slide.
	*/
	updateStates = function() {
		var oc = options.classes,
		osc = options.selectors.container,
		old = $container.data('onSlide'),
		$all = $();
		
		// Container state
		$container.removeClass(oc.onPrefix + old)
			.addClass(oc.onPrefix + current)
			.data('onSlide', current);
		
		// Remove and re-add child-current classes for nesting
		$('.' + oc.current).parentsUntil(osc).removeClass(oc.childCurrent);
		slides[current].parentsUntil(osc).addClass(oc.childCurrent);
		
		// Remove previous states
		$.each(slides, function(i, el) {
			$all = $all.add(el);
		});
		$all.removeClass([
			oc.before,
			oc.previous,
			oc.current,
			oc.next,
			oc.after
		].join(" "));
		
		// Add new states back in
		slides[current].addClass(oc.current);
		if (current > 0) {
			slides[current-1].addClass(oc.previous);
		}
		if (current + 1 < slides.length) {
			slides[current+1].addClass(oc.next);
		}
		if (current > 1) {
			$.each(slides.slice(0, current - 1), function(i, el) {
				el.addClass(oc.before);
			});
		}
		if (current + 2 < slides.length) {
			$.each(slides.slice(current+2), function(i, el) {
				el.addClass(oc.after);
			});
		}
	},
	
	/* Methods exposed in the jQuery.deck namespace */
	methods = {
		
		/*
		jQuery.deck(selector, options)
		
		selector: string | jQuery | array
		options: object, optional
				
		Initializes the deck, using each element matched by selector as a slide.
		May also be passed an array of string selectors or jQuery objects, in
		which case each selector in the array is considered a slide. The second
		parameter is an optional options object which will extend the default
		values.
		
		$.deck('.slide');
		
		or
		
		$.deck([
		   '#first-slide',
		   '#second-slide',
		   '#etc'
		]);
		*/	
		init: function(elements, opts) {
			var startTouch,
			tolerance,
			esp = function(e) {
				e.stopPropagation();
			};
			
			options = $.extend(true, {}, $[deck].defaults, opts);
			slides = [];
			current = 0;
			$container = $(options.selectors.container);
			tolerance = options.touch.swipeTolerance;
			
			// Pre init event for preprocessing hooks
			$d.trigger(events.beforeInitialize);
			
			// Hide the deck while states are being applied to kill transitions
			$container.addClass(options.classes.loading);
			
			// Fill slides array depending on parameter type
			if ($.isArray(elements)) {
				$.each(elements, function(i, e) {
					slides.push($(e));
				});
			}
			else {
				$(elements).each(function(i, e) {
					slides.push($(e));
				});
			}
			
			/* Remove any previous bindings, and rebind key events */
			$d.unbind('keydown.deck').bind('keydown.deck', function(e) {
				if (e.which === options.keys.next || $.inArray(e.which, options.keys.next) > -1) {
					methods.next();
					e.preventDefault();
				}
				else if (e.which === options.keys.previous || $.inArray(e.which, options.keys.previous) > -1) {
					methods.prev();
					e.preventDefault();
				}
			});
			
			/* Bind touch events for swiping between slides on touch devices */
			$container.unbind('touchstart.deck').bind('touchstart.deck', function(e) {
				if (!startTouch) {
					startTouch = $.extend({}, e.originalEvent.targetTouches[0]);
				}
			})
			.unbind('touchmove.deck').bind('touchmove.deck', function(e) {
				$.each(e.originalEvent.changedTouches, function(i, t) {
					if (startTouch && t.identifier === startTouch.identifier) {
						if (t.screenX - startTouch.screenX > tolerance || t.screenY - startTouch.screenY > tolerance) {
							$[deck]('prev');
							startTouch = undefined;
						}
						else if (t.screenX - startTouch.screenX < -1 * tolerance || t.screenY - startTouch.screenY < -1 * tolerance) {
							$[deck]('next');
							startTouch = undefined;
						}
						return false;
					}
				});
				e.preventDefault();
			})
			.unbind('touchend.deck').bind('touchend.deck', function(t) {
				$.each(t.originalEvent.changedTouches, function(i, t) {
					if (startTouch && t.identifier === startTouch.identifier) {
						startTouch = undefined;
					}
				});
			})
			.scrollLeft(0).scrollTop(0)
			/* Stop propagation of key events within editable elements of slides */
			.undelegate('input, textarea, select, button, meter, progress, [contentEditable]', 'keydown', esp)
			.delegate('input, textarea, select, button, meter, progress, [contentEditable]', 'keydown', esp);
			
			/*
			Kick iframe videos, which dont like to redraw w/ transforms.
			Remove this if Webkit ever fixes it.
			 */
			$.each(slides, function(i, $el) {
				$el.unbind('webkitTransitionEnd.deck').bind('webkitTransitionEnd.deck',
				function(event) {
					if ($el.hasClass($[deck]('getOptions').classes.current)) {
						var embeds = $(this).find('iframe').css('opacity', 0);
						window.setTimeout(function() {
							embeds.css('opacity', 1);
						}, 100);
					}
				});
			});
			
			if (slides.length) {
				updateStates();
			}
			
			// Show deck again now that slides are in place
			$container.removeClass(options.classes.loading);
			$d.trigger(events.initialize);
		},
		
		/*
		jQuery.deck('go', index)
		
		index: integer | string
		
		Moves to the slide at the specified index if index is a number. Index is
		0-based, so $.deck('go', 0); will move to the first slide. If index is a
		string this will move to the slide with the specified id. If index is out
		of bounds or doesn't match a slide id the call is ignored.
		*/
		go: function(index) {
			var e = $.Event(events.change),
			ndx;
			
			/* Number index, easy. */
			if (typeof index === 'number' && index >= 0 && index < slides.length) {
				ndx = index;
			}
			/* Id string index, search for it and set integer index */
			else if (typeof index === 'string') {
				$.each(slides, function(i, $slide) {
					if ($slide.attr('id') === index) {
						ndx = i;
						return false;
					}
				});
			};
			
			/* Out of bounds, id doesn't exist, illegal input, eject */
			if (typeof ndx === 'undefined') return;
			
			$d.trigger(e, [current, ndx]);
			if (e.isDefaultPrevented()) {
				/* Trigger the event again and undo the damage done by extensions. */
				$d.trigger(events.change, [ndx, current]);
			}
			else {
				current = ndx;
				updateStates();
			}
		},
		
		/*
		jQuery.deck('next')
		
		Moves to the next slide. If the last slide is already active, the call
		is ignored.
		*/
		next: function() {
			methods.go(current+1);
		},
		
		/*
		jQuery.deck('prev')
		
		Moves to the previous slide. If the first slide is already active, the
		call is ignored.
		*/
		prev: function() {
			methods.go(current-1);
		},
		
		/*
		jQuery.deck('getSlide', index)
		
		index: integer, optional
		
		Returns a jQuery object containing the slide at index. If index is not
		specified, the current slide is returned.
		*/
		getSlide: function(index) {
			var i = typeof index !== 'undefined' ? index : current;
			if (typeof i != 'number' || i < 0 || i >= slides.length) return null;
			return slides[i];
		},
		
		/*
		jQuery.deck('getSlides')
		
		Returns all slides as an array of jQuery objects.
		*/
		getSlides: function() {
			return slides;
		},
		
		/*
		jQuery.deck('getContainer')
		
		Returns a jQuery object containing the deck container as defined by the
		container option.
		*/
		getContainer: function() {
			return $container;
		},
		
		/*
		jQuery.deck('getOptions')
		
		Returns the options object for the deck, including any overrides that
		were defined at initialization.
		*/
		getOptions: function() {
			return options;
		},
		
		/*
		jQuery.deck('extend', name, method)
		
		name: string
		method: function
		
		Adds method to the deck namespace with the key of name. This doesn’t
		give access to any private member data — public methods must still be
		used within method — but lets extension authors piggyback on the deck
		namespace rather than pollute jQuery.
		
		$.deck('extend', 'alert', function(msg) {
		   alert(msg);
		});

		// Alerts 'boom'
		$.deck('alert', 'boom');
		*/
		extend: function(name, method) {
			methods[name] = method;
		}
	};
	
	/* jQuery extension */
	$[deck] = function(method, arg) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else {
			return methods.init(method, arg);
		}
	};
	
	/*
	The default settings object for a deck. All deck extensions should extend
	this object to add defaults for any of their options.
	
	options.classes.after
		This class is added to all slides that appear after the 'next' slide.
	
	options.classes.before
		This class is added to all slides that appear before the 'previous'
		slide.
		
	options.classes.childCurrent
		This class is added to all elements in the DOM tree between the
		'current' slide and the deck container. For standard slides, this is
		mostly seen and used for nested slides.
		
	options.classes.current
		This class is added to the current slide.
		
	options.classes.loading
		This class is applied to the deck container during loading phases and is
		primarily used as a way to short circuit transitions between states
		where such transitions are distracting or unwanted.  For example, this
		class is applied during deck initialization and then removed to prevent
		all the slides from appearing stacked and transitioning into place
		on load.
		
	options.classes.next
		This class is added to the slide immediately following the 'current'
		slide.
		
	options.classes.onPrefix
		This prefix, concatenated with the current slide index, is added to the
		deck container as you change slides.
		
	options.classes.previous
		This class is added to the slide immediately preceding the 'current'
		slide.
		
	options.selectors.container
		Elements matched by this CSS selector will be considered the deck
		container. The deck container is used to scope certain states of the
		deck, as with the onPrefix option, or with extensions such as deck.goto
		and deck.menu.
		
	options.keys.next
		The numeric keycode used to go to the next slide.
		
	options.keys.previous
		The numeric keycode used to go to the previous slide.
		
	options.touch.swipeTolerance
		The number of pixels the users finger must travel to produce a swipe
		gesture.
	*/
	$[deck].defaults = {
		classes: {
			after: 'deck-after',
			before: 'deck-before',
			childCurrent: 'deck-child-current',
			current: 'deck-current',
			loading: 'deck-loading',
			next: 'deck-next',
			onPrefix: 'on-slide-',
			previous: 'deck-previous'
		},
		
		selectors: {
			container: '.deck-container'
		},
		
		keys: {
			// enter, space, page down, right arrow, down arrow,
			next: [13, 32, 34, 39, 40],
			// backspace, page up, left arrow, up arrow
			previous: [8, 33, 37, 38]
		},
		
		touch: {
			swipeTolerance: 60
		}
	};
	
	$d.ready(function() {
		$('html').addClass('ready');
	});
	
	/*
	FF + Transforms + Flash video don't get along...
	Firefox will reload and start playing certain videos after a
	transform.  Blanking the src when a previously shown slide goes out
	of view prevents this.
	*/
	$d.bind('deck.change', function(e, from, to) {
		var oldFrames = $[deck]('getSlide', from).find('iframe'),
		newFrames = $[deck]('getSlide', to).find('iframe');
		
		oldFrames.each(function() {
	    	var $this = $(this),
	    	curSrc = $this.attr('src');
            
            if(curSrc) {
            	$this.data('deck-src', curSrc).attr('src', '');
            }
		});
		
		newFrames.each(function() {
			var $this = $(this),
			originalSrc = $this.data('deck-src');
			
			if (originalSrc) {
				$this.attr('src', originalSrc);
			}
		});
	});
})(jQuery, 'deck', document);

/*!
Deck JS - deck.navigation
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
This module adds clickable previous and next links to the deck.
*/
(function($, deck, undefined) {
	var $d = $(document),
	
	/* Updates link hrefs, and disabled states if last/first slide */
	updateButtons = function(e, from, to) {
		var opts = $[deck]('getOptions'),
		last = $[deck]('getSlides').length - 1,
		prevSlide = $[deck]('getSlide', to - 1),
		nextSlide = $[deck]('getSlide', to + 1),
		prevId = prevSlide ? prevSlide.attr('id') : undefined;
		nextId = nextSlide ? nextSlide.attr('id') : undefined;
		
		$(opts.selectors.previousLink)
			.toggleClass(opts.classes.navDisabled, !to)
			.attr('href', '#' + (prevId ? prevId : ''));
		$(opts.selectors.nextLink)
			.toggleClass(opts.classes.navDisabled, to === last)
			.attr('href', '#' + (nextId ? nextId : ''));
	};
	
	/*
	Extends defaults/options.
	
	options.classes.navDisabled
		This class is added to a navigation link when that action is disabled.
		It is added to the previous link when on the first slide, and to the
		next link when on the last slide.
		
	options.selectors.nextLink
		The elements that match this selector will move the deck to the next
		slide when clicked.
		
	options.selectors.previousLink
		The elements that match this selector will move to deck to the previous
		slide when clicked.
	*/
	$.extend(true, $[deck].defaults, {
		classes: {
			navDisabled: 'deck-nav-disabled'
		},
		
		selectors: {
			nextLink: '.deck-next-link',
			previousLink: '.deck-prev-link'
		}
	});

	$d.bind('deck.init', function() {
		var opts = $[deck]('getOptions'),
		slides = $[deck]('getSlides'),
		$current = $[deck]('getSlide'),
		ndx;
		
		// Setup prev/next link events
		$(opts.selectors.previousLink)
		.unbind('click.decknavigation')
		.bind('click.decknavigation', function(e) {
			$[deck]('prev');
			e.preventDefault();
		});
		
		$(opts.selectors.nextLink)
		.unbind('click.decknavigation')
		.bind('click.decknavigation', function(e) {
			$[deck]('next');
			e.preventDefault();
		});
		
		// Find where we started in the deck and set initial states
		$.each(slides, function(i, $slide) {
			if ($slide === $current) {
				ndx = i;
				return false;
			}
		});
		updateButtons(null, ndx, ndx);
	})
	.bind('deck.change', updateButtons);
})(jQuery, 'deck');

/*!
Deck JS - deck.goto
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
This module adds the necessary methods and key bindings to show and hide a form
for jumping to any slide number/id in the deck (and processes that form
accordingly). The form-showing state is indicated by the presence of a class on
the deck container.
*/
(function($, deck, undefined) {
	var $d = $(document);
	
	/*
	Extends defaults/options.
	
	options.classes.goto
		This class is added to the deck container when showing the Go To Slide
		form.
		
	options.selectors.gotoDatalist
		The element that matches this selector is the datalist element that will
		be populated with options for each of the slide ids.  In browsers that
		support the datalist element, this provides a drop list of slide ids to
		aid the user in selecting a slide.
		
	options.selectors.gotoForm
		The element that matches this selector is the form that is submitted
		when a user hits enter after typing a slide number/id in the gotoInput
		element.
	
	options.selectors.gotoInput
		The element that matches this selector is the text input field for
		entering a slide number/id in the Go To Slide form.
		
	options.keys.goto
		The numeric keycode used to show the Go To Slide form.
		
	options.countNested
		If false, only top level slides will be counted when entering a
		slide number.
	*/
	$.extend(true, $[deck].defaults, {
		classes: {
			"goto": 'deck-goto'
		},
		
		selectors: {
			gotoDatalist: '#goto-datalist',
			gotoForm: '.goto-form',
			gotoInput: '#goto-slide'
		},
		
		keys: {
			"goto": 71 // g
		},
		
		countNested: true
	});

	/*
	jQuery.deck('showGoTo')
	
	Shows the Go To Slide form by adding the class specified by the goto class
	option to the deck container.
	*/
	$[deck]('extend', 'showGoTo', function() {
		$[deck]('getContainer').addClass($[deck]('getOptions').classes['goto']);
		$($[deck]('getOptions').selectors.gotoInput).focus();
	});

	/*
	jQuery.deck('hideGoTo')
	
	Hides the Go To Slide form by removing the class specified by the goto class
	option from the deck container.
	*/
	$[deck]('extend', 'hideGoTo', function() {
		$($[deck]('getOptions').selectors.gotoInput).blur();
		$[deck]('getContainer').removeClass($[deck]('getOptions').classes['goto']);
	});

	/*
	jQuery.deck('toggleGoTo')
	
	Toggles between showing and hiding the Go To Slide form.
	*/
	$[deck]('extend', 'toggleGoTo', function() {
		$[deck]($[deck]('getContainer').hasClass($[deck]('getOptions').classes['goto']) ? 'hideGoTo' : 'showGoTo');
	});
	
	$d.bind('deck.init', function() {
		var opts = $[deck]('getOptions'),
		$datalist = $(opts.selectors.gotoDatalist),
		slideTest = $.map([
			opts.classes.before,
			opts.classes.previous,
			opts.classes.current,
			opts.classes.next,
			opts.classes.after
		], function(el, i) {
			return '.' + el;
		}).join(', '),
		rootCounter = 1;
		
		// Bind key events
		$d.unbind('keydown.deckgoto').bind('keydown.deckgoto', function(e) {
			var key = $[deck]('getOptions').keys['goto'];
			
			if (e.which === key || $.inArray(e.which, key) > -1) {
				e.preventDefault();
				$[deck]('toggleGoTo');
			}
		});
		
		/* Populate datalist and work out countNested*/
		$.each($[deck]('getSlides'), function(i, $slide) {
			var id = $slide.attr('id'),
			$parentSlides = $slide.parentsUntil(opts.selectors.container, slideTest);
			
			if (id) {
				$datalist.append('<option value="' + id + '">');
			}
			
			if ($parentSlides.length) {
				$slide.removeData('rootIndex');
			}
			else if (!opts.countNested) {
				$slide.data('rootIndex', rootCounter);
				++rootCounter;
			}
		});
		
		// Process form submittal, go to the slide entered
		$(opts.selectors.gotoForm)
		.unbind('submit.deckgoto')
		.bind('submit.deckgoto', function(e) {
			var $field = $($[deck]('getOptions').selectors.gotoInput),
			ndx = parseInt($field.val(), 10);
			
			if (!$[deck]('getOptions').countNested) {
			  if (ndx >= rootCounter) return false;
				$.each($[deck]('getSlides'), function(i, $slide) {
					if ($slide.data('rootIndex') === ndx) {
						ndx = i + 1;
						return false;
					}
				});
			}
			
			$[deck]('go', isNaN(ndx) ? $field.val() : ndx - 1);
			$[deck]('hideGoTo');
			$field.val('');
			
			e.preventDefault();
		});
		
		// Dont let keys in the input trigger deck actions
		$(opts.selectors.gotoInput)
		.unbind('keydown.deckgoto')
		.bind('keydown.deckgoto', function(e) {
			e.stopPropagation();
		});
	});
})(jQuery, 'deck');

/*!
Deck JS - deck.hash
Copyright (c) 2011 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
https://github.com/imakewebthings/deck.js/blob/master/GPL-license.txt
*/

/*
This module adds deep linking to individual slides, enables internal links
to slides within decks, and updates the address bar with the hash as the user
moves through the deck. A permalink anchor is also updated. Standard themes
hide this link in browsers that support the History API, and show it for
those that do not. Slides that do not have an id are assigned one according to
the hashPrefix option. In addition to the on-slide container state class
kept by core, this module adds an on-slide state class that uses the id of each
slide.
*/
(function ($, deck, window, undefined) {
	var $d = $(document),
	$window = $(window),
	
	/* Collection of internal fragment links in the deck */
	$internals,
	
	/*
	Internal only function.  Given a string, extracts the id from the hash,
	matches it to the appropriate slide, and navigates there.
	*/
	goByHash = function(str) {
		var id = str.substr(str.indexOf("#") + 1),
		slides = $[deck]('getSlides');
		
		$.each(slides, function(i, $el) {
			if ($el.attr('id') === id) {
				$[deck]('go', i);
				return false;
			}
		});
		
		// If we don't set these to 0 the container scrolls due to hashchange
		$[deck]('getContainer').scrollLeft(0).scrollTop(0);
	};
	
	/*
	Extends defaults/options.
	
	options.selectors.hashLink
		The element matching this selector has its href attribute updated to
		the hash of the current slide as the user navigates through the deck.
		
	options.hashPrefix
		Every slide that does not have an id is assigned one at initialization.
		Assigned ids take the form of hashPrefix + slideIndex, e.g., slide-0,
		slide-12, etc.
	*/
	$.extend(true, $[deck].defaults, {
		selectors: {
			hashLink: '.deck-permalink'
		},
		
		hashPrefix: 'slide-'
	});
	
	
	$d.bind('deck.init', function() {
	   var opts = $[deck]('getOptions');
		$internals = $(),
		slides = $[deck]('getSlides');
		
		$.each(slides, function(i, $el) {
			var hash;
			
			/* Hand out ids to the unfortunate slides born without them */
			if (!$el.attr('id') || $el.data('deckAssignedId') === $el.attr('id')) {
				$el.attr('id', opts.hashPrefix + i);
				$el.data('deckAssignedId', opts.hashPrefix + i);
			}
			
			hash ='#' + $el.attr('id');
			
			/* Deep link to slides on init */
			if (hash === window.location.hash) {
				$[deck]('go', i);
			}
			
			/* Add internal links to this slide */
			$internals = $internals.add('a[href="' + hash + '"]');
		});
		
		if (!Modernizr.hashchange) {
			/* Set up internal links using click for the poor browsers
			without a hashchange event. */
			$internals.unbind('click.deckhash').bind('click.deckhash', function(e) {
				goByHash($(this).attr('href'));
			});
		}
		
		/* Set up first id container state class */
		if (slides.length) {
			$[deck]('getContainer').addClass(opts.classes.onPrefix + $[deck]('getSlide').attr('id'));
		};
	})
	/* Update permalink, address bar, and state class on a slide change */
	.bind('deck.change', function(e, from, to) {
		var hash = '#' + $[deck]('getSlide', to).attr('id'),
		opts = $[deck]('getOptions'),
		osp = opts.classes.onPrefix,
		$c = $[deck]('getContainer');
		
		$c.removeClass(osp + $[deck]('getSlide', from).attr('id'));
		$c.addClass(osp + $[deck]('getSlide', to).attr('id'));
		
		$(opts.selectors.hashLink).attr('href', hash);
		if (Modernizr.history) {
			window.history.replaceState({}, "", hash);
		}
	});
	
	/* Deals with internal links in modern browsers */
	$window.bind('hashchange.deckhash', function(e) {
		if (e.originalEvent && e.originalEvent.newURL) {
			goByHash(e.originalEvent.newURL);
		}
		else {
			goByHash(window.location.hash);
		}
	});
})(jQuery, 'deck', this);

/*

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright (c) 2006-2012 by OpenLayers Contributors
  Published under the 2-clause BSD license.
  See http://openlayers.org/dev/license.txt for the full text of the license, and http://openlayers.org/dev/authors.txt for full list of contributors.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used, please see the
  OpenLayers Github repository: <https://github.com/openlayers/openlayers>)

*/

/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * OpenLayers.Util.pagePosition is based on Yahoo's getXY method, which is
 * Copyright (c) 2006, Yahoo! Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or
 * without modification, are permitted provided that the following conditions
 * are met:
 * 
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * * Neither the name of Yahoo! Inc. nor the names of its contributors may be
 *   used to endorse or promote products derived from this software without
 *   specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */
var OpenLayers={VERSION_NUMBER:"Release 2.12-rc1",singleFile:!0,_getScriptLocation:function(){for(var a=/(^|(.*?\/))(OpenLayers.*?\.js)(\?|$)/,b=document.getElementsByTagName("script"),c,d="",e=0,f=b.length;e<f;e++)if(c=b[e].getAttribute("src"))if(c=c.match(a)){d=c[1];break}return function(){return d}}(),ImgPath:""};OpenLayers.Class=function(){var a=arguments.length,b=arguments[0],c=arguments[a-1],d="function"==typeof c.initialize?c.initialize:function(){b.prototype.initialize.apply(this,arguments)};1<a?(a=[d,b].concat(Array.prototype.slice.call(arguments).slice(1,a-1),c),OpenLayers.inherit.apply(null,a)):d.prototype=c;return d};
OpenLayers.inherit=function(a,b){var c=function(){};c.prototype=b.prototype;a.prototype=new c;var d,e;for(c=2,d=arguments.length;c<d;c++){e=arguments[c];if("function"===typeof e)e=e.prototype;OpenLayers.Util.extend(a.prototype,e)}};OpenLayers.Util=OpenLayers.Util||{};OpenLayers.Util.extend=function(a,b){a=a||{};if(b){for(var c in b){var d=b[c];void 0!==d&&(a[c]=d)}if(!("function"==typeof window.Event&&b instanceof window.Event)&&b.hasOwnProperty&&b.hasOwnProperty("toString"))a.toString=b.toString}return a};OpenLayers.Control=OpenLayers.Class({id:null,map:null,div:null,type:null,allowSelection:!1,displayClass:"",title:"",autoActivate:!1,active:null,handler:null,eventListeners:null,events:null,initialize:function(a){this.displayClass=this.CLASS_NAME.replace("OpenLayers.","ol").replace(/\./g,"");OpenLayers.Util.extend(this,a);this.events=new OpenLayers.Events(this);if(this.eventListeners instanceof Object)this.events.on(this.eventListeners);if(null==this.id)this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+
"_")},destroy:function(){if(this.events)this.eventListeners&&this.events.un(this.eventListeners),this.events.destroy(),this.events=null;this.eventListeners=null;if(this.handler)this.handler.destroy(),this.handler=null;if(this.handlers){for(var a in this.handlers)this.handlers.hasOwnProperty(a)&&"function"==typeof this.handlers[a].destroy&&this.handlers[a].destroy();this.handlers=null}if(this.map)this.map.removeControl(this),this.map=null;this.div=null},setMap:function(a){this.map=a;this.handler&&
this.handler.setMap(a)},draw:function(a){if(null==this.div){this.div=OpenLayers.Util.createDiv(this.id);this.div.className=this.displayClass;if(!this.allowSelection)this.div.className+=" olControlNoSelect",this.div.setAttribute("unselectable","on",0),this.div.onselectstart=OpenLayers.Function.False;if(""!=this.title)this.div.title=this.title}if(null!=a)this.position=a.clone();this.moveTo(this.position);return this.div},moveTo:function(a){if(null!=a&&null!=this.div)this.div.style.left=a.x+"px",this.div.style.top=
a.y+"px"},activate:function(){if(this.active)return!1;this.handler&&this.handler.activate();this.active=!0;this.map&&OpenLayers.Element.addClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active");this.events.triggerEvent("activate");return!0},deactivate:function(){return this.active?(this.handler&&this.handler.deactivate(),this.active=!1,this.map&&OpenLayers.Element.removeClass(this.map.viewPortDiv,this.displayClass.replace(/ /g,"")+"Active"),this.events.triggerEvent("deactivate"),
!0):!1},CLASS_NAME:"OpenLayers.Control"});OpenLayers.Control.TYPE_BUTTON=1;OpenLayers.Control.TYPE_TOGGLE=2;OpenLayers.Control.TYPE_TOOL=3;OpenLayers.String={startsWith:function(a,b){return 0==a.indexOf(b)},contains:function(a,b){return-1!=a.indexOf(b)},trim:function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},camelize:function(a){for(var a=a.split("-"),b=a[0],c=1,d=a.length;c<d;c++)var e=a[c],b=b+(e.charAt(0).toUpperCase()+e.substring(1));return b},format:function(a,b,c){b||(b=window);return a.replace(OpenLayers.String.tokenRegEx,function(a,e){for(var f,g=e.split(/\.+/),h=0;h<g.length;h++)0==h&&(f=b),f=f[g[h]];"function"==
typeof f&&(f=c?f.apply(null,c):f());return"undefined"==typeof f?"undefined":f})},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(a){return OpenLayers.String.numberRegEx.test(a)},numericIf:function(a){return OpenLayers.String.isNumeric(a)?parseFloat(a):a}};
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(a,b){var c=0;0<b&&(c=parseFloat(a.toPrecision(b)));return c},format:function(a,b,c,d){b="undefined"!=typeof b?b:0;c="undefined"!=typeof c?c:OpenLayers.Number.thousandsSeparator;d="undefined"!=typeof d?d:OpenLayers.Number.decimalSeparator;null!=b&&(a=parseFloat(a.toFixed(b)));var e=a.toString().split(".");1==e.length&&null==b&&(b=0);a=e[0];if(c)for(var f=/(-?[0-9]+)([0-9]{3})/;f.test(a);)a=a.replace(f,"$1"+c+"$2");
0==b?b=a:(c=1<e.length?e[1]:"0",null!=b&&(c+=Array(b-c.length+1).join("0")),b=a+d+c);return b}};OpenLayers.Function={bind:function(a,b){var c=Array.prototype.slice.apply(arguments,[2]);return function(){var d=c.concat(Array.prototype.slice.apply(arguments,[0]));return a.apply(b,d)}},bindAsEventListener:function(a,b){return function(c){return a.call(b,c||window.event)}},False:function(){return!1},True:function(){return!0},Void:function(){}};
OpenLayers.Array={filter:function(a,b,c){var d=[];if(Array.prototype.filter)d=a.filter(b,c);else{var e=a.length;if("function"!=typeof b)throw new TypeError;for(var f=0;f<e;f++)if(f in a){var g=a[f];b.call(c,g,f,a)&&d.push(g)}}return d}};OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,centerLonLat:null,initialize:function(a,b,c,d){OpenLayers.Util.isArray(a)&&(d=a[3],c=a[2],b=a[1],a=a[0]);if(null!=a)this.left=OpenLayers.Util.toFloat(a);if(null!=b)this.bottom=OpenLayers.Util.toFloat(b);if(null!=c)this.right=OpenLayers.Util.toFloat(c);if(null!=d)this.top=OpenLayers.Util.toFloat(d)},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top)},equals:function(a){var b=!1;null!=
a&&(b=this.left==a.left&&this.right==a.right&&this.top==a.top&&this.bottom==a.bottom);return b},toString:function(){return[this.left,this.bottom,this.right,this.top].join()},toArray:function(a){return!0===a?[this.bottom,this.left,this.top,this.right]:[this.left,this.bottom,this.right,this.top]},toBBOX:function(a,b){null==a&&(a=6);var c=Math.pow(10,a),d=Math.round(this.left*c)/c,e=Math.round(this.bottom*c)/c,f=Math.round(this.right*c)/c,c=Math.round(this.top*c)/c;return!0===b?e+","+d+","+c+","+f:d+
","+e+","+f+","+c},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])])},getWidth:function(){return this.right-this.left},getHeight:function(){return this.top-this.bottom},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight())},
getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2)},getCenterLonLat:function(){if(!this.centerLonLat)this.centerLonLat=new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);return this.centerLonLat},scale:function(a,b){null==b&&(b=this.getCenterLonLat());var c,d;"OpenLayers.LonLat"==b.CLASS_NAME?(c=b.lon,d=b.lat):(c=b.x,d=b.y);return new OpenLayers.Bounds((this.left-c)*a+c,(this.bottom-d)*a+d,(this.right-c)*a+c,(this.top-d)*
a+d)},add:function(a,b){if(null==a||null==b)throw new TypeError("Bounds.add cannot receive null values");return new OpenLayers.Bounds(this.left+a,this.bottom+b,this.right+a,this.top+b)},extend:function(a){var b=null;if(a){switch(a.CLASS_NAME){case "OpenLayers.LonLat":b=new OpenLayers.Bounds(a.lon,a.lat,a.lon,a.lat);break;case "OpenLayers.Geometry.Point":b=new OpenLayers.Bounds(a.x,a.y,a.x,a.y);break;case "OpenLayers.Bounds":b=a}if(b){this.centerLonLat=null;if(null==this.left||b.left<this.left)this.left=
b.left;if(null==this.bottom||b.bottom<this.bottom)this.bottom=b.bottom;if(null==this.right||b.right>this.right)this.right=b.right;if(null==this.top||b.top>this.top)this.top=b.top}}},containsLonLat:function(a,b){"boolean"===typeof b&&(b={inclusive:b});var b=b||{},c=this.contains(a.lon,a.lat,b.inclusive),d=b.worldBounds;d&&!c&&(c=d.getWidth(),d=Math.round((a.lon-(d.left+d.right)/2)/c),c=this.containsLonLat({lon:a.lon-d*c,lat:a.lat},{inclusive:b.inclusive}));return c},containsPixel:function(a,b){return this.contains(a.x,
a.y,b)},contains:function(a,b,c){null==c&&(c=!0);if(null==a||null==b)return!1;var a=OpenLayers.Util.toFloat(a),b=OpenLayers.Util.toFloat(b),d=!1;return d=c?a>=this.left&&a<=this.right&&b>=this.bottom&&b<=this.top:a>this.left&&a<this.right&&b>this.bottom&&b<this.top},intersectsBounds:function(a,b){"boolean"===typeof b&&(b={inclusive:b});b=b||{};if(b.worldBounds)var c=this.wrapDateLine(b.worldBounds),a=a.wrapDateLine(b.worldBounds);else c=this;if(null==b.inclusive)b.inclusive=!0;var d=!1,e=c.left==
a.right||c.right==a.left||c.top==a.bottom||c.bottom==a.top;if(b.inclusive||!e)var d=a.top>=c.bottom&&a.top<=c.top||c.top>a.bottom&&c.top<a.top,e=a.left>=c.left&&a.left<=c.right||c.left>=a.left&&c.left<=a.right,f=a.right>=c.left&&a.right<=c.right||c.right>=a.left&&c.right<=a.right,d=(a.bottom>=c.bottom&&a.bottom<=c.top||c.bottom>=a.bottom&&c.bottom<=a.top||d)&&(e||f);if(b.worldBounds&&!d){var g=b.worldBounds,e=g.getWidth(),f=!g.containsBounds(c),g=!g.containsBounds(a);f&&!g?(a=a.add(-e,0),d=c.intersectsBounds(a,
{inclusive:b.inclusive})):g&&!f&&(c=c.add(-e,0),d=a.intersectsBounds(c,{inclusive:b.inclusive}))}return d},containsBounds:function(a,b,c){null==b&&(b=!1);null==c&&(c=!0);var d=this.contains(a.left,a.bottom,c),e=this.contains(a.right,a.bottom,c),f=this.contains(a.left,a.top,c),a=this.contains(a.right,a.top,c);return b?d||e||f||a:d&&e&&f&&a},determineQuadrant:function(a){var b="",c=this.getCenterLonLat(),b=b+(a.lat<c.lat?"b":"t");return b+=a.lon<c.lon?"l":"r"},transform:function(a,b){this.centerLonLat=
null;var c=OpenLayers.Projection.transform({x:this.left,y:this.bottom},a,b),d=OpenLayers.Projection.transform({x:this.right,y:this.bottom},a,b),e=OpenLayers.Projection.transform({x:this.left,y:this.top},a,b),f=OpenLayers.Projection.transform({x:this.right,y:this.top},a,b);this.left=Math.min(c.x,e.x);this.bottom=Math.min(c.y,d.y);this.right=Math.max(d.x,f.x);this.top=Math.max(e.y,f.y);return this},wrapDateLine:function(a,b){var b=b||{},c=b.leftTolerance||0,d=b.rightTolerance||0,e=this.clone();if(a){for(var f=
a.getWidth();e.left<a.left&&e.right-d<=a.left;)e=e.add(f,0);for(;e.left+c>=a.right&&e.right>a.right;)e=e.add(-f,0);c=e.left+c;c<a.right&&c>a.left&&e.right-d>a.right&&(e=e.add(-f,0))}return e},CLASS_NAME:"OpenLayers.Bounds"});OpenLayers.Bounds.fromString=function(a,b){var c=a.split(",");return OpenLayers.Bounds.fromArray(c,b)};OpenLayers.Bounds.fromArray=function(a,b){return!0===b?new OpenLayers.Bounds(a[1],a[0],a[3],a[2]):new OpenLayers.Bounds(a[0],a[1],a[2],a[3])};
OpenLayers.Bounds.fromSize=function(a){return new OpenLayers.Bounds(0,a.h,a.w,0)};OpenLayers.Bounds.oppositeQuadrant=function(a){var b;b=""+("t"==a.charAt(0)?"b":"t");return b+="l"==a.charAt(1)?"r":"l"};OpenLayers.Element={visible:function(a){return"none"!=OpenLayers.Util.getElement(a).style.display},toggle:function(){for(var a=0,b=arguments.length;a<b;a++){var c=OpenLayers.Util.getElement(arguments[a]),d=OpenLayers.Element.visible(c)?"none":"";c.style.display=d}},remove:function(a){a=OpenLayers.Util.getElement(a);a.parentNode.removeChild(a)},getHeight:function(a){a=OpenLayers.Util.getElement(a);return a.offsetHeight},hasClass:function(a,b){var c=a.className;return!!c&&RegExp("(^|\\s)"+b+"(\\s|$)").test(c)},
addClass:function(a,b){OpenLayers.Element.hasClass(a,b)||(a.className+=(a.className?" ":"")+b);return a},removeClass:function(a,b){var c=a.className;if(c)a.className=OpenLayers.String.trim(c.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," "));return a},toggleClass:function(a,b){OpenLayers.Element.hasClass(a,b)?OpenLayers.Element.removeClass(a,b):OpenLayers.Element.addClass(a,b);return a},getStyle:function(a,b){var a=OpenLayers.Util.getElement(a),c=null;if(a&&a.style){c=a.style[OpenLayers.String.camelize(b)];
c||(document.defaultView&&document.defaultView.getComputedStyle?c=(c=document.defaultView.getComputedStyle(a,null))?c.getPropertyValue(b):null:a.currentStyle&&(c=a.currentStyle[OpenLayers.String.camelize(b)]));var d=["left","top","right","bottom"];window.opera&&-1!=OpenLayers.Util.indexOf(d,b)&&"static"==OpenLayers.Element.getStyle(a,"position")&&(c="auto")}return"auto"==c?null:c}};OpenLayers.LonLat=OpenLayers.Class({lon:0,lat:0,initialize:function(a,b){OpenLayers.Util.isArray(a)&&(b=a[1],a=a[0]);this.lon=OpenLayers.Util.toFloat(a);this.lat=OpenLayers.Util.toFloat(b)},toString:function(){return"lon="+this.lon+",lat="+this.lat},toShortString:function(){return this.lon+", "+this.lat},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat)},add:function(a,b){if(null==a||null==b)throw new TypeError("LonLat.add cannot receive null values");return new OpenLayers.LonLat(this.lon+
OpenLayers.Util.toFloat(a),this.lat+OpenLayers.Util.toFloat(b))},equals:function(a){var b=!1;null!=a&&(b=this.lon==a.lon&&this.lat==a.lat||isNaN(this.lon)&&isNaN(this.lat)&&isNaN(a.lon)&&isNaN(a.lat));return b},transform:function(a,b){var c=OpenLayers.Projection.transform({x:this.lon,y:this.lat},a,b);this.lon=c.x;this.lat=c.y;return this},wrapDateLine:function(a){var b=this.clone();if(a){for(;b.lon<a.left;)b.lon+=a.getWidth();for(;b.lon>a.right;)b.lon-=a.getWidth()}return b},CLASS_NAME:"OpenLayers.LonLat"});
OpenLayers.LonLat.fromString=function(a){a=a.split(",");return new OpenLayers.LonLat(a[0],a[1])};OpenLayers.LonLat.fromArray=function(a){var b=OpenLayers.Util.isArray(a);return new OpenLayers.LonLat(b&&a[0],b&&a[1])};OpenLayers.Pixel=OpenLayers.Class({x:0,y:0,initialize:function(a,b){this.x=parseFloat(a);this.y=parseFloat(b)},toString:function(){return"x="+this.x+",y="+this.y},clone:function(){return new OpenLayers.Pixel(this.x,this.y)},equals:function(a){var b=!1;null!=a&&(b=this.x==a.x&&this.y==a.y||isNaN(this.x)&&isNaN(this.y)&&isNaN(a.x)&&isNaN(a.y));return b},distanceTo:function(a){return Math.sqrt(Math.pow(this.x-a.x,2)+Math.pow(this.y-a.y,2))},add:function(a,b){if(null==a||null==b)throw new TypeError("Pixel.add cannot receive null values");
return new OpenLayers.Pixel(this.x+a,this.y+b)},offset:function(a){var b=this.clone();a&&(b=this.add(a.x,a.y));return b},CLASS_NAME:"OpenLayers.Pixel"});OpenLayers.Size=OpenLayers.Class({w:0,h:0,initialize:function(a,b){this.w=parseFloat(a);this.h=parseFloat(b)},toString:function(){return"w="+this.w+",h="+this.h},clone:function(){return new OpenLayers.Size(this.w,this.h)},equals:function(a){var b=!1;null!=a&&(b=this.w==a.w&&this.h==a.h||isNaN(this.w)&&isNaN(this.h)&&isNaN(a.w)&&isNaN(a.h));return b},CLASS_NAME:"OpenLayers.Size"});OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},userError:function(a){alert(a)},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"};
(function(){for(var a=document.getElementsByTagName("script"),b=0,c=a.length;b<c;++b)if(-1!=a[b].src.indexOf("firebug.js")&&console){OpenLayers.Util.extend(OpenLayers.Console,console);break}})();OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){OpenLayers.Lang.code||OpenLayers.Lang.setCode();return OpenLayers.Lang.code},setCode:function(a){var b;a||(a="msie"==OpenLayers.BROWSER_NAME?navigator.userLanguage:navigator.language);a=a.split("-");a[0]=a[0].toLowerCase();"object"==typeof OpenLayers.Lang[a[0]]&&(b=a[0]);if(a[1]){var c=a[0]+"-"+a[1].toUpperCase();"object"==typeof OpenLayers.Lang[c]&&(b=c)}if(!b)OpenLayers.Console.warn("Failed to find OpenLayers.Lang."+a.join("-")+" dictionary, falling back to default language"),
b=OpenLayers.Lang.defaultCode;OpenLayers.Lang.code=b},translate:function(a,b){var c=OpenLayers.Lang[OpenLayers.Lang.getCode()];(c=c&&c[a])||(c=a);b&&(c=OpenLayers.String.format(c,b));return c}};OpenLayers.i18n=OpenLayers.Lang.translate;OpenLayers.Util=OpenLayers.Util||{};OpenLayers.Util.getElement=function(){for(var a=[],b=0,c=arguments.length;b<c;b++){var d=arguments[b];"string"==typeof d&&(d=document.getElementById(d));if(1==arguments.length)return d;a.push(d)}return a};OpenLayers.Util.isElement=function(a){return!!(a&&1===a.nodeType)};OpenLayers.Util.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)};if("undefined"===typeof window.$)window.$=OpenLayers.Util.getElement;
OpenLayers.Util.removeItem=function(a,b){for(var c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1);return a};OpenLayers.Util.indexOf=function(a,b){if("function"==typeof a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1};
OpenLayers.Util.modifyDOMElement=function(a,b,c,d,e,f,g,h){if(b)a.id=b;if(c)a.style.left=c.x+"px",a.style.top=c.y+"px";if(d)a.style.width=d.w+"px",a.style.height=d.h+"px";if(e)a.style.position=e;if(f)a.style.border=f;if(g)a.style.overflow=g;if(0<=parseFloat(h)&&1>parseFloat(h))a.style.filter="alpha(opacity="+100*h+")",a.style.opacity=h;else if(1==parseFloat(h))a.style.filter="",a.style.opacity=""};
OpenLayers.Util.createDiv=function(a,b,c,d,e,f,g,h){var i=document.createElement("div");if(d)i.style.backgroundImage="url("+d+")";a||(a=OpenLayers.Util.createUniqueID("OpenLayersDiv"));e||(e="absolute");OpenLayers.Util.modifyDOMElement(i,a,b,c,e,f,g,h);return i};
OpenLayers.Util.createImage=function(a,b,c,d,e,f,g,h){var i=document.createElement("img");a||(a=OpenLayers.Util.createUniqueID("OpenLayersDiv"));e||(e="relative");OpenLayers.Util.modifyDOMElement(i,a,b,c,e,f,null,g);if(h)i.style.display="none",b=function(){i.style.display="";OpenLayers.Event.stopObservingElement(i)},OpenLayers.Event.observe(i,"load",b),OpenLayers.Event.observe(i,"error",b);i.style.alt=a;i.galleryImg="no";if(d)i.src=d;return i};OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;
OpenLayers.Util.alphaHackNeeded=null;OpenLayers.Util.alphaHack=function(){if(null==OpenLayers.Util.alphaHackNeeded){var a=navigator.appVersion.split("MSIE"),a=parseFloat(a[1]),b=!1;try{b=!!document.body.filters}catch(c){}OpenLayers.Util.alphaHackNeeded=b&&5.5<=a&&7>a}return OpenLayers.Util.alphaHackNeeded};
OpenLayers.Util.modifyAlphaImageDiv=function(a,b,c,d,e,f,g,h,i){OpenLayers.Util.modifyDOMElement(a,b,c,d,f,null,null,i);b=a.childNodes[0];if(e)b.src=e;OpenLayers.Util.modifyDOMElement(b,a.id+"_innerImage",null,d,"relative",g);if(OpenLayers.Util.alphaHack()){if("none"!=a.style.display)a.style.display="inline-block";null==h&&(h="scale");a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+b.src+"', sizingMethod='"+h+"')";0<=parseFloat(a.style.opacity)&&1>parseFloat(a.style.opacity)&&
(a.style.filter+=" alpha(opacity="+100*a.style.opacity+")");b.style.filter="alpha(opacity=0)"}};OpenLayers.Util.createAlphaImageDiv=function(a,b,c,d,e,f,g,h,i){var k=OpenLayers.Util.createDiv(),i=OpenLayers.Util.createImage(null,null,null,null,null,null,null,i);i.className="olAlphaImg";k.appendChild(i);OpenLayers.Util.modifyAlphaImageDiv(k,a,b,c,d,e,f,g,h);return k};OpenLayers.Util.upperCaseObject=function(a){var b={},c;for(c in a)b[c.toUpperCase()]=a[c];return b};
OpenLayers.Util.applyDefaults=function(a,b){var a=a||{},c="function"==typeof window.Event&&b instanceof window.Event,d;for(d in b)if(void 0===a[d]||!c&&b.hasOwnProperty&&b.hasOwnProperty(d)&&!a.hasOwnProperty(d))a[d]=b[d];if(!c&&b&&b.hasOwnProperty&&b.hasOwnProperty("toString")&&!a.hasOwnProperty("toString"))a.toString=b.toString;return a};
OpenLayers.Util.getParameterString=function(a){var b=[],c;for(c in a){var d=a[c];if(null!=d&&"function"!=typeof d){if("object"==typeof d&&d.constructor==Array){for(var e=[],f,g=0,h=d.length;g<h;g++)f=d[g],e.push(encodeURIComponent(null===f||void 0===f?"":f));d=e.join(",")}else d=encodeURIComponent(d);b.push(encodeURIComponent(c)+"="+d)}}return b.join("&")};OpenLayers.Util.urlAppend=function(a,b){var c=a;if(b)var d=(a+" ").split(/[?&]/),c=c+(" "===d.pop()?b:d.length?"&"+b:"?"+b);return c};
OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||OpenLayers._getScriptLocation()+"img/"};OpenLayers.Util.getImageLocation=function(a){return OpenLayers.Util.getImagesLocation()+a};OpenLayers.Util.Try=function(){for(var a=null,b=0,c=arguments.length;b<c;b++){var d=arguments[b];try{a=d();break}catch(e){}}return a};
OpenLayers.Util.getXmlNodeValue=function(a){var b=null;OpenLayers.Util.Try(function(){b=a.text;if(!b)b=a.textContent;if(!b)b=a.firstChild.nodeValue},function(){b=a.textContent});return b};OpenLayers.Util.mouseLeft=function(a,b){for(var c=a.relatedTarget?a.relatedTarget:a.toElement;c!=b&&null!=c;)c=c.parentNode;return c!=b};OpenLayers.Util.DEFAULT_PRECISION=14;
OpenLayers.Util.toFloat=function(a,b){if(null==b)b=OpenLayers.Util.DEFAULT_PRECISION;"number"!==typeof a&&(a=parseFloat(a));return 0===b?a:parseFloat(a.toPrecision(b))};OpenLayers.Util.rad=function(a){return a*Math.PI/180};OpenLayers.Util.deg=function(a){return 180*a/Math.PI};OpenLayers.Util.VincentyConstants={a:6378137,b:6356752.3142,f:1/298.257223563};
OpenLayers.Util.distVincenty=function(a,b){for(var c=OpenLayers.Util.VincentyConstants,d=c.a,e=c.b,c=c.f,f=OpenLayers.Util.rad(b.lon-a.lon),g=Math.atan((1-c)*Math.tan(OpenLayers.Util.rad(a.lat))),h=Math.atan((1-c)*Math.tan(OpenLayers.Util.rad(b.lat))),i=Math.sin(g),g=Math.cos(g),k=Math.sin(h),h=Math.cos(h),s=f,t=2*Math.PI,o=20;1.0E-12<Math.abs(s-t)&&0<--o;){var l=Math.sin(s),j=Math.cos(s),n=Math.sqrt(h*l*h*l+(g*k-i*h*j)*(g*k-i*h*j));if(0==n)return 0;var j=i*k+g*h*j,m=Math.atan2(n,j),q=Math.asin(g*
h*l/n),p=Math.cos(q)*Math.cos(q),l=j-2*i*k/p,r=c/16*p*(4+c*(4-3*p)),t=s,s=f+(1-r)*c*Math.sin(q)*(m+r*n*(l+r*j*(-1+2*l*l)))}if(0==o)return NaN;d=p*(d*d-e*e)/(e*e);c=d/1024*(256+d*(-128+d*(74-47*d)));return(e*(1+d/16384*(4096+d*(-768+d*(320-175*d))))*(m-c*n*(l+c/4*(j*(-1+2*l*l)-c/6*l*(-3+4*n*n)*(-3+4*l*l))))).toFixed(3)/1E3};
OpenLayers.Util.destinationVincenty=function(a,b,c){for(var d=OpenLayers.Util,e=d.VincentyConstants,f=e.a,g=e.b,h=e.f,e=a.lon,a=a.lat,i=d.rad(b),b=Math.sin(i),i=Math.cos(i),a=(1-h)*Math.tan(d.rad(a)),k=1/Math.sqrt(1+a*a),s=a*k,t=Math.atan2(a,i),a=k*b,o=1-a*a,f=o*(f*f-g*g)/(g*g),l=1+f/16384*(4096+f*(-768+f*(320-175*f))),j=f/1024*(256+f*(-128+f*(74-47*f))),f=c/(g*l),n=2*Math.PI;1.0E-12<Math.abs(f-n);)var m=Math.cos(2*t+f),q=Math.sin(f),p=Math.cos(f),r=j*q*(m+j/4*(p*(-1+2*m*m)-j/6*m*(-3+4*q*q)*(-3+4*
m*m))),n=f,f=c/(g*l)+r;c=s*q-k*p*i;g=Math.atan2(s*p+k*q*i,(1-h)*Math.sqrt(a*a+c*c));b=Math.atan2(q*b,k*p-s*q*i);i=h/16*o*(4+h*(4-3*o));m=b-(1-i)*h*a*(f+i*q*(m+i*p*(-1+2*m*m)));Math.atan2(a,-c);return new OpenLayers.LonLat(e+d.deg(m),d.deg(g))};
OpenLayers.Util.getParameters=function(a){var a=null===a||void 0===a?window.location.href:a,b="";if(OpenLayers.String.contains(a,"?"))var b=a.indexOf("?")+1,c=OpenLayers.String.contains(a,"#")?a.indexOf("#"):a.length,b=a.substring(b,c);for(var a={},b=b.split(/[&;]/),c=0,d=b.length;c<d;++c){var e=b[c].split("=");if(e[0]){var f=e[0];try{f=decodeURIComponent(f)}catch(g){f=unescape(f)}e=(e[1]||"").replace(/\+/g," ");try{e=decodeURIComponent(e)}catch(h){e=unescape(e)}e=e.split(",");1==e.length&&(e=e[0]);
a[f]=e}}return a};OpenLayers.Util.lastSeqID=0;OpenLayers.Util.createUniqueID=function(a){null==a&&(a="id_");OpenLayers.Util.lastSeqID+=1;return a+OpenLayers.Util.lastSeqID};OpenLayers.INCHES_PER_UNIT={inches:1,ft:12,mi:63360,m:39.3701,km:39370.1,dd:4374754,yd:36};OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;OpenLayers.INCHES_PER_UNIT.degrees=OpenLayers.INCHES_PER_UNIT.dd;OpenLayers.INCHES_PER_UNIT.nmi=1852*OpenLayers.INCHES_PER_UNIT.m;OpenLayers.METERS_PER_INCH=0.0254000508001016;
OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{Inch:OpenLayers.INCHES_PER_UNIT.inches,Meter:1/OpenLayers.METERS_PER_INCH,Foot:0.3048006096012192/OpenLayers.METERS_PER_INCH,IFoot:0.3048/OpenLayers.METERS_PER_INCH,ClarkeFoot:0.3047972651151/OpenLayers.METERS_PER_INCH,SearsFoot:0.30479947153867626/OpenLayers.METERS_PER_INCH,GoldCoastFoot:0.3047997101815088/OpenLayers.METERS_PER_INCH,IInch:0.0254/OpenLayers.METERS_PER_INCH,MicroInch:2.54E-5/OpenLayers.METERS_PER_INCH,Mil:2.54E-8/OpenLayers.METERS_PER_INCH,
Centimeter:0.01/OpenLayers.METERS_PER_INCH,Kilometer:1E3/OpenLayers.METERS_PER_INCH,Yard:0.9144018288036576/OpenLayers.METERS_PER_INCH,SearsYard:0.914398414616029/OpenLayers.METERS_PER_INCH,IndianYard:0.9143985307444408/OpenLayers.METERS_PER_INCH,IndianYd37:0.91439523/OpenLayers.METERS_PER_INCH,IndianYd62:0.9143988/OpenLayers.METERS_PER_INCH,IndianYd75:0.9143985/OpenLayers.METERS_PER_INCH,IndianFoot:0.30479951/OpenLayers.METERS_PER_INCH,IndianFt37:0.30479841/OpenLayers.METERS_PER_INCH,IndianFt62:0.3047996/
OpenLayers.METERS_PER_INCH,IndianFt75:0.3047995/OpenLayers.METERS_PER_INCH,Mile:1609.3472186944373/OpenLayers.METERS_PER_INCH,IYard:0.9144/OpenLayers.METERS_PER_INCH,IMile:1609.344/OpenLayers.METERS_PER_INCH,NautM:1852/OpenLayers.METERS_PER_INCH,"Lat-66":110943.31648893273/OpenLayers.METERS_PER_INCH,"Lat-83":110946.25736872235/OpenLayers.METERS_PER_INCH,Decimeter:0.1/OpenLayers.METERS_PER_INCH,Millimeter:0.0010/OpenLayers.METERS_PER_INCH,Dekameter:10/OpenLayers.METERS_PER_INCH,Decameter:10/OpenLayers.METERS_PER_INCH,
Hectometer:100/OpenLayers.METERS_PER_INCH,GermanMeter:1.0000135965/OpenLayers.METERS_PER_INCH,CaGrid:0.999738/OpenLayers.METERS_PER_INCH,ClarkeChain:20.1166194976/OpenLayers.METERS_PER_INCH,GunterChain:20.11684023368047/OpenLayers.METERS_PER_INCH,BenoitChain:20.116782494375872/OpenLayers.METERS_PER_INCH,SearsChain:20.11676512155/OpenLayers.METERS_PER_INCH,ClarkeLink:0.201166194976/OpenLayers.METERS_PER_INCH,GunterLink:0.2011684023368047/OpenLayers.METERS_PER_INCH,BenoitLink:0.20116782494375873/OpenLayers.METERS_PER_INCH,
SearsLink:0.2011676512155/OpenLayers.METERS_PER_INCH,Rod:5.02921005842012/OpenLayers.METERS_PER_INCH,IntnlChain:20.1168/OpenLayers.METERS_PER_INCH,IntnlLink:0.201168/OpenLayers.METERS_PER_INCH,Perch:5.02921005842012/OpenLayers.METERS_PER_INCH,Pole:5.02921005842012/OpenLayers.METERS_PER_INCH,Furlong:201.1684023368046/OpenLayers.METERS_PER_INCH,Rood:3.778266898/OpenLayers.METERS_PER_INCH,CapeFoot:0.3047972615/OpenLayers.METERS_PER_INCH,Brealey:375/OpenLayers.METERS_PER_INCH,ModAmFt:0.304812252984506/
OpenLayers.METERS_PER_INCH,Fathom:1.8288/OpenLayers.METERS_PER_INCH,"NautM-UK":1853.184/OpenLayers.METERS_PER_INCH,"50kilometers":5E4/OpenLayers.METERS_PER_INCH,"150kilometers":15E4/OpenLayers.METERS_PER_INCH});
OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{mm:OpenLayers.INCHES_PER_UNIT.Meter/1E3,cm:OpenLayers.INCHES_PER_UNIT.Meter/100,dm:100*OpenLayers.INCHES_PER_UNIT.Meter,km:1E3*OpenLayers.INCHES_PER_UNIT.Meter,kmi:OpenLayers.INCHES_PER_UNIT.nmi,fath:OpenLayers.INCHES_PER_UNIT.Fathom,ch:OpenLayers.INCHES_PER_UNIT.IntnlChain,link:OpenLayers.INCHES_PER_UNIT.IntnlLink,"us-in":OpenLayers.INCHES_PER_UNIT.inches,"us-ft":OpenLayers.INCHES_PER_UNIT.Foot,"us-yd":OpenLayers.INCHES_PER_UNIT.Yard,"us-ch":OpenLayers.INCHES_PER_UNIT.GunterChain,
"us-mi":OpenLayers.INCHES_PER_UNIT.Mile,"ind-yd":OpenLayers.INCHES_PER_UNIT.IndianYd37,"ind-ft":OpenLayers.INCHES_PER_UNIT.IndianFt37,"ind-ch":20.11669506/OpenLayers.METERS_PER_INCH});OpenLayers.DOTS_PER_INCH=72;OpenLayers.Util.normalizeScale=function(a){return 1<a?1/a:a};OpenLayers.Util.getResolutionFromScale=function(a,b){var c;a&&(null==b&&(b="degrees"),c=1/(OpenLayers.Util.normalizeScale(a)*OpenLayers.INCHES_PER_UNIT[b]*OpenLayers.DOTS_PER_INCH));return c};
OpenLayers.Util.getScaleFromResolution=function(a,b){null==b&&(b="degrees");return a*OpenLayers.INCHES_PER_UNIT[b]*OpenLayers.DOTS_PER_INCH};
OpenLayers.Util.pagePosition=function(a){var b=[0,0],c=OpenLayers.Util.getViewportElement();if(!a||a==window||a==c)return b;var d=OpenLayers.IS_GECKO&&document.getBoxObjectFor&&"absolute"==OpenLayers.Element.getStyle(a,"position")&&(""==a.style.top||""==a.style.left),e=null;if(a.getBoundingClientRect)a=a.getBoundingClientRect(),e=c.scrollTop,b[0]=a.left+c.scrollLeft,b[1]=a.top+e;else if(document.getBoxObjectFor&&!d)a=document.getBoxObjectFor(a),c=document.getBoxObjectFor(c),b[0]=a.screenX-c.screenX,
b[1]=a.screenY-c.screenY;else{b[0]=a.offsetLeft;b[1]=a.offsetTop;e=a.offsetParent;if(e!=a)for(;e;)b[0]+=e.offsetLeft,b[1]+=e.offsetTop,e=e.offsetParent;c=OpenLayers.BROWSER_NAME;if("opera"==c||"safari"==c&&"absolute"==OpenLayers.Element.getStyle(a,"position"))b[1]-=document.body.offsetTop;for(e=a.offsetParent;e&&e!=document.body;){b[0]-=e.scrollLeft;if("opera"!=c||"TR"!=e.tagName)b[1]-=e.scrollTop;e=e.offsetParent}}return b};
OpenLayers.Util.getViewportElement=function(){var a=arguments.callee.viewportElement;if(void 0==a)a="msie"==OpenLayers.BROWSER_NAME&&"CSS1Compat"!=document.compatMode?document.body:document.documentElement,arguments.callee.viewportElement=a;return a};
OpenLayers.Util.isEquivalentUrl=function(a,b,c){c=c||{};OpenLayers.Util.applyDefaults(c,{ignoreCase:!0,ignorePort80:!0,ignoreHash:!0});var a=OpenLayers.Util.createUrlObject(a,c),b=OpenLayers.Util.createUrlObject(b,c),d;for(d in a)if("args"!==d&&a[d]!=b[d])return!1;for(d in a.args){if(a.args[d]!=b.args[d])return!1;delete b.args[d]}for(d in b.args)return!1;return!0};
OpenLayers.Util.createUrlObject=function(a,b){b=b||{};if(!/^\w+:\/\//.test(a)){var c=window.location,d=c.port?":"+c.port:"",d=c.protocol+"//"+c.host.split(":").shift()+d;0===a.indexOf("/")?a=d+a:(c=c.pathname.split("/"),c.pop(),a=d+c.join("/")+"/"+a)}b.ignoreCase&&(a=a.toLowerCase());c=document.createElement("a");c.href=a;d={};d.host=c.host.split(":").shift();d.protocol=c.protocol;d.port=b.ignorePort80?"80"==c.port||"0"==c.port?"":c.port:""==c.port||"0"==c.port?"80":c.port;d.hash=b.ignoreHash||"#"===
c.hash?"":c.hash;var e=c.search;e||(e=a.indexOf("?"),e=-1!=e?a.substr(e):"");d.args=OpenLayers.Util.getParameters(e);d.pathname="/"==c.pathname.charAt(0)?c.pathname:"/"+c.pathname;return d};OpenLayers.Util.removeTail=function(a){var b=null,b=a.indexOf("?"),c=a.indexOf("#");return b=-1==b?-1!=c?a.substr(0,c):a:-1!=c?a.substr(0,Math.min(b,c)):a.substr(0,b)};OpenLayers.IS_GECKO=function(){var a=navigator.userAgent.toLowerCase();return-1==a.indexOf("webkit")&&-1!=a.indexOf("gecko")}();
OpenLayers.CANVAS_SUPPORTED=function(){var a=document.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))}();OpenLayers.BROWSER_NAME=function(){var a="",b=navigator.userAgent.toLowerCase();-1!=b.indexOf("opera")?a="opera":-1!=b.indexOf("msie")?a="msie":-1!=b.indexOf("safari")?a="safari":-1!=b.indexOf("mozilla")&&(a=-1!=b.indexOf("firefox")?"firefox":"mozilla");return a}();OpenLayers.Util.getBrowserName=function(){return OpenLayers.BROWSER_NAME};
OpenLayers.Util.getRenderedDimensions=function(a,b,c){var d,e,f=document.createElement("div");f.style.visibility="hidden";var g=c&&c.containerElement?c.containerElement:document.body;if(b)if(b.w)d=b.w,f.style.width=d+"px";else if(b.h)e=b.h,f.style.height=e+"px";if(c&&c.displayClass)f.className=c.displayClass;b=document.createElement("div");b.innerHTML=a;b.style.overflow="visible";if(b.childNodes){a=0;for(c=b.childNodes.length;a<c;a++)if(b.childNodes[a].style)b.childNodes[a].style.overflow="visible"}f.appendChild(b);
g.appendChild(f);a=!1;for(c=f.parentNode;c&&"body"!=c.tagName.toLowerCase();){var h=OpenLayers.Element.getStyle(c,"position");if("absolute"==h){a=!0;break}else if(h&&"static"!=h)break;c=c.parentNode}if(!a)f.style.position="absolute";if(!d)d=parseInt(b.scrollWidth),f.style.width=d+"px";e||(e=parseInt(b.scrollHeight));f.removeChild(b);g.removeChild(f);return new OpenLayers.Size(d,e)};
OpenLayers.Util.getScrollbarWidth=function(){var a=OpenLayers.Util._scrollbarWidth;if(null==a){var b=null,c=null,b=a=0,b=document.createElement("div");b.style.position="absolute";b.style.top="-1000px";b.style.left="-1000px";b.style.width="100px";b.style.height="50px";b.style.overflow="hidden";c=document.createElement("div");c.style.width="100%";c.style.height="200px";b.appendChild(c);document.body.appendChild(b);a=c.offsetWidth;b.style.overflow="scroll";b=c.offsetWidth;document.body.removeChild(document.body.lastChild);
OpenLayers.Util._scrollbarWidth=a-b;a=OpenLayers.Util._scrollbarWidth}return a};
OpenLayers.Util.getFormattedLonLat=function(a,b,c){c||(c="dms");var a=(a+540)%360-180,d=Math.abs(a),e=Math.floor(d),f=d=(d-e)/(1/60),d=Math.floor(d),f=Math.round(10*((f-d)/(1/60))),f=f/10;60<=f&&(f-=60,d+=1,60<=d&&(d-=60,e+=1));10>e&&(e="0"+e);e+="\u00b0";0<=c.indexOf("dm")&&(10>d&&(d="0"+d),e+=d+"'",0<=c.indexOf("dms")&&(10>f&&(f="0"+f),e+=f+'"'));return e="lon"==b?e+(0>a?OpenLayers.i18n("W"):OpenLayers.i18n("E")):e+(0>a?OpenLayers.i18n("S"):OpenLayers.i18n("N"))};OpenLayers.Event={observers:!1,KEY_SPACE:32,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(a){return a.target||a.srcElement},isSingleTouch:function(a){return a.touches&&1==a.touches.length},isMultiTouch:function(a){return a.touches&&1<a.touches.length},isLeftClick:function(a){return a.which&&1==a.which||a.button&&1==a.button},isRightClick:function(a){return a.which&&3==a.which||a.button&&2==a.button},stop:function(a,
b){if(!b)a.preventDefault?a.preventDefault():a.returnValue=!1;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},findElement:function(a,b){for(var c=OpenLayers.Event.element(a);c.parentNode&&(!c.tagName||c.tagName.toUpperCase()!=b.toUpperCase());)c=c.parentNode;return c},observe:function(a,b,c,d){a=OpenLayers.Util.getElement(a);d=d||!1;if("keypress"==b&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||a.attachEvent))b="keydown";if(!this.observers)this.observers={};if(!a._eventCacheID){var e=
"eventCacheID_";a.id&&(e=a.id+"_"+e);a._eventCacheID=OpenLayers.Util.createUniqueID(e)}e=a._eventCacheID;this.observers[e]||(this.observers[e]=[]);this.observers[e].push({element:a,name:b,observer:c,useCapture:d});a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},stopObservingElement:function(a){a=OpenLayers.Util.getElement(a)._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[a])},_removeElementObservers:function(a){if(a)for(var b=a.length-1;0<=
b;b--){var c=a[b];OpenLayers.Event.stopObserving.apply(this,[c.element,c.name,c.observer,c.useCapture])}},stopObserving:function(a,b,c,d){var d=d||!1,a=OpenLayers.Util.getElement(a),e=a._eventCacheID;if("keypress"==b&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||a.detachEvent))b="keydown";var f=!1,g=OpenLayers.Event.observers[e];if(g)for(var h=0;!f&&h<g.length;){var i=g[h];if(i.name==b&&i.observer==c&&i.useCapture==d){g.splice(h,1);0==g.length&&delete OpenLayers.Event.observers[e];f=!0;
break}h++}f&&(a.removeEventListener?a.removeEventListener(b,c,d):a&&a.detachEvent&&a.detachEvent("on"+b,c));return f},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var a in OpenLayers.Event.observers)OpenLayers.Event._removeElementObservers.apply(this,[OpenLayers.Event.observers[a]]);OpenLayers.Event.observers=!1}},CLASS_NAME:"OpenLayers.Event"};OpenLayers.Event.observe(window,"unload",OpenLayers.Event.unloadCache,!1);
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:"mouseover,mouseout,mousedown,mouseup,mousemove,click,dblclick,rightclick,dblrightclick,resize,focus,blur,touchstart,touchmove,touchend,keydown".split(","),listeners:null,object:null,element:null,eventHandler:null,fallThrough:null,includeXY:!1,extensions:null,extensionCount:null,clearMouseListener:null,initialize:function(a,b,c,d,e){OpenLayers.Util.extend(this,e);this.object=a;this.fallThrough=d;this.listeners={};this.extensions={};this.extensionCount=
{};null!=b&&this.attachToElement(b)},destroy:function(){for(var a in this.extensions)"boolean"!==typeof this.extensions[a]&&this.extensions[a].destroy();this.extensions=null;this.element&&(OpenLayers.Event.stopObservingElement(this.element),this.element.hasScrollEvent&&OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener));this.eventHandler=this.fallThrough=this.object=this.listeners=this.element=null},addEventType:function(){},attachToElement:function(a){this.element?OpenLayers.Event.stopObservingElement(this.element):
(this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this),this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this));this.element=a;for(var b=0,c=this.BROWSER_EVENTS.length;b<c;b++)OpenLayers.Event.observe(a,this.BROWSER_EVENTS[b],this.eventHandler);OpenLayers.Event.observe(a,"dragstart",OpenLayers.Event.stop)},on:function(a){for(var b in a)"scope"!=b&&a.hasOwnProperty(b)&&this.register(b,a.scope,a[b])},register:function(a,b,c,d){a in OpenLayers.Events&&
!this.extensions[a]&&(this.extensions[a]=new OpenLayers.Events[a](this));if(null!=c){if(null==b)b=this.object;var e=this.listeners[a];e||(e=[],this.listeners[a]=e,this.extensionCount[a]=0);b={obj:b,func:c};d?(e.splice(this.extensionCount[a],0,b),"object"===typeof d&&d.extension&&this.extensionCount[a]++):e.push(b)}},registerPriority:function(a,b,c){this.register(a,b,c,!0)},un:function(a){for(var b in a)"scope"!=b&&a.hasOwnProperty(b)&&this.unregister(b,a.scope,a[b])},unregister:function(a,b,c){if(null==
b)b=this.object;a=this.listeners[a];if(null!=a)for(var d=0,e=a.length;d<e;d++)if(a[d].obj==b&&a[d].func==c){a.splice(d,1);break}},remove:function(a){null!=this.listeners[a]&&(this.listeners[a]=[])},triggerEvent:function(a,b){var c=this.listeners[a];if(c&&0!=c.length){null==b&&(b={});b.object=this.object;b.element=this.element;if(!b.type)b.type=a;for(var c=c.slice(),d,e=0,f=c.length;e<f&&!(d=c[e],d=d.func.apply(d.obj,[b]),void 0!=d&&!1==d);e++);this.fallThrough||OpenLayers.Event.stop(b,!0);return d}},
handleBrowserEvent:function(a){var b=a.type,c=this.listeners[b];if(c&&0!=c.length){if((c=a.touches)&&c[0]){for(var d=0,e=0,f=c.length,g,h=0;h<f;++h)g=c[h],d+=g.clientX,e+=g.clientY;a.clientX=d/f;a.clientY=e/f}if(this.includeXY)a.xy=this.getMousePosition(a);this.triggerEvent(b,a)}},clearMouseCache:function(){this.element.scrolls=null;this.element.lefttop=null;var a=document.body;if(a&&(!(0!=a.scrollTop||0!=a.scrollLeft)||!navigator.userAgent.match(/iPhone/i)))this.element.offsets=null},getMousePosition:function(a){if(this.includeXY){if(!this.element.hasScrollEvent)OpenLayers.Event.observe(window,
"scroll",this.clearMouseListener),this.element.hasScrollEvent=!0}else this.clearMouseCache();if(!this.element.scrolls){var b=OpenLayers.Util.getViewportElement();this.element.scrolls=[b.scrollLeft,b.scrollTop]}if(!this.element.lefttop)this.element.lefttop=[document.documentElement.clientLeft||0,document.documentElement.clientTop||0];if(!this.element.offsets)this.element.offsets=OpenLayers.Util.pagePosition(this.element);return new OpenLayers.Pixel(a.clientX+this.element.scrolls[0]-this.element.offsets[0]-
this.element.lefttop[0],a.clientY+this.element.scrolls[1]-this.element.offsets[1]-this.element.lefttop[1])},CLASS_NAME:"OpenLayers.Events"});OpenLayers.Handler=OpenLayers.Class({id:null,control:null,map:null,keyMask:null,active:!1,evt:null,initialize:function(a,b,c){OpenLayers.Util.extend(this,c);this.control=a;this.callbacks=b;(a=this.map||a.map)&&this.setMap(a);this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_")},setMap:function(a){this.map=a},checkModifiers:function(a){return null==this.keyMask?!0:((a.shiftKey?OpenLayers.Handler.MOD_SHIFT:0)|(a.ctrlKey?OpenLayers.Handler.MOD_CTRL:0)|(a.altKey?OpenLayers.Handler.MOD_ALT:0))==
this.keyMask},activate:function(){if(this.active)return!1;for(var a=OpenLayers.Events.prototype.BROWSER_EVENTS,b=0,c=a.length;b<c;b++)this[a[b]]&&this.register(a[b],this[a[b]]);return this.active=!0},deactivate:function(){if(!this.active)return!1;for(var a=OpenLayers.Events.prototype.BROWSER_EVENTS,b=0,c=a.length;b<c;b++)this[a[b]]&&this.unregister(a[b],this[a[b]]);this.active=!1;return!0},callback:function(a,b){a&&this.callbacks[a]&&this.callbacks[a].apply(this.control,b)},register:function(a,b){this.map.events.registerPriority(a,
this,b);this.map.events.registerPriority(a,this,this.setEvent)},unregister:function(a,b){this.map.events.unregister(a,this,b);this.map.events.unregister(a,this,this.setEvent)},setEvent:function(a){this.evt=a;return!0},destroy:function(){this.deactivate();this.control=this.map=null},CLASS_NAME:"OpenLayers.Handler"});OpenLayers.Handler.MOD_NONE=0;OpenLayers.Handler.MOD_SHIFT=1;OpenLayers.Handler.MOD_CTRL=2;OpenLayers.Handler.MOD_ALT=4;OpenLayers.Handler.Hover=OpenLayers.Class(OpenLayers.Handler,{delay:500,pixelTolerance:null,stopMove:!1,px:null,timerId:null,mousemove:function(a){if(this.passesTolerance(a.xy))this.clearTimer(),this.callback("move",[a]),this.px=a.xy,a=OpenLayers.Util.extend({},a),this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,a),this.delay);return!this.stopMove},mouseout:function(a){OpenLayers.Util.mouseLeft(a,this.map.viewPortDiv)&&(this.clearTimer(),this.callback("move",[a]));return!0},
passesTolerance:function(a){var b=!0;this.pixelTolerance&&this.px&&Math.sqrt(Math.pow(this.px.x-a.x,2)+Math.pow(this.px.y-a.y,2))<this.pixelTolerance&&(b=!1);return b},clearTimer:function(){if(null!=this.timerId)window.clearTimeout(this.timerId),this.timerId=null},delayedCall:function(a){this.callback("pause",[a])},deactivate:function(){var a=!1;OpenLayers.Handler.prototype.deactivate.apply(this,arguments)&&(this.clearTimer(),a=!0);return a},CLASS_NAME:"OpenLayers.Handler.Hover"});OpenLayers.Handler.Click=OpenLayers.Class(OpenLayers.Handler,{delay:300,single:!0,"double":!1,pixelTolerance:0,dblclickTolerance:13,stopSingle:!1,stopDouble:!1,timerId:null,touch:!1,down:null,last:null,first:null,rightclickTimerId:null,touchstart:function(a){if(!this.touch)this.unregisterMouseListeners(),this.touch=!0;this.down=this.getEventInfo(a);this.last=this.getEventInfo(a);return!0},touchmove:function(a){this.last=this.getEventInfo(a);return!0},touchend:function(a){if(this.down)a.xy=this.last.xy,
a.lastTouches=this.last.touches,this.handleSingle(a),this.down=null;return!0},unregisterMouseListeners:function(){this.map.events.un({mousedown:this.mousedown,mouseup:this.mouseup,click:this.click,dblclick:this.dblclick,scope:this})},mousedown:function(a){this.down=this.getEventInfo(a);this.last=this.getEventInfo(a);return!0},mouseup:function(a){var b=!0;this.checkModifiers(a)&&this.control.handleRightClicks&&OpenLayers.Event.isRightClick(a)&&(b=this.rightclick(a));return b},rightclick:function(a){if(this.passesTolerance(a)){if(null!=
this.rightclickTimerId)return this.clearTimer(),this.callback("dblrightclick",[a]),!this.stopDouble;a=this["double"]?OpenLayers.Util.extend({},a):this.callback("rightclick",[a]);a=OpenLayers.Function.bind(this.delayedRightCall,this,a);this.rightclickTimerId=window.setTimeout(a,this.delay)}return!this.stopSingle},delayedRightCall:function(a){this.rightclickTimerId=null;a&&this.callback("rightclick",[a])},click:function(a){if(!this.last)this.last=this.getEventInfo(a);this.handleSingle(a);return!this.stopSingle},
dblclick:function(a){this.handleDouble(a);return!this.stopDouble},handleDouble:function(a){this.passesDblclickTolerance(a)&&(this["double"]&&this.callback("dblclick",[a]),this.clearTimer())},handleSingle:function(a){if(this.passesTolerance(a))null!=this.timerId?(this.last.touches&&1===this.last.touches.length&&(this["double"]&&OpenLayers.Event.stop(a),this.handleDouble(a)),(!this.last.touches||2!==this.last.touches.length)&&this.clearTimer()):(this.first=this.getEventInfo(a),this.queuePotentialClick(this.single?
OpenLayers.Util.extend({},a):null))},queuePotentialClick:function(a){this.timerId=window.setTimeout(OpenLayers.Function.bind(this.delayedCall,this,a),this.delay)},passesTolerance:function(a){var b=!0;if(null!=this.pixelTolerance&&this.down&&this.down.xy&&(b=this.pixelTolerance>=this.down.xy.distanceTo(a.xy))&&this.touch&&this.down.touches.length===this.last.touches.length)for(var a=0,c=this.down.touches.length;a<c;++a)if(this.getTouchDistance(this.down.touches[a],this.last.touches[a])>this.pixelTolerance){b=
!1;break}return b},getTouchDistance:function(a,b){return Math.sqrt(Math.pow(a.clientX-b.clientX,2)+Math.pow(a.clientY-b.clientY,2))},passesDblclickTolerance:function(){var a=!0;this.down&&this.first&&(a=this.down.xy.distanceTo(this.first.xy)<=this.dblclickTolerance);return a},clearTimer:function(){if(null!=this.timerId)window.clearTimeout(this.timerId),this.timerId=null;if(null!=this.rightclickTimerId)window.clearTimeout(this.rightclickTimerId),this.rightclickTimerId=null},delayedCall:function(a){this.timerId=
null;a&&this.callback("click",[a])},getEventInfo:function(a){var b;if(a.touches){var c=a.touches.length;b=Array(c);for(var d,e=0;e<c;e++)d=a.touches[e],b[e]={clientX:d.clientX,clientY:d.clientY}}return{xy:a.xy,touches:b}},deactivate:function(){var a=!1;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments))this.clearTimer(),this.last=this.first=this.down=null,this.touch=!1,a=!0;return a},CLASS_NAME:"OpenLayers.Handler.Click"});OpenLayers.Control.UTFGrid=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,layers:null,defaultHandlerOptions:{delay:300,pixelTolerance:4,stopMove:!1,single:!0,"double":!1,stopSingle:!1,stopDouble:!1},handlerMode:"click",setHandler:function(a){this.handlerMode=a;this.resetHandler()},resetHandler:function(){if(this.handler)this.handler.deactivate(),this.handler.destroy(),this.handler=null;if("hover"==this.handlerMode)this.handler=new OpenLayers.Handler.Hover(this,{pause:this.handleEvent,move:this.reset},
this.handlerOptions);else if("click"==this.handlerMode)this.handler=new OpenLayers.Handler.Click(this,{click:this.handleEvent},this.handlerOptions);else if("move"==this.handlerMode)this.handler=new OpenLayers.Handler.Hover(this,{pause:this.handleEvent,move:this.handleEvent},this.handlerOptions);return this.handler?!0:!1},initialize:function(a){a=a||{};a.handlerOptions=a.handlerOptions||this.defaultHandlerOptions;OpenLayers.Control.prototype.initialize.apply(this,[a]);this.resetHandler()},handleEvent:function(a){if(null==
a)this.reset();else{var b=this.map.getLonLatFromPixel(a.xy);if(b){var c=this.findLayers();if(0<c.length){for(var d={},e,f,g=0,h=c.length;g<h;g++)e=c[g],f=OpenLayers.Util.indexOf(this.map.layers,e),d[f]=e.getFeatureInfo(b);this.callback(d,b,a.xy)}}}},callback:function(){},reset:function(){this.callback(null)},findLayers:function(){for(var a=this.layers||this.map.layers,b=[],c,d=a.length-1;0<=d;--d)c=a[d],c instanceof OpenLayers.Layer.UTFGrid&&b.push(c);return b},CLASS_NAME:"OpenLayers.Control.UTFGrid"});OpenLayers.Animation=function(a){var b=!(!a.requestAnimationFrame&&!a.webkitRequestAnimationFrame&&!a.mozRequestAnimationFrame&&!a.oRequestAnimationFrame&&!a.msRequestAnimationFrame),c=function(){var b=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(b){a.setTimeout(b,16)};return function(c,d){b.apply(a,[c,d])}}(),d=0,e={};return{isNative:b,requestFrame:c,start:function(a,b,h){var b=0<b?b:Number.POSITIVE_INFINITY,
i=++d,k=+new Date;e[i]=function(){e[i]&&+new Date-k<=b?(a(),e[i]&&c(e[i],h)):delete e[i]};c(e[i],h);return i},stop:function(a){delete e[a]}}}(window);OpenLayers.Tween=OpenLayers.Class({easing:null,begin:null,finish:null,duration:null,callbacks:null,time:null,animationId:null,playing:!1,initialize:function(a){this.easing=a?a:OpenLayers.Easing.Expo.easeOut},start:function(a,b,c,d){this.playing=!0;this.begin=a;this.finish=b;this.duration=c;this.callbacks=d.callbacks;this.time=0;OpenLayers.Animation.stop(this.animationId);this.animationId=null;this.callbacks&&this.callbacks.start&&this.callbacks.start.call(this,this.begin);this.animationId=OpenLayers.Animation.start(OpenLayers.Function.bind(this.play,
this))},stop:function(){if(this.playing)this.callbacks&&this.callbacks.done&&this.callbacks.done.call(this,this.finish),OpenLayers.Animation.stop(this.animationId),this.animationId=null,this.playing=!1},play:function(){var a={},b;for(b in this.begin){var c=this.begin[b],d=this.finish[b];if(null==c||null==d||isNaN(c)||isNaN(d))throw new TypeError("invalid value for Tween");a[b]=this.easing.apply(this,[this.time,c,d-c,this.duration])}this.time++;this.callbacks&&this.callbacks.eachStep&&this.callbacks.eachStep.call(this,
a);this.time>this.duration&&this.stop()},CLASS_NAME:"OpenLayers.Tween"});OpenLayers.Easing={CLASS_NAME:"OpenLayers.Easing"};OpenLayers.Easing.Linear={easeIn:function(a,b,c,d){return c*a/d+b},easeOut:function(a,b,c,d){return c*a/d+b},easeInOut:function(a,b,c,d){return c*a/d+b},CLASS_NAME:"OpenLayers.Easing.Linear"};
OpenLayers.Easing.Expo={easeIn:function(a,b,c,d){return 0==a?b:c*Math.pow(2,10*(a/d-1))+b},easeOut:function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},easeInOut:function(a,b,c,d){return 0==a?b:a==d?b+c:1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},CLASS_NAME:"OpenLayers.Easing.Expo"};
OpenLayers.Easing.Quad={easeIn:function(a,b,c,d){return c*(a/=d)*a+b},easeOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOut:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},CLASS_NAME:"OpenLayers.Easing.Quad"};OpenLayers.Control.CacheRead=OpenLayers.Class(OpenLayers.Control,{fetchEvent:"tileloadstart",layers:null,autoActivate:!0,setMap:function(a){OpenLayers.Control.prototype.setMap.apply(this,arguments);var b,c=this.layers||a.layers;for(b=c.length-1;0<=b;--b)this.addLayer({layer:c[b]});if(!this.layers)a.events.on({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this})},addLayer:function(a){a.layer.events.register(this.fetchEvent,this,this.fetch)},removeLayer:function(a){a.layer.events.unregister(this.fetchEvent,
this,this.fetch)},fetch:function(a){if(this.active&&window.localStorage&&a.tile instanceof OpenLayers.Tile.Image){var b=a.tile,c=b.url;!b.layer.crossOriginKeyword&&OpenLayers.ProxyHost&&0===c.indexOf(OpenLayers.ProxyHost)&&(c=OpenLayers.Control.CacheWrite.urlMap[c]);if(c=window.localStorage.getItem("olCache_"+c))b.url=c,"tileerror"===a.type&&b.setImgSrc(c)}},destroy:function(){if(this.layers||this.map){var a,b=this.layers||this.map.layers;for(a=b.length-1;0<=a;--a)this.removeLayer({layer:b[a]})}this.map&&
this.map.events.un({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments)},CLASS_NAME:"OpenLayers.Control.CacheRead"});OpenLayers.Events.buttonclick=OpenLayers.Class({target:null,events:"mousedown,mouseup,click,dblclick,touchstart,touchmove,touchend,keydown".split(","),startRegEx:/^mousedown|touchstart$/,cancelRegEx:/^touchmove$/,completeRegEx:/^mouseup|touchend$/,initialize:function(a){this.target=a;for(a=this.events.length-1;0<=a;--a)this.target.register(this.events[a],this,this.buttonClick,{extension:!0})},destroy:function(){for(var a=this.events.length-1;0<=a;--a)this.target.unregister(this.events[a],this,this.buttonClick);
delete this.target},getPressedButton:function(a){var b=3,c;do{if(OpenLayers.Element.hasClass(a,"olButton")){c=a;break}a=a.parentNode}while(0<--b&&a);return c},buttonClick:function(a){var b=!0,c=OpenLayers.Event.element(a);if(c&&(OpenLayers.Event.isLeftClick(a)||!~a.type.indexOf("mouse")))if(c=this.getPressedButton(c)){if("keydown"===a.type)switch(a.keyCode){case OpenLayers.Event.KEY_RETURN:case OpenLayers.Event.KEY_SPACE:this.target.triggerEvent("buttonclick",{buttonElement:c}),OpenLayers.Event.stop(a),
b=!1}else this.startEvt&&(this.completeRegEx.test(a.type)&&(b=OpenLayers.Util.pagePosition(c),this.target.triggerEvent("buttonclick",{buttonElement:c,buttonXY:{x:this.startEvt.clientX-b[0],y:this.startEvt.clientY-b[1]}})),this.cancelRegEx.test(a.type)&&delete this.startEvt,OpenLayers.Event.stop(a),b=!1);if(this.startRegEx.test(a.type))this.startEvt=a,OpenLayers.Event.stop(a),b=!1}else delete this.startEvt;return b}});OpenLayers.Projection=OpenLayers.Class({proj:null,projCode:null,titleRegEx:/\+title=[^\+]*/,initialize:function(a,b){OpenLayers.Util.extend(this,b);this.projCode=a;if(window.Proj4js)this.proj=new Proj4js.Proj(a)},getCode:function(){return this.proj?this.proj.srsCode:this.projCode},getUnits:function(){return this.proj?this.proj.units:null},toString:function(){return this.getCode()},equals:function(a){var b=!1;a&&(a instanceof OpenLayers.Projection||(a=new OpenLayers.Projection(a)),window.Proj4js&&
this.proj.defData&&a.proj.defData?b=this.proj.defData.replace(this.titleRegEx,"")==a.proj.defData.replace(this.titleRegEx,""):a.getCode&&(b=this.getCode(),a=a.getCode(),b=b==a||!!OpenLayers.Projection.transforms[b]&&OpenLayers.Projection.transforms[b][a]===OpenLayers.Projection.nullTransform));return b},destroy:function(){delete this.proj;delete this.projCode},CLASS_NAME:"OpenLayers.Projection"});OpenLayers.Projection.transforms={};
OpenLayers.Projection.defaults={"EPSG:4326":{units:"degrees",maxExtent:[-180,-90,180,90],yx:!0},"CRS:84":{units:"degrees",maxExtent:[-180,-90,180,90]},"EPSG:900913":{units:"m",maxExtent:[-2.003750834E7,-2.003750834E7,2.003750834E7,2.003750834E7]}};
OpenLayers.Projection.addTransform=function(a,b,c){if(c===OpenLayers.Projection.nullTransform){var d=OpenLayers.Projection.defaults[a];d&&!OpenLayers.Projection.defaults[b]&&(OpenLayers.Projection.defaults[b]=d)}OpenLayers.Projection.transforms[a]||(OpenLayers.Projection.transforms[a]={});OpenLayers.Projection.transforms[a][b]=c};
OpenLayers.Projection.transform=function(a,b,c){if(b&&c)if(b instanceof OpenLayers.Projection||(b=new OpenLayers.Projection(b)),c instanceof OpenLayers.Projection||(c=new OpenLayers.Projection(c)),b.proj&&c.proj)a=Proj4js.transform(b.proj,c.proj,a);else{var b=b.getCode(),c=c.getCode(),d=OpenLayers.Projection.transforms;if(d[b]&&d[b][c])d[b][c](a)}return a};OpenLayers.Projection.nullTransform=function(a){return a};
(function(){function a(a){a.x=180*a.x/d;a.y=180/Math.PI*(2*Math.atan(Math.exp(a.y/d*Math.PI))-Math.PI/2);return a}function b(a){a.x=a.x*d/180;a.y=Math.log(Math.tan((90+a.y)*Math.PI/360))/Math.PI*d;return a}function c(c,d){var e=OpenLayers.Projection.addTransform,f=OpenLayers.Projection.nullTransform,g,o,l,j,n;for(g=0,o=d.length;g<o;++g){l=d[g];e(c,l,b);e(l,c,a);for(n=g+1;n<o;++n)j=d[n],e(l,j,f),e(j,l,f)}}var d=2.003750834E7,e=["EPSG:900913","EPSG:3857","EPSG:102113","EPSG:102100"],f=["CRS:84","urn:ogc:def:crs:EPSG:6.6:4326",
"EPSG:4326"],g;for(g=e.length-1;0<=g;--g)c(e[g],f);for(g=f.length-1;0<=g;--g)c(f[g],e)})();OpenLayers.Map=OpenLayers.Class({Z_INDEX_BASE:{BaseLayer:100,Overlay:325,Feature:725,Popup:750,Control:1E3},id:null,fractionalZoom:!1,events:null,allOverlays:!1,div:null,dragging:!1,size:null,viewPortDiv:null,layerContainerOrigin:null,layerContainerDiv:null,layers:null,controls:null,popups:null,baseLayer:null,center:null,resolution:null,zoom:0,panRatio:1.5,options:null,tileSize:null,projection:"EPSG:4326",units:null,resolutions:null,maxResolution:null,minResolution:null,maxScale:null,minScale:null,
maxExtent:null,minExtent:null,restrictedExtent:null,numZoomLevels:16,theme:null,displayProjection:null,fallThrough:!0,panTween:null,eventListeners:null,panMethod:OpenLayers.Easing.Expo.easeOut,panDuration:50,paddingForPopups:null,minPx:null,maxPx:null,initialize:function(a,b){1===arguments.length&&"object"===typeof a&&(a=(b=a)&&b.div);this.tileSize=new OpenLayers.Size(OpenLayers.Map.TILE_WIDTH,OpenLayers.Map.TILE_HEIGHT);this.paddingForPopups=new OpenLayers.Bounds(15,15,15,15);this.theme=OpenLayers._getScriptLocation()+
"theme/default/style.css";this.options=OpenLayers.Util.extend({},b);OpenLayers.Util.extend(this,b);OpenLayers.Util.applyDefaults(this,OpenLayers.Projection.defaults[this.projection instanceof OpenLayers.Projection?this.projection.projCode:this.projection]);if(this.maxExtent&&!(this.maxExtent instanceof OpenLayers.Bounds))this.maxExtent=new OpenLayers.Bounds(this.maxExtent);if(this.minExtent&&!(this.minExtent instanceof OpenLayers.Bounds))this.minExtent=new OpenLayers.Bounds(this.minExtent);if(this.restrictedExtent&&
!(this.restrictedExtent instanceof OpenLayers.Bounds))this.restrictedExtent=new OpenLayers.Bounds(this.restrictedExtent);if(this.center&&!(this.center instanceof OpenLayers.LonLat))this.center=new OpenLayers.LonLat(this.center);this.layers=[];this.id=OpenLayers.Util.createUniqueID("OpenLayers.Map_");this.div=OpenLayers.Util.getElement(a);if(!this.div)this.div=document.createElement("div"),this.div.style.height="1px",this.div.style.width="1px";OpenLayers.Element.addClass(this.div,"olMap");var c=this.id+
"_OpenLayers_ViewPort";this.viewPortDiv=OpenLayers.Util.createDiv(c,null,null,null,"relative",null,"hidden");this.viewPortDiv.style.width="100%";this.viewPortDiv.style.height="100%";this.viewPortDiv.className="olMapViewport";this.div.appendChild(this.viewPortDiv);this.events=new OpenLayers.Events(this,this.viewPortDiv,null,this.fallThrough,{includeXY:!0});c=this.id+"_OpenLayers_Container";this.layerContainerDiv=OpenLayers.Util.createDiv(c);this.layerContainerDiv.style.width="100px";this.layerContainerDiv.style.height=
"100px";this.layerContainerDiv.style.zIndex=this.Z_INDEX_BASE.Popup-1;this.viewPortDiv.appendChild(this.layerContainerDiv);this.updateSize();if(this.eventListeners instanceof Object)this.events.on(this.eventListeners);OpenLayers.String.contains(navigator.appName,"Microsoft")?this.events.register("resize",this,this.updateSize):(this.updateSizeDestroy=OpenLayers.Function.bind(this.updateSize,this),OpenLayers.Event.observe(window,"resize",this.updateSizeDestroy));if(this.theme){for(var c=!0,d=document.getElementsByTagName("link"),
e=0,f=d.length;e<f;++e)if(OpenLayers.Util.isEquivalentUrl(d.item(e).href,this.theme)){c=!1;break}c&&(c=document.createElement("link"),c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",this.theme),document.getElementsByTagName("head")[0].appendChild(c))}if(null==this.controls)this.controls=[],null!=OpenLayers.Control&&(OpenLayers.Control.Navigation?this.controls.push(new OpenLayers.Control.Navigation):OpenLayers.Control.TouchNavigation&&this.controls.push(new OpenLayers.Control.TouchNavigation),
OpenLayers.Control.Zoom?this.controls.push(new OpenLayers.Control.Zoom):OpenLayers.Control.PanZoom&&this.controls.push(new OpenLayers.Control.PanZoom),OpenLayers.Control.ArgParser&&this.controls.push(new OpenLayers.Control.ArgParser),OpenLayers.Control.Attribution&&this.controls.push(new OpenLayers.Control.Attribution));e=0;for(f=this.controls.length;e<f;e++)this.addControlToMap(this.controls[e]);this.popups=[];this.unloadDestroy=OpenLayers.Function.bind(this.destroy,this);OpenLayers.Event.observe(window,
"unload",this.unloadDestroy);b&&b.layers&&(delete this.center,this.addLayers(b.layers),b.center&&!this.getCenter()&&this.setCenter(b.center,b.zoom))},getViewport:function(){return this.viewPortDiv},render:function(a){this.div=OpenLayers.Util.getElement(a);OpenLayers.Element.addClass(this.div,"olMap");this.viewPortDiv.parentNode.removeChild(this.viewPortDiv);this.div.appendChild(this.viewPortDiv);this.updateSize()},unloadDestroy:null,updateSizeDestroy:null,destroy:function(){if(!this.unloadDestroy)return!1;
if(this.panTween)this.panTween.stop(),this.panTween=null;OpenLayers.Event.stopObserving(window,"unload",this.unloadDestroy);this.unloadDestroy=null;this.updateSizeDestroy?OpenLayers.Event.stopObserving(window,"resize",this.updateSizeDestroy):this.events.unregister("resize",this,this.updateSize);this.paddingForPopups=null;if(null!=this.controls){for(var a=this.controls.length-1;0<=a;--a)this.controls[a].destroy();this.controls=null}if(null!=this.layers){for(a=this.layers.length-1;0<=a;--a)this.layers[a].destroy(!1);
this.layers=null}this.viewPortDiv&&this.div.removeChild(this.viewPortDiv);this.viewPortDiv=null;if(this.eventListeners)this.events.un(this.eventListeners),this.eventListeners=null;this.events.destroy();this.options=this.events=null},setOptions:function(a){var b=this.minPx&&a.restrictedExtent!=this.restrictedExtent;OpenLayers.Util.extend(this,a);b&&this.moveTo(this.getCachedCenter(),this.zoom,{forceZoomChange:!0})},getTileSize:function(){return this.tileSize},getBy:function(a,b,c){var d="function"==
typeof c.test;return OpenLayers.Array.filter(this[a],function(a){return a[b]==c||d&&c.test(a[b])})},getLayersBy:function(a,b){return this.getBy("layers",a,b)},getLayersByName:function(a){return this.getLayersBy("name",a)},getLayersByClass:function(a){return this.getLayersBy("CLASS_NAME",a)},getControlsBy:function(a,b){return this.getBy("controls",a,b)},getControlsByClass:function(a){return this.getControlsBy("CLASS_NAME",a)},getLayer:function(a){for(var b=null,c=0,d=this.layers.length;c<d;c++){var e=
this.layers[c];if(e.id==a){b=e;break}}return b},setLayerZIndex:function(a,b){a.setZIndex(this.Z_INDEX_BASE[a.isBaseLayer?"BaseLayer":"Overlay"]+5*b)},resetLayersZIndex:function(){for(var a=0,b=this.layers.length;a<b;a++)this.setLayerZIndex(this.layers[a],a)},addLayer:function(a){for(var b=0,c=this.layers.length;b<c;b++)if(this.layers[b]==a)return!1;if(!1===this.events.triggerEvent("preaddlayer",{layer:a}))return!1;if(this.allOverlays)a.isBaseLayer=!1;a.div.className="olLayerDiv";a.div.style.overflow=
"";this.setLayerZIndex(a,this.layers.length);a.isFixed?this.viewPortDiv.appendChild(a.div):this.layerContainerDiv.appendChild(a.div);this.layers.push(a);a.setMap(this);a.isBaseLayer||this.allOverlays&&!this.baseLayer?null==this.baseLayer?this.setBaseLayer(a):a.setVisibility(!1):a.redraw();this.events.triggerEvent("addlayer",{layer:a});a.events.triggerEvent("added",{map:this,layer:a});a.afterAdd();return!0},addLayers:function(a){for(var b=0,c=a.length;b<c;b++)this.addLayer(a[b])},removeLayer:function(a,
b){if(!1!==this.events.triggerEvent("preremovelayer",{layer:a})){null==b&&(b=!0);a.isFixed?this.viewPortDiv.removeChild(a.div):this.layerContainerDiv.removeChild(a.div);OpenLayers.Util.removeItem(this.layers,a);a.removeMap(this);a.map=null;if(this.baseLayer==a&&(this.baseLayer=null,b))for(var c=0,d=this.layers.length;c<d;c++){var e=this.layers[c];if(e.isBaseLayer||this.allOverlays){this.setBaseLayer(e);break}}this.resetLayersZIndex();this.events.triggerEvent("removelayer",{layer:a});a.events.triggerEvent("removed",
{map:this,layer:a})}},getNumLayers:function(){return this.layers.length},getLayerIndex:function(a){return OpenLayers.Util.indexOf(this.layers,a)},setLayerIndex:function(a,b){var c=this.getLayerIndex(a);if(0>b)b=0;else if(b>this.layers.length)b=this.layers.length;if(c!=b){this.layers.splice(c,1);this.layers.splice(b,0,a);for(var c=0,d=this.layers.length;c<d;c++)this.setLayerZIndex(this.layers[c],c);this.events.triggerEvent("changelayer",{layer:a,property:"order"});this.allOverlays&&(0===b?this.setBaseLayer(a):
this.baseLayer!==this.layers[0]&&this.setBaseLayer(this.layers[0]))}},raiseLayer:function(a,b){var c=this.getLayerIndex(a)+b;this.setLayerIndex(a,c)},setBaseLayer:function(a){if(a!=this.baseLayer&&-1!=OpenLayers.Util.indexOf(this.layers,a)){var b=this.getCachedCenter(),c=OpenLayers.Util.getResolutionFromScale(this.getScale(),a.units);null!=this.baseLayer&&!this.allOverlays&&this.baseLayer.setVisibility(!1);this.baseLayer=a;if(!this.allOverlays||this.baseLayer.visibility)this.baseLayer.setVisibility(!0),
!1===this.baseLayer.inRange&&this.baseLayer.redraw();null!=b&&(a=this.getZoomForResolution(c||this.resolution,!0),this.setCenter(b,a,!1,!0));this.events.triggerEvent("changebaselayer",{layer:this.baseLayer})}},addControl:function(a,b){this.controls.push(a);this.addControlToMap(a,b)},addControls:function(a,b){for(var c=1===arguments.length?[]:b,d=0,e=a.length;d<e;d++)this.addControl(a[d],c[d]?c[d]:null)},addControlToMap:function(a,b){a.outsideViewport=null!=a.div;if(this.displayProjection&&!a.displayProjection)a.displayProjection=
this.displayProjection;a.setMap(this);var c=a.draw(b);if(c&&!a.outsideViewport)c.style.zIndex=this.Z_INDEX_BASE.Control+this.controls.length,this.viewPortDiv.appendChild(c);a.autoActivate&&a.activate()},getControl:function(a){for(var b=null,c=0,d=this.controls.length;c<d;c++){var e=this.controls[c];if(e.id==a){b=e;break}}return b},removeControl:function(a){a&&a==this.getControl(a.id)&&(a.div&&a.div.parentNode==this.viewPortDiv&&this.viewPortDiv.removeChild(a.div),OpenLayers.Util.removeItem(this.controls,
a))},addPopup:function(a,b){if(b)for(var c=this.popups.length-1;0<=c;--c)this.removePopup(this.popups[c]);a.map=this;this.popups.push(a);if(c=a.draw())c.style.zIndex=this.Z_INDEX_BASE.Popup+this.popups.length,this.layerContainerDiv.appendChild(c)},removePopup:function(a){OpenLayers.Util.removeItem(this.popups,a);if(a.div)try{this.layerContainerDiv.removeChild(a.div)}catch(b){}a.map=null},getSize:function(){var a=null;null!=this.size&&(a=this.size.clone());return a},updateSize:function(){var a=this.getCurrentSize();
if(a&&!isNaN(a.h)&&!isNaN(a.w)){this.events.clearMouseCache();var b=this.getSize();if(null==b)this.size=b=a;if(!a.equals(b)){this.size=a;a=0;for(b=this.layers.length;a<b;a++)this.layers[a].onMapResize();a=this.getCachedCenter();if(null!=this.baseLayer&&null!=a)b=this.getZoom(),this.zoom=null,this.setCenter(a,b)}}},getCurrentSize:function(){var a=new OpenLayers.Size(this.div.clientWidth,this.div.clientHeight);if(0==a.w&&0==a.h||isNaN(a.w)&&isNaN(a.h))a.w=this.div.offsetWidth,a.h=this.div.offsetHeight;
if(0==a.w&&0==a.h||isNaN(a.w)&&isNaN(a.h))a.w=parseInt(this.div.style.width),a.h=parseInt(this.div.style.height);return a},calculateBounds:function(a,b){var c=null;null==a&&(a=this.getCachedCenter());null==b&&(b=this.getResolution());if(null!=a&&null!=b)var c=this.size.w*b/2,d=this.size.h*b/2,c=new OpenLayers.Bounds(a.lon-c,a.lat-d,a.lon+c,a.lat+d);return c},getCenter:function(){var a=null,b=this.getCachedCenter();b&&(a=b.clone());return a},getCachedCenter:function(){if(!this.center&&this.size)this.center=
this.getLonLatFromViewPortPx({x:this.size.w/2,y:this.size.h/2});return this.center},getZoom:function(){return this.zoom},pan:function(a,b,c){c=OpenLayers.Util.applyDefaults(c,{animate:!0,dragging:!1});if(c.dragging)(0!=a||0!=b)&&this.moveByPx(a,b);else{var d=this.getViewPortPxFromLonLat(this.getCachedCenter()),a=d.add(a,b);if(this.dragging||!a.equals(d))d=this.getLonLatFromViewPortPx(a),c.animate?this.panTo(d):(this.moveTo(d),this.dragging=!1,this.events.triggerEvent("moveend"))}},panTo:function(a){if(this.panMethod&&
this.getExtent().scale(this.panRatio).containsLonLat(a)){if(!this.panTween)this.panTween=new OpenLayers.Tween(this.panMethod);var b=this.getCachedCenter();if(!a.equals(b)){var b=this.getPixelFromLonLat(b),c=this.getPixelFromLonLat(a),d=0,e=0;this.panTween.start({x:0,y:0},{x:c.x-b.x,y:c.y-b.y},this.panDuration,{callbacks:{eachStep:OpenLayers.Function.bind(function(a){this.moveByPx(a.x-d,a.y-e);d=Math.round(a.x);e=Math.round(a.y)},this),done:OpenLayers.Function.bind(function(){this.moveTo(a);this.dragging=
!1;this.events.triggerEvent("moveend")},this)}})}}else this.setCenter(a)},setCenter:function(a,b,c,d){this.panTween&&this.panTween.stop();this.moveTo(a,b,{dragging:c,forceZoomChange:d})},moveByPx:function(a,b){var c=this.size.w/2,d=this.size.h/2,e=c+a,f=d+b,g=this.baseLayer.wrapDateLine,h=0,i=0;this.restrictedExtent&&(h=c,i=d,g=!1);a=g||e<=this.maxPx.x-h&&e>=this.minPx.x+h?Math.round(a):0;b=f<=this.maxPx.y-i&&f>=this.minPx.y+i?Math.round(b):0;if(a||b){if(!this.dragging)this.dragging=!0,this.events.triggerEvent("movestart");
this.center=null;if(a)this.layerContainerDiv.style.left=parseInt(this.layerContainerDiv.style.left)-a+"px",this.minPx.x-=a,this.maxPx.x-=a;if(b)this.layerContainerDiv.style.top=parseInt(this.layerContainerDiv.style.top)-b+"px",this.minPx.y-=b,this.maxPx.y-=b;for(d=0,e=this.layers.length;d<e;++d)if(c=this.layers[d],c.visibility&&(c===this.baseLayer||c.inRange))c.moveByPx(a,b),c.events.triggerEvent("move");this.events.triggerEvent("move")}},adjustZoom:function(a){var b=this.baseLayer.resolutions,c=
this.getMaxExtent().getWidth()/this.size.w;if(this.getResolutionForZoom(a)>c)for(var d=a|0,e=b.length;d<e;++d)if(b[d]<=c){a=d;break}return a},moveTo:function(a,b,c){null!=a&&!(a instanceof OpenLayers.LonLat)&&(a=new OpenLayers.LonLat(a));c||(c={});null!=b&&(b=parseFloat(b),this.fractionalZoom||(b=Math.round(b)));if(this.baseLayer.wrapDateLine){var d=b,b=this.adjustZoom(b);b!==d&&(a=this.getCenter())}var d=c.dragging||this.dragging,e=c.forceZoomChange;if(!this.getCachedCenter()&&!this.isValidLonLat(a))a=
this.maxExtent.getCenterLonLat(),this.center=a.clone();if(null!=this.restrictedExtent){if(null==a)a=this.center;null==b&&(b=this.getZoom());var f=this.getResolutionForZoom(b),f=this.calculateBounds(a,f);if(!this.restrictedExtent.containsBounds(f)){var g=this.restrictedExtent.getCenterLonLat();f.getWidth()>this.restrictedExtent.getWidth()?a=new OpenLayers.LonLat(g.lon,a.lat):f.left<this.restrictedExtent.left?a=a.add(this.restrictedExtent.left-f.left,0):f.right>this.restrictedExtent.right&&(a=a.add(this.restrictedExtent.right-
f.right,0));f.getHeight()>this.restrictedExtent.getHeight()?a=new OpenLayers.LonLat(a.lon,g.lat):f.bottom<this.restrictedExtent.bottom?a=a.add(0,this.restrictedExtent.bottom-f.bottom):f.top>this.restrictedExtent.top&&(a=a.add(0,this.restrictedExtent.top-f.top))}}e=e||this.isValidZoomLevel(b)&&b!=this.getZoom();f=this.isValidLonLat(a)&&!a.equals(this.center);if(e||f||d){d||this.events.triggerEvent("movestart");if(f)!e&&this.center&&this.centerLayerContainer(a),this.center=a.clone();a=e?this.getResolutionForZoom(b):
this.getResolution();if(e||null==this.layerContainerOrigin){this.layerContainerOrigin=this.getCachedCenter();this.layerContainerDiv.style.left="0px";this.layerContainerDiv.style.top="0px";var f=this.getMaxExtent({restricted:!0}),h=f.getCenterLonLat(),g=this.center.lon-h.lon,h=h.lat-this.center.lat,i=Math.round(f.getWidth()/a),k=Math.round(f.getHeight()/a);this.minPx={x:(this.size.w-i)/2-g/a,y:(this.size.h-k)/2-h/a};this.maxPx={x:this.minPx.x+Math.round(f.getWidth()/a),y:this.minPx.y+Math.round(f.getHeight()/
a)}}if(e)this.zoom=b,this.resolution=a;a=this.getExtent();this.baseLayer.visibility&&(this.baseLayer.moveTo(a,e,c.dragging),c.dragging||this.baseLayer.events.triggerEvent("moveend",{zoomChanged:e}));a=this.baseLayer.getExtent();for(b=this.layers.length-1;0<=b;--b)if(f=this.layers[b],f!==this.baseLayer&&!f.isBaseLayer){g=f.calculateInRange();if(f.inRange!=g)(f.inRange=g)||f.display(!1),this.events.triggerEvent("changelayer",{layer:f,property:"visibility"});g&&f.visibility&&(f.moveTo(a,e,c.dragging),
c.dragging||f.events.triggerEvent("moveend",{zoomChanged:e}))}this.events.triggerEvent("move");d||this.events.triggerEvent("moveend");if(e){b=0;for(c=this.popups.length;b<c;b++)this.popups[b].updatePosition();this.events.triggerEvent("zoomend")}}},centerLayerContainer:function(a){var b=this.getViewPortPxFromLonLat(this.layerContainerOrigin),c=this.getViewPortPxFromLonLat(a);if(null!=b&&null!=c){var d=parseInt(this.layerContainerDiv.style.left),a=parseInt(this.layerContainerDiv.style.top),e=Math.round(b.x-
c.x),b=Math.round(b.y-c.y);this.layerContainerDiv.style.left=e+"px";this.layerContainerDiv.style.top=b+"px";d-=e;a-=b;this.minPx.x-=d;this.maxPx.x-=d;this.minPx.y-=a;this.maxPx.y-=a}},isValidZoomLevel:function(a){return null!=a&&0<=a&&a<this.getNumZoomLevels()},isValidLonLat:function(a){var b=!1;null!=a&&(b=this.getMaxExtent(),b=b.containsLonLat(a,{worldBounds:this.baseLayer.wrapDateLine&&b}));return b},getProjection:function(){var a=this.getProjectionObject();return a?a.getCode():null},getProjectionObject:function(){var a=
null;if(null!=this.baseLayer)a=this.baseLayer.projection;return a},getMaxResolution:function(){var a=null;if(null!=this.baseLayer)a=this.baseLayer.maxResolution;return a},getMaxExtent:function(a){var b=null;if(a&&a.restricted&&this.restrictedExtent)b=this.restrictedExtent;else if(null!=this.baseLayer)b=this.baseLayer.maxExtent;return b},getNumZoomLevels:function(){var a=null;if(null!=this.baseLayer)a=this.baseLayer.numZoomLevels;return a},getExtent:function(){var a=null;null!=this.baseLayer&&(a=this.baseLayer.getExtent());
return a},getResolution:function(){var a=null;null!=this.baseLayer?a=this.baseLayer.getResolution():!0===this.allOverlays&&0<this.layers.length&&(a=this.layers[0].getResolution());return a},getUnits:function(){var a=null;if(null!=this.baseLayer)a=this.baseLayer.units;return a},getScale:function(){var a=null;null!=this.baseLayer&&(a=this.getResolution(),a=OpenLayers.Util.getScaleFromResolution(a,this.baseLayer.units));return a},getZoomForExtent:function(a,b){var c=null;null!=this.baseLayer&&(c=this.baseLayer.getZoomForExtent(a,
b));return c},getResolutionForZoom:function(a){var b=null;this.baseLayer&&(b=this.baseLayer.getResolutionForZoom(a));return b},getZoomForResolution:function(a,b){var c=null;null!=this.baseLayer&&(c=this.baseLayer.getZoomForResolution(a,b));return c},zoomTo:function(a){this.isValidZoomLevel(a)&&this.setCenter(null,a)},zoomIn:function(){this.zoomTo(this.getZoom()+1)},zoomOut:function(){this.zoomTo(this.getZoom()-1)},zoomToExtent:function(a,b){a instanceof OpenLayers.Bounds||(a=new OpenLayers.Bounds(a));
var c=a.getCenterLonLat();if(this.baseLayer.wrapDateLine){c=this.getMaxExtent();for(a=a.clone();a.right<a.left;)a.right+=c.getWidth();c=a.getCenterLonLat().wrapDateLine(c)}this.setCenter(c,this.getZoomForExtent(a,b))},zoomToMaxExtent:function(a){this.zoomToExtent(this.getMaxExtent({restricted:a?a.restricted:!0}))},zoomToScale:function(a,b){var c=OpenLayers.Util.getResolutionFromScale(a,this.baseLayer.units),d=this.size.w*c/2,c=this.size.h*c/2,e=this.getCachedCenter();this.zoomToExtent(new OpenLayers.Bounds(e.lon-
d,e.lat-c,e.lon+d,e.lat+c),b)},getLonLatFromViewPortPx:function(a){var b=null;null!=this.baseLayer&&(b=this.baseLayer.getLonLatFromViewPortPx(a));return b},getViewPortPxFromLonLat:function(a){var b=null;null!=this.baseLayer&&(b=this.baseLayer.getViewPortPxFromLonLat(a));return b},getLonLatFromPixel:function(a){return this.getLonLatFromViewPortPx(a)},getPixelFromLonLat:function(a){a=this.getViewPortPxFromLonLat(a);a.x=Math.round(a.x);a.y=Math.round(a.y);return a},getGeodesicPixelSize:function(a){var b=
a?this.getLonLatFromPixel(a):this.getCachedCenter()||new OpenLayers.LonLat(0,0),c=this.getResolution(),a=b.add(-c/2,0),d=b.add(c/2,0),e=b.add(0,-c/2),b=b.add(0,c/2),c=new OpenLayers.Projection("EPSG:4326"),f=this.getProjectionObject()||c;f.equals(c)||(a.transform(f,c),d.transform(f,c),e.transform(f,c),b.transform(f,c));return new OpenLayers.Size(OpenLayers.Util.distVincenty(a,d),OpenLayers.Util.distVincenty(e,b))},getViewPortPxFromLayerPx:function(a){var b=null;if(null!=a)var b=parseInt(this.layerContainerDiv.style.left),
c=parseInt(this.layerContainerDiv.style.top),b=a.add(b,c);return b},getLayerPxFromViewPortPx:function(a){var b=null;if(null!=a){var b=-parseInt(this.layerContainerDiv.style.left),c=-parseInt(this.layerContainerDiv.style.top),b=a.add(b,c);if(isNaN(b.x)||isNaN(b.y))b=null}return b},getLonLatFromLayerPx:function(a){a=this.getViewPortPxFromLayerPx(a);return this.getLonLatFromViewPortPx(a)},getLayerPxFromLonLat:function(a){return this.getLayerPxFromViewPortPx(this.getPixelFromLonLat(a))},CLASS_NAME:"OpenLayers.Map"});
OpenLayers.Map.TILE_WIDTH=256;OpenLayers.Map.TILE_HEIGHT=256;OpenLayers.Control.Attribution=OpenLayers.Class(OpenLayers.Control,{separator:", ",template:"${layers}",destroy:function(){this.map.events.un({removelayer:this.updateAttribution,addlayer:this.updateAttribution,changelayer:this.updateAttribution,changebaselayer:this.updateAttribution,scope:this});OpenLayers.Control.prototype.destroy.apply(this,arguments)},draw:function(){OpenLayers.Control.prototype.draw.apply(this,arguments);this.map.events.on({changebaselayer:this.updateAttribution,changelayer:this.updateAttribution,
addlayer:this.updateAttribution,removelayer:this.updateAttribution,scope:this});this.updateAttribution();return this.div},updateAttribution:function(){var a=[];if(this.map&&this.map.layers){for(var b=0,c=this.map.layers.length;b<c;b++){var d=this.map.layers[b];d.attribution&&d.getVisibility()&&-1===OpenLayers.Util.indexOf(a,d.attribution)&&a.push(d.attribution)}this.div.innerHTML=OpenLayers.String.format(this.template,{layers:a.join(this.separator)})}},CLASS_NAME:"OpenLayers.Control.Attribution"});OpenLayers.Format=OpenLayers.Class({options:null,externalProjection:null,internalProjection:null,data:null,keepData:!1,initialize:function(a){OpenLayers.Util.extend(this,a);this.options=a},destroy:function(){},read:function(){throw Error("Read not implemented.");},write:function(){throw Error("Write not implemented.");},CLASS_NAME:"OpenLayers.Format"});OpenLayers.Format.JSON=OpenLayers.Class(OpenLayers.Format,{indent:"    ",space:" ",newline:"\n",level:0,pretty:!1,nativeJSON:function(){return!(!window.JSON||!("function"==typeof JSON.parse&&"function"==typeof JSON.stringify))}(),read:function(a,b){var c;if(this.nativeJSON)c=JSON.parse(a,b);else try{if(/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))&&(c=eval("("+a+")"),"function"===
typeof b)){var d=function(a,c){if(c&&"object"===typeof c)for(var e in c)c.hasOwnProperty(e)&&(c[e]=d(e,c[e]));return b(a,c)};c=d("",c)}}catch(e){}if(this.keepData)this.data=c;return c},write:function(a,b){this.pretty=!!b;var c=null,d=typeof a;if(this.serialize[d])try{c=!this.pretty&&this.nativeJSON?JSON.stringify(a):this.serialize[d].apply(this,[a])}catch(e){OpenLayers.Console.error("Trouble serializing: "+e)}return c},writeIndent:function(){var a=[];if(this.pretty)for(var b=0;b<this.level;++b)a.push(this.indent);
return a.join("")},writeNewline:function(){return this.pretty?this.newline:""},writeSpace:function(){return this.pretty?this.space:""},serialize:{object:function(a){if(null==a)return"null";if(a.constructor==Date)return this.serialize.date.apply(this,[a]);if(a.constructor==Array)return this.serialize.array.apply(this,[a]);var b=["{"];this.level+=1;var c,d,e,f=!1;for(c in a)a.hasOwnProperty(c)&&(d=OpenLayers.Format.JSON.prototype.write.apply(this,[c,this.pretty]),e=OpenLayers.Format.JSON.prototype.write.apply(this,
[a[c],this.pretty]),null!=d&&null!=e&&(f&&b.push(","),b.push(this.writeNewline(),this.writeIndent(),d,":",this.writeSpace(),e),f=!0));this.level-=1;b.push(this.writeNewline(),this.writeIndent(),"}");return b.join("")},array:function(a){var b,c=["["];this.level+=1;for(var d=0,e=a.length;d<e;++d)b=OpenLayers.Format.JSON.prototype.write.apply(this,[a[d],this.pretty]),null!=b&&(0<d&&c.push(","),c.push(this.writeNewline(),this.writeIndent(),b));this.level-=1;c.push(this.writeNewline(),this.writeIndent(),
"]");return c.join("")},string:function(a){var b={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return/["\\\x00-\x1f]/.test(a)?'"'+a.replace(/([\x00-\x1f\\"])/g,function(a,d){var e=b[d];if(e)return e;e=d.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)})+'"':'"'+a+'"'},number:function(a){return isFinite(a)?""+a:"null"},"boolean":function(a){return""+a},date:function(a){function b(a){return 10>a?"0"+a:a}return'"'+a.getFullYear()+"-"+
b(a.getMonth()+1)+"-"+b(a.getDate())+"T"+b(a.getHours())+":"+b(a.getMinutes())+":"+b(a.getSeconds())+'"'}},CLASS_NAME:"OpenLayers.Format.JSON"});OpenLayers.Layer=OpenLayers.Class({id:null,name:null,div:null,opacity:1,alwaysInRange:null,RESOLUTION_PROPERTIES:"scales,resolutions,maxScale,minScale,maxResolution,minResolution,numZoomLevels,maxZoomLevel".split(","),events:null,map:null,isBaseLayer:!1,alpha:!1,displayInLayerSwitcher:!0,visibility:!0,attribution:null,inRange:!1,imageSize:null,options:null,eventListeners:null,gutter:0,projection:null,units:null,scales:null,resolutions:null,maxExtent:null,minExtent:null,maxResolution:null,minResolution:null,
resolution:null,numZoomLevels:null,minScale:null,maxScale:null,displayOutsideMaxExtent:!1,wrapDateLine:!1,metadata:null,initialize:function(a,b){this.metadata={};this.addOptions(b);this.name=a;if(null==this.id&&(this.id=OpenLayers.Util.createUniqueID(this.CLASS_NAME+"_"),this.div=OpenLayers.Util.createDiv(this.id),this.div.style.width="100%",this.div.style.height="100%",this.div.dir="ltr",this.events=new OpenLayers.Events(this,this.div),this.eventListeners instanceof Object))this.events.on(this.eventListeners)},
destroy:function(a){null==a&&(a=!0);null!=this.map&&this.map.removeLayer(this,a);this.options=this.div=this.name=this.map=this.projection=null;this.events&&(this.eventListeners&&this.events.un(this.eventListeners),this.events.destroy());this.events=this.eventListeners=null},clone:function(a){null==a&&(a=new OpenLayers.Layer(this.name,this.getOptions()));OpenLayers.Util.applyDefaults(a,this);a.map=null;return a},getOptions:function(){var a={},b;for(b in this.options)a[b]=this[b];return a},setName:function(a){if(a!=
this.name)this.name=a,null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"name"})},addOptions:function(a,b){if(null==this.options)this.options={};if(a){if("string"==typeof a.projection)a.projection=new OpenLayers.Projection(a.projection);a.projection&&OpenLayers.Util.applyDefaults(a,OpenLayers.Projection.defaults[a.projection.getCode()]);if(a.maxExtent&&!(a.maxExtent instanceof OpenLayers.Bounds))a.maxExtent=new OpenLayers.Bounds(a.maxExtent);if(a.minExtent&&!(a.minExtent instanceof
OpenLayers.Bounds))a.minExtent=new OpenLayers.Bounds(a.minExtent)}OpenLayers.Util.extend(this.options,a);OpenLayers.Util.extend(this,a);if(this.projection&&this.projection.getUnits())this.units=this.projection.getUnits();if(this.map){var c=this.map.getResolution(),d=this.RESOLUTION_PROPERTIES.concat(["projection","units","minExtent","maxExtent"]),e;for(e in a)if(a.hasOwnProperty(e)&&0<=OpenLayers.Util.indexOf(d,e)){this.initResolutions();b&&this.map.baseLayer===this&&(this.map.setCenter(this.map.getCenter(),
this.map.getZoomForResolution(c),!1,!0),this.map.events.triggerEvent("changebaselayer",{layer:this}));break}}},onMapResize:function(){},redraw:function(){var a=!1;if(this.map){this.inRange=this.calculateInRange();var b=this.getExtent();b&&this.inRange&&this.visibility&&(a=null==this.resolution||this.resolution!==this.map.getResolution(),this.moveTo(b,a,!1),this.events.triggerEvent("moveend",{zoomChanged:a}),a=!0)}return a},moveTo:function(){var a=this.visibility;this.isBaseLayer||(a=a&&this.inRange);
this.display(a);this.resolution=this.map.getResolution()},moveByPx:function(){},setMap:function(a){if(null==this.map){this.map=a;this.maxExtent=this.maxExtent||this.map.maxExtent;this.minExtent=this.minExtent||this.map.minExtent;this.projection=this.projection||this.map.projection;if("string"==typeof this.projection)this.projection=new OpenLayers.Projection(this.projection);this.units=this.projection.getUnits()||this.units||this.map.units;this.initResolutions();if(!this.isBaseLayer)this.inRange=this.calculateInRange(),
this.div.style.display=this.visibility&&this.inRange?"":"none";this.setTileSize();this.resolution=null}},afterAdd:function(){},removeMap:function(){},getImageSize:function(){return this.imageSize||this.tileSize},setTileSize:function(a){this.tileSize=a=a?a:this.tileSize?this.tileSize:this.map.getTileSize();if(this.gutter)this.imageSize=new OpenLayers.Size(a.w+2*this.gutter,a.h+2*this.gutter)},getVisibility:function(){return this.visibility},setVisibility:function(a){if(a!=this.visibility)this.visibility=
a,this.display(a),this.redraw(),null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"visibility"}),this.events.triggerEvent("visibilitychanged")},display:function(a){if(a!=("none"!=this.div.style.display))this.div.style.display=a&&this.calculateInRange()?"block":"none"},calculateInRange:function(){var a=!1;this.alwaysInRange?a=!0:this.map&&(a=this.map.getResolution(),a=a>=this.minResolution&&a<=this.maxResolution);return a},setIsBaseLayer:function(a){if(a!=this.isBaseLayer)this.isBaseLayer=
a,null!=this.map&&this.map.events.triggerEvent("changebaselayer",{layer:this})},initResolutions:function(){var a,b,c,d={},e=!0;for(a=0,b=this.RESOLUTION_PROPERTIES.length;a<b;a++)c=this.RESOLUTION_PROPERTIES[a],d[c]=this.options[c],e&&this.options[c]&&(e=!1);if(null==this.alwaysInRange)this.alwaysInRange=e;if(null==d.resolutions)d.resolutions=this.resolutionsFromScales(d.scales);if(null==d.resolutions)d.resolutions=this.calculateResolutions(d);if(null==d.resolutions){for(a=0,b=this.RESOLUTION_PROPERTIES.length;a<
b;a++)c=this.RESOLUTION_PROPERTIES[a],d[c]=null!=this.options[c]?this.options[c]:this.map[c];if(null==d.resolutions)d.resolutions=this.resolutionsFromScales(d.scales);if(null==d.resolutions){a=this.maxExtent;if(!d.maxResolution&&a)b=this.tileSize||this.map.getTileSize(),d.maxResolution=Math.max(a.getWidth()/b.w,a.getHeight()/b.h);d.resolutions=this.calculateResolutions(d)}}var f;if(this.options.maxResolution&&"auto"!==this.options.maxResolution)f=this.options.maxResolution;this.options.minScale&&
(f=OpenLayers.Util.getResolutionFromScale(this.options.minScale,this.units));var g;if(this.options.minResolution&&"auto"!==this.options.minResolution)g=this.options.minResolution;this.options.maxScale&&(g=OpenLayers.Util.getResolutionFromScale(this.options.maxScale,this.units));d.resolutions&&(d.resolutions.sort(function(a,b){return b-a}),f||(f=d.resolutions[0]),g||(g=d.resolutions[d.resolutions.length-1]));if(this.resolutions=d.resolutions){b=this.resolutions.length;this.scales=Array(b);for(a=0;a<
b;a++)this.scales[a]=OpenLayers.Util.getScaleFromResolution(this.resolutions[a],this.units);this.numZoomLevels=b}if(this.minResolution=g)this.maxScale=OpenLayers.Util.getScaleFromResolution(g,this.units);if(this.maxResolution=f)this.minScale=OpenLayers.Util.getScaleFromResolution(f,this.units)},resolutionsFromScales:function(a){if(null!=a){var b,c,d;d=a.length;b=Array(d);for(c=0;c<d;c++)b[c]=OpenLayers.Util.getResolutionFromScale(a[c],this.units);return b}},calculateResolutions:function(a){var b,
c,d=a.maxResolution;null!=a.minScale?d=OpenLayers.Util.getResolutionFromScale(a.minScale,this.units):"auto"==d&&null!=this.maxExtent&&(b=this.map.getSize(),c=this.maxExtent.getWidth()/b.w,b=this.maxExtent.getHeight()/b.h,d=Math.max(c,b));c=a.minResolution;null!=a.maxScale?c=OpenLayers.Util.getResolutionFromScale(a.maxScale,this.units):"auto"==a.minResolution&&null!=this.minExtent&&(b=this.map.getSize(),c=this.minExtent.getWidth()/b.w,b=this.minExtent.getHeight()/b.h,c=Math.max(c,b));b=a.maxZoomLevel;
a=a.numZoomLevels;"number"===typeof c&&"number"===typeof d&&void 0===a?a=Math.floor(Math.log(d/c)/Math.log(2))+1:void 0===a&&null!=b&&(a=b+1);if(!("number"!==typeof a||0>=a||"number"!==typeof d&&"number"!==typeof c)){b=Array(a);var e=2;"number"==typeof c&&"number"==typeof d&&(e=Math.pow(d/c,1/(a-1)));var f;if("number"===typeof d)for(f=0;f<a;f++)b[f]=d/Math.pow(e,f);else for(f=0;f<a;f++)b[a-1-f]=c*Math.pow(e,f);return b}},getResolution:function(){return this.getResolutionForZoom(this.map.getZoom())},
getExtent:function(){return this.map.calculateBounds()},getZoomForExtent:function(a,b){var c=this.map.getSize();return this.getZoomForResolution(Math.max(a.getWidth()/c.w,a.getHeight()/c.h),b)},getDataExtent:function(){},getResolutionForZoom:function(a){a=Math.max(0,Math.min(a,this.resolutions.length-1));if(this.map.fractionalZoom)var b=Math.floor(a),c=Math.ceil(a),a=this.resolutions[b]-(a-b)*(this.resolutions[b]-this.resolutions[c]);else a=this.resolutions[Math.round(a)];return a},getZoomForResolution:function(a,
b){var c,d;if(this.map.fractionalZoom){var e=0,f=this.resolutions[e],g=this.resolutions[this.resolutions.length-1],h;for(c=0,d=this.resolutions.length;c<d;++c)if(h=this.resolutions[c],h>=a&&(f=h,e=c),h<=a){g=h;break}c=f-g;c=0<c?e+(f-a)/c:e}else{f=Number.POSITIVE_INFINITY;for(c=0,d=this.resolutions.length;c<d;c++)if(b){e=Math.abs(this.resolutions[c]-a);if(e>f)break;f=e}else if(this.resolutions[c]<a)break;c=Math.max(0,c-1)}return c},getLonLatFromViewPortPx:function(a){var b=null,c=this.map;if(null!=
a&&c.minPx){var b=c.getResolution(),d=c.getMaxExtent({restricted:!0}),b=new OpenLayers.LonLat((a.x-c.minPx.x)*b+d.left,(c.minPx.y-a.y)*b+d.top);this.wrapDateLine&&(b=b.wrapDateLine(this.maxExtent))}return b},getViewPortPxFromLonLat:function(a,b){var c=null;null!=a&&(b=b||this.map.getResolution(),c=this.map.calculateBounds(null,b),c=new OpenLayers.Pixel(1/b*(a.lon-c.left),1/b*(c.top-a.lat)));return c},setOpacity:function(a){if(a!=this.opacity){this.opacity=a;for(var b=this.div.childNodes,c=0,d=b.length;c<
d;++c)OpenLayers.Util.modifyDOMElement(b[c].firstChild||b[c],null,null,null,null,null,null,a);null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"opacity"})}},getZIndex:function(){return this.div.style.zIndex},setZIndex:function(a){this.div.style.zIndex=a},adjustBounds:function(a){if(this.gutter)var b=this.gutter*this.map.getResolution(),a=new OpenLayers.Bounds(a.left-b,a.bottom-b,a.right+b,a.top+b);this.wrapDateLine&&(b={rightTolerance:this.getResolution(),leftTolerance:this.getResolution()},
a=a.wrapDateLine(this.maxExtent,b));return a},CLASS_NAME:"OpenLayers.Layer"});OpenLayers.Layer.HTTPRequest=OpenLayers.Class(OpenLayers.Layer,{URL_HASH_FACTOR:(Math.sqrt(5)-1)/2,url:null,params:null,reproject:!1,initialize:function(a,b,c,d){OpenLayers.Layer.prototype.initialize.apply(this,[a,d]);this.url=b;if(!this.params)this.params=OpenLayers.Util.extend({},c)},destroy:function(){this.params=this.url=null;OpenLayers.Layer.prototype.destroy.apply(this,arguments)},clone:function(a){null==a&&(a=new OpenLayers.Layer.HTTPRequest(this.name,this.url,this.params,this.getOptions()));
return a=OpenLayers.Layer.prototype.clone.apply(this,[a])},setUrl:function(a){this.url=a},mergeNewParams:function(a){this.params=OpenLayers.Util.extend(this.params,a);this.resolution=null;a=this.redraw();null!=this.map&&this.map.events.triggerEvent("changelayer",{layer:this,property:"params"});return a},redraw:function(a){return a?this.mergeNewParams({_olSalt:Math.random()}):OpenLayers.Layer.prototype.redraw.call(this)},selectUrl:function(a,b){for(var c=1,d=0,e=a.length;d<e;d++)c*=a.charCodeAt(d)*
this.URL_HASH_FACTOR,c-=Math.floor(c);return b[Math.floor(c*b.length)]},getFullRequestString:function(a,b){var c=b||this.url,d=OpenLayers.Util.extend({},this.params),d=OpenLayers.Util.extend(d,a),e=OpenLayers.Util.getParameterString(d);OpenLayers.Util.isArray(c)&&(c=this.selectUrl(e,c));var e=OpenLayers.Util.upperCaseObject(OpenLayers.Util.getParameters(c)),f;for(f in d)f.toUpperCase()in e&&delete d[f];e=OpenLayers.Util.getParameterString(d);return OpenLayers.Util.urlAppend(c,e)},CLASS_NAME:"OpenLayers.Layer.HTTPRequest"});OpenLayers.Tile=OpenLayers.Class({events:null,eventListeners:null,id:null,layer:null,url:null,bounds:null,size:null,position:null,isLoading:!1,initialize:function(a,b,c,d,e,f){this.layer=a;this.position=b.clone();this.setBounds(c);this.url=d;if(e)this.size=e.clone();this.id=OpenLayers.Util.createUniqueID("Tile_");OpenLayers.Util.extend(this,f);this.events=new OpenLayers.Events(this);if(this.eventListeners instanceof Object)this.events.on(this.eventListeners)},unload:function(){if(this.isLoading)this.isLoading=
!1,this.events.triggerEvent("unload")},destroy:function(){this.position=this.size=this.bounds=this.layer=null;this.eventListeners&&this.events.un(this.eventListeners);this.events.destroy();this.events=this.eventListeners=null},draw:function(a){a||this.clear();var b=this.shouldDraw();b&&!a&&(b=!1!==this.events.triggerEvent("beforedraw"));return b},shouldDraw:function(){var a=!1,b=this.layer.maxExtent;if(b){var c=this.layer.map,c=c.baseLayer.wrapDateLine&&c.getMaxExtent();this.bounds.intersectsBounds(b,
{inclusive:!1,worldBounds:c})&&(a=!0)}return a||this.layer.displayOutsideMaxExtent},setBounds:function(a){a=a.clone();if(this.layer.map.baseLayer.wrapDateLine)var b=this.layer.map.getMaxExtent(),c=this.layer.map.getResolution(),a=a.wrapDateLine(b,{leftTolerance:c,rightTolerance:c});this.bounds=a},moveTo:function(a,b,c){null==c&&(c=!0);this.setBounds(a);this.position=b.clone();c&&this.draw()},clear:function(){},CLASS_NAME:"OpenLayers.Tile"});OpenLayers.Tile.Image=OpenLayers.Class(OpenLayers.Tile,{url:null,imgDiv:null,frame:null,imageReloadAttempts:null,layerAlphaHack:null,asyncRequestId:null,blankImageUrl:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAQAIBRAA7",maxGetUrlLength:null,canvasContext:null,crossOriginKeyword:null,initialize:function(a,b,c,d,e,f){OpenLayers.Tile.prototype.initialize.apply(this,arguments);this.url=d;this.layerAlphaHack=this.layer.alpha&&OpenLayers.Util.alphaHack();if(null!=this.maxGetUrlLength||
this.layer.gutter||this.layerAlphaHack)this.frame=document.createElement("div"),this.frame.style.position="absolute",this.frame.style.overflow="hidden";null!=this.maxGetUrlLength&&OpenLayers.Util.extend(this,OpenLayers.Tile.Image.IFrame)},destroy:function(){if(this.imgDiv)this.clear(),this.frame=this.imgDiv=null;this.asyncRequestId=null;OpenLayers.Tile.prototype.destroy.apply(this,arguments)},draw:function(){var a=OpenLayers.Tile.prototype.draw.apply(this,arguments);if(a){if(this.layer!=this.layer.map.baseLayer&&
this.layer.reproject)this.bounds=this.getBoundsFromBaseLayer(this.position);this.isLoading?this._loadEvent="reload":(this.isLoading=!0,this._loadEvent="loadstart");this.positionTile();this.renderTile()}else this.unload();return a},renderTile:function(){this.layer.div.appendChild(this.getTile());if(this.layer.async){var a=this.asyncRequestId=(this.asyncRequestId||0)+1;this.layer.getURLasync(this.bounds,function(b){if(a==this.asyncRequestId)this.url=b,this.initImage()},this)}else this.url=this.layer.getURL(this.bounds),
this.initImage()},positionTile:function(){var a=this.getTile().style,b=this.layer.getImageSize(this.bounds);a.left=this.position.x+"%";a.top=this.position.y+"%";a.width=b.w+"%";a.height=b.h+"%"},clear:function(){OpenLayers.Tile.prototype.clear.apply(this,arguments);var a=this.imgDiv;if(a){OpenLayers.Event.stopObservingElement(a);var b=this.getTile();b.parentNode===this.layer.div&&this.layer.div.removeChild(b);this.setImgSrc();if(!0===this.layerAlphaHack)a.style.filter="";OpenLayers.Element.removeClass(a,
"olImageLoadError")}this.canvasContext=null},getImage:function(){if(!this.imgDiv){this.imgDiv=document.createElement("img");this.imgDiv.className="olTileImage";this.imgDiv.galleryImg="no";var a=this.imgDiv.style;if(this.layer.gutter){var b=100*(this.layer.gutter/this.layer.tileSize.h);a.left=-(100*(this.layer.gutter/this.layer.tileSize.w))+"%";a.top=-b+"%"}a.visibility="hidden";a.opacity=0;if(1>this.layer.opacity)a.filter="alpha(opacity="+100*this.layer.opacity+")";a.position="absolute";if(this.layerAlphaHack)a.paddingTop=
a.height,a.height="0",a.width="100%";if(this.frame)a.width="100%",a.height="100%",this.frame.appendChild(this.imgDiv)}return this.imgDiv},initImage:function(){this.events.triggerEvent(this._loadEvent);var a=this.getImage();if(this.url&&a.getAttribute("src")==this.url)this.onImageLoad();else{var b=OpenLayers.Function.bind(function(){OpenLayers.Event.stopObservingElement(a);OpenLayers.Event.observe(a,"load",OpenLayers.Function.bind(this.onImageLoad,this));OpenLayers.Event.observe(a,"error",OpenLayers.Function.bind(this.onImageError,
this));this.imageReloadAttempts=0;this.setImgSrc(this.url)},this);a.getAttribute("src")==this.blankImageUrl?b():(OpenLayers.Event.observe(a,"load",b),OpenLayers.Event.observe(a,"error",b),this.crossOriginKeyword&&a.removeAttribute("crossorigin"),a.src=this.blankImageUrl)}},setImgSrc:function(a){var b=this.imgDiv;b.style.visibility="hidden";b.style.opacity=0;if(a)this.crossOriginKeyword&&("data:"!==a.substr(0,5)?b.setAttribute("crossorigin",this.crossOriginKeyword):b.removeAttribute("crossorigin")),
b.src=a},getTile:function(){return this.frame?this.frame:this.getImage()},createBackBuffer:function(){if(this.imgDiv&&!this.isLoading){var a;this.frame?(a=this.frame.cloneNode(!1),a.appendChild(this.imgDiv)):a=this.imgDiv;this.imgDiv=null;return a}},onImageLoad:function(){var a=this.imgDiv;OpenLayers.Event.stopObservingElement(a);a.style.visibility="inherit";a.style.opacity=this.layer.opacity;this.isLoading=!1;this.canvasContext=null;this.events.triggerEvent("loadend");if(7>parseFloat(navigator.appVersion.split("MSIE")[1])&&
this.layer&&this.layer.div){var b=document.createElement("span");b.style.display="none";var c=this.layer.div;c.appendChild(b);window.setTimeout(function(){b.parentNode===c&&b.parentNode.removeChild(b)},0)}if(!0===this.layerAlphaHack)a.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a.src+"', sizingMethod='scale')"},onImageError:function(){var a=this.imgDiv;null!=a.src&&(this.imageReloadAttempts++,this.imageReloadAttempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS?this.setImgSrc(this.layer.getURL(this.bounds)):
(OpenLayers.Element.addClass(a,"olImageLoadError"),this.events.triggerEvent("loaderror"),this.onImageLoad()))},getCanvasContext:function(){if(OpenLayers.CANVAS_SUPPORTED&&this.imgDiv&&!this.isLoading){if(!this.canvasContext){var a=document.createElement("canvas");a.width=this.size.w;a.height=this.size.h;this.canvasContext=a.getContext("2d");this.canvasContext.drawImage(this.imgDiv,0,0)}return this.canvasContext}},CLASS_NAME:"OpenLayers.Tile.Image"});OpenLayers.Layer.Grid=OpenLayers.Class(OpenLayers.Layer.HTTPRequest,{tileSize:null,tileOriginCorner:"bl",tileOrigin:null,tileOptions:null,tileClass:OpenLayers.Tile.Image,grid:null,singleTile:!1,ratio:1.5,buffer:0,transitionEffect:null,numLoadingTiles:0,tileLoadingDelay:85,serverResolutions:null,moveTimerId:null,deferMoveGriddedTiles:null,tileQueueId:null,tileQueue:null,loading:!1,backBuffer:null,gridResolution:null,backBufferResolution:null,backBufferLonLat:null,backBufferTimerId:null,removeBackBufferDelay:null,
className:null,initialize:function(a,b,c,d){OpenLayers.Layer.HTTPRequest.prototype.initialize.apply(this,arguments);this.grid=[];this.tileQueue=[];if(null===this.removeBackBufferDelay)this.removeBackBufferDelay=this.singleTile?0:2500;if(null===this.className)this.className=this.singleTile?"olLayerGridSingleTile":"olLayerGrid";if(!OpenLayers.Animation.isNative)this.deferMoveGriddedTiles=OpenLayers.Function.bind(function(){this.moveGriddedTiles(!0);this.moveTimerId=null},this)},setMap:function(a){OpenLayers.Layer.HTTPRequest.prototype.setMap.call(this,
a);OpenLayers.Element.addClass(this.div,this.className)},removeMap:function(){if(null!==this.moveTimerId)window.clearTimeout(this.moveTimerId),this.moveTimerId=null;this.clearTileQueue();if(null!==this.backBufferTimerId)window.clearTimeout(this.backBufferTimerId),this.backBufferTimerId=null},destroy:function(){this.removeBackBuffer();this.clearGrid();this.tileSize=this.grid=null;OpenLayers.Layer.HTTPRequest.prototype.destroy.apply(this,arguments)},clearGrid:function(){this.clearTileQueue();if(this.grid){for(var a=
0,b=this.grid.length;a<b;a++)for(var c=this.grid[a],d=0,e=c.length;d<e;d++)this.destroyTile(c[d]);this.grid=[];this.gridResolution=null}},clone:function(a){null==a&&(a=new OpenLayers.Layer.Grid(this.name,this.url,this.params,this.getOptions()));a=OpenLayers.Layer.HTTPRequest.prototype.clone.apply(this,[a]);if(null!=this.tileSize)a.tileSize=this.tileSize.clone();a.grid=[];a.gridResolution=null;a.backBuffer=null;a.backBufferTimerId=null;a.tileQueue=[];a.tileQueueId=null;a.loading=!1;a.moveTimerId=null;
return a},moveTo:function(a,b,c){OpenLayers.Layer.HTTPRequest.prototype.moveTo.apply(this,arguments);a=a||this.map.getExtent();if(null!=a){var d=!this.grid.length||b,e=this.getTilesBounds(),f=this.map.getResolution(),g=this.getServerResolution(f);if(this.singleTile){if(d||!c&&!e.containsBounds(a))b&&"resize"!==this.transitionEffect&&this.removeBackBuffer(),(!b||"resize"===this.transitionEffect)&&this.applyBackBuffer(g),this.initSingleTile(a)}else d=d||!e.intersectsBounds(a,{worldBounds:this.map.baseLayer.wrapDateLine&&
this.map.getMaxExtent()}),f!==g?(a=this.map.calculateBounds(null,g),d&&this.transformDiv(g/f)):(this.div.style.width="100%",this.div.style.height="100%",this.div.style.left="0%",this.div.style.top="0%"),d?(b&&"resize"===this.transitionEffect&&this.applyBackBuffer(g),this.initGriddedTiles(a)):this.moveGriddedTiles()}},getTileData:function(a){var b=null,c=a.lon,d=a.lat,e=this.grid.length;if(this.map&&e){var f=this.map.getResolution(),a=this.tileSize.w,g=this.tileSize.h,h=this.grid[0][0].bounds,i=h.left,
h=h.top;if(c<i&&this.map.baseLayer.wrapDateLine)var k=this.map.getMaxExtent().getWidth(),s=Math.ceil((i-c)/k),c=c+k*s;c=(c-i)/(f*a);d=(h-d)/(f*g);f=Math.floor(c);i=Math.floor(d);0<=i&&i<e&&(e=this.grid[i][f])&&(b={tile:e,i:Math.floor((c-f)*a),j:Math.floor((d-i)*g)})}return b},queueTileDraw:function(a){a=a.object;~OpenLayers.Util.indexOf(this.tileQueue,a)||this.tileQueue.push(a);if(!this.tileQueueId)this.tileQueueId=OpenLayers.Animation.start(OpenLayers.Function.bind(this.drawTileFromQueue,this),null,
this.div);return!1},drawTileFromQueue:function(){0===this.tileQueue.length?this.clearTileQueue():this.tileQueue.shift().draw(!0)},clearTileQueue:function(){OpenLayers.Animation.stop(this.tileQueueId);this.tileQueueId=null;this.tileQueue=[]},destroyTile:function(a){this.removeTileMonitoringHooks(a);a.destroy()},getServerResolution:function(a){a=a||this.map.getResolution();if(this.serverResolutions&&-1===OpenLayers.Util.indexOf(this.serverResolutions,a)){var b,c;for(b=this.serverResolutions.length-
1;0<=b;b--)if(c=this.serverResolutions[b],c>a){a=c;break}if(-1===b)throw"no appropriate resolution in serverResolutions";}return a},getServerZoom:function(){return this.map.getZoomForResolution(this.getServerResolution())},transformDiv:function(a){this.div.style.width=100*a+"%";this.div.style.height=100*a+"%";var b=this.map.getSize(),c=parseInt(this.map.layerContainerDiv.style.left,10),d=(parseInt(this.map.layerContainerDiv.style.top,10)-b.h/2)*(a-1);this.div.style.left=(c-b.w/2)*(a-1)+"%";this.div.style.top=
d+"%"},getResolutionScale:function(){return parseInt(this.div.style.width,10)/100},applyBackBuffer:function(a){null!==this.backBufferTimerId&&this.removeBackBuffer();var b=this.backBuffer;if(!b){b=this.createBackBuffer();if(!b)return;this.div.insertBefore(b,this.div.firstChild);this.backBuffer=b;var c=this.grid[0][0].bounds;this.backBufferLonLat={lon:c.left,lat:c.top};this.backBufferResolution=this.gridResolution}var c=b.style,d=this.backBufferResolution/a;c.width=100*d+"%";c.height=100*d+"%";a=this.getViewPortPxFromLonLat(this.backBufferLonLat,
a);c=parseInt(this.map.layerContainerDiv.style.left,10);d=parseInt(this.map.layerContainerDiv.style.top,10);b.style.left=Math.round(a.x-c)+"%";b.style.top=Math.round(a.y-d)+"%"},createBackBuffer:function(){var a;if(0<this.grid.length){a=document.createElement("div");a.id=this.div.id+"_bb";a.className="olBackBuffer";a.style.position="absolute";a.style.width="100%";a.style.height="100%";for(var b=0,c=this.grid.length;b<c;b++)for(var d=0,e=this.grid[b].length;d<e;d++){var f=this.grid[b][d].createBackBuffer();
if(f)f.style.top=b*this.tileSize.h+"%",f.style.left=d*this.tileSize.w+"%",a.appendChild(f)}}return a},removeBackBuffer:function(){if(this.backBuffer&&(this.div.removeChild(this.backBuffer),this.backBufferResolution=this.backBuffer=null,null!==this.backBufferTimerId))window.clearTimeout(this.backBufferTimerId),this.backBufferTimerId=null},moveByPx:function(){this.singleTile||this.moveGriddedTiles()},setTileSize:function(a){if(this.singleTile)a=this.map.getSize(),a.h=parseInt(a.h*this.ratio),a.w=parseInt(a.w*
this.ratio);OpenLayers.Layer.HTTPRequest.prototype.setTileSize.apply(this,[a])},getTilesBounds:function(){var a=null,b=this.grid.length;if(b)var a=this.grid[b-1][0].bounds,b=this.grid[0].length*a.getWidth(),c=this.grid.length*a.getHeight(),a=new OpenLayers.Bounds(a.left,a.bottom,a.left+b,a.bottom+c);return a},initSingleTile:function(a){this.clearTileQueue();var b=a.getCenterLonLat(),c=a.getWidth()*this.ratio,a=a.getHeight()*this.ratio,b=new OpenLayers.Bounds(b.lon-c/2,b.lat-a/2,b.lon+c/2,b.lat+a/
2),c=this.map.getLayerPxFromLonLat({lon:b.left,lat:b.top});this.grid.length||(this.grid[0]=[]);(a=this.grid[0][0])?a.moveTo(b,c):(a=this.addTile(b,c),this.addTileMonitoringHooks(a),a.draw(),this.grid[0][0]=a);this.removeExcessTiles(1,1);this.gridResolution=this.getServerResolution()},calculateGridLayout:function(a,b,c){var d=c*this.tileSize.w,c=c*this.tileSize.h,e=a.left-b.lon,f=Math.floor(e/d)-this.buffer,e=-(e/d-f)*this.tileSize.w,f=b.lon+f*d,a=a.top-(b.lat+c),g=Math.ceil(a/c)+this.buffer;return{tilelon:d,
tilelat:c,tileoffsetlon:f,tileoffsetlat:b.lat+g*c,tileoffsetx:e,tileoffsety:-(g-a/c)*this.tileSize.h}},getTileOrigin:function(){var a=this.tileOrigin;if(!a)var a=this.getMaxExtent(),b={tl:["left","top"],tr:["right","top"],bl:["left","bottom"],br:["right","bottom"]}[this.tileOriginCorner],a=new OpenLayers.LonLat(a[b[0]],a[b[1]]);return a},initGriddedTiles:function(a){this.clearTileQueue();var b=this.map.getSize(),c=Math.ceil(b.h/this.tileSize.h)+Math.max(1,2*this.buffer),b=Math.ceil(b.w/this.tileSize.w)+
Math.max(1,2*this.buffer),d=this.getTileOrigin(),e=this.getServerResolution(),d=this.calculateGridLayout(a,d,e),e=Math.round(d.tileoffsetx),f=Math.round(d.tileoffsety),g=d.tileoffsetlon,h=d.tileoffsetlat,i=d.tilelon,k=d.tilelat,s=e,t=g,o=0,l=parseInt(this.map.layerContainerDiv.style.left),j=parseInt(this.map.layerContainerDiv.style.top),d=[],n=this.map.getCenter();do{var m=this.grid[o++];m||(m=[],this.grid.push(m));var g=t,e=s,q=0;do{var p=new OpenLayers.Bounds(g,h,g+i,h+k),r=e,r=r-l,u=f,u=u-j,u=
new OpenLayers.Pixel(r,u);(r=m[q++])?r.moveTo(p,u,!1):(r=this.addTile(p,u),this.addTileMonitoringHooks(r),m.push(r));p=p.getCenterLonLat();d.push({tile:r,distance:Math.pow(p.lon-n.lon,2)+Math.pow(p.lat-n.lat,2)});g+=i;e+=this.tileSize.w}while(g<=a.right+i*this.buffer||q<b);h-=k;f+=this.tileSize.h}while(h>=a.bottom-k*this.buffer||o<c);this.removeExcessTiles(o,q);this.gridResolution=this.getServerResolution();d.sort(function(a,b){return a.distance-b.distance});a=0;for(c=d.length;a<c;++a)d[a].tile.draw()},
getMaxExtent:function(){return this.maxExtent},addTile:function(a,b){var c=new this.tileClass(this,b,a,null,this.tileSize,this.tileOptions);c.events.register("beforedraw",this,this.queueTileDraw);return c},addTileMonitoringHooks:function(a){a.onLoadStart=function(){if(!1===this.loading)this.loading=!0,this.events.triggerEvent("loadstart");this.events.triggerEvent("tileloadstart",{tile:a});this.numLoadingTiles++};a.onLoadEnd=function(){this.numLoadingTiles--;this.events.triggerEvent("tileloaded",{tile:a});
if(0===this.tileQueue.length&&0===this.numLoadingTiles&&(this.loading=!1,this.events.triggerEvent("loadend"),this.backBuffer))this.backBufferTimerId=window.setTimeout(OpenLayers.Function.bind(this.removeBackBuffer,this),this.removeBackBufferDelay)};a.onLoadError=function(){this.events.triggerEvent("tileerror",{tile:a})};a.events.on({loadstart:a.onLoadStart,loadend:a.onLoadEnd,unload:a.onLoadEnd,loaderror:a.onLoadError,scope:this})},removeTileMonitoringHooks:function(a){a.unload();a.events.un({loadstart:a.onLoadStart,
loadend:a.onLoadEnd,unload:a.onLoadEnd,loaderror:a.onLoadError,scope:this})},moveGriddedTiles:function(a){if(!a&&!OpenLayers.Animation.isNative)null!=this.moveTimerId&&window.clearTimeout(this.moveTimerId),this.moveTimerId=window.setTimeout(this.deferMoveGriddedTiles,this.tileLoadingDelay);else for(var a=this.buffer||1,b=this.getResolutionScale();;){var c=this.grid[0][0].position.x*b+parseInt(this.div.style.left,10)+parseInt(this.map.layerContainerDiv.style.left),d=this.grid[0][0].position.y*b+parseInt(this.div.style.top,
10)+parseInt(this.map.layerContainerDiv.style.top),e=this.tileSize.w*b,f=this.tileSize.h*b;if(c>-e*(a-1))this.shiftColumn(!0);else if(c<-e*a)this.shiftColumn(!1);else if(d>-f*(a-1))this.shiftRow(!0);else if(d<-f*a)this.shiftRow(!1);else break}},shiftRow:function(a){for(var b=this.grid,c=b[a?0:this.grid.length-1],d=this.getServerResolution(),e=a?-this.tileSize.h:this.tileSize.h,d=d*-e,f=a?b.pop():b.shift(),g=0,h=c.length;g<h;g++){var i=c[g],k=i.bounds.clone(),i=i.position.clone();k.bottom+=d;k.top+=
d;i.y+=e;f[g].moveTo(k,i)}a?b.unshift(f):b.push(f)},shiftColumn:function(a){for(var b=a?-this.tileSize.w:this.tileSize.w,c=this.getServerResolution()*b,d=0,e=this.grid.length;d<e;d++){var f=this.grid[d],g=f[a?0:f.length-1],h=g.bounds.clone(),g=g.position.clone();h.left+=c;h.right+=c;g.x+=b;var i=a?this.grid[d].pop():this.grid[d].shift();i.moveTo(h,g);a?f.unshift(i):f.push(i)}},removeExcessTiles:function(a,b){for(;this.grid.length>a;)for(var c=this.grid.pop(),d=0,e=c.length;d<e;d++){var f=c[d];this.destroyTile(f)}for(;this.grid[0].length>
b;){d=0;for(e=this.grid.length;d<e;d++)c=this.grid[d],f=c.pop(),this.destroyTile(f)}},onMapResize:function(){this.singleTile&&(this.clearGrid(),this.setTileSize())},getTileBounds:function(a){var b=this.maxExtent,c=this.getResolution(),d=c*this.tileSize.w,c=c*this.tileSize.h,e=this.getLonLatFromViewPortPx(a),a=b.left+d*Math.floor((e.lon-b.left)/d),b=b.bottom+c*Math.floor((e.lat-b.bottom)/c);return new OpenLayers.Bounds(a,b,a+d,b+c)},CLASS_NAME:"OpenLayers.Layer.Grid"});OpenLayers.Layer.XYZ=OpenLayers.Class(OpenLayers.Layer.Grid,{isBaseLayer:!0,sphericalMercator:!1,zoomOffset:0,serverResolutions:null,initialize:function(a,b,c){if(c&&c.sphericalMercator||this.sphericalMercator)c=OpenLayers.Util.extend({projection:"EPSG:900913",numZoomLevels:19},c);OpenLayers.Layer.Grid.prototype.initialize.apply(this,[a||this.name,b||this.url,{},c])},clone:function(a){null==a&&(a=new OpenLayers.Layer.XYZ(this.name,this.url,this.getOptions()));return a=OpenLayers.Layer.Grid.prototype.clone.apply(this,
[a])},getURL:function(a){var a=this.getXYZ(a),b=this.url;OpenLayers.Util.isArray(b)&&(b=this.selectUrl(""+a.x+a.y+a.z,b));return OpenLayers.String.format(b,a)},getXYZ:function(a){var b=this.getServerResolution(),c=Math.round((a.left-this.maxExtent.left)/(b*this.tileSize.w)),a=Math.round((this.maxExtent.top-a.top)/(b*this.tileSize.h)),d=this.serverResolutions||this.resolutions,b=0==this.zoomOffset?OpenLayers.Util.indexOf(d,b):this.getServerZoom()+this.zoomOffset;this.wrapDateLine&&(d=Math.pow(2,b),
c=(c%d+d)%d);return{x:c,y:a,z:b}},setMap:function(a){OpenLayers.Layer.Grid.prototype.setMap.apply(this,arguments);if(!this.tileOrigin)this.tileOrigin=new OpenLayers.LonLat(this.maxExtent.left,this.maxExtent.bottom)},CLASS_NAME:"OpenLayers.Layer.XYZ"});OpenLayers.Tile.UTFGrid=OpenLayers.Class(OpenLayers.Tile,{url:null,utfgridResolution:2,json:null,format:null,destroy:function(){this.clear();OpenLayers.Tile.prototype.destroy.apply(this,arguments)},draw:function(){var a=OpenLayers.Tile.prototype.draw.apply(this,arguments);if(a)if(this.isLoading?(this.abortLoading(),this.events.triggerEvent("reload")):(this.isLoading=!0,this.events.triggerEvent("loadstart")),this.url=this.layer.getURL(this.bounds),this.layer.useJSONP){var b=new OpenLayers.Protocol.Script({url:this.url,
callback:function(a){this.isLoading=!1;this.events.triggerEvent("loadend");this.json=a.data},scope:this});b.read();this.request=b}else this.request=OpenLayers.Request.GET({url:this.url,callback:function(a){this.isLoading=!1;this.events.triggerEvent("loadend");200===a.status&&this.parseData(a.responseText)},scope:this});else this.unload();return a},abortLoading:function(){this.request&&(this.request.abort(),delete this.request);this.isLoading=!1},getFeatureInfo:function(a,b){var c=null;if(this.json){var d=
this.getFeatureId(a,b);null!==d&&(c={id:d,data:this.json.data[d]})}return c},getFeatureId:function(a,b){var c=null;if(this.json){var d=this.utfgridResolution,d=this.indexFromCharCode(this.json.grid[Math.floor(b/d)].charCodeAt(Math.floor(a/d))),e=this.json.keys;!isNaN(d)&&d in e&&(c=e[d])}return c},indexFromCharCode:function(a){93<=a&&a--;35<=a&&a--;return a-32},parseData:function(a){if(!this.format)this.format=new OpenLayers.Format.JSON;this.json=this.format.read(a)},clear:function(){this.json=null},
CLASS_NAME:"OpenLayers.Tile.UTFGrid"});OpenLayers.Layer.UTFGrid=OpenLayers.Class(OpenLayers.Layer.XYZ,{isBaseLayer:!1,projection:new OpenLayers.Projection("EPSG:900913"),useJSONP:!1,tileClass:OpenLayers.Tile.UTFGrid,initialize:function(a){OpenLayers.Layer.Grid.prototype.initialize.apply(this,[a.name,a.url,{},a]);this.tileOptions=OpenLayers.Util.extend({utfgridResolution:this.utfgridResolution},this.tileOptions)},clone:function(a){null==a&&(a=new OpenLayers.Layer.UTFGrid(this.getOptions()));return a=OpenLayers.Layer.Grid.prototype.clone.apply(this,
[a])},getFeatureInfo:function(a){var b=null,a=this.getTileData(a);a.tile&&(b=a.tile.getFeatureInfo(a.i,a.j));return b},getFeatureId:function(a){var b=null,a=this.getTileData(a);a.tile&&(b=a.tile.getFeatureId(a.i,a.j));return b},CLASS_NAME:"OpenLayers.Layer.UTFGrid"});OpenLayers.Handler.Drag=OpenLayers.Class(OpenLayers.Handler,{started:!1,stopDown:!0,dragging:!1,touch:!1,last:null,start:null,lastMoveEvt:null,oldOnselectstart:null,interval:0,timeoutId:null,documentDrag:!1,documentEvents:null,initialize:function(a,b,c){OpenLayers.Handler.prototype.initialize.apply(this,arguments);if(!0===this.documentDrag){var d=this;this._docMove=function(a){d.mousemove({xy:{x:a.clientX,y:a.clientY},element:document})};this._docUp=function(a){d.mouseup({xy:{x:a.clientX,y:a.clientY}})}}},
dragstart:function(a){var b=!0;this.dragging=!1;if(this.checkModifiers(a)&&(OpenLayers.Event.isLeftClick(a)||OpenLayers.Event.isSingleTouch(a))){this.started=!0;this.last=this.start=a.xy;OpenLayers.Element.addClass(this.map.viewPortDiv,"olDragDown");this.down(a);this.callback("down",[a.xy]);OpenLayers.Event.stop(a);if(!this.oldOnselectstart)this.oldOnselectstart=document.onselectstart?document.onselectstart:OpenLayers.Function.True;document.onselectstart=OpenLayers.Function.False;b=!this.stopDown}else this.started=
!1,this.last=this.start=null;return b},dragmove:function(a){this.lastMoveEvt=a;if(this.started&&!this.timeoutId&&(a.xy.x!=this.last.x||a.xy.y!=this.last.y)){!0===this.documentDrag&&this.documentEvents&&(a.element===document?(this.adjustXY(a),this.setEvent(a)):this.removeDocumentEvents());if(0<this.interval)this.timeoutId=setTimeout(OpenLayers.Function.bind(this.removeTimeout,this),this.interval);this.dragging=!0;this.move(a);this.callback("move",[a.xy]);if(!this.oldOnselectstart)this.oldOnselectstart=
document.onselectstart,document.onselectstart=OpenLayers.Function.False;this.last=a.xy}return!0},dragend:function(a){if(this.started){!0===this.documentDrag&&this.documentEvents&&(this.adjustXY(a),this.removeDocumentEvents());var b=this.start!=this.last;this.dragging=this.started=!1;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");this.up(a);this.callback("up",[a.xy]);b&&this.callback("done",[a.xy]);document.onselectstart=this.oldOnselectstart}return!0},down:function(){},move:function(){},
up:function(){},out:function(){},mousedown:function(a){return this.dragstart(a)},touchstart:function(a){if(!this.touch)this.touch=!0,this.map.events.un({mousedown:this.mousedown,mouseup:this.mouseup,mousemove:this.mousemove,click:this.click,scope:this});return this.dragstart(a)},mousemove:function(a){return this.dragmove(a)},touchmove:function(a){return this.dragmove(a)},removeTimeout:function(){this.timeoutId=null;this.dragging&&this.mousemove(this.lastMoveEvt)},mouseup:function(a){return this.dragend(a)},
touchend:function(a){a.xy=this.last;return this.dragend(a)},mouseout:function(a){if(this.started&&OpenLayers.Util.mouseLeft(a,this.map.viewPortDiv))if(!0===this.documentDrag)this.addDocumentEvents();else{var b=this.start!=this.last;this.dragging=this.started=!1;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");this.out(a);this.callback("out",[]);b&&this.callback("done",[a.xy]);if(document.onselectstart)document.onselectstart=this.oldOnselectstart}return!0},click:function(){return this.start==
this.last},activate:function(){var a=!1;if(OpenLayers.Handler.prototype.activate.apply(this,arguments))this.dragging=!1,a=!0;return a},deactivate:function(){var a=!1;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments))this.dragging=this.started=this.touch=!1,this.last=this.start=null,a=!0,OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDragDown");return a},adjustXY:function(a){var b=OpenLayers.Util.pagePosition(this.map.viewPortDiv);a.xy.x-=b[0];a.xy.y-=b[1]},addDocumentEvents:function(){OpenLayers.Element.addClass(document.body,
"olDragDown");this.documentEvents=!0;OpenLayers.Event.observe(document,"mousemove",this._docMove);OpenLayers.Event.observe(document,"mouseup",this._docUp)},removeDocumentEvents:function(){OpenLayers.Element.removeClass(document.body,"olDragDown");this.documentEvents=!1;OpenLayers.Event.stopObserving(document,"mousemove",this._docMove);OpenLayers.Event.stopObserving(document,"mouseup",this._docUp)},CLASS_NAME:"OpenLayers.Handler.Drag"});OpenLayers.Handler.Box=OpenLayers.Class(OpenLayers.Handler,{dragHandler:null,boxDivClassName:"olHandlerBoxZoomBox",boxOffsets:null,initialize:function(a,b,c){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.dragHandler=new OpenLayers.Handler.Drag(this,{down:this.startBox,move:this.moveBox,out:this.removeBox,up:this.endBox},{keyMask:this.keyMask})},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments);if(this.dragHandler)this.dragHandler.destroy(),this.dragHandler=
null},setMap:function(a){OpenLayers.Handler.prototype.setMap.apply(this,arguments);this.dragHandler&&this.dragHandler.setMap(a)},startBox:function(){this.callback("start",[]);this.zoomBox=OpenLayers.Util.createDiv("zoomBox",{x:-9999,y:-9999});this.zoomBox.className=this.boxDivClassName;this.zoomBox.style.zIndex=this.map.Z_INDEX_BASE.Popup-1;this.map.viewPortDiv.appendChild(this.zoomBox);OpenLayers.Element.addClass(this.map.viewPortDiv,"olDrawBox")},moveBox:function(a){var b=this.dragHandler.start.x,
c=this.dragHandler.start.y,d=Math.abs(b-a.x),e=Math.abs(c-a.y),f=this.getBoxOffsets();this.zoomBox.style.width=d+f.width+1+"px";this.zoomBox.style.height=e+f.height+1+"px";this.zoomBox.style.left=(a.x<b?b-d-f.left:b-f.left)+"px";this.zoomBox.style.top=(a.y<c?c-e-f.top:c-f.top)+"px"},endBox:function(a){var b;if(5<Math.abs(this.dragHandler.start.x-a.x)||5<Math.abs(this.dragHandler.start.y-a.y)){var c=this.dragHandler.start;b=Math.min(c.y,a.y);var d=Math.max(c.y,a.y),e=Math.min(c.x,a.x),a=Math.max(c.x,
a.x);b=new OpenLayers.Bounds(e,d,a,b)}else b=this.dragHandler.start.clone();this.removeBox();this.callback("done",[b])},removeBox:function(){this.map.viewPortDiv.removeChild(this.zoomBox);this.boxOffsets=this.zoomBox=null;OpenLayers.Element.removeClass(this.map.viewPortDiv,"olDrawBox")},activate:function(){return OpenLayers.Handler.prototype.activate.apply(this,arguments)?(this.dragHandler.activate(),!0):!1},deactivate:function(){return OpenLayers.Handler.prototype.deactivate.apply(this,arguments)?
(this.dragHandler.deactivate()&&this.zoomBox&&this.removeBox(),!0):!1},getBoxOffsets:function(){if(!this.boxOffsets){var a=document.createElement("div");a.style.position="absolute";a.style.border="1px solid black";a.style.width="3px";document.body.appendChild(a);var b=3==a.clientWidth;document.body.removeChild(a);var a=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-left-width")),c=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-right-width")),d=parseInt(OpenLayers.Element.getStyle(this.zoomBox,
"border-top-width")),e=parseInt(OpenLayers.Element.getStyle(this.zoomBox,"border-bottom-width"));this.boxOffsets={left:a,right:c,top:d,bottom:e,width:!1===b?a+c:0,height:!1===b?d+e:0}}return this.boxOffsets},CLASS_NAME:"OpenLayers.Handler.Box"});OpenLayers.Control.ZoomBox=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,out:!1,keyMask:null,alwaysZoom:!1,draw:function(){this.handler=new OpenLayers.Handler.Box(this,{done:this.zoomBox},{keyMask:this.keyMask})},zoomBox:function(a){if(a instanceof OpenLayers.Bounds){var b;if(this.out){b=Math.abs(a.right-a.left);var c=Math.abs(a.top-a.bottom);b=Math.min(this.map.size.h/c,this.map.size.w/b);var c=this.map.getExtent(),d=this.map.getLonLatFromPixel(a.getCenterPixel()),a=d.lon-
c.getWidth()/2*b,e=d.lon+c.getWidth()/2*b,f=d.lat-c.getHeight()/2*b;b=d.lat+c.getHeight()/2*b;b=new OpenLayers.Bounds(a,f,e,b)}else b=this.map.getLonLatFromPixel({x:a.left,y:a.bottom}),c=this.map.getLonLatFromPixel({x:a.right,y:a.top}),b=new OpenLayers.Bounds(b.lon,b.lat,c.lon,c.lat);c=this.map.getZoom();this.map.zoomToExtent(b);c==this.map.getZoom()&&!0==this.alwaysZoom&&this.map.zoomTo(c+(this.out?-1:1))}else this.out?this.map.setCenter(this.map.getLonLatFromPixel(a),this.map.getZoom()-1):this.map.setCenter(this.map.getLonLatFromPixel(a),
this.map.getZoom()+1)},CLASS_NAME:"OpenLayers.Control.ZoomBox"});OpenLayers.Control.DragPan=OpenLayers.Class(OpenLayers.Control,{type:OpenLayers.Control.TYPE_TOOL,panned:!1,interval:1,documentDrag:!1,kinetic:null,enableKinetic:!1,kineticInterval:10,draw:function(){if(this.enableKinetic){var a={interval:this.kineticInterval};"object"===typeof this.enableKinetic&&(a=OpenLayers.Util.extend(a,this.enableKinetic));this.kinetic=new OpenLayers.Kinetic(a)}this.handler=new OpenLayers.Handler.Drag(this,{move:this.panMap,done:this.panMapDone,down:this.panMapStart},{interval:this.interval,
documentDrag:this.documentDrag})},panMapStart:function(){this.kinetic&&this.kinetic.begin()},panMap:function(a){this.kinetic&&this.kinetic.update(a);this.panned=!0;this.map.pan(this.handler.last.x-a.x,this.handler.last.y-a.y,{dragging:!0,animate:!1})},panMapDone:function(a){if(this.panned){var b=null;this.kinetic&&(b=this.kinetic.end(a));this.map.pan(this.handler.last.x-a.x,this.handler.last.y-a.y,{dragging:!!b,animate:!1});if(b){var c=this;this.kinetic.move(b,function(a,b,f){c.map.pan(a,b,{dragging:!f,
animate:!1})})}this.panned=!1}},CLASS_NAME:"OpenLayers.Control.DragPan"});OpenLayers.Handler.MouseWheel=OpenLayers.Class(OpenLayers.Handler,{wheelListener:null,mousePosition:null,interval:0,delta:0,cumulative:!0,initialize:function(a,b,c){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.wheelListener=OpenLayers.Function.bindAsEventListener(this.onWheelEvent,this)},destroy:function(){OpenLayers.Handler.prototype.destroy.apply(this,arguments);this.wheelListener=null},onWheelEvent:function(a){if(this.map&&this.checkModifiers(a)){for(var b=!1,c=!1,d=!1,e=
OpenLayers.Event.element(a);null!=e&&!d&&!b;){if(!b)try{var f=e.currentStyle?e.currentStyle.overflow:document.defaultView.getComputedStyle(e,null).getPropertyValue("overflow"),b=f&&"auto"==f||"scroll"==f}catch(g){}if(!c)for(var d=0,h=this.map.layers.length;d<h;d++)if(e==this.map.layers[d].div||e==this.map.layers[d].pane){c=!0;break}d=e==this.map.div;e=e.parentNode}if(!b&&d){if(c){b=0;if(!a)a=window.event;a.wheelDelta?(b=a.wheelDelta/120,window.opera&&9.2>window.opera.version()&&(b=-b)):a.detail&&
(b=-a.detail/3);this.delta+=b;this.interval?(window.clearTimeout(this._timeoutId),this._timeoutId=window.setTimeout(OpenLayers.Function.bind(function(){this.wheelZoom(a)},this),this.interval)):this.wheelZoom(a)}OpenLayers.Event.stop(a)}}},wheelZoom:function(a){var b=this.delta;this.delta=0;if(b){if(this.mousePosition)a.xy=this.mousePosition;if(!a.xy)a.xy=this.map.getPixelFromLonLat(this.map.getCenter());0>b?this.callback("down",[a,this.cumulative?b:-1]):this.callback("up",[a,this.cumulative?b:1])}},
mousemove:function(a){this.mousePosition=a.xy},activate:function(a){if(OpenLayers.Handler.prototype.activate.apply(this,arguments)){var b=this.wheelListener;OpenLayers.Event.observe(window,"DOMMouseScroll",b);OpenLayers.Event.observe(window,"mousewheel",b);OpenLayers.Event.observe(document,"mousewheel",b);return!0}return!1},deactivate:function(a){if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){var b=this.wheelListener;OpenLayers.Event.stopObserving(window,"DOMMouseScroll",b);OpenLayers.Event.stopObserving(window,
"mousewheel",b);OpenLayers.Event.stopObserving(document,"mousewheel",b);return!0}return!1},CLASS_NAME:"OpenLayers.Handler.MouseWheel"});OpenLayers.Control.Navigation=OpenLayers.Class(OpenLayers.Control,{dragPan:null,dragPanOptions:null,pinchZoom:null,pinchZoomOptions:null,documentDrag:!1,zoomBox:null,zoomBoxEnabled:!0,zoomWheelEnabled:!0,mouseWheelOptions:null,handleRightClicks:!1,zoomBoxKeyMask:OpenLayers.Handler.MOD_SHIFT,autoActivate:!0,initialize:function(a){this.handlers={};OpenLayers.Control.prototype.initialize.apply(this,arguments)},destroy:function(){this.deactivate();this.dragPan&&this.dragPan.destroy();this.dragPan=null;
this.zoomBox&&this.zoomBox.destroy();this.zoomBox=null;this.pinchZoom&&this.pinchZoom.destroy();this.pinchZoom=null;OpenLayers.Control.prototype.destroy.apply(this,arguments)},activate:function(){this.dragPan.activate();this.zoomWheelEnabled&&this.handlers.wheel.activate();this.handlers.click.activate();this.zoomBoxEnabled&&this.zoomBox.activate();this.pinchZoom&&this.pinchZoom.activate();return OpenLayers.Control.prototype.activate.apply(this,arguments)},deactivate:function(){this.pinchZoom&&this.pinchZoom.deactivate();
this.zoomBox.deactivate();this.dragPan.deactivate();this.handlers.click.deactivate();this.handlers.wheel.deactivate();return OpenLayers.Control.prototype.deactivate.apply(this,arguments)},draw:function(){if(this.handleRightClicks)this.map.viewPortDiv.oncontextmenu=OpenLayers.Function.False;this.handlers.click=new OpenLayers.Handler.Click(this,{click:this.defaultClick,dblclick:this.defaultDblClick,dblrightclick:this.defaultDblRightClick},{"double":!0,stopDouble:!0});this.dragPan=new OpenLayers.Control.DragPan(OpenLayers.Util.extend({map:this.map,
documentDrag:this.documentDrag},this.dragPanOptions));this.zoomBox=new OpenLayers.Control.ZoomBox({map:this.map,keyMask:this.zoomBoxKeyMask});this.dragPan.draw();this.zoomBox.draw();this.handlers.wheel=new OpenLayers.Handler.MouseWheel(this,{up:this.wheelUp,down:this.wheelDown},this.mouseWheelOptions);if(OpenLayers.Control.PinchZoom)this.pinchZoom=new OpenLayers.Control.PinchZoom(OpenLayers.Util.extend({map:this.map},this.pinchZoomOptions))},defaultClick:function(a){a.lastTouches&&2==a.lastTouches.length&&
this.map.zoomOut()},defaultDblClick:function(a){this.map.setCenter(this.map.getLonLatFromViewPortPx(a.xy),this.map.zoom+1)},defaultDblRightClick:function(a){this.map.setCenter(this.map.getLonLatFromViewPortPx(a.xy),this.map.zoom-1)},wheelChange:function(a,b){var c=this.map.getZoom(),d=this.map.getZoom()+Math.round(b),d=Math.max(d,0),d=Math.min(d,this.map.getNumZoomLevels());if(d!==c){var e=this.map.getSize(),c=e.w/2-a.xy.x,e=a.xy.y-e.h/2,f=this.map.baseLayer.getResolutionForZoom(d),g=this.map.getLonLatFromPixel(a.xy);
this.map.setCenter(new OpenLayers.LonLat(g.lon+c*f,g.lat+e*f),d)}},wheelUp:function(a,b){this.wheelChange(a,b||1)},wheelDown:function(a,b){this.wheelChange(a,b||-1)},disableZoomBox:function(){this.zoomBoxEnabled=!1;this.zoomBox.deactivate()},enableZoomBox:function(){this.zoomBoxEnabled=!0;this.active&&this.zoomBox.activate()},disableZoomWheel:function(){this.zoomWheelEnabled=!1;this.handlers.wheel.deactivate()},enableZoomWheel:function(){this.zoomWheelEnabled=!0;this.active&&this.handlers.wheel.activate()},
CLASS_NAME:"OpenLayers.Control.Navigation"});OpenLayers.Layer.OSM=OpenLayers.Class(OpenLayers.Layer.XYZ,{name:"OpenStreetMap",url:["http://a.tile.openstreetmap.org/${z}/${x}/${y}.png","http://b.tile.openstreetmap.org/${z}/${x}/${y}.png","http://c.tile.openstreetmap.org/${z}/${x}/${y}.png"],attribution:"Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",sphericalMercator:!0,wrapDateLine:!0,tileOptions:null,initialize:function(a,b,c){OpenLayers.Layer.XYZ.prototype.initialize.apply(this,arguments);this.tileOptions=OpenLayers.Util.extend({crossOriginKeyword:"anonymous"},
this.options&&this.options.tileOptions)},clone:function(a){null==a&&(a=new OpenLayers.Layer.OSM(this.name,this.url,this.getOptions()));return a=OpenLayers.Layer.XYZ.prototype.clone.apply(this,[a])},CLASS_NAME:"OpenLayers.Layer.OSM"});OpenLayers.Control.Zoom=OpenLayers.Class(OpenLayers.Control,{zoomInText:"+",zoomInId:"olZoomInLink",zoomOutText:"-",zoomOutId:"olZoomOutLink",draw:function(){var a=OpenLayers.Control.prototype.draw.apply(this),b=this.getOrCreateLinks(a),c=b.zoomIn,b=b.zoomOut,d=this.map.events;if(b.parentNode!==a)d=this.events,d.attachToElement(b.parentNode);d.register("buttonclick",this,this.onZoomClick);this.zoomInLink=c;this.zoomOutLink=b;return a},getOrCreateLinks:function(a){var b=document.getElementById(this.zoomInId),
c=document.getElementById(this.zoomOutId);if(!b)b=document.createElement("a"),b.href="#zoomIn",b.appendChild(document.createTextNode(this.zoomInText)),b.className="olControlZoomIn",a.appendChild(b);OpenLayers.Element.addClass(b,"olButton");if(!c)c=document.createElement("a"),c.href="#zoomOut",c.appendChild(document.createTextNode(this.zoomOutText)),c.className="olControlZoomOut",a.appendChild(c);OpenLayers.Element.addClass(c,"olButton");return{zoomIn:b,zoomOut:c}},onZoomClick:function(a){a=a.buttonElement;
a===this.zoomInLink?this.map.zoomIn():a===this.zoomOutLink&&this.map.zoomOut()},destroy:function(){this.map&&this.map.events.unregister("buttonclick",this,this.onZoomClick);delete this.zoomInLink;delete this.zoomOutLink;OpenLayers.Control.prototype.destroy.apply(this)},CLASS_NAME:"OpenLayers.Control.Zoom"});OpenLayers.ProxyHost="";
OpenLayers.Request={DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:!0,user:void 0,password:void 0,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){},success:null,failure:null,scope:null},URL_SPLIT_REGEX:/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/,events:new OpenLayers.Events(this),makeSameOrigin:function(a,b){var c=0!==a.indexOf("http"),d=!c&&a.match(this.URL_SPLIT_REGEX);if(d){var e=window.location,c=d[1]==e.protocol&&d[3]==e.hostname,d=d[4],
e=e.port;if(80!=d&&""!=d||"80"!=e&&""!=e)c=c&&d==e}c||(b?a="function"==typeof b?b(a):b+encodeURIComponent(a):OpenLayers.Console.warn(OpenLayers.i18n("proxyNeeded"),{url:a}));return a},issue:function(a){var b=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost}),a=OpenLayers.Util.applyDefaults(a,b),b=!1,c;for(c in a.headers)a.headers.hasOwnProperty(c)&&"x-requested-with"===c.toLowerCase()&&(b=!0);!1===b&&(a.headers["X-Requested-With"]="XMLHttpRequest");var d=new OpenLayers.Request.XMLHttpRequest,
e=OpenLayers.Util.urlAppend(a.url,OpenLayers.Util.getParameterString(a.params||{})),e=OpenLayers.Request.makeSameOrigin(e,a.proxy);d.open(a.method,e,a.async,a.user,a.password);for(var f in a.headers)d.setRequestHeader(f,a.headers[f]);var g=this.events,h=this;d.onreadystatechange=function(){d.readyState==OpenLayers.Request.XMLHttpRequest.DONE&&!1!==g.triggerEvent("complete",{request:d,config:a,requestUrl:e})&&h.runCallbacks({request:d,config:a,requestUrl:e})};!1===a.async?d.send(a.data):window.setTimeout(function(){0!==
d.readyState&&d.send(a.data)},0);return d},runCallbacks:function(a){var b=a.request,c=a.config,d=c.scope?OpenLayers.Function.bind(c.callback,c.scope):c.callback,e;c.success&&(e=c.scope?OpenLayers.Function.bind(c.success,c.scope):c.success);var f;c.failure&&(f=c.scope?OpenLayers.Function.bind(c.failure,c.scope):c.failure);if("file:"==OpenLayers.Util.createUrlObject(c.url).protocol&&b.responseText)b.status=200;d(b);if(!b.status||200<=b.status&&300>b.status)this.events.triggerEvent("success",a),e&&e(b);
if(b.status&&(200>b.status||300<=b.status))this.events.triggerEvent("failure",a),f&&f(b)},GET:function(a){a=OpenLayers.Util.extend(a,{method:"GET"});return OpenLayers.Request.issue(a)},POST:function(a){a=OpenLayers.Util.extend(a,{method:"POST"});a.headers=a.headers?a.headers:{};"CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(a.headers)||(a.headers["Content-Type"]="application/xml");return OpenLayers.Request.issue(a)},PUT:function(a){a=OpenLayers.Util.extend(a,{method:"PUT"});a.headers=a.headers?
a.headers:{};"CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(a.headers)||(a.headers["Content-Type"]="application/xml");return OpenLayers.Request.issue(a)},DELETE:function(a){a=OpenLayers.Util.extend(a,{method:"DELETE"});return OpenLayers.Request.issue(a)},HEAD:function(a){a=OpenLayers.Util.extend(a,{method:"HEAD"});return OpenLayers.Request.issue(a)},OPTIONS:function(a){a=OpenLayers.Util.extend(a,{method:"OPTIONS"});return OpenLayers.Request.issue(a)}};(function(){function a(){this._object=f&&!i?new f:new window.ActiveXObject("Microsoft.XMLHTTP");this._listeners=[]}function b(){return new a}function c(a){b.onreadystatechange&&b.onreadystatechange.apply(a);a.dispatchEvent({type:"readystatechange",bubbles:!1,cancelable:!1,timeStamp:new Date+0})}function d(a){try{a.responseText=a._object.responseText}catch(b){}try{var c=a._object,d=c.responseXML,e=c.responseText;if(h&&e&&d&&!d.documentElement&&c.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/))d=
new window.ActiveXObject("Microsoft.XMLDOM"),d.async=!1,d.validateOnParse=!1,d.loadXML(e);a.responseXML=d&&(h&&0!=d.parseError||!d.documentElement||d.documentElement&&"parsererror"==d.documentElement.tagName)?null:d}catch(f){}try{a.status=a._object.status}catch(g){}try{a.statusText=a._object.statusText}catch(i){}}function e(a){a._object.onreadystatechange=new window.Function}var f=window.XMLHttpRequest,g=!!window.controllers,h=window.document.all&&!window.opera,i=h&&window.navigator.userAgent.match(/MSIE 7.0/);
b.prototype=a.prototype;if(g&&f.wrapped)b.wrapped=f.wrapped;b.UNSENT=0;b.OPENED=1;b.HEADERS_RECEIVED=2;b.LOADING=3;b.DONE=4;b.prototype.readyState=b.UNSENT;b.prototype.responseText="";b.prototype.responseXML=null;b.prototype.status=0;b.prototype.statusText="";b.prototype.priority="NORMAL";b.prototype.onreadystatechange=null;b.onreadystatechange=null;b.onopen=null;b.onsend=null;b.onabort=null;b.prototype.open=function(a,f,i,o,l){delete this._headers;3>arguments.length&&(i=!0);this._async=i;var j=this,
n=this.readyState,m;h&&i&&(m=function(){n!=b.DONE&&(e(j),j.abort())},window.attachEvent("onunload",m));b.onopen&&b.onopen.apply(this,arguments);4<arguments.length?this._object.open(a,f,i,o,l):3<arguments.length?this._object.open(a,f,i,o):this._object.open(a,f,i);this.readyState=b.OPENED;c(this);this._object.onreadystatechange=function(){if(!g||i)j.readyState=j._object.readyState,d(j),j._aborted?j.readyState=b.UNSENT:(j.readyState==b.DONE&&(delete j._data,e(j),h&&i&&window.detachEvent("onunload",m)),
n!=j.readyState&&c(j),n=j.readyState)}};b.prototype.send=function(a){b.onsend&&b.onsend.apply(this,arguments);arguments.length||(a=null);a&&a.nodeType&&(a=window.XMLSerializer?(new window.XMLSerializer).serializeToString(a):a.xml,this._headers["Content-Type"]||this._object.setRequestHeader("Content-Type","application/xml"));this._data=a;this._object.send(this._data);if(g&&!this._async){this.readyState=b.OPENED;for(d(this);this.readyState<b.DONE&&!(this.readyState++,c(this),this._aborted););}};b.prototype.abort=
function(){b.onabort&&b.onabort.apply(this,arguments);if(this.readyState>b.UNSENT)this._aborted=!0;this._object.abort();e(this);this.readyState=b.UNSENT;delete this._data};b.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders()};b.prototype.getResponseHeader=function(a){return this._object.getResponseHeader(a)};b.prototype.setRequestHeader=function(a,b){if(!this._headers)this._headers={};this._headers[a]=b;return this._object.setRequestHeader(a,b)};b.prototype.addEventListener=
function(a,b,c){for(var d=0,e;e=this._listeners[d];d++)if(e[0]==a&&e[1]==b&&e[2]==c)return;this._listeners.push([a,b,c])};b.prototype.removeEventListener=function(a,b,c){for(var d=0,e;(e=this._listeners[d])&&!(e[0]==a&&e[1]==b&&e[2]==c);d++);e&&this._listeners.splice(d,1)};b.prototype.dispatchEvent=function(a){a={type:a.type,target:this,currentTarget:this,eventPhase:2,bubbles:a.bubbles,cancelable:a.cancelable,timeStamp:a.timeStamp,stopPropagation:function(){},preventDefault:function(){},initEvent:function(){}};
"readystatechange"==a.type&&this.onreadystatechange&&(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[a]);for(var b=0,c;c=this._listeners[b];b++)c[0]==a.type&&!c[2]&&(c[1].handleEvent||c[1]).apply(this,[a])};b.prototype.toString=function(){return"[object XMLHttpRequest]"};b.toString=function(){return"[XMLHttpRequest]"};if(!window.Function.prototype.apply)window.Function.prototype.apply=function(a,b){b||(b=[]);a.__func=this;a.__func(b[0],b[1],b[2],b[3],b[4]);delete a.__func};
OpenLayers.Request.XMLHttpRequest=b})();OpenLayers.Handler.Keyboard=OpenLayers.Class(OpenLayers.Handler,{KEY_EVENTS:["keydown","keyup"],eventListener:null,observeElement:null,initialize:function(a,b,c){OpenLayers.Handler.prototype.initialize.apply(this,arguments);this.eventListener=OpenLayers.Function.bindAsEventListener(this.handleKeyEvent,this)},destroy:function(){this.deactivate();this.eventListener=null;OpenLayers.Handler.prototype.destroy.apply(this,arguments)},activate:function(){if(OpenLayers.Handler.prototype.activate.apply(this,
arguments)){this.observeElement=this.observeElement||document;for(var a=0,b=this.KEY_EVENTS.length;a<b;a++)OpenLayers.Event.observe(this.observeElement,this.KEY_EVENTS[a],this.eventListener);return!0}return!1},deactivate:function(){var a=!1;if(OpenLayers.Handler.prototype.deactivate.apply(this,arguments)){for(var a=0,b=this.KEY_EVENTS.length;a<b;a++)OpenLayers.Event.stopObserving(this.observeElement,this.KEY_EVENTS[a],this.eventListener);a=!0}return a},handleKeyEvent:function(a){this.checkModifiers(a)&&
this.callback(a.type,[a])},CLASS_NAME:"OpenLayers.Handler.Keyboard"});OpenLayers.Control.KeyboardDefaults=OpenLayers.Class(OpenLayers.Control,{autoActivate:!0,slideFactor:75,observeElement:null,draw:function(){this.handler=new OpenLayers.Handler.Keyboard(this,{keydown:this.defaultKeyPress},{observeElement:this.observeElement||document})},defaultKeyPress:function(a){var b,c=!0;switch(a.keyCode){case OpenLayers.Event.KEY_LEFT:this.map.pan(-this.slideFactor,0);break;case OpenLayers.Event.KEY_RIGHT:this.map.pan(this.slideFactor,0);break;case OpenLayers.Event.KEY_UP:this.map.pan(0,
-this.slideFactor);break;case OpenLayers.Event.KEY_DOWN:this.map.pan(0,this.slideFactor);break;case 33:b=this.map.getSize();this.map.pan(0,-0.75*b.h);break;case 34:b=this.map.getSize();this.map.pan(0,0.75*b.h);break;case 35:b=this.map.getSize();this.map.pan(0.75*b.w,0);break;case 36:b=this.map.getSize();this.map.pan(-0.75*b.w,0);break;case 43:case 61:case 187:case 107:this.map.zoomIn();break;case 45:case 109:case 189:case 95:this.map.zoomOut();break;default:c=!1}c&&OpenLayers.Event.stop(a)},CLASS_NAME:"OpenLayers.Control.KeyboardDefaults"});OpenLayers.Control.CacheWrite=OpenLayers.Class(OpenLayers.Control,{layers:null,imageFormat:"image/png",quotaRegEx:/quota/i,setMap:function(a){OpenLayers.Control.prototype.setMap.apply(this,arguments);var b,c=this.layers||a.layers;for(b=c.length-1;0<=b;--b)this.addLayer({layer:c[b]});if(!this.layers)a.events.on({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this})},addLayer:function(a){a.layer.events.on({tileloadstart:this.makeSameOrigin,tileloaded:this.cache,scope:this})},removeLayer:function(a){a.layer.events.un({tileloadstart:this.makeSameOrigin,
tileloaded:this.cache,scope:this})},makeSameOrigin:function(a){if(this.active&&(a=a.tile,a instanceof OpenLayers.Tile.Image&&!a.crossOriginKeyword&&"data:"!==a.url.substr(0,5))){var b=OpenLayers.Request.makeSameOrigin(a.url,OpenLayers.ProxyHost);OpenLayers.Control.CacheWrite.urlMap[b]=a.url;a.url=b}},cache:function(a){if(this.active&&window.localStorage&&(a=a.tile,a instanceof OpenLayers.Tile.Image&&"data:"!==a.url.substr(0,5)))try{var b=a.getCanvasContext();if(b){var c=OpenLayers.Control.CacheWrite.urlMap;
window.localStorage.setItem("olCache_"+(c[a.url]||a.url),b.canvas.toDataURL(this.imageFormat));delete c[a.url]}}catch(d){(b=d.name||d.message)&&this.quotaRegEx.test(b)?this.events.triggerEvent("cachefull",{tile:a}):OpenLayers.Console.error(d.toString())}},destroy:function(){if(this.layers||this.map){var a,b=this.layers||this.map.layers;for(a=b.length-1;0<=a;--a)this.removeLayer({layer:b[a]})}this.map&&this.map.events.un({addlayer:this.addLayer,removeLayer:this.removeLayer,scope:this});OpenLayers.Control.prototype.destroy.apply(this,
arguments)},CLASS_NAME:"OpenLayers.Control.CacheWrite"});OpenLayers.Control.CacheWrite.clearCache=function(){if(window.localStorage){var a,b;for(a=window.localStorage.length-1;0<=a;--a)b=window.localStorage.key(a),"olCache_"===b.substr(0,8)&&window.localStorage.removeItem(b)}};OpenLayers.Control.CacheWrite.urlMap={};

/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.18",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Slider 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(!b.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;if(c.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i);if(j===!1)return!1;this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0;return!0},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);this._slide(a,this._handleIndex,c);return!1},_mouseStop:function(a){this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e;return this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values());return this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);else return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);else{if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()}},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,c,d;if(arguments.length){b=this.options.values[a],b=this._trimAlignValue(b);return b}c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;Math.abs(c)*2>=b&&(d+=c>0?b:-b);return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.18"})})(jQuery);
 
 
/** THE SHOW **/
 $(function() {
     // listen for slide changes and run custom to/from listeners
     $(document).bind("deck.change", function(event, from, to) {
         var toId = $.deck("getSlide", to).attr("id");
         if (toId in listeners && listeners[toId].to) {
             // call in next cycle to let slide rendering finish
             window.setTimeout(function() {
                 listeners[toId].to();                    
             }, 0);
         }
         var fromId = $.deck("getSlide", from).attr("id");
         if (fromId in listeners && listeners[fromId].from) {
             // call in next cycle to let slide rendering finish
             window.setTimeout(function() {
                 listeners[fromId].from();
             }, 0);
         }
         
     });
     
     var contribTimer, fadeMap, offlineMap, utfgridMap;

     // custom functions to be run when changing to/from specific slides
     var listeners = {
         // set up gravatar images on contributors slide
         contributors: {
             to: function() {
                 var contribImages = ["ahocevar.jpeg", "argson.png", "bartvde.jpeg", "crschmidt.jpeg", "drnextgis.png", "elemoine.jpeg", "fredj.jpeg", "gravatar.png", "gravitystorm.png", "jorix.png", "marcjansen.png", "mprins.jpeg", "mpriour.jpeg", "pagameba.jpeg", "perrygeo.jpeg", "pgiraud.jpeg", "sbrunner.png", "schuyler.jpeg", "tmcw.jpeg", "tomhughes.jpeg", "tonio.jpeg", "towa48.jpeg", "tschaub.png", "twpayne.jpeg", "ZiglioNZ.jpeg"];        
                 contribImages.sort(function() {return (Math.round(Math.random())-0.5);});
                 var container = $("#contributors-bin");
                 container.html("");
                 container.height(Math.round(0.8 * container.parent().height()));
                 var img;
                 for (var i=0, ii=contribImages.length; i<ii; ++i) {
                     img = document.createElement("img");
                     img.className = "gravatar";
                     img.src = "img/gravatars/" + contribImages[i];
                     container.append(img);
                 }
                 contribTimer = window.setInterval(function() {
                     var kids = container.children();
                     var len = kids.length;
                     var last = $(container.children()[len-1]);
                     var height = last.height();
                     last.animate({width: "toggle", height: height, opacity: "toggle"}, {complete: function() {
                         last.insertBefore($(kids[0]));
                         last.animate({width: "toggle", opacity: "toggle"});
                     }});
                 }, 1500);
             },
             from: function() {
                 window.clearTimeout(contribTimer);
             }
         },
         // add map to tile transition slide
         fade: {
             to: function() {
                 OpenLayers.ProxyHost = "/proxy/?url=";
                 $("#fade-map").attr("tabindex", "0")
                 var height = Math.round(0.65 * $("#fade-map").parent().height());
                 $("#fade-map").height(height);
                 fadeMap = new OpenLayers.Map({
                     div: "fade-map",
                     projection: "EPSG:900913",
                     layers: [
                         new OpenLayers.Layer.XYZ(
                             "MapQuest OSM", 
                             [
                                 "http://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile4.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png"
                             ],
                             {transitionEffect: "resize", wrapDateLine: true}
                         )
                     ],
                     center: [0, 0],
                     zoom: 1
                 });

                 fadeMap.addControl(
                     new OpenLayers.Control.KeyboardDefaults({
                         observeElement: "fade-map"
                     })
                 );
             },
             from: function() {
                 delete OpenLayers.ProxyHost;
                 $("#fade-map").removeAttr('tabindex');
                 if (fadeMap) {
                     fadeMap.destroy();
                     fadeMap = null;
                 }
             }
         },
         // map to demonstrate offline storage
         offline: {
             to: function() {
                 
                 var cacheHits = 0;
                 function updateCacheStats(evt) {
                     var stats = $("#offline-stats");
                     var msg;
                     if (window.localStorage) {
                         msg = localStorage.length + " entries in cache.  ";
                     } else {
                         msg = "Local storage not supported. Try a different browser.  ";
                     }
                     if (evt && evt.tile.url.substr(0, 5) === "data:") {
                         cacheHits++;
                     }
                     stats.html(msg + cacheHits + " cache hits.");
                     
                 }
                 
                 $("#offline-map").attr("tabindex", "0")
                 var height = Math.round(0.65 * $("#offline-map").parent().height());
                 $("#offline-map").height(height);
                 offlineMap = new OpenLayers.Map({
                     div: "offline-map",
                     projection: "EPSG:900913",
                     layers: [
                         new OpenLayers.Layer.OSM("OSM", null, {
                             eventListeners: {
                                 tileloaded: updateCacheStats
                             },
                             transitionEffect: "resize"
                         })
                     ]
                 });
                 var cacheRead = new OpenLayers.Control.CacheRead();
                 var cacheWrite = new OpenLayers.Control.CacheWrite({
                     imageFormat: "image/jpeg", autoActivate: true
                 });
                 var keyboardNav = new OpenLayers.Control.KeyboardDefaults({
                     observeElement: "offline-map"
                 });
                 offlineMap.addControls([cacheRead, cacheWrite, keyboardNav]);
                 offlineMap.setCenter([0, 0], 1);

             },
             from: function() {
                 $("#offline-map").removeAttr('tabindex');
                 if (offlineMap) {
                     offlineMap.destroy();
                     offlineMap = null;
                 }
             }
         },
         // add map to tile transition slide
         utfgrid: {
             to: function() {
                 OpenLayers.ProxyHost = "/proxy/?url=";
                 
                 $("#utfgrid-map").attr("tabindex", "0")
                 var height = Math.round(0.65 * $("#utfgrid-map").parent().height());
                 $("#utfgrid-map").height(height);
                 utfgridMap = new OpenLayers.Map({
                     div: "utfgrid-map",
                     projection: "EPSG:900913",
                     numZoomLevels: 3,
                     layers: [
                         new OpenLayers.Layer.XYZ(
                             "MapQuest OSM", 
                             [
                                 "http://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile4.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png"
                             ],
                             {transitionEffect: "resize", wrapDateLine: false}
                         ),
                         new OpenLayers.Layer.UTFGrid({
                             url: "externals/openlayers/examples/utfgrid/geography-class/${z}/${x}/${y}.grid.json",
                             utfgridResolution: 4,
                             displayInLayerSwitcher: false
                         })
                     ],
                     center: [0, 0],
                     zoom: 2
                 });
                 
                 var output = document.getElementById("utfgrid-output");
                 var flag = document.getElementById("utfgrid-flag");
                 
                 var callback = function(infoLookup, loc, pixel) {
                     var msg = "";
                     if (infoLookup) {
                         var info;
                         for (var idx in infoLookup) {
                             // idx can be used to retrieve layer from map.layers[idx]
                             info = infoLookup[idx];
                             if (info && info.data) {
                                 output.innerHTML = info.data.admin;
                                 flag.innerHTML = "<img src='data:image/png;base64," + info.data.flag_png + "'>";
                                 flag.style.left = (pixel.x + 15) + "px";
                                 flag.style.top = (pixel.y + 15) + "px";
                             } else {
                                 output.innerHTML = flag.innerHTML = "&nbsp;";
                             }
                         }
                     }
                 };

                 var utfGrid = new OpenLayers.Control.UTFGrid({
                     callback: callback,
                     handlerMode: "move"
                 });

                 var keyboardNav = new OpenLayers.Control.KeyboardDefaults({
                     observeElement: "utfgrid-map"
                 });

                 utfgridMap.addControls([utfGrid, keyboardNav]);
             },
             from: function() {
                 delete OpenLayers.ProxyHost;
                 $("#utfgrid-map").removeAttr('tabindex');
                 if (utfgridMap) {
                     utfgridMap.destroy();
                     utfgridMap = null;
                 }
             }
         },
         // add map to client zoom slide
         clientzoom: {
             to: function() {
                 OpenLayers.ProxyHost = "/proxy/?url=";
                 $("#clientzoom-map").attr("tabindex", "0")
                 var height = Math.round(0.65 * $("#clientzoom-map").parent().height());
                 $("#clientzoom-map").height(height);
                 clientzoomMap = new OpenLayers.Map({
                     div: "clientzoom-map",
                     projection: "EPSG:900913",
                     fractionalZoom: true,
                     layers: [
                         new OpenLayers.Layer.XYZ(
                             "MapQuest OSM",
                             [
                                 "http://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png",
                                 "http://otile4.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.png"
                             ],
                             {
                                 wrapDateLine: false,
                                 transitionEffect: "resize",
                                 serverResolutions: [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508]
                             }
                         )
                     ],
                     center: [-8573024.2172157,4706686.4530327],
                     zoom: 7
                 });
                 var keyboardNav = new OpenLayers.Control.KeyboardDefaults({
                     observeElement: "clientzoom-map"
                 });
                 clientzoomMap.addControls([keyboardNav]);

                 $("#clientzoom-slider").slider({
                     slide: function(e, ui) {
                         e.stopPropagation();
                         clientzoomMap.zoomTo(ui.value);
                     },
                     min: 0,
                     max: clientzoomMap.baseLayer.numZoomLevels - 1,
                     value: clientzoomMap.getZoom(),
                     step: 0.01
                 });
                 clientzoomMap.events.on({
                     moveend: function() {
                         $("#clientzoom-slider").slider("value", [clientzoomMap.getZoom()]);
                     }
                 });
             },
             from: function() {
                 delete OpenLayers.ProxyHost;
                 $("#clientzoom-map").removeAttr('tabindex');
                 if (clientzoomMap) {
                     clientzoomMap.destroy();
                     clientzoomMap = null;
                 }
                 $("#clientzoom-slider").slider("destroy");
             }
         }
     };
     
     // initialize slides
     $.deck(".slide");
     
     
 });
 