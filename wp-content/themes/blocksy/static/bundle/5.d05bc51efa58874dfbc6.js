(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{50:function(e,t,n){"use strict";n.r(t),n.d(t,"handleFirstLevelForMenu",function(){return a}),n.d(t,"handleUpdate",function(){return o});var r=n(14);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(e){e.hasFirstLevelPoppers||(e.hasFirstLevelPoppers=!0,i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.querySelector(".sub-menu")}).map(function(e){i(e.querySelectorAll("[data-submenu]")).map(function(e){e.removeAttribute("data-submenu")}),setTimeout(function(){return e._popper=new r.a(e.parentNode,e,{modifiers:{applyStyle:{enabled:!1},preventOverflow:{enabled:!1},hide:{enabled:!1},flip:{behavior:["right","left"]},setCustomStyle:{enabled:!0,order:1e8,fn:function(e){e.flipped,e.instance;var t=e.instance.reference,n=(e.popper,e.popper.left,e.placement);e.styles;return t.dataset.submenu="left"===n?"left":"right"}}},placement:"right"})})}))},o=function(e){e.hasPoppers||(e.hasPoppers=!0,e.parentNode.addEventListener("mouseenter",function(){e._timeout_id&&clearTimeout(e._timeout_id),i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.querySelector(".sub-menu")}).map(function(e){i(e.querySelectorAll("[data-submenu]")).map(function(e){e.removeAttribute("data-submenu")}),setTimeout(function(){return e._popper=new r.a(e.parentNode,e,{modifiers:{applyStyle:{enabled:!1},preventOverflow:{enabled:!1},hide:{enabled:!1},flip:{behavior:["right","left"]},setCustomStyle:{enabled:!0,order:1e8,fn:function(e){e.flipped,e.instance;var t=e.instance.reference,n=(e.popper,e.popper.left,e.placement);e.styles;return t.dataset.submenu="left"===n?"left":"right"}}},placement:"right"})})}),e.parentNode.addEventListener("mouseleave",function(){i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.querySelector(".sub-menu")}).map(function(e){e._popper&&(e._popper.destroy(),e._popper=null)}),e._timeout_id=setTimeout(function(){e._timeout_id=null,i(e.children).filter(function(e){return e.classList.contains("menu-item-has-children")||e.classList.contains("page_item_has_children")}).map(function(e){return e.removeAttribute("data-submenu")})},200)},{once:!0})}))}}}]);