(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",function(){return D});var i=n("ofXK"),a=n("TEn/"),c=n("3Pt+"),o=n("tyNb"),b=n("mrSG"),s=n("fXoL"),r=n("HMLe");function l(t,e){if(1&t){const t=s.Nb();s.Mb(0,"ion-card"),s.Mb(1,"ion-card-header"),s.Mb(2,"ion-card-subtitle"),s.jc(3," Use email address to store your data... "),s.Lb(),s.Lb(),s.Mb(4,"ion-card-content"),s.Mb(5,"ion-label"),s.jc(6," Email "),s.Lb(),s.Mb(7,"ion-input",9),s.Ub("ngModelChange",function(e){return s.ec(t),s.Wb().email=e}),s.Lb(),s.Mb(8,"ion-button",10),s.Ub("click",function(){return s.ec(t),s.Wb().saveEmailAndNickname()}),s.jc(9," Save "),s.Lb(),s.Lb(),s.Lb()}if(2&t){const t=s.Wb();s.zb(7),s.bc("ngModel",t.email),s.zb(1),s.Ab("disabled",0==t.email.length)}}function d(t,e){1&t&&(s.Mb(0,"div",11),s.Kb(1,"ion-spinner",12),s.Lb())}function m(t,e){1&t&&(s.Mb(0,"span"),s.jc(1,"s"),s.Lb())}function h(t,e){1&t&&(s.Mb(0,"span"),s.jc(1,"es"),s.Lb())}function g(t,e){1&t&&(s.Mb(0,"ion-row"),s.jc(1," Play some games ! ! ! "),s.Lb())}function u(t,e){1&t&&(s.Mb(0,"ion-row"),s.Mb(1,"ion-col"),s.jc(2,"W"),s.Lb(),s.Mb(3,"ion-col"),s.jc(4,"L"),s.Lb(),s.Mb(5,"ion-col"),s.jc(6,"AVG"),s.Lb(),s.Kb(7,"ion-col"),s.Lb())}function L(t,e){if(1&t&&(s.Mb(0,"ion-row"),s.Mb(1,"ion-col"),s.Mb(2,"div"),s.jc(3),s.Lb(),s.Lb(),s.Mb(4,"ion-col"),s.Mb(5,"div"),s.jc(6),s.Lb(),s.Lb(),s.Mb(7,"ion-col"),s.Mb(8,"div"),s.jc(9),s.Lb(),s.Lb(),s.Mb(10,"ion-col"),s.Mb(11,"div"),s.jc(12),s.Lb(),s.Lb(),s.Lb()),2&t){const t=e.$implicit;s.zb(2),s.hc("font-weight","Me"==t.name?"bold":"inherit"),s.zb(1),s.lc(" ",t.wins," "),s.zb(2),s.hc("font-weight","Me"==t.name?"bold":"inherit"),s.zb(1),s.lc(" ",t.losses," "),s.zb(2),s.hc("font-weight","Me"==t.name?"bold":"inherit"),s.zb(1),s.lc(" ",t.winningPercent.toFixed(3)," "),s.zb(2),s.hc("font-weight","Me"==t.name?"bold":"inherit"),s.zb(1),s.lc(" ",t.name," ")}}function M(t,e){1&t&&(s.Mb(0,"span"),s.jc(1,"s"),s.Lb())}function p(t,e){1&t&&(s.Mb(0,"ion-row"),s.jc(1," Play some games ! ! ! "),s.Lb())}function f(t,e){1&t&&(s.Mb(0,"ion-row"),s.Mb(1,"ion-col"),s.jc(2,"W"),s.Lb(),s.Mb(3,"ion-col"),s.jc(4,"L"),s.Lb(),s.Mb(5,"ion-col"),s.jc(6,"AVG"),s.Lb(),s.Mb(7,"ion-col"),s.jc(8,"Players"),s.Lb(),s.Lb())}function S(t,e){if(1&t&&(s.Mb(0,"ion-row"),s.Mb(1,"ion-col"),s.Mb(2,"div"),s.jc(3),s.Lb(),s.Lb(),s.Mb(4,"ion-col"),s.Mb(5,"div"),s.jc(6),s.Lb(),s.Lb(),s.Mb(7,"ion-col"),s.Mb(8,"div"),s.jc(9),s.Lb(),s.Lb(),s.Mb(10,"ion-col"),s.Mb(11,"div"),s.jc(12),s.Lb(),s.Lb(),s.Lb()),2&t){const t=e.$implicit;s.zb(3),s.lc(" ",t.wins," "),s.zb(3),s.lc(" ",t.losses," "),s.zb(3),s.lc(" ",t.winningPercent.toFixed(3)," "),s.zb(3),s.lc(" ",t.numberOfPlayers," ")}}function z(t,e){1&t&&(s.Mb(0,"span"),s.jc(1,"s"),s.Lb())}function v(t,e){if(1&t&&(s.Mb(0,"ion-text",29),s.jc(1),s.Mb(2,"span",23),s.jc(3,"day"),s.ic(4,z,2,0,"span",6),s.jc(5," ago"),s.Lb(),s.Lb()),2&t){const t=s.Wb(2);s.zb(1),s.lc(" ",t.daysAgo," "),s.zb(3),s.bc("ngIf","1"!=t.daysAgo)}}function j(t,e){1&t&&(s.Mb(0,"ion-text",30),s.jc(1," Today "),s.Lb())}function y(t,e){if(1&t&&(s.Mb(0,"ion-item"),s.Mb(1,"ion-card",31),s.Mb(2,"ion-card-header"),s.Mb(3,"ion-card-subtitle"),s.jc(4),s.Xb(5,"date"),s.Lb(),s.Lb(),s.Mb(6,"ion-card-content"),s.Mb(7,"p"),s.jc(8),s.Lb(),s.Kb(9,"br"),s.Mb(10,"p"),s.jc(11),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&t){const t=e.$implicit,n=e.index;s.zb(1),s.Ab("color",n%2==0?"light":"dark"),s.zb(3),s.kc(s.Yb(5,4,t.endDateTime)),s.zb(4),s.lc(" Opponents: ",t.opponents.join(", ")," "),s.zb(3),s.lc(" Winner: ",t.winningPlayer," ")}}const w=function(){return["/setup-game"]};function F(t,e){if(1&t&&(s.Mb(0,"ion-list",13),s.Mb(1,"ion-item"),s.Mb(2,"ion-button",14),s.jc(3," Play Uno "),s.Lb(),s.Lb(),s.Mb(4,"ion-item-divider"),s.jc(5," Stats & fun facts... "),s.Lb(),s.Mb(6,"ion-item"),s.Mb(7,"ion-card",15),s.Mb(8,"ion-card-header"),s.Mb(9,"ion-card-subtitle"),s.jc(10,"Overall"),s.Lb(),s.Mb(11,"ion-card-title",16),s.jc(12),s.ic(13,m,2,0,"span",6),s.jc(14," / "),s.Mb(15,"small"),s.jc(16),s.ic(17,h,2,0,"span",6),s.Lb(),s.Lb(),s.Lb(),s.Mb(18,"ion-card-content"),s.jc(19),s.Xb(20,"percent"),s.Kb(21,"br"),s.Kb(22,"br"),s.jc(23),s.Kb(24,"br"),s.jc(25),s.Kb(26,"br"),s.jc(27),s.Xb(28,"percent"),s.Lb(),s.Lb(),s.Lb(),s.Mb(29,"ion-item"),s.Mb(30,"ion-card",17),s.Mb(31,"ion-card-header"),s.Mb(32,"ion-card-subtitle"),s.jc(33,"Leaderboard"),s.Lb(),s.Lb(),s.Mb(34,"ion-card-content"),s.Mb(35,"ion-grid"),s.ic(36,g,2,0,"ion-row",6),s.ic(37,u,8,0,"ion-row",6),s.ic(38,L,13,12,"ion-row",18),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(39,"ion-item"),s.Mb(40,"ion-card",15),s.Mb(41,"ion-card-header"),s.Mb(42,"ion-card-subtitle"),s.jc(43,"Hand Size Facts"),s.Lb(),s.Lb(),s.Mb(44,"ion-card-content"),s.Mb(45,"ion-text",19),s.jc(46),s.Lb(),s.Mb(47,"small"),s.jc(48," Largest Hand Ever "),s.Lb(),s.Kb(49,"br"),s.Mb(50,"ion-text",20),s.jc(51),s.Lb(),s.Mb(52,"small"),s.jc(53," Largest Hand with Win "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(54,"ion-item"),s.Mb(55,"ion-card",17),s.Mb(56,"ion-card-header"),s.Mb(57,"ion-card-subtitle"),s.jc(58,"Game Time Facts"),s.Lb(),s.Lb(),s.Mb(59,"ion-card-content"),s.Mb(60,"ion-text",21),s.jc(61),s.Lb(),s.Kb(62,"br"),s.Mb(63,"small"),s.jc(64," Longest Game Ever "),s.Lb(),s.Kb(65,"br"),s.Kb(66,"br"),s.Mb(67,"ion-text",21),s.jc(68),s.Lb(),s.Kb(69,"br"),s.Mb(70,"small"),s.jc(71," Shortest Game Ever "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(72,"ion-item"),s.Mb(73,"ion-card",15),s.Mb(74,"ion-card-header"),s.Mb(75,"ion-card-subtitle"),s.jc(76,'Forgot to say "Uno"'),s.Lb(),s.Lb(),s.Mb(77,"ion-card-content"),s.Mb(78,"ion-text",22),s.jc(79),s.Mb(80,"span",23),s.jc(81,"time"),s.ic(82,M,2,0,"span",6),s.Lb(),s.Lb(),s.Kb(83,"br"),s.Lb(),s.Lb(),s.Lb(),s.Mb(84,"ion-item"),s.Mb(85,"ion-card",17),s.Mb(86,"ion-card-header"),s.Mb(87,"ion-card-subtitle"),s.jc(88,"Your Game Size Stats"),s.Lb(),s.Lb(),s.Mb(89,"ion-card-content"),s.Mb(90,"ion-grid"),s.ic(91,p,2,0,"ion-row",6),s.ic(92,f,9,0,"ion-row",6),s.ic(93,S,13,4,"ion-row",18),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(94,"ion-item"),s.Mb(95,"ion-card",15),s.Mb(96,"ion-card-header"),s.Mb(97,"ion-card-subtitle"),s.jc(98),s.Lb(),s.Lb(),s.Mb(99,"ion-card-content"),s.ic(100,v,6,2,"ion-text",24),s.ic(101,j,2,0,"ion-text",25),s.Lb(),s.Lb(),s.Lb(),s.Mb(102,"ion-item"),s.Mb(103,"ion-card",15),s.Mb(104,"ion-card-header"),s.Mb(105,"ion-card-subtitle"),s.jc(106,"Game Turn Facts"),s.Lb(),s.Lb(),s.Mb(107,"ion-card-content"),s.Mb(108,"ion-text",26),s.jc(109),s.Lb(),s.Kb(110,"br"),s.Mb(111,"small"),s.jc(112," Most "),s.Lb(),s.Kb(113,"br"),s.Kb(114,"br"),s.Mb(115,"ion-text",26),s.jc(116),s.Lb(),s.Kb(117,"br"),s.Mb(118,"small"),s.jc(119," Fewest "),s.Lb(),s.Kb(120,"br"),s.Kb(121,"br"),s.Mb(122,"ion-text",27),s.jc(123),s.Lb(),s.Kb(124,"br"),s.Mb(125,"small"),s.jc(126," Quickest Win "),s.Lb(),s.Kb(127,"br"),s.Kb(128,"br"),s.Mb(129,"ion-text",28),s.jc(130),s.Lb(),s.Kb(131,"br"),s.Mb(132,"small"),s.jc(133," Quickest Loss "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Kb(134,"br"),s.Mb(135,"ion-item-divider"),s.jc(136," Games, newest to oldest... "),s.Lb(),s.ic(137,y,12,6,"ion-item",18),s.Lb()),2&t){const t=s.Wb();s.zb(2),s.bc("routerLink",s.cc(33,w)),s.zb(10),s.lc(" ",t.basicStats.wins," Win"),s.zb(1),s.bc("ngIf",1!=t.basicStats.wins),s.zb(3),s.lc(" ",t.basicStats.losses," Loss"),s.zb(1),s.bc("ngIf",1!=t.basicStats.losses),s.zb(2),s.lc(" Winning Percent: ",s.Yb(20,29,t.basicStats.winningPercent)," "),s.zb(4),s.lc(" Total Games: ",t.basicStats.numberOfGames," "),s.zb(2),s.lc(" Quits: ",t.basicStats.quits," "),s.zb(2),s.lc(" Completion Percent: ",s.Yb(28,31,t.basicStats.completionPercent)," "),s.zb(9),s.bc("ngIf",0==t.leaderboard.length),s.zb(1),s.bc("ngIf",t.leaderboard.length>0),s.zb(1),s.bc("ngForOf",t.leaderboard),s.zb(8),s.lc(" ",t.handSizeFacts.largestHand," "),s.zb(5),s.lc(" ",t.handSizeFacts.largestHandWithWin," "),s.zb(10),s.lc(" ",t.gameTimeFacts.longest," "),s.zb(7),s.lc(" ",t.gameTimeFacts.shortest," "),s.zb(11),s.lc(" ",t.caughtNumber," "),s.zb(3),s.bc("ngIf",1!=t.caughtNumber),s.zb(9),s.bc("ngIf",0==t.gameSizeStats.length),s.zb(1),s.bc("ngIf",t.gameSizeStats.length>0),s.zb(1),s.bc("ngForOf",t.gameSizeStats),s.zb(5),s.lc("Last Played with ",t.lastOpponents,""),s.zb(2),s.bc("ngIf","0"!=t.daysAgo),s.zb(1),s.bc("ngIf","0"==t.daysAgo),s.zb(8),s.lc(" ",t.gameTurnFacts.mostTurns," turns "),s.zb(7),s.lc(" ",t.gameTurnFacts.fewestTurns," turns "),s.zb(7),s.lc(" ",t.gameTurnFacts.quickestWin," turns "),s.zb(7),s.lc(" ",t.gameTurnFacts.quickestLoss," turns "),s.zb(7),s.bc("ngForOf",t.reverseChron)}}const T=[{path:"",component:(()=>{class t{constructor(t,e){this.appDataSvc=t,this.actionSheetController=e,this.handSizeFacts={largestHand:0,largestHandWithWin:0},this.leaderboard=[],this.gameTimeFacts={longest:"",shortest:""},this.gameTurnFacts={mostTurns:"",fewestTurns:"",quickestWin:"",quickestLoss:""},this.gameSizeStats=[],this.loading=!1,this.reverseChron=[],this.hackToClipboard=t=>Object(b.a)(this,void 0,void 0,function*(){yield(async t=>{await navigator.clipboard.writeText(t)})(JSON.stringify(t))}),this.hackFromClipboard=()=>Object(b.a)(this,void 0,void 0,function*(){this.appDataSvc.updateWithPastedGameResults(JSON.parse(yield(async()=>navigator.clipboard.readText())()))}),this.email="",this.nickname="",this.readyToSave=!1}ngOnInit(){this.basicStats=this.appDataSvc.calculateBasicWinLossStats(),this.handSizeFacts=this.appDataSvc.calculateHandSizeFacts(),this.leaderboard=this.appDataSvc.calculateLeaderboard(),this.gameTimeFacts=this.appDataSvc.calculateGameTimeFacts(),this.gameTurnFacts=this.appDataSvc.calculateGameTurnFacts(),this.gameSizeStats=this.appDataSvc.calculateGameSizeStats(),this.getReadyToSave()}getReadyToSave(){return Object(b.a)(this,void 0,void 0,function*(){const t=yield this.appDataSvc.loadEmailAndNickname(),e=JSON.parse(t);this.email=e.email,this.nickname=e.nickname,this.readyToSave=!(0==this.email.length||0==this.nickname.length),this.readyToSave&&this.getStarted()})}getStarted(){return Object(b.a)(this,void 0,void 0,function*(){this.loading=!0,yield this.appDataSvc.loadPreviousGameResults(),this.basicStats=this.appDataSvc.calculateBasicWinLossStats(),this.handSizeFacts=this.appDataSvc.calculateHandSizeFacts(),this.leaderboard=this.appDataSvc.calculateLeaderboard(),this.gameTimeFacts=this.appDataSvc.calculateGameTimeFacts(),this.gameTurnFacts=this.appDataSvc.calculateGameTurnFacts(),this.gameSizeStats=this.appDataSvc.calculateGameSizeStats(),this.reverseChron=this.appDataSvc.getResultsInReverseChron(),this.loading=!1})}ionViewWillEnter(){this.basicStats=this.appDataSvc.calculateBasicWinLossStats(),this.handSizeFacts=this.appDataSvc.calculateHandSizeFacts(),this.leaderboard=this.appDataSvc.calculateLeaderboard(),this.gameTurnFacts=this.appDataSvc.calculateGameTurnFacts(),this.gameTimeFacts=this.appDataSvc.calculateGameTimeFacts(),this.gameSizeStats=this.appDataSvc.calculateGameSizeStats(),this.reverseChron=this.appDataSvc.getResultsInReverseChron()}showOptions(){this.presentOptoinsActionSheet()}presentOptoinsActionSheet(){return Object(b.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Options",buttons:[{text:"Change email address",handler:()=>{this.readyToSave=!1}},{text:"Cancel",role:"cancel"}]});yield t.present()})}get caughtNumber(){return this.appDataSvc.gameResults.reduce((t,e)=>t+e.actions.filter(t=>t.action.startsWith("Caught")).length,0)}get daysAgo(){const t=Math.max(...this.appDataSvc.gameResults.map(t=>Date.parse(t.endDateTime))),e=(Date.now()-t)/864e5;return isFinite(e)?e.toFixed(0):"n/a"}get lastOpponents(){const t=this.appDataSvc.getResultsInReverseChron()[0];return t?t.opponents.join(", "):""}saveEmailAndNickname(){return Object(b.a)(this,void 0,void 0,function*(){this.email.length>0&&(console.log("Saving email and nickname..."),yield this.appDataSvc.saveEmailAndNickname(this.email,this.nickname),this.readyToSave=!0,this.getStarted())})}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(r.a),s.Jb(a.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-home"]],decls:15,vars:5,consts:[[3,"translucent"],["slot","end"],[3,"click"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],["class","ion-text-center ion-margin-vertical",4,"ngIf"],["lines","none",4,"ngIf"],["placeholder","Enter your email address",3,"ngModel","ngModelChange"],["size","medium","color","medium",3,"click"],[1,"ion-text-center","ion-margin-vertical"],["name","crescent"],["lines","none"],["size","large","color","success",2,"flex","auto","margin-top","20px","margin-bottom","20px",3,"routerLink"],["color","dark",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],[2,"font-size","2.5em"],["color","light",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],[4,"ngFor","ngForOf"],["color","light",2,"font-size","4em"],["color","success",2,"font-size","2.5em"],["color","dark",2,"font-size","1.75em"],["color","danger",2,"font-size","5em"],[2,"font-size","0.3em"],["style","font-size: 5em;",4,"ngIf"],["style","font-size: 3em;",4,"ngIf"],["color","light",2,"font-size","1.75em"],["color","success",2,"font-size","1.75em"],["color","danger",2,"font-size","1.75em"],[2,"font-size","5em"],[2,"font-size","3em"],[2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"]],template:function(t,e){1&t&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.jc(3," Mi Uno "),s.Lb(),s.Mb(4,"ion-buttons",1),s.Mb(5,"ion-button",2),s.Ub("click",function(){return e.showOptions()}),s.jc(6," ... "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(7,"ion-content",3),s.Mb(8,"ion-header",4),s.Mb(9,"ion-toolbar"),s.Mb(10,"ion-title",5),s.jc(11,"Mi Uno"),s.Lb(),s.Lb(),s.Lb(),s.ic(12,l,10,2,"ion-card",6),s.ic(13,d,2,0,"div",7),s.ic(14,F,138,34,"ion-list",8),s.Lb()),2&t&&(s.bc("translucent",!0),s.zb(7),s.bc("fullscreen",!0),s.zb(5),s.bc("ngIf",!e.readyToSave),s.zb(1),s.bc("ngIf",e.loading),s.zb(1),s.bc("ngIf",!e.loading&&e.readyToSave))},directives:[a.q,a.B,a.A,a.e,a.d,a.n,i.j,a.f,a.h,a.i,a.g,a.u,a.r,a.F,c.d,c.e,a.y,a.v,a.s,a.E,o.h,a.t,a.j,a.p,i.i,a.z,a.x,a.m],pipes:[i.l,i.d],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(T)],o.i]}),t})(),D=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[i.b,c.a,a.C,x]]}),t})()}}]);