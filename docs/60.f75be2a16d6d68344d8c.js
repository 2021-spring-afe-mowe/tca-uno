(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{z0bC:function(t,n,o){"use strict";o.r(n),o.d(n,"PlayGamePageModule",function(){return h});var i=o("ofXK"),e=o("3Pt+"),a=o("TEn/"),r=o("tyNb"),c=o("mrSG"),b=o("fXoL"),s=o("HMLe");function l(t,n){1&t&&(b.Mb(0,"span"),b.gc(1,"s"),b.Lb())}const d=[{path:"",component:(()=>{class t{constructor(t,n,o,i){this.actionSheetController=t,this.router=n,this.appDataSvc=o,this.toastController=i,this.playActions=[]}ngOnInit(){}winGame(){this.cardCount>1?this.presentToast("You sure?"):this.presentWinQuitActionSheet("Win")}quitGame(){this.presentWinQuitActionSheet("Quit")}loseGame(){this.presentLoseActionSheet()}get cardCount(){return this.playActions.reduce((t,n)=>t+n.cardDelta,7)}playCard(){0!=this.cardCount?this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Play Card",cardDelta:-1}]:this.presentToast("You sure?")}drawTwo(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Two",cardDelta:2}]}drawFour(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Four",cardDelta:4}]}drawTwoForgotUno(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Caught Draw Two",cardDelta:2}]}drawCard(t){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Card",cardDelta:t?0:1}]}undoLastPlayAction(){this.playActions=this.playActions.filter((t,n)=>n!=this.playActions.length-1)}presentToast(t){return Object(c.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"warning"})).present()})}presentWinQuitActionSheet(t){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.actionSheetController.create({buttons:[{text:`Confirm ${t}`,handler:()=>{1==this.cardCount&&this.playCard(),this.appDataSvc.confirmGameEnd(t,this.playActions),this.router.navigate(["/"])}},{text:"Cancel",role:"cancel"}]});yield n.present()})}presentLoseActionSheet(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Choose winner...",buttons:[...this.appDataSvc.currentGameOpponents.map(t=>({text:t,handler:()=>{this.appDataSvc.confirmGameEnd("Lose",this.playActions,t),this.router.navigate(["/"])}})),{text:"Cancel",role:"cancel"}]});yield t.present()})}}return t.\u0275fac=function(n){return new(n||t)(b.Jb(a.a),b.Jb(r.g),b.Jb(s.a),b.Jb(a.F))},t.\u0275cmp=b.Db({type:t,selectors:[["app-play-game"]],decls:72,vars:4,consts:[[4,"ngIf"],["lines","none"],["color","success",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],["expand","block","size","default","color","light",3,"click"],["color","warning",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],["color","danger",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],["color","light",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],["expand","block","size","default","color","dark",3,"click"],["color","medium"],["color","dark"],["color","light","slot","start",3,"click"],["color","danger","slot","end",3,"click"],["color","success","slot","end",3,"click"]],template:function(t,n){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.Mb(3,"ion-chip"),b.gc(4),b.Lb(),b.gc(5," card"),b.fc(6,l,2,0,"span",0),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content"),b.Mb(8,"ion-list",1),b.Mb(9,"ion-item"),b.Mb(10,"ion-card",2),b.Mb(11,"ion-card-header"),b.Mb(12,"ion-card-subtitle"),b.gc(13," Play "),b.Lb(),b.Lb(),b.Mb(14,"ion-card-content"),b.Mb(15,"ion-button",3),b.Tb("click",function(){return n.playCard()}),b.Mb(16,"ion-text"),b.gc(17," Played Card "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(18,"ion-item"),b.Mb(19,"ion-card",4),b.Mb(20,"ion-card-header"),b.Mb(21,"ion-card-subtitle"),b.gc(22," Can't Play "),b.Lb(),b.Lb(),b.Mb(23,"ion-card-content"),b.Mb(24,"ion-button",3),b.Tb("click",function(){return n.drawCard(!0)}),b.Mb(25,"ion-text"),b.gc(26," Drew & Played "),b.Lb(),b.Lb(),b.Mb(27,"ion-button",3),b.Tb("click",function(){return n.drawCard(!1)}),b.Mb(28,"ion-text"),b.gc(29," Drew & Didn't Play "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(30,"ion-item"),b.Mb(31,"ion-card",5),b.Mb(32,"ion-card-header"),b.Mb(33,"ion-card-subtitle"),b.gc(34," Mean Friends "),b.Lb(),b.Lb(),b.Mb(35,"ion-card-content"),b.Mb(36,"ion-button",3),b.Tb("click",function(){return n.drawTwo()}),b.Mb(37,"ion-text"),b.gc(38," Drew Two "),b.Lb(),b.Lb(),b.Mb(39,"ion-button",3),b.Tb("click",function(){return n.drawFour()}),b.Mb(40,"ion-text"),b.gc(41," Drew Four "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(42,"ion-item"),b.Mb(43,"ion-card",5),b.Mb(44,"ion-card-header"),b.Mb(45,"ion-card-subtitle"),b.gc(46,' Forgot "Uno" '),b.Lb(),b.Lb(),b.Mb(47,"ion-card-content"),b.Mb(48,"ion-button",3),b.Tb("click",function(){return n.drawTwoForgotUno()}),b.Mb(49,"ion-text"),b.gc(50," Caught & Drew Two "),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(51,"ion-item"),b.Mb(52,"ion-card",6),b.Mb(53,"ion-card-header"),b.Mb(54,"ion-card-subtitle"),b.gc(55," Oops "),b.Lb(),b.Lb(),b.Mb(56,"ion-card-content"),b.Mb(57,"ion-button",7),b.Tb("click",function(){return n.undoLastPlayAction()}),b.Mb(58,"ion-text"),b.gc(59," Undo "),b.Lb(),b.gc(60," \xa0 \xa0 "),b.Mb(61,"small"),b.Mb(62,"ion-text",8),b.gc(63),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(64,"ion-footer"),b.Mb(65,"ion-toolbar",9),b.Mb(66,"ion-button",10),b.Tb("click",function(){return n.quitGame()}),b.gc(67," We Quit "),b.Lb(),b.Mb(68,"ion-button",11),b.Tb("click",function(){return n.loseGame()}),b.gc(69," I Lost "),b.Lb(),b.Mb(70,"ion-button",12),b.Tb("click",function(){return n.winGame()}),b.gc(71," I Won "),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(4),b.hc(n.cardCount),b.zb(2),b.Zb("ngIf",1!=n.cardCount),b.zb(51),b.Ab("disabled",0==n.playActions.length),b.zb(6),b.ic(" ",n.playActions.length>0?n.playActions[n.playActions.length-1].action:"None"," "))},directives:[a.q,a.A,a.z,a.l,i.i,a.n,a.v,a.s,a.f,a.h,a.i,a.g,a.d,a.y,a.o],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(d)],r.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(n){return new(n||t)},imports:[[i.b,e.a,a.B,u]]}),t})()}}]);