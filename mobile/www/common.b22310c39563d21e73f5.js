(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0N6O":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return u});var r=n("9TBO"),i=function(t,e){return null!==e.closest(t)},o=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},s=/^[a-z][a-z0-9+\-.]*:/,u=function(t,e,n){return r.a(void 0,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||s.test(t)?[3,2]:(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(t,n)];case 2:return[2,!1]}})})}},"0VGe":function(t,e,n){"use strict";n.d(e,"a",function(){return S}),n.d(e,"b",function(){return y}),n.d(e,"c",function(){return w}),n.d(e,"d",function(){return a});var r=n("9TBO"),i=n("XC0x"),o=n("mPux"),a=function(t){return new Promise(function(e,n){Object(i.n)(function(){s(t),u(t).then(function(n){n.animation&&n.animation.destroy(),c(t),e(n)},function(e){c(t),n(e)})})})},s=function(t){var e=t.enteringEl,n=t.leavingEl;E(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)},u=function(t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,l(t)];case 1:return[2,(e=n.sent())?d(e,t):f(t)]}})})},c=function(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,n.e(113).then(n.bind(null,"Vx2R"))]:[2,void 0];case 1:return e=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(114).then(n.bind(null,"wJHV"))];case 3:e=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,e]}})})},d=function(t,e){return r.a(void 0,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,h(e,!0)];case 1:return r.sent(),[4,n.e(3).then(n.bind(null,"jY4/")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),m(e.enteringEl,e.leavingEl),[4,p(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&b(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},f=function(t){return r.a(void 0,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,h(t,!1)];case 1:return r.sent(),m(e,n),b(e,n),[2,{hasCompleted:!0}]}})})},h=function(t,e){return r.a(void 0,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[S(t.enteringEl),S(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,v(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})},v=function(t,e){return r.a(void 0,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},p=function(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r},m=function(t,e){y(e,o.c),y(t,o.a)},b=function(t,e){y(t,o.b),y(e,o.d)},y=function(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},g=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},S=function(t){return r.a(void 0,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(S))];case 3:n.sent(),n.label=4;case 4:return[2]}})})},w=function(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},"3Fsn":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("t/Na"),i=n("Aso2"),o=n("AytR"),a=n("CcnG"),s=o.a.API_URL+"/resource",u=["D","L","M","M","G","V","S"],c=function(){function t(t,e){this.http=t,this.profileService=e,this.choosenDates={},this.dateIndex=-1,this.date={date:-1,hour:-1}}return t.prototype.getDateSession=function(t){for(var e=[],n=0;n<3;n++)e.push({date:-1,hour:-1});return e},t.prototype.resetChosenDates=function(){this.choosenDates={}},t.prototype.getSelectedDate=function(){return{date:this.dateToSelect?new Date(this.dateToSelect).getTime():-1,hour:this.hourToSelect||-1,hours:this.hourToSelect?this.hoursToSave:{}}},t.prototype.getDate=function(){return this.date||new Date},t.prototype.getSelectedDateAndIndex=function(){var t={date:this.date,index:this.dateIndex};return this.date=null,this.dateIndex=null,t},t.prototype.setIndex=function(t){this.dateIndex=t},t.prototype.setSelectedDate=function(t){this.dateToSelect=new Date(t.date),this.hourToSelect=t.hour},t.prototype.setDate=function(t){this.dateToSelect=null,this.hourToSelect=null,this.choosenDates[this.dateIndex]=t,this.date=t},t.prototype.getCalendarArray=function(t,e,n){var i=this;void 0===n&&(n=!1);var o=this.profileService.getCurrentCoach();return new Promise(function(a,u){var c=(new r.g).set("filter",JSON.stringify({coach_id:o.id}));n?a(i.createCalendarGrid(t,e,[],n)):i.http.get(s+"/availabilities",{params:c}).subscribe(function(r){var o=i.createCalendarGrid(t,e,r.resources.resources,n);a(o)},function(t){u(t)})})},t.prototype.createCalendarGrid=function(t,e,n,r){var i=this;void 0===r&&(r=!1);var o=new Date(e,t).getDay(),a=function(t,e){return 32-new Date(e,t,32).getDate()}(t,e),s=1,c=0,l=[],d=[];u.forEach(function(t){d.push({value:t,legend:!0})}),l.push(d);var f=new Date;for(f.setHours(0,0,0,0);s<=a;){for(var h=[],v=function(u){var l={hasAvailable:!1,id:-1,value:-1,hours:{},free:!0,disabled:!1,timestamp:-1};if(0===c&&u<o||s>a)l.disabled=!0,l.free=!1;else{l.value=s,l.timestamp=new Date(e,t,s).getTime();var d=new Date(e,t,s);0===u||d.getTime()<=f.getTime()?(l.disabled=!0,l.free=!1):(l.hours={1:{available:r,session:""},2:{available:r,session:""},3:{available:r,session:""},4:{available:r,session:""}},r?l.hasAvailable=!0:n.find(function(t){var e=new Date(t.date);e.setHours(0,0,0,0),e.getTime()===l.timestamp&&(l.hasAvailable=!!t.has_available,l.id=t.id,[1,2,3,4].forEach(function(e){l.hours[e].available=!!t["hour_"+e+"_available"]&&null==t["hour_"+e+"_session"]}),i.dateToSelect&&i.dateToSelect.getTime()===e.getTime()&&(i.hoursToSave=l.hours))}),Object.keys(p.choosenDates).forEach(function(t){var e=i.choosenDates[t];e.date===l.timestamp&&(l.hours[e.hour].available=!1)})),s++}h.push(l)},p=this,m=0;m<7;m++)v(m);l.push(h),c++}return l},t.ngInjectableDef=a.S({factory:function(){return new t(a.W(r.c),a.W(i.a))},token:t,providedIn:"root"}),t}()},"P+Ej":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return h}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return c}),n.d(e,"j",function(){return l}),n.d(e,"k",function(){return a});var r=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},i=function(t){return!!t.shadowRoot&&!!t.attachShadow},o=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=function(t,e,n,r,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=n,a.value=r||""}},s=function(t,e,n){return Math.max(t,Math.min(e,n))},u=function(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}},c=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,e){var n=t._original||t;return{_original:t,emit:h(n.emit.bind(n),e)}},h=function(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}},RkhX:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r});var r=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},S4J9:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("9TBO"),i=function(t,e,n,i,o){return r.a(void 0,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})},o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},T2HV:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,s.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var a=n[r];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var s=o(a),u=0;u<s.length;u++)i(s[u])}});for(var r=o(e),a=0;a<r.length;a++)i(r[a]);var u=document.createElement("div");u.appendChild(e);var c=u.querySelector("div");return null!==c?c.innerHTML:u.innerHTML}catch(l){return console.error(l),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(a.includes(r.toLowerCase())){var s=n.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var u=o(t);for(e=0;e<u.length;e++)i(u[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},ZCL3:function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return c}),n.d(e,"createGesture",function(){return h});var r,i=n("XC0x"),o=(n("9yTv"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new a(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(u)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(u)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),a=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u="backdrop-no-scroll",c=new o,l=function(t,e,n,r){var i,o,a=d(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,n,a),function(){t[o](e,n,a)}},d=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(n){r=!1}return!!r},f=function(t){return t instanceof Document?t:t.ownerDocument},h=function(t){var e=!1,n=!1,r=!0,o=!1,a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),s=a.canStart,u=a.onWillStart,d=a.onStart,h=a.onEnd,b=a.notCaptured,y=a.onMove,g=a.threshold,S={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},w=function(t,e,n){var r=a.maxAngle*(Math.PI/180),i="x"===a.direction,o=Math.cos(r),s=e*e,u=0,c=0,l=!1,d=0;return{start:function(t,e){u=t,c=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var n=t-u,r=e-c,a=n*n+r*r;if(a<s)return!1;var f=Math.sqrt(a),h=(i?n:r)/f;return d=h>o?1:h<-o?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,a.threshold),E=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),T=function(){e&&(o=!1,y&&y(S))},D=function(){return!(E&&!E.capture()||(e=!0,r=!1,S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp,u?u(S).then(C):C(),0))},C=function(){d&&d(S),r=!0},X=function(){e=!1,n=!1,o=!1,r=!0,E.release()},I=function(t){var n=e,i=r;X(),i&&(v(S,t),n?h&&h(S):b&&b(S))},L=function(t,e,n,r,i){var o,a,s,u,c,d,h,v=0,p=function(r){v=Date.now()+2e3,e(r)&&(!a&&n&&(a=l(t,"touchmove",n,i)),s||(s=l(t,"touchend",b,i)),u||(u=l(t,"touchcancel",b,i)))},m=function(r){v>Date.now()||e(r)&&(!d&&n&&(d=l(f(t),"mousemove",n,i)),h||(h=l(f(t),"mouseup",y,i)))},b=function(t){g(),r&&r(t)},y=function(t){S(),r&&r(t)},g=function(){a&&a(),s&&s(),u&&u(),a=s=u=void 0},S=function(){d&&d(),h&&h(),d=h=void 0},w=function(){g(),S()},E=function(e){e?(o&&o(),c&&c(),o=c=void 0,w()):(o||(o=l(t,"touchstart",p,i)),c||(c=l(t,"mousedown",m,i)))};return{setDisabled:E,stop:w,destroy:function(){E(!0),r=n=e=void 0}}}(a.el,function(t){var e=m(t);return!(n||!r)&&(p(t,S),S.startX=S.currentX,S.startY=S.currentY,S.startTimeStamp=S.timeStamp=e,S.velocityX=S.velocityY=S.deltaX=S.deltaY=0,S.event=t,(!s||!1!==s(S))&&(E.release(),!!E.start()&&(n=!0,0===g?D():(w.start(S.startX,S.startY),!0))))},function(t){e?!o&&r&&(o=!0,v(S,t),Object(i.n)(T)):(v(S,t),w.detect(S.currentX,S.currentY)&&(w.isGesture()&&D()||x()))},I,{capture:!1}),x=function(){X(),L.stop(),b&&b(S)};return{setDisabled:function(t){t&&e&&I(void 0),L.setDisabled(t)},destroy:function(){E.destroy(),L.destroy()}}},v=function(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;p(e,t);var o=t.currentX,a=t.currentY,s=(t.timeStamp=m(e))-i;if(s>0&&s<100){var u=(a-r)/s;t.velocityX=(o-n)/s*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}},p=function(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r},m=function(t){return t.timeStamp||Date.now()}}}]);