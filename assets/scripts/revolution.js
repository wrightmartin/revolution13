/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*
  SlidesJS 3.0.3 http://slidesjs.com
  (c) 2013 by Nathan Searles http://nathansearles.com
  Updated: March 15th, 2013
  Apache License: http://www.apache.org/licenses/LICENSE-2.0
*/
(function(){(function(a,b,c){var d,e,f;return f="slidesjs",e={width:940,height:528,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}},d=function(){function b(b,c){this.element=b,this.options=a.extend(!0,{},e,c),this._defaults=e,this._name=f,this.init()}return b}(),d.prototype.init=function(){var c,d,e,f,g,h,i=this;return c=a(this.element),this.data=a.data(this),a.data(this,"animating",!1),a.data(this,"total",c.children().not(".slidesjs-navigation",c).length),a.data(this,"current",this.options.start-1),a.data(this,"vendorPrefix",this._getVendorPrefix()),"undefined"!=typeof TouchEvent&&(a.data(this,"touch",!0),this.options.effect.slide.speed=this.options.effect.slide.speed/2),c.css({overflow:"hidden"}),c.slidesContainer=c.children().not(".slidesjs-navigation",c).wrapAll("<div class='slidesjs-container'>",c).parent().css({overflow:"hidden",position:"relative"}),a(".slidesjs-container",c).wrapInner("<div class='slidesjs-control'>",c).children(),a(".slidesjs-control",c).css({position:"relative",left:0}),a(".slidesjs-control",c).children().addClass("slidesjs-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"}),a.each(a(".slidesjs-control",c).children(),function(b){var c;return c=a(this),c.attr("slidesjs-index",b)}),this.data.touch&&(a(".slidesjs-control",c).on("touchstart",function(a){return i._touchstart(a)}),a(".slidesjs-control",c).on("touchmove",function(a){return i._touchmove(a)}),a(".slidesjs-control",c).on("touchend",function(a){return i._touchend(a)})),c.fadeIn(0),this.update(),this.data.touch&&this._setuptouch(),a(".slidesjs-control",c).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return a(this).css({zIndex:10})}),this.options.navigation.active&&(g=a("<a>",{"class":"slidesjs-previous slidesjs-navigation",href:"#",title:"Previous",text:"Previous"}).appendTo(c),d=a("<a>",{"class":"slidesjs-next slidesjs-navigation",href:"#",title:"Next",text:"Next"}).appendTo(c)),a(".slidesjs-next",c).click(function(a){return a.preventDefault(),i.stop(!0),i.next(i.options.navigation.effect)}),a(".slidesjs-previous",c).click(function(a){return a.preventDefault(),i.stop(!0),i.previous(i.options.navigation.effect)}),this.options.play.active&&(f=a("<a>",{"class":"slidesjs-play slidesjs-navigation",href:"#",title:"Play",text:"Play"}).appendTo(c),h=a("<a>",{"class":"slidesjs-stop slidesjs-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(c),f.click(function(a){return a.preventDefault(),i.play(!0)}),h.click(function(a){return a.preventDefault(),i.stop(!0)}),this.options.play.swap&&h.css({display:"none"})),this.options.pagination.active&&(e=a("<ul>",{"class":"slidesjs-pagination"}).appendTo(c),a.each(Array(this.data.total),function(b){var c,d;return c=a("<li>",{"class":"slidesjs-pagination-item"}).appendTo(e),d=a("<a>",{href:"#","data-slidesjs-item":b,html:b+1}).appendTo(c),d.click(function(b){return b.preventDefault(),i.stop(!0),i.goto(1*a(b.currentTarget).attr("data-slidesjs-item")+1)})})),a(b).bind("resize",function(){return i.update()}),this._setActive(),this.options.play.auto&&this.play(),this.options.callback.loaded(this.options.start)},d.prototype._setActive=function(b){var c,d;return c=a(this.element),this.data=a.data(this),d=b>-1?b:this.data.current,a(".active",c).removeClass("active"),a("li:eq("+d+") a",c).addClass("active")},d.prototype.update=function(){var b,c,d;return b=a(this.element),this.data=a.data(this),a(".slidesjs-control",b).children(":not(:eq("+this.data.current+"))").css({display:"none",left:0,zIndex:0}),d=b.width(),c=this.options.height/this.options.width*d,this.options.width=d,this.options.height=c,a(".slidesjs-control, .slidesjs-container",b).css({width:d,height:c})},d.prototype.next=function(b){var c;return c=a(this.element),this.data=a.data(this),a.data(this,"direction","next"),void 0===b&&(b=this.options.navigation.effect),"fade"===b?this._fade():this._slide()},d.prototype.previous=function(b){var c;return c=a(this.element),this.data=a.data(this),a.data(this,"direction","previous"),void 0===b&&(b=this.options.navigation.effect),"fade"===b?this._fade():this._slide()},d.prototype.goto=function(b){var c,d;if(c=a(this.element),this.data=a.data(this),void 0===d&&(d=this.options.pagination.effect),b>this.data.total?b=this.data.total:1>b&&(b=1),"number"==typeof b)return"fade"===d?this._fade(b):this._slide(b);if("string"==typeof b){if("first"===b)return"fade"===d?this._fade(0):this._slide(0);if("last"===b)return"fade"===d?this._fade(this.data.total):this._slide(this.data.total)}},d.prototype._setuptouch=function(){var b,c,d,e;return b=a(this.element),this.data=a.data(this),e=a(".slidesjs-control",b),c=this.data.current+1,d=this.data.current-1,0>d&&(d=this.data.total-1),c>this.data.total-1&&(c=0),e.children(":eq("+c+")").css({display:"block",left:this.options.width}),e.children(":eq("+d+")").css({display:"block",left:-this.options.width})},d.prototype._touchstart=function(b){var c,d;return c=a(this.element),this.data=a.data(this),d=b.originalEvent.touches[0],this._setuptouch(),a.data(this,"touchtimer",Number(new Date)),a.data(this,"touchstartx",d.pageX),a.data(this,"touchstarty",d.pageY),b.stopPropagation()},d.prototype._touchend=function(b){var c,d,e,f,g,h,i,j=this;return c=a(this.element),this.data=a.data(this),h=b.originalEvent.touches[0],f=a(".slidesjs-control",c),f.position().left>.5*this.options.width||f.position().left>.1*this.options.width&&250>Number(new Date)-this.data.touchtimer?(a.data(this,"direction","previous"),this._slide()):f.position().left<-(.5*this.options.width)||f.position().left<-(.1*this.options.width)&&250>Number(new Date)-this.data.touchtimer?(a.data(this,"direction","next"),this._slide()):(e=this.data.vendorPrefix,i=e+"Transform",d=e+"TransitionDuration",g=e+"TransitionTimingFunction",f[0].style[i]="translateX(0px)",f[0].style[d]=.85*this.options.effect.slide.speed+"ms"),f.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return e=j.data.vendorPrefix,i=e+"Transform",d=e+"TransitionDuration",g=e+"TransitionTimingFunction",f[0].style[i]="",f[0].style[d]="",f[0].style[g]=""}),b.stopPropagation()},d.prototype._touchmove=function(b){var c,d,e,f,g;return c=a(this.element),this.data=a.data(this),f=b.originalEvent.touches[0],d=this.data.vendorPrefix,e=a(".slidesjs-control",c),g=d+"Transform",a.data(this,"scrolling",Math.abs(f.pageX-this.data.touchstartx)<Math.abs(f.pageY-this.data.touchstarty)),this.data.animating||this.data.scrolling||(b.preventDefault(),this._setuptouch(),e[0].style[g]="translateX("+(f.pageX-this.data.touchstartx)+"px)"),b.stopPropagation()},d.prototype.play=function(b){var c,d,e,f=this;return c=a(this.element),this.data=a.data(this),!this.data.playInterval&&(b&&(d=this.data.current,this.data.direction="next","fade"===this.options.play.effect?this._fade():this._slide()),a.data(this,"playInterval",setInterval(function(){return d=f.data.current,f.data.direction="next","fade"===f.options.play.effect?f._fade():f._slide()},this.options.play.interval)),e=a(".slidesjs-container",c),this.options.play.pauseOnHover&&(e.unbind(),e.bind("mouseenter",function(){return f.stop()}),e.bind("mouseleave",function(){return f.options.play.restartDelay?a.data(f,"restartDelay",setTimeout(function(){return f.play(!0)},f.options.play.restartDelay)):f.play()})),a.data(this,"playing",!0),a(".slidesjs-play",c).addClass("slidesjs-playing"),this.options.play.swap)?(a(".slidesjs-play",c).hide(),a(".slidesjs-stop",c).show()):void 0},d.prototype.stop=function(b){var c;return c=a(this.element),this.data=a.data(this),clearInterval(this.data.playInterval),this.options.play.pauseOnHover&&b&&a(".slidesjs-container",c).unbind(),a.data(this,"playInterval",null),a.data(this,"playing",!1),a(".slidesjs-play",c).removeClass("slidesjs-playing"),this.options.play.swap?(a(".slidesjs-stop",c).hide(),a(".slidesjs-play",c).show()):void 0},d.prototype._slide=function(b){var c,d,e,f,g,h,i,j,k,l,m=this;return c=a(this.element),this.data=a.data(this),this.data.animating||b===this.data.current+1?void 0:(a.data(this,"animating",!0),d=this.data.current,b>-1?(b-=1,l=b>d?1:-1,e=b>d?-this.options.width:this.options.width,g=b):(l="next"===this.data.direction?1:-1,e="next"===this.data.direction?-this.options.width:this.options.width,g=d+l),-1===g&&(g=this.data.total-1),g===this.data.total&&(g=0),this._setActive(g),i=a(".slidesjs-control",c),b>-1&&i.children(":not(:eq("+d+"))").css({display:"none",left:0,zIndex:0}),i.children(":eq("+g+")").css({display:"block",left:l*this.options.width,zIndex:10}),this.options.callback.start(d+1),this.data.vendorPrefix?(h=this.data.vendorPrefix,k=h+"Transform",f=h+"TransitionDuration",j=h+"TransitionTimingFunction",i[0].style[k]="translateX("+e+"px)",i[0].style[f]=this.options.effect.slide.speed+"ms",i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return i[0].style[k]="",i[0].style[f]="",i.children(":eq("+g+")").css({left:0}),i.children(":eq("+d+")").css({display:"none",left:0,zIndex:0}),a.data(m,"current",g),a.data(m,"animating",!1),i.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),i.children(":not(:eq("+g+"))").css({display:"none",left:0,zIndex:0}),m.data.touch&&m._setuptouch(),m.options.callback.complete(g+1)})):i.stop().animate({left:e},this.options.effect.slide.speed,function(){return i.css({left:0}),i.children(":eq("+g+")").css({left:0}),i.children(":eq("+d+")").css({display:"none",left:0,zIndex:0},a.data(m,"current",g),a.data(m,"animating",!1),m.options.callback.complete(g+1))}))},d.prototype._fade=function(b){var c,d,e,f,g,h=this;return c=a(this.element),this.data=a.data(this),this.data.animating||b===this.data.current+1?void 0:(a.data(this,"animating",!0),d=this.data.current,b?(b-=1,g=b>d?1:-1,e=b):(g="next"===this.data.direction?1:-1,e=d+g),-1===e&&(e=this.data.total-1),e===this.data.total&&(e=0),this._setActive(e),f=a(".slidesjs-control",c),f.children(":eq("+e+")").css({display:"none",left:0,zIndex:10}),this.options.callback.start(d+1),this.options.effect.fade.crossfade?(f.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed),f.children(":eq("+e+")").stop().fadeIn(this.options.effect.fade.speed,function(){return f.children(":eq("+e+")").css({zIndex:0}),a.data(h,"animating",!1),a.data(h,"current",e),h.options.callback.complete(e+1)})):f.children(":eq("+d+")").stop().fadeOut(this.options.effect.fade.speed,function(){return f.children(":eq("+e+")").stop().fadeIn(h.options.effect.fade.speed,function(){return f.children(":eq("+e+")").css({zIndex:10})}),a.data(h,"animating",!1),a.data(h,"current",e),h.options.callback.complete(e+1)}))},d.prototype._getVendorPrefix=function(){var a,b,d,e,f;for(a=c.body||c.documentElement,d=a.style,e="transition",f=["Moz","Webkit","Khtml","O","ms"],e=e.charAt(0).toUpperCase()+e.substr(1),b=0;f.length>b;){if("string"==typeof d[f[b]+e])return f[b];b++}return!1},a.fn[f]=function(b){return this.each(function(){return a.data(this,"plugin_"+f)?void 0:a.data(this,"plugin_"+f,new d(this,b))})}})(jQuery,window,document)}).call(this);


/*! responsive-nav.js v1.0.14 by @viljamis, http://responsive-nav.com, MIT license */
var responsiveNav=function(g,h){var t=!!g.getComputedStyle;g.getComputedStyle||(g.getComputedStyle=function(a){this.el=a;this.getPropertyValue=function(d){var c=/(\-([a-z]){1})/g;"float"===d&&(d="styleFloat");c.test(d)&&(d=d.replace(c,function(a,d,c){return c.toUpperCase()}));return a.currentStyle[d]?a.currentStyle[d]:null};return this});var b,f,e,u=h.documentElement,v=h.getElementsByTagName("head")[0],m=h.createElement("style"),r=!1,j=function(a,d,c,b){if("addEventListener"in a)try{a.addEventListener(d,
c,b)}catch(e){if("object"===typeof c&&c.handleEvent)a.addEventListener(d,function(a){c.handleEvent.call(c,a)},b);else throw e;}else"attachEvent"in a&&("object"===typeof c&&c.handleEvent?a.attachEvent("on"+d,function(){c.handleEvent.call(c)}):a.attachEvent("on"+d,c))},k=function(a,d,c,b){if("removeEventListener"in a)try{a.removeEventListener(d,c,b)}catch(e){if("object"===typeof c&&c.handleEvent)a.removeEventListener(d,function(a){c.handleEvent.call(c,a)},b);else throw e;}else"detachEvent"in a&&("object"===
typeof c&&c.handleEvent?a.detachEvent("on"+d,function(){c.handleEvent.call(c)}):a.detachEvent("on"+d,c))},l=function(a,d){for(var b in d)a.setAttribute(b,d[b])},n=function(a,b){a.className+=" "+b;a.className=a.className.replace(/(^\s*)|(\s*$)/g,"")},p=function(a,b){a.className=a.className.replace(RegExp("(\\s|^)"+b+"(\\s|$)")," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,d){var c;this.options={animate:!0,transition:400,label:"Menu",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",
init:function(){},open:function(){},close:function(){}};for(c in d)this.options[c]=d[c];n(u,this.options.jsClass);this.wrapperEl=a.replace("#","");if(h.getElementById(this.wrapperEl))this.wrapper=h.getElementById(this.wrapperEl);else throw Error("The nav element you are trying to select doesn't exist");c=this.wrapper;for(var e=this.wrapper.firstChild;null!==e&&1!==e.nodeType;)e=e.nextSibling;c.inner=e;f=this.options;b=this.wrapper;this._init(this)};s.prototype={destroy:function(){this._removeStyles();
p(b,"closed");p(b,"opened");b.removeAttribute("style");b.removeAttribute("aria-hidden");q=b=null;k(g,"load",this,!1);k(g,"resize",this,!1);k(e,"mousedown",this,!1);k(e,"touchstart",this,!1);k(e,"touchend",this,!1);k(e,"keyup",this,!1);k(e,"click",this,!1);f.customToggle?e.removeAttribute("aria-hidden"):e.parentNode.removeChild(e)},toggle:function(){r?(p(b,"opened"),n(b,"closed"),l(b,{"aria-hidden":"true"}),f.animate?setTimeout(function(){b.style.position="absolute"},f.transition+10):b.style.position=
"absolute",r=!1,f.close()):(p(b,"closed"),n(b,"opened"),b.style.position=f.openPos,l(b,{"aria-hidden":"false"}),r=!0,f.open())},handleEvent:function(a){a=a||g.event;switch(a.type){case "mousedown":this._onmousedown(a);break;case "touchstart":this._ontouchstart(a);break;case "touchend":this._ontouchend(a);break;case "keyup":this._onkeyup(a);break;case "click":this._onclick(a);break;case "load":this._transitions(a);this._resize(a);break;case "resize":this._resize(a)}},_init:function(){n(b,"closed");
this._createToggle();j(g,"load",this,!1);j(g,"resize",this,!1);j(e,"mousedown",this,!1);j(e,"touchstart",this,!1);j(e,"touchend",this,!1);j(e,"keyup",this,!1);j(e,"click",this,!1)},_createStyles:function(){m.parentNode||v.appendChild(m)},_removeStyles:function(){m.parentNode&&m.parentNode.removeChild(m)},_createToggle:function(){if(f.customToggle){var a=f.customToggle.replace("#","");if(h.getElementById(a))e=h.getElementById(a);else throw Error("The custom nav toggle you are trying to select doesn't exist");
}else a=h.createElement("a"),a.innerHTML=f.label,l(a,{href:"#",id:"nav-toggle"}),"after"===f.insert?b.parentNode.insertBefore(a,b.nextSibling):b.parentNode.insertBefore(a,b),e=h.getElementById("nav-toggle")},_preventDefault:function(a){a.preventDefault?(a.preventDefault(),a.stopPropagation()):a.returnValue=!1},_onmousedown:function(a){var b=a||g.event;3===b.which||2===b.button||(this._preventDefault(a),this.toggle(a))},_ontouchstart:function(a){e.onmousedown=null;this._preventDefault(a);this.toggle(a)},
_ontouchend:function(){var a=this;b.addEventListener("click",a._preventDefault,!0);setTimeout(function(){b.removeEventListener("click",a._preventDefault,!0)},f.transition)},_onkeyup:function(a){13===(a||g.event).keyCode&&this.toggle(a)},_onclick:function(a){this._preventDefault(a)},_transitions:function(){if(f.animate){var a=b.style,d="max-height "+f.transition+"ms";a.WebkitTransition=d;a.MozTransition=d;a.OTransition=d;a.transition=d}},_calcHeight:function(){var a="#"+this.wrapperEl+".opened{max-height:"+
b.inner.offsetHeight+"px}";t&&(m.innerHTML=a)},_resize:function(){"none"!==g.getComputedStyle(e,null).getPropertyValue("display")?(l(e,{"aria-hidden":"false"}),b.className.match(/(^|\s)closed(\s|$)/)&&(l(b,{"aria-hidden":"true"}),b.style.position="absolute"),this._createStyles(),this._calcHeight()):(l(e,{"aria-hidden":"true"}),l(b,{"aria-hidden":"false"}),b.style.position=f.openPos,this._removeStyles());f.init()}};var q;return function(a,b){q||(q=new s(a,b));return q}}(window,document);


if(/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent)&&!/(IEMobile)/.test(navigator.userAgent)){var ss_set={"five hundred pixels":"",fivehundredpixels:"","five hundred px":"","github octocat":"","stack overflow":"",stackoverflow:"",fivehundredpx:"",githuboctocat:"",kickstarter:"","app dot net":"","google plus":"",googleplus:"",foursquare:"",soundcloud:"",letterboxd:"",blackberry:"",delicious:"",posterous:"",pinterest:"",microsoft:"","thumbs up":"👍",telephone:"📞",appdotnet:"",wordpress:"",instagram:"",facebook:"",thumbsup:"👍",readmill:"",pinboard:"",dribbble:"",envelope:"✉","google +":"",linkedin:"",twitter:"",approve:"👍",behance:"",youtube:"",blogger:"",dropbox:"",octocat:"",android:"","google+":"","last fm":"","app net":"",windows:"",spotify:"",flickr:"",lastfm:"",zerply:"",appnet:"",paypal:"",tumblr:"",github:"",svpply:"",reddit:"",share:"",phone:"📞",apple:"",vimeo:"",email:"✉",steam:"",quora:"","500px":"",skype:"",like:"👍",mail:"✉",call:"📞",link:"🔗",rdio:"",yelp:"",etsy:"",vine:"",rss:""};if(typeof ss_icons!=="object"||typeof ss_icons!=="object"){var ss_icons=ss_set;var ss_keywords=[];for(var i in ss_set){ss_keywords.push(i)}}else{for(var i in ss_set){ss_icons[i]=ss_set[i];ss_keywords.push(i)}}if(typeof ss_legacy!=="function"){!function(e,s){typeof module!="undefined"?module.exports=s():typeof define=="function"&&typeof define.amd=="object"?define(s):this[e]=s()}("ss_ready",function(e){function s(e){f=1;while(e=t.shift())e()}var t=[],o,n=!1,r=document,i=r.documentElement,a=i.doScroll,l="DOMContentLoaded",u="addEventListener",c="onreadystatechange",d="readyState",f=/^loade|c/.test(r[d]);return r[u]&&r[u](l,o=function(){r.removeEventListener(l,o,n),s()},n),a&&r.attachEvent(c,o=function(){/^c/.test(r[d])&&(r.detachEvent(c,o),s())}),e=a?function(s){self!=top?f?s():t.push(s):function(){try{i.doScroll("left")}catch(t){return setTimeout(function(){e(s)},50)}s()}()}:function(e){f?e():t.push(e)}});var ss_legacy=function(e){if(!e instanceof Object)return false;if(e.length){for(var s=0;s<e.length;s++){ss_legacy(e[s])}return}if(e.value){e.value=ss_liga(e.value)}else if(e.nodeValue){e.nodeValue=ss_liga(e.nodeValue)}else if(e.innerHTML){e.innerHTML=ss_liga(e.innerHTML)}};var ss_getElementsByClassName=function(e,s){if(document.querySelectorAll){return document.querySelectorAll("."+s)}var t=[];var o=new RegExp("(^| )"+s+"( |$)");var n=e.getElementsByTagName("*");for(var r=0,i=n.length;r<i;r++)if(o.test(n[r].className))t.push(n[r]);return t};var ss_liga=function(e){var s=new RegExp(ss_keywords.join("|").replace(/[-[\]{}()*+?.,\\^$#\s]/g,"\\$&"),"gi");return e.replace(s,function(e){return ss_icons[e.toLowerCase()]})};ss_ready(function(){if(document.getElementsByClassName){ss_legacy(document.getElementsByClassName("ss-icon"))}else{ss_legacy(ss_getElementsByClassName(document.body,"ss-icon"))}})}}


//map code, from Neil Kinnish (@neiltak - follow this guy)
$(document).ready(function(){var e=document.createElement("script");e.type="text/javascript";e.src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initMap";document.body.appendChild(e);setTimeout(function(){$(".conference-centre-info").addClass("visible")},750)});var styles=[{stylers:[{hue:"#ff4d00"},{saturation:-64},{weight:.5},{gamma:1},{visibility:"on"}]}];function initMap(){var e={zoom:14,center:new google.maps.LatLng(52.71706,-2.79396),panControl:false,zoomControl:false,scaleControl:false,mapTypeControl:false,scrollwheel:false,draggable:false,disableDefaultUI:true,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL},mapTypeId:google.maps.MapTypeId.ROADMAP};var a=new google.maps.Map(document.getElementById("map-canvas"),e);var o=new google.maps.StyledMapType(styles,{name:"Styled Map"});var t=new google.maps.MarkerImage("https://s3.amazonaws.com/mixture-mixed/1/3012/assets/img/marker.png",null,null,null,new google.maps.Size(29,29));var s=new google.maps.LatLng(52.709357,-2.793752);var l=new google.maps.Marker({position:s,map:a,icon:t});a.mapTypes.set("map_style",o);a.setMapTypeId("map_style");var n=new google.maps.LatLng(52.71706,-2.79396);google.maps.event.addDomListener(window,"resize",function(){a.setCenter(n)})}
