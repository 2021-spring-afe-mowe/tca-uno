(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{z0bC:function(t,n,o){"use strict";o.r(n),o.d(n,"PlayGamePageModule",function(){return u});var i=o("ofXK"),e=o("3Pt+"),a=o("TEn/"),r=o("tyNb"),c=o("mrSG"),b=o("fXoL"),s=o("HMLe");function l(t,n){1&t&&(b.Mb(0,"span"),b.hc(1,"s"),b.Lb())}const d=[{path:"",component:(()=>{class t{constructor(t,n,o,i){this.actionSheetController=t,this.router=n,this.appDataSvc=o,this.toastController=i,this.playActions=[],this.firstCardPlayedBy=""}ngOnInit(){}winGame(){this.cardCount>1?this.presentToast("You sure?"):this.presentWinQuitActionSheet("Win")}quitGame(){this.presentWinQuitActionSheet("Quit")}loseGame(){this.presentLoseActionSheet()}get cardCount(){return this.playActions.reduce((t,n)=>t+n.cardDelta,7)}playCard(){0!=this.cardCount?this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Play Card",cardDelta:-1}]:this.presentToast("You sure?")}drawTwo(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Two",cardDelta:2}]}drawFour(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Four",cardDelta:4}]}drawTwoForgotUno(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Caught Draw Two",cardDelta:2}]}drawCard(t){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Card",cardDelta:t?0:1}]}undoLastPlayAction(){this.playActions=this.playActions.filter((t,n)=>n!=this.playActions.length-1)}presentToast(t){return Object(c.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"warning"})).present()})}presentWinQuitActionSheet(t){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.actionSheetController.create({buttons:[{text:`Confirm ${t}`,handler:()=>{1==this.cardCount&&this.playCard(),this.appDataSvc.confirmGameEnd(t,this.playActions,this.firstCardPlayedBy),this.router.navigate(["/"])}},{text:"Cancel",role:"cancel"}]});yield n.present()})}presentLoseActionSheet(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Choose winner...",buttons:[...this.appDataSvc.currentGameOpponents.map(t=>({text:t,handler:()=>{this.appDataSvc.confirmGameEnd("Lose",this.playActions,this.firstCardPlayedBy,t),this.router.navigate(["/"])}})),{text:"Cancel",role:"cancel"}]});yield t.present()})}presentFirstCardActionSheet(){return Object(c.a)(this,void 0,void 0,function*(){const t=[...this.appDataSvc.currentGameOpponents,"Me"].sort(),n=yield this.actionSheetController.create({header:"Who played first card?",buttons:[...t.map(t=>({text:t,handler:()=>{this.firstCardPlayedBy=t}})),{text:"Cancel",role:"cancel"}]});yield n.present()})}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(a.a),b.Jb(r.g),b.Jb(s.a),b.Jb(a.F))},t.\u0275cmp=b.Db({type:t,selectors:[["app-play-game"]],decls:79,vars:4,consts:[[4,"ngIf"],["color","light",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],["expand","block","size","default","color","dark",3,"click"],[1,"ion-justify-content-between"],["color","medium"],["color","dark"],["color","light","slot","start",3,"click"],["color","danger","slot","end",3,"click"],["color","success","slot","end",3,"click"]],template:function(t,n){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.Mb(3,"ion-chip"),b.hc(4),b.Lb(),b.hc(5," card"),b.gc(6,l,2,0,"span",0),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content"),b.Mb(8,"ion-item"),b.Mb(9,"ion-card",1),b.Mb(10,"ion-card-header"),b.Mb(11,"ion-card-subtitle"),b.hc(12," Play "),b.Lb(),b.Lb(),b.Mb(13,"ion-card-content"),b.Mb(14,"ion-button",2),b.Tb("click",function(){return n.playCard()}),b.Mb(15,"ion-text"),b.hc(16," Played Card "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(17,"ion-item"),b.Mb(18,"ion-card",1),b.Mb(19,"ion-card-header"),b.Mb(20,"ion-card-subtitle"),b.hc(21," Can't Play "),b.Lb(),b.Lb(),b.Mb(22,"ion-card-content"),b.Mb(23,"ion-grid"),b.Mb(24,"ion-row",3),b.Mb(25,"ion-col"),b.Mb(26,"ion-button",2),b.Tb("click",function(){return n.drawCard(!0)}),b.Mb(27,"ion-text"),b.hc(28," Drew & Played "),b.Lb(),b.Lb(),b.Lb(),b.Mb(29,"ion-col"),b.Mb(30,"ion-button",2),b.Tb("click",function(){return n.drawCard(!1)}),b.Mb(31,"ion-text"),b.hc(32," Drew & Didn't Play "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(33,"ion-item"),b.Mb(34,"ion-card",1),b.Mb(35,"ion-card-header"),b.Mb(36,"ion-card-subtitle"),b.hc(37," Mean Friends "),b.Lb(),b.Lb(),b.Mb(38,"ion-card-content"),b.Mb(39,"ion-grid"),b.Mb(40,"ion-row",3),b.Mb(41,"ion-col"),b.Mb(42,"ion-button",2),b.Tb("click",function(){return n.drawTwo()}),b.Mb(43,"ion-text"),b.hc(44," Drew Two "),b.Lb(),b.Lb(),b.Lb(),b.Mb(45,"ion-col"),b.Mb(46,"ion-button",2),b.Tb("click",function(){return n.drawFour()}),b.Mb(47,"ion-text"),b.hc(48," Drew Four "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(49,"ion-item"),b.Mb(50,"ion-card",1),b.Mb(51,"ion-card-header"),b.Mb(52,"ion-card-subtitle"),b.hc(53,' Forgot "Uno" '),b.Lb(),b.Lb(),b.Mb(54,"ion-card-content"),b.Mb(55,"ion-button",2),b.Tb("click",function(){return n.drawTwoForgotUno()}),b.Mb(56,"ion-text"),b.hc(57," Caught & Drew Two "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(58,"ion-item"),b.Mb(59,"ion-card",1),b.Mb(60,"ion-card-header"),b.Mb(61,"ion-card-subtitle"),b.hc(62," Oops "),b.Lb(),b.Lb(),b.Mb(63,"ion-card-content"),b.Mb(64,"ion-button",2),b.Tb("click",function(){return n.undoLastPlayAction()}),b.Mb(65,"ion-text"),b.hc(66," Undo "),b.Lb(),b.hc(67," \xa0 \xa0 "),b.Mb(68,"small"),b.Mb(69,"ion-text",4),b.hc(70),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(71,"ion-footer"),b.Mb(72,"ion-toolbar",5),b.Mb(73,"ion-button",6),b.Tb("click",function(){return n.quitGame()}),b.hc(74," We Quit "),b.Lb(),b.Mb(75,"ion-button",7),b.Tb("click",function(){return n.loseGame()}),b.hc(76," I Lost "),b.Lb(),b.Mb(77,"ion-button",8),b.Tb("click",function(){return n.winGame()}),b.hc(78," I Won "),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(4),b.ic(n.cardCount),b.zb(2),b.ac("ngIf",1!=n.cardCount),b.zb(58),b.Ab("disabled",0==n.playActions.length),b.zb(6),b.jc(" ",n.playActions.length>0?n.playActions[n.playActions.length-1].action:"None"," "))},directives:[a.q,a.A,a.z,a.l,i.j,a.n,a.s,a.f,a.h,a.i,a.g,a.d,a.y,a.p,a.x,a.m,a.o],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(d)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[i.b,e.a,a.B,h]]}),t})()}}]);