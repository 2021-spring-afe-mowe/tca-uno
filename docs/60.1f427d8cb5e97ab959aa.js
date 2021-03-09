(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{z0bC:function(t,n,o){"use strict";o.r(n),o.d(n,"PlayGamePageModule",function(){return p});var i=o("ofXK"),e=o("3Pt+"),a=o("TEn/"),c=o("tyNb"),r=o("mrSG"),s=o("fXoL"),b=o("HMLe");function l(t,n){1&t&&(s.Mb(0,"span"),s.fc(1,"s"),s.Lb())}const u=[{path:"",component:(()=>{class t{constructor(t,n,o,i){this.actionSheetController=t,this.router=n,this.appDataSvc=o,this.toastController=i,this.playActions=[]}ngOnInit(){}winGame(){this.cardCount>1?this.presentToast("You sure?"):this.presentWinQuitActionSheet("Win")}quitGame(){this.presentWinQuitActionSheet("Quit")}loseGame(){this.presentLoseActionSheet()}get cardCount(){return this.playActions.reduce((t,n)=>t+n.cardDelta,7)}playCard(){0!=this.cardCount?this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Play Card",cardDelta:-1}]:this.presentToast("You sure?")}drawTwo(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Two",cardDelta:2}]}drawFour(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Four",cardDelta:4}]}drawTwoForgotUno(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Caught Draw Two",cardDelta:2}]}drawCard(t){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Card",cardDelta:t?0:1}]}undoLastPlayAction(){this.playActions=this.playActions.filter((t,n)=>n!=this.playActions.length-1)}presentToast(t){return Object(r.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"warning"})).present()})}presentWinQuitActionSheet(t){return Object(r.a)(this,void 0,void 0,function*(){const n=yield this.actionSheetController.create({buttons:[{text:`Confirm ${t}`,handler:()=>{1==this.cardCount&&this.playCard(),this.appDataSvc.confirmGameEnd(t,this.playActions),this.router.navigate(["/"])}},{text:"Cancel",role:"cancel"}]});yield n.present()})}presentLoseActionSheet(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Choose winner...",buttons:[...this.appDataSvc.currentGameOpponents.map(t=>({text:t,handler:()=>{this.appDataSvc.confirmGameEnd("Lose",this.playActions,t),this.router.navigate(["/"])}})),{text:"Cancel",role:"cancel"}]});yield t.present()})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(a.a),s.Jb(c.g),s.Jb(b.a),s.Jb(a.F))},t.\u0275cmp=s.Db({type:t,selectors:[["app-play-game"]],decls:57,vars:4,consts:[[4,"ngIf"],["lines","none"],["size","default","color","dark",2,"flex","auto",3,"click"],["size","default","color","light",2,"flex","auto",3,"click"],["color","dark"],["color","medium"],["color","light","slot","start",3,"click"],["color","danger","slot","end",3,"click"],["color","success","slot","end",3,"click"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.Mb(3,"ion-chip"),s.fc(4),s.Lb(),s.fc(5," card"),s.ec(6,l,2,0,"span",0),s.Lb(),s.Lb(),s.Lb(),s.Mb(7,"ion-content"),s.Mb(8,"ion-list",1),s.Mb(9,"ion-item-divider"),s.fc(10," My play... "),s.Lb(),s.Mb(11,"ion-item"),s.Mb(12,"ion-button",2),s.Tb("click",function(){return n.playCard()}),s.Mb(13,"ion-text"),s.fc(14," Played Card "),s.Lb(),s.Lb(),s.Lb(),s.Mb(15,"ion-item"),s.Mb(16,"ion-button",3),s.Tb("click",function(){return n.drawCard(!0)}),s.Mb(17,"ion-text"),s.fc(18," Drew / Played "),s.Lb(),s.Lb(),s.Lb(),s.Mb(19,"ion-item"),s.Mb(20,"ion-button",3),s.Tb("click",function(){return n.drawCard(!1)}),s.Mb(21,"ion-text"),s.fc(22," Drew / Didn't Play "),s.Lb(),s.Lb(),s.Lb(),s.Mb(23,"ion-item-divider"),s.fc(24," Mean friends... "),s.Lb(),s.Mb(25,"ion-item"),s.Mb(26,"ion-button",2),s.Tb("click",function(){return n.drawTwo()}),s.Mb(27,"ion-text"),s.fc(28," Drew Two "),s.Lb(),s.Lb(),s.Lb(),s.Mb(29,"ion-item"),s.Mb(30,"ion-button",2),s.Tb("click",function(){return n.drawFour()}),s.Mb(31,"ion-text"),s.fc(32," Drew Four "),s.Lb(),s.Lb(),s.Lb(),s.Mb(33,"ion-item-divider"),s.fc(34," Forgot to say uno... "),s.Lb(),s.Mb(35,"ion-item"),s.Mb(36,"ion-button",3),s.Tb("click",function(){return n.drawTwoForgotUno()}),s.Mb(37,"ion-text"),s.fc(38," Caught / Drew Two "),s.Lb(),s.Lb(),s.Lb(),s.Mb(39,"ion-item-divider"),s.fc(40," Oops... "),s.Lb(),s.Mb(41,"ion-item"),s.Mb(42,"ion-button",3),s.Tb("click",function(){return n.undoLastPlayAction()}),s.Mb(43,"ion-text",4),s.fc(44," Undo "),s.Lb(),s.fc(45," \xa0 \xa0 "),s.Mb(46,"small"),s.Mb(47,"ion-text",5),s.fc(48),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(49,"ion-footer"),s.Mb(50,"ion-toolbar"),s.Mb(51,"ion-button",6),s.Tb("click",function(){return n.quitGame()}),s.fc(52," We Quit "),s.Lb(),s.Mb(53,"ion-button",7),s.Tb("click",function(){return n.loseGame()}),s.fc(54," I Lost "),s.Lb(),s.Mb(55,"ion-button",8),s.Tb("click",function(){return n.winGame()}),s.fc(56," I Won "),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.zb(4),s.gc(n.cardCount),s.zb(2),s.Zb("ngIf",1!=n.cardCount),s.zb(36),s.Ab("disabled",0==n.playActions.length),s.zb(6),s.hc(" ",n.playActions.length>0?n.playActions[n.playActions.length-1].action:"None"," "))},directives:[a.q,a.A,a.z,a.l,i.i,a.n,a.v,a.t,a.s,a.d,a.y,a.o],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(u)],c.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[i.b,e.a,a.B,d]]}),t})()}}]);