(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{52:function(t,e,n){"use strict";n.r(e);const o=(t,e)=>t.getAttribute("data-"+e),i=t=>((t,e,n)=>{var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)})(t,"was-processed","true"),s=t=>"true"===o(t,"was-processed"),l=function(t){return t.getBoundingClientRect().top+window.pageYOffset-t.ownerDocument.documentElement.clientTop},a=function(t,e,n){return(e===window?window.innerHeight+window.pageYOffset:l(e)+e.offsetHeight)<=l(t)-n},r=function(t){return t.getBoundingClientRect().left+window.pageXOffset-t.ownerDocument.documentElement.clientLeft},c=function(t,e,n){const o=window.innerWidth;return(e===window?o+window.pageXOffset:r(e)+o)<=r(t)-n},d=function(t,e,n){return(e===window?window.pageYOffset:l(e))>=l(t)+n+t.offsetHeight},u=function(t,e,n){return(e===window?window.pageXOffset:r(e))>=r(t)+n+t.offsetWidth};function _(t,e,n){return!(a(t,e,n)||d(t,e,n)||c(t,e,n)||u(t,e,n))}const h=function(t,e){var n;let o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};const g=(t,e)=>e?t.replace(/\.(jpe?g|png)/gi,".webp"):t,p="undefined"!=typeof window,f=p&&!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),m=p&&"classList"in document.createElement("p"),w=p&&(!(!(b=document.createElement("canvas")).getContext||!b.getContext("2d"))&&0===b.toDataURL("image/webp").indexOf("data:image/webp"));var b;const v=(t,e)=>{m?t.classList.add(e):t.className+=(t.className?" ":"")+e},E=function(t,e,n,i){for(let s,l=0;s=t.children[l];l+=1)if("SOURCE"===s.tagName){let t=o(s,n);L(s,e,t,i)}},L=function(t,e,n,o){n&&t.setAttribute(e,g(n,o))},T={IMG:(t,e)=>{const n=w&&e.to_webp,i=e.data_srcset,s=t.parentNode;s&&"PICTURE"===s.tagName&&E(s,"srcset",i,n);const l=o(t,e.data_sizes);L(t,"sizes",l);const a=o(t,i);L(t,"srcset",a,n);const r=o(t,e.data_src);L(t,"src",r,n)},IFRAME:(t,e)=>{const n=o(t,e.data_src);L(t,"src",n)},VIDEO:(t,e)=>{const n=e.data_src,i=o(t,n);E(t,"src",n),L(t,"src",i),t.load()}},S=(t,e)=>{const n=e._settings,i=t.tagName,s=T[i];if(s)return s(t,n),e._updateLoadingCount(1),void(e._elements=((t,e)=>t.filter(t=>t!==e))(e._elements,t));((t,e)=>{const n=w&&e.to_webp,i=o(t,e.data_src),s=o(t,e.data_bg);if(i){let e=g(i,n);t.style.backgroundImage=`url("${e}")`}if(s){let e=g(s,n);t.style.backgroundImage=e}})(t,n)},H=function(t,e){t&&t(e)},k=(t,e,n)=>{t.addEventListener(e,n)},O=(t,e,n)=>{t.removeEventListener(e,n)},y=(t,e,n)=>{O(t,"load",e),O(t,"loadeddata",e),O(t,"error",n)},C=function(t,e,n){var o=n._settings;const i=e?o.class_loaded:o.class_error,s=e?o.callback_load:o.callback_error,l=t.target;((t,e)=>{m?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")})(l,o.class_loading),v(l,i),H(s,l),n._updateLoadingCount(-1)},N=(t,e)=>{const n=i=>{C(i,!0,e),y(t,n,o)},o=i=>{C(i,!1,e),y(t,n,o)};((t,e,n)=>{k(t,"load",e),k(t,"loadeddata",e),k(t,"error",n)})(t,n,o)},z=["IMG","IFRAME","VIDEO"];const A=function(t){this._settings=Object.assign({},(()=>({elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_enter:null,callback_finish:null,to_webp:!1}))(),t),this._loadingCount=0,this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};A.prototype={_loopThroughElements:function(t){const e=this._settings,n=this._elements,o=n?n.length:0;let i,s=[],l=this._isFirstLoop;if(l&&(this._isFirstLoop=!1),0!==o){for(i=0;i<o;i++){let o=n[i];e.skip_invisible&&null===o.offsetParent||(t||_(o,e.container,e.threshold))&&(l&&v(o,e.class_initial),this.load(o),s.push(i))}((t,e)=>{for(;e.length;)t.splice(e.pop(),1)})(n,s)}else this._stopScrollHandler()},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},_updateLoadingCount:function(t){this._loadingCount+=t,0===this._elements.length&&0===this._loadingCount&&H(this._settings.callback_finish)},handleScroll:function(){const t=this._settings.throttle;if(0!==t){let e=Date.now(),n=t-(e-this._previousLoopTime);n<=0||n>t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},loadAll:function(){this._loopThroughElements(!0)},update:function(t){const e=this._settings,n=t||this._queryOriginNode.querySelectorAll(e.elements_selector);this._elements=(t=>t.filter(t=>!s(t)))(Array.prototype.slice.call(n)),f?this.loadAll():(this._loopThroughElements(),this._startScrollHandler())},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},load:function(t,e){!function(t,e,n){var o=e._settings;!n&&s(t)||(H(o.callback_enter,t),z.indexOf(t.tagName)>-1&&(N(t,e),v(t,o.class_loading)),S(t,e),i(t),H(o.callback_set,t))}(t,this,e)}},p&&function(t,e){if(e)if(e.length)for(let n,o=0;n=e[o];o+=1)h(t,n);else h(t,e)}(A,window.lazyLoadOptions),e.default=A}}]);