(this.webpackJsonpcounter_new_react=this.webpackJsonpcounter_new_react||[]).push([[0],{13:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),o=t.n(c),l=(t(5),t(3)),u=t(7);var i=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.counterMinus(e.index)}},"-")," ",e.el," ",r.a.createElement("button",{onClick:function(){e.counterPlus(e.index)}},"+")," ",r.a.createElement("button",{className:"header",onClick:function(){e.counterReset(e.index)}},"Reset")," ",r.a.createElement("button",{className:"header",onClick:function(){e.deleteCurrentCounter(e.index)}},"Delete"))};var s=function(){var e=Object(a.useState)([0,0,0,0,0]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=function(e){var n=t.map((function(n,t){return t===e&&n++,n}));c(n)},s=function(e){var n=t.map((function(n,t){return t===e&&n--,n}));c(n)},m=function(e){var n=t.map((function(n,t){return t===e?0:n}));console.log(n),c(n)},f=function(){var e=t.map((function(e){return 0}));c(e)},d=function(e){var n=t.filter((function(n,t){if(t!==e)return!0}));c(n)};return r.a.createElement("div",null,r.a.createElement("h2",null,"C O U N T E R"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"header",onClick:f},"Reset All")," ",r.a.createElement("button",{className:"header",onClick:function(){var e=[].concat(Object(l.a)(t),[0]);c(e)}},"Add New")," ",r.a.createElement("button",{className:"header",onClick:function(){t.pop();var e=Object(l.a)(t);c(e)}},"Delete Counter")," ",r.a.createElement("button",{className:"header",onClick:function(){c([])}},"DELETE ALL"),r.a.createElement("br",null),r.a.createElement("br",null),t.map((function(e,n){return r.a.createElement(i,{key:n,el:e,index:n,counterPlus:o,counterMinus:s,counterReset:m,counterResetAll:f,deleteCurrentCounter:d})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){},8:function(e,n,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.fed49ec5.chunk.js.map