(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{z0bC:function(t,n,o){"use strict";o.r(n),o.d(n,"PlayGamePageModule",function(){return p});var i=o("ofXK"),e=o("3Pt+"),a=o("TEn/"),c=o("tyNb"),r=o("mrSG"),s=o("fXoL"),b=o("HMLe");function l(t,n){1&t&&(s.Mb(0,"span"),s.fc(1,"s"),s.Lb())}const u=[{path:"",component:(()=>{class t{constructor(t,n,o,i){this.actionSheetController=t,this.router=n,this.appDataSvc=o,this.toastController=i,this.playActions=[]}ngOnInit(){}winGame(){this.cardCount>1?this.presentToast("You sure?"):this.presentWinQuitActionSheet("Win")}quitGame(){this.presentWinQuitActionSheet("Quit")}loseGame(){this.presentLoseActionSheet()}get cardCount(){return this.playActions.reduce((t,n)=>t+n.cardDelta,7)}playCard(){0!=this.cardCount?this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Play Card",cardDelta:-1}]:this.presentToast("You sure?")}drawTwo(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Two",cardDelta:2}]}drawFour(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Four",cardDelta:4}]}drawTwoForgotUno(){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Caught Draw Two",cardDelta:2}]}drawCard(t){this.playActions=[...this.playActions,{actionDateTime:new Date,action:"Draw Card",cardDelta:t?0:1}]}undoLastPlayAction(){this.playActions=this.playActions.filter((t,n)=>n!=this.playActions.length-1)}presentToast(t){return Object(r.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:2e3,color:"warning"})).present()})}presentWinQuitActionSheet(t){return Object(r.a)(this,void 0,void 0,function*(){const n=yield this.actionSheetController.create({buttons:[{text:`Confirm ${t}`,handler:()=>{1==this.cardCount&&this.playCard(),this.appDataSvc.confirmGameEnd(t,this.playActions),this.router.navigate(["/"])}},{text:"Cancel",role:"cancel"}]});yield n.present()})}presentLoseActionSheet(){return Object(r.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Choose winner...",buttons:[...this.appDataSvc.currentGameOpponents.map(t=>({text:t,handler:()=>{this.appDataSvc.confirmGameEnd("Lose",this.playActions,t),this.router.navigate(["/"])}})),{text:"Cancel",role:"cancel"}]});yield t.present()})}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(a.a),s.Jb(c.g),s.Jb(b.a),s.Jb(a.B))},t.\u0275cmp=s.Db({type:t,selectors:[["app-play-game"]],decls:53,vars:4,consts:[[4,"ngIf"],["lines","none"],["size","large","color","light",2,"flex","auto",3,"click"],["color","success"],["color","danger"],["color","dark"],["color","medium"],["color","light","slot","start",3,"click"],["color","danger","slot","end",3,"click"],["color","success","slot","end",3,"click"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.fc(3),s.ec(4,l,2,0,"span",0),s.Lb(),s.Lb(),s.Lb(),s.Mb(5,"ion-content"),s.Mb(6,"ion-list",1),s.Mb(7,"ion-item-divider"),s.fc(8," Record your actions... "),s.Lb(),s.Mb(9,"ion-item"),s.Mb(10,"ion-button",2),s.Tb("click",function(){return n.playCard()}),s.Mb(11,"ion-text",3),s.fc(12," Played Card "),s.Lb(),s.Lb(),s.Lb(),s.Mb(13,"ion-item"),s.Mb(14,"ion-button",2),s.Tb("click",function(){return n.drawCard(!0)}),s.Mb(15,"ion-text",3),s.fc(16," Drew 1 / Played "),s.Lb(),s.Lb(),s.Lb(),s.Mb(17,"ion-item"),s.Mb(18,"ion-button",2),s.Tb("click",function(){return n.drawCard(!1)}),s.Mb(19,"ion-text",4),s.fc(20," Drew 1 / Didn't Play "),s.Lb(),s.Lb(),s.Lb(),s.Mb(21,"ion-item"),s.Mb(22,"ion-button",2),s.Tb("click",function(){return n.drawTwo()}),s.Mb(23,"ion-text",4),s.fc(24," Drew 2 "),s.Lb(),s.Lb(),s.Lb(),s.Mb(25,"ion-item"),s.Mb(26,"ion-button",2),s.Tb("click",function(){return n.drawFour()}),s.Mb(27,"ion-text",4),s.fc(28," Drew 4 "),s.Lb(),s.Lb(),s.Lb(),s.Mb(29,"ion-item-divider"),s.fc(30," Forgot to say uno... "),s.Lb(),s.Mb(31,"ion-item"),s.Mb(32,"ion-button",2),s.Tb("click",function(){return n.drawTwoForgotUno()}),s.Mb(33,"ion-text",4),s.fc(34," Caught, Drew 2 "),s.Lb(),s.Lb(),s.Lb(),s.Mb(35,"ion-item-divider"),s.fc(36," Oops... "),s.Lb(),s.Mb(37,"ion-item"),s.Mb(38,"ion-button",2),s.Tb("click",function(){return n.undoLastPlayAction()}),s.Mb(39,"ion-text",5),s.fc(40," Undo "),s.Lb(),s.fc(41," \xa0 \xa0 "),s.Mb(42,"small"),s.Mb(43,"ion-text",6),s.fc(44),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(45,"ion-footer"),s.Mb(46,"ion-toolbar"),s.Mb(47,"ion-button",7),s.Tb("click",function(){return n.quitGame()}),s.fc(48," We Quit "),s.Lb(),s.Mb(49,"ion-button",8),s.Tb("click",function(){return n.loseGame()}),s.fc(50," I Lost "),s.Lb(),s.Mb(51,"ion-button",9),s.Tb("click",function(){return n.winGame()}),s.fc(52," I Won "),s.Lb(),s.Lb(),s.Lb()),2&t&&(s.zb(3),s.gc(" Hand: ",n.cardCount," card"),s.zb(1),s.Zb("ngIf",1!=n.cardCount),s.zb(34),s.Ab("disabled",0==n.playActions.length),s.zb(6),s.gc(" ",n.playActions.length>0?n.playActions[n.playActions.length-1].action:"None"," "))},directives:[a.n,a.w,a.v,i.i,a.l,a.s,a.q,a.p,a.d,a.u,a.m],styles:[""]}),t})()}];let d=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[c.i.forChild(u)],c.i]}),t})(),p=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[i.b,e.a,a.x,d]]}),t})()}}]);