(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("A36C"),s=n("iWo5"),r=n("qULd");const a=(t,e)=>{let n,a;const o=(t,i,s)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(u(),c(r,s)):u()},c=(t,e)=>{n=t,a||(a=n);const s=n;Object(i.f)(()=>s.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&a!==n&&n.click(),n=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>o(t.currentX,t.currentY,r.a),onMove:t=>o(t.currentX,t.currentY,r.b),onEnd:()=>{u(!0),Object(r.e)(),a=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o});const i=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,o=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,i)}return!1}},HMLe:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("mrSG"),s=n("fXoL"),r=n("e8h1");let a=(()=>{class t{constructor(t){this.storage=t,this.gameResults=[],this.getOpponents=t=>[...new Set(t.map(t=>t.opponents).reduce((t,e)=>[...t,...e],[]))].sort().map(t=>({name:t,checked:!1}))}loadPreviousGameResults(){return Object(i.a)(this,void 0,void 0,function*(){yield this.storage.ready();const t=yield this.storage.get("tcaUnoGameResults");this.gameResults=t?JSON.parse(t):[]})}confirmGameEnd(t,e,n){let i;switch(t){case"Win":i={startDateTime:this.currentGameStartDateTime,endDateTime:new Date,opponents:this.currentGameOpponents,actions:e,winningPlayer:"Me"};break;case"Lose":i={startDateTime:this.currentGameStartDateTime,endDateTime:new Date,opponents:this.currentGameOpponents,actions:e,winningPlayer:n};break;case"Quit":i={startDateTime:this.currentGameStartDateTime,endDateTime:new Date,opponents:this.currentGameOpponents,actions:e,winningPlayer:"None"}}this.gameResults=[...this.gameResults,i],this.storage.set("tcaUnoGameResults",JSON.stringify(this.gameResults)),console.log("confirmGameEnd()",this.gameResults)}calculateBasicWinLossStats(){const t=this.gameResults.filter(t=>"Me"==t.winningPlayer).length,e=this.gameResults.filter(t=>"Me"!=t.winningPlayer&&"None"!=t.winningPlayer).length,n=this.gameResults.length,i=n-(t+e);return{numberOfGames:this.gameResults.length,wins:t,losses:e,winningPercent:t/(t+e),quits:i,completionPercent:(n-i)/n}}calculateHandSizeFacts(){const t=this.gameResults.map(t=>({win:"Me"==t.winningPlayer,date:t.endDateTime,actions:t.actions.reduce((t,e)=>[...t,t[t.length-1]+e.cardDelta],[7])})),e=Math.max(...t.reduce((t,e)=>[...t,...e.actions],[])),n=Math.max(...t.filter(t=>t.win).reduce((t,e)=>[...t,...e.actions],[]));return console.log(t),{largestHand:e,largestHandWithWin:n}}getPreviousOpponents(){return this.getOpponents(this.gameResults)}clearData(){this.storage.set("tcaUnoGameResults",JSON.stringify([]))}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(r.b))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});const i=async(t,e,n,i,s)=>{if(t)return t.attachViewToDom(e,n,s,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),s&&Object.assign(r,s),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,s=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){return new(n||(n=Promise))(function(s,r){function a(t){try{c(i.next(t))}catch(e){r(e)}}function o(t){try{c(i.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,o)}c((i=i.apply(t,e||[])).next())})}n.d(e,"a",function(){return i})},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return o});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{i.selection()},r=()=>{i.selectionStart()},a=()=>{i.selectionChanged()},o=()=>{i.selectionEnd()},c=t=>{i.impact(t)}}}]);