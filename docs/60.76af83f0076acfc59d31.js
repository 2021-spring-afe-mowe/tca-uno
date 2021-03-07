(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{z0bC:function(t,n,e){"use strict";e.r(n),e.d(n,"PlayGamePageModule",function(){return h});var o=e("ofXK"),i=e("3Pt+"),a=e("TEn/"),r=e("tyNb"),c=e("mrSG"),s=e("fXoL"),l=e("HMLe");function b(t,n){1&t&&(s.Mb(0,"span"),s.fc(1,"s"),s.Lb())}const u=[{path:"",component:(()=>{class t{constructor(t,n,e,o){this.actionSheetController=t,this.router=n,this.appDataSvc=e,this.toastController=o,this.playActions=[]}ngOnInit(){}winGame(){this.presentWinQuitActionSheet("Win")}quitGame(){this.presentWinQuitActionSheet("Quit")}loseGame(){this.presentLoseActionSheet()}get cardCount(){return this.playActions.reduce((t,n)=>t+n.cardDelta,7)}playCard(){0!=this.cardCount?this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Play Card",cardDelta:-1}]:this.presentToast("You sure?")}drawTwo(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Two",cardDelta:2}]}drawFour(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Four",cardDelta:4}]}drawTwoForgotUno(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Caught Draw Two",cardDelta:2}]}drawCard(){this.presentDrawCardActionSheet()}undoLastPlayAction(){this.playActions=this.playActions.filter((t,n)=>n!=this.playActions.length-1)}presentToast(t){return Object(c.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"warning"})).present()})}presentWinQuitActionSheet(t){return Object(c.a)(this,void 0,void 0,function*(){const n=yield this.actionSheetController.create({buttons:[{text:`Confirm ${t}`,handler:()=>{this.appDataSvc.confirmGameEnd(t,this.playActions),this.router.navigate(["/"])}},{text:"Cancel",role:"cancel"}]});yield n.present()})}presentLoseActionSheet(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Choose winner...",buttons:[...this.appDataSvc.currentGameOpponents.map(t=>({text:t,handler:()=>{this.appDataSvc.confirmGameEnd("Lose",this.playActions,t),this.router.navigate(["/"])}})),{text:"Cancel",role:"cancel"}]});yield t.present()})}presentDrawCardActionSheet(){return Object(c.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Draw card result...",buttons:[{text:"Played Card",handler:()=>{this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Card",cardDelta:0}]}},{text:"Didn't Play Card",handler:()=>{this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Card",cardDelta:1}]}},{text:"Cancel",role:"cancel"}]});yield t.present()})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(a.a),s.Jb(r.g),s.Jb(l.a),s.Jb(a.A))},t.\u0275cmp=s.Db({type:t,selectors:[["app-play-game"]],decls:49,vars:4,consts:[[4,"ngIf"],["lines","none"],["size","large","color","light",2,"flex","auto",3,"click"],["color","success"],["color","warning"],["color","danger"],["color","dark"],["color","medium"],["color","light","slot","start",3,"click"],["color","danger","slot","end",3,"click"],["color","success","slot","end",3,"click"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.fc(3),s.ec(4,b,2,0,"span",0),s.Lb(),s.Lb(),s.Lb(),s.Mb(5,"ion-content"),s.Mb(6,"ion-list",1),s.Mb(7,"ion-item-divider"),s.fc(8," Your actions... "),s.Lb(),s.Mb(9,"ion-item"),s.Mb(10,"ion-button",2),s.Tb("click",function(){return n.playCard()}),s.Mb(11,"ion-text",3),s.fc(12," Play Card "),s.Lb(),s.Lb(),s.Lb(),s.Mb(13,"ion-item"),s.Mb(14,"ion-button",2),s.Tb("click",function(){return n.drawCard()}),s.Mb(15,"ion-text",4),s.fc(16," Draw Card "),s.Lb(),s.Lb(),s.Lb(),s.Mb(17,"ion-item"),s.Mb(18,"ion-button",2),s.Tb("click",function(){return n.drawTwo()}),s.Mb(19,"ion-text",5),s.fc(20," Draw Two "),s.Lb(),s.Lb(),s.Lb(),s.Mb(21,"ion-item"),s.Mb(22,"ion-button",2),s.Tb("click",function(){return n.drawFour()}),s.Mb(23,"ion-text",5),s.fc(24," Draw Four "),s.Lb(),s.Lb(),s.Lb(),s.Mb(25,"ion-item-divider"),s.fc(26," Forgot to say uno... "),s.Lb(),s.Mb(27,"ion-item"),s.Mb(28,"ion-button",2),s.Tb("click",function(){return n.drawTwoForgotUno()}),s.Mb(29,"ion-text",5),s.fc(30," Caught Draw Two "),s.Lb(),s.Lb(),s.Lb(),s.Mb(31,"ion-item-divider"),s.fc(32," Oops... "),s.Lb(),s.Mb(33,"ion-item"),s.Mb(34,"ion-button",2),s.Tb("click",function(){return n.undoLastPlayAction()}),s.Mb(35,"ion-text",6),s.fc(36," Undo "),s.Lb(),s.fc(37," \xa0 \xa0 "),s.Mb(38,"small"),s.Mb(39,"ion-text",7),s.fc(40),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(41,"ion-footer"),s.Mb(42,"ion-toolbar"),s.Mb(43,"ion-button",8),s.Tb("click",function(){return n.quitGame()}),s.fc(44," We Quit "),s.Lb(),s.Mb(45,"ion-button",9),s.Tb("click",function(){return n.loseGame()}),s.fc(46," I Lost "),s.Lb(),s.Mb(47,"ion-button",10),s.Tb("click",function(){return n.winGame()}),s.fc(48," I Won "),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.zb(3),s.gc(" Hand: ",n.cardCount," card"),s.zb(1),s.Zb("ngIf",1!=n.cardCount),s.zb(30),s.Ab("disabled",0==n.playActions.length),s.zb(6),s.gc(" ",n.playActions.length>0?n.playActions[n.playActions.length-1].action:"None"," "))},directives:[a.m,a.v,a.u,o.i,a.k,a.r,a.p,a.o,a.d,a.t,a.l],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(u)],r.i]}),t})(),h=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[o.b,i.a,a.w,d]]}),t})()}}]);