(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"ct+p":function(t,a,e){"use strict";e.r(a),e.d(a,"HomePageModule",function(){return j});var i=e("ofXK"),n=e("TEn/"),c=e("3Pt+"),b=e("tyNb"),s=e("mrSG"),o=e("fXoL"),r=e("HMLe");function l(t,a){1&t&&(o.Mb(0,"span"),o.hc(1,"s"),o.Lb())}function h(t,a){1&t&&(o.Mb(0,"span"),o.hc(1,"es"),o.Lb())}function d(t,a){1&t&&(o.Mb(0,"ion-row"),o.hc(1," Play some games ! ! ! "),o.Lb())}function m(t,a){1&t&&(o.Mb(0,"ion-row"),o.Mb(1,"ion-col"),o.hc(2,"W"),o.Lb(),o.Mb(3,"ion-col"),o.hc(4,"L"),o.Lb(),o.Mb(5,"ion-col"),o.hc(6,"AVG"),o.Lb(),o.Kb(7,"ion-col"),o.Lb())}function g(t,a){if(1&t&&(o.Mb(0,"ion-row"),o.Mb(1,"ion-col"),o.Mb(2,"div"),o.hc(3),o.Lb(),o.Lb(),o.Mb(4,"ion-col"),o.Mb(5,"div"),o.hc(6),o.Lb(),o.Lb(),o.Mb(7,"ion-col"),o.Mb(8,"div"),o.hc(9),o.Lb(),o.Lb(),o.Mb(10,"ion-col"),o.Mb(11,"div"),o.hc(12),o.Lb(),o.Lb(),o.Lb()),2&t){const t=a.$implicit;o.zb(2),o.fc("font-weight","Me"==t.name?"bold":"inherit"),o.zb(1),o.jc(" ",t.wins," "),o.zb(2),o.fc("font-weight","Me"==t.name?"bold":"inherit"),o.zb(1),o.jc(" ",t.losses," "),o.zb(2),o.fc("font-weight","Me"==t.name?"bold":"inherit"),o.zb(1),o.jc(" ",t.winningPercent.toFixed(3)," "),o.zb(2),o.fc("font-weight","Me"==t.name?"bold":"inherit"),o.zb(1),o.jc(" ",t.name," ")}}function u(t,a){1&t&&(o.Mb(0,"span"),o.hc(1,"s"),o.Lb())}function L(t,a){1&t&&(o.Mb(0,"ion-row"),o.hc(1," Play some games ! ! ! "),o.Lb())}function M(t,a){1&t&&(o.Mb(0,"ion-row"),o.Mb(1,"ion-col"),o.hc(2,"W"),o.Lb(),o.Mb(3,"ion-col"),o.hc(4,"L"),o.Lb(),o.Mb(5,"ion-col"),o.hc(6,"AVG"),o.Lb(),o.Mb(7,"ion-col"),o.hc(8,"Players"),o.Lb(),o.Lb())}function p(t,a){if(1&t&&(o.Mb(0,"ion-row"),o.Mb(1,"ion-col"),o.Mb(2,"div"),o.hc(3),o.Lb(),o.Lb(),o.Mb(4,"ion-col"),o.Mb(5,"div"),o.hc(6),o.Lb(),o.Lb(),o.Mb(7,"ion-col"),o.Mb(8,"div"),o.hc(9),o.Lb(),o.Lb(),o.Mb(10,"ion-col"),o.Mb(11,"div"),o.hc(12),o.Lb(),o.Lb(),o.Lb()),2&t){const t=a.$implicit;o.zb(3),o.jc(" ",t.wins," "),o.zb(3),o.jc(" ",t.losses," "),o.zb(3),o.jc(" ",t.winningPercent.toFixed(3)," "),o.zb(3),o.jc(" ",t.numberOfPlayers," ")}}function f(t,a){1&t&&(o.Mb(0,"span"),o.hc(1,"s"),o.Lb())}function S(t,a){if(1&t&&(o.Mb(0,"ion-text",24),o.hc(1),o.Mb(2,"span",18),o.hc(3,"day"),o.gc(4,f,2,0,"span",11),o.hc(5," ago"),o.Lb(),o.Lb()),2&t){const t=o.Vb();o.zb(1),o.jc(" ",t.daysAgo," "),o.zb(3),o.ac("ngIf","1"!=t.daysAgo)}}function z(t,a){1&t&&(o.Mb(0,"ion-text",25),o.hc(1," Today "),o.Lb())}function v(t,a){1&t&&(o.Mb(0,"p"),o.hc(1," No first card game data yet "),o.Lb())}function w(t,a){1&t&&(o.Mb(0,"span"),o.hc(1,"s"),o.Lb())}function F(t,a){if(1&t&&(o.Mb(0,"div"),o.Mb(1,"h1",10),o.hc(2),o.Wb(3,"percent"),o.Lb(),o.Kb(4,"br"),o.Mb(5,"h4"),o.hc(6),o.gc(7,w,2,0,"span",11),o.hc(8," with first card data. "),o.Lb(),o.Lb()),2&t){const t=o.Vb();o.zb(2),o.jc(" ",o.Xb(3,3,t.firstCardStats.winningPercent)," "),o.zb(4),o.jc(" Winning percentage of players who played the first card of a game. Based on ",t.firstCardStats.numberOfGames," game"),o.zb(1),o.ac("ngIf",1!=t.firstCardStats.numberOfGames)}}const y=function(){return["/setup-game"]},D=[{path:"",component:(()=>{class t{constructor(t,a){this.appDataSvc=t,this.actionSheetController=a,this.handSizeFacts={largestHand:0,largestHandWithWin:0},this.leaderboard=[],this.gameTimeFacts={longest:"",shortest:""},this.gameTurnFacts={mostTurns:"",fewestTurns:"",quickestWin:"",quickestLoss:""},this.gameSizeStats=[],this.firstCardStats={winningPercent:0,numberOfGames:0},this.hackToClipboard=t=>Object(s.a)(this,void 0,void 0,function*(){yield(async t=>{await navigator.clipboard.writeText(t)})(JSON.stringify(t))}),this.hackFromClipboard=()=>Object(s.a)(this,void 0,void 0,function*(){this.appDataSvc.updateWithPastedGameResults(JSON.parse(yield(async()=>navigator.clipboard.readText())()))})}ngOnInit(){this.basicStats=this.appDataSvc.calculateBasicWinLossStats(),this.handSizeFacts=this.appDataSvc.calculateHandSizeFacts(),this.leaderboard=this.appDataSvc.calculateLeaderboard(),this.gameTimeFacts=this.appDataSvc.calculateGameTimeFacts(),this.gameTurnFacts=this.appDataSvc.calculateGameTurnFacts(),this.gameSizeStats=this.appDataSvc.calculateGameSizeStats(),this.firstCardStats=this.appDataSvc.calculateFirstCardStats(),this.getStarted()}getStarted(){return Object(s.a)(this,void 0,void 0,function*(){yield this.appDataSvc.loadPreviousGameResults(),this.basicStats=this.appDataSvc.calculateBasicWinLossStats(),this.handSizeFacts=this.appDataSvc.calculateHandSizeFacts(),this.leaderboard=this.appDataSvc.calculateLeaderboard(),this.gameTimeFacts=this.appDataSvc.calculateGameTimeFacts(),this.gameTurnFacts=this.appDataSvc.calculateGameTurnFacts(),this.gameSizeStats=this.appDataSvc.calculateGameSizeStats(),this.firstCardStats=this.appDataSvc.calculateFirstCardStats()})}ionViewWillEnter(){this.basicStats=this.appDataSvc.calculateBasicWinLossStats(),this.handSizeFacts=this.appDataSvc.calculateHandSizeFacts(),this.leaderboard=this.appDataSvc.calculateLeaderboard(),this.gameTurnFacts=this.appDataSvc.calculateGameTurnFacts(),this.gameTimeFacts=this.appDataSvc.calculateGameTimeFacts(),this.gameSizeStats=this.appDataSvc.calculateGameSizeStats(),this.firstCardStats=this.appDataSvc.calculateFirstCardStats()}showOptions(){this.presentOptoinsActionSheet()}presentOptoinsActionSheet(){return Object(s.a)(this,void 0,void 0,function*(){const t=yield this.actionSheetController.create({header:"Choose wisely...",buttons:[{text:"Delete All Data",role:"destructive",handler:()=>{this.appDataSvc.clearData(),this.getStarted()}},{text:"Copy to Clipboard",handler:()=>{this.hackToClipboard(this.appDataSvc.gameResults)}},{text:"Paste from Clipboard",handler:()=>{this.hackFromClipboard()}},{text:"Cancel",role:"cancel"}]});yield t.present()})}get caughtNumber(){return this.appDataSvc.gameResults.reduce((t,a)=>t+a.actions.filter(t=>t.action.startsWith("Caught")).length,0)}get daysAgo(){const t=Math.max(...this.appDataSvc.gameResults.map(t=>Date.parse(t.endDateTime))),a=(Date.now()-t)/864e5;return isFinite(a)?a.toFixed(0):"n/a"}}return t.\u0275fac=function(a){return new(a||t)(o.Jb(r.a),o.Jb(n.a))},t.\u0275cmp=o.Db({type:t,selectors:[["app-home"]],decls:158,vars:36,consts:[[3,"translucent"],["slot","end"],[3,"click"],[3,"fullscreen"],["collapse","condense"],["size","large"],["lines","none"],["src","assets/home-page-hero-image.jpg"],["fill","solid","size","large","color","success",3,"routerLink"],["color","dark",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],[2,"font-size","2.5em"],[4,"ngIf"],["color","light",2,"flex","auto","margin-left","0","margin-right","0","margin-bottom","0"],[4,"ngFor","ngForOf"],["color","light",2,"font-size","4em"],["color","success",2,"font-size","2.5em"],["color","dark",2,"font-size","1.75em"],["color","danger",2,"font-size","5em"],[2,"font-size","0.3em"],["style","font-size: 5em;",4,"ngIf"],["style","font-size: 3em;",4,"ngIf"],["color","light",2,"font-size","1.75em"],["color","success",2,"font-size","1.75em"],["color","danger",2,"font-size","1.75em"],[2,"font-size","5em"],[2,"font-size","3em"]],template:function(t,a){1&t&&(o.Mb(0,"ion-header",0),o.Mb(1,"ion-toolbar"),o.Mb(2,"ion-title"),o.hc(3," Mi Uno "),o.Lb(),o.Mb(4,"ion-buttons",1),o.Mb(5,"ion-button",2),o.Tb("click",function(){return a.showOptions()}),o.hc(6," ... "),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(7,"ion-content",3),o.Mb(8,"ion-header",4),o.Mb(9,"ion-toolbar"),o.Mb(10,"ion-title",5),o.hc(11,"Mi Uno"),o.Lb(),o.Lb(),o.Lb(),o.Mb(12,"ion-list",6),o.Mb(13,"ion-card"),o.Kb(14,"img",7),o.Mb(15,"ion-footer"),o.Mb(16,"ion-toolbar"),o.Mb(17,"ion-buttons",1),o.Mb(18,"ion-button",8),o.hc(19," Play Uno "),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(20,"ion-item-divider"),o.hc(21," Browse your stats & facts... "),o.Lb(),o.Mb(22,"ion-item"),o.Mb(23,"ion-card",9),o.Mb(24,"ion-card-header"),o.Mb(25,"ion-card-subtitle"),o.hc(26,"Overall"),o.Lb(),o.Mb(27,"ion-card-title",10),o.hc(28),o.gc(29,l,2,0,"span",11),o.hc(30," / "),o.Mb(31,"small"),o.hc(32),o.gc(33,h,2,0,"span",11),o.Lb(),o.Lb(),o.Lb(),o.Mb(34,"ion-card-content"),o.hc(35),o.Wb(36,"percent"),o.Kb(37,"br"),o.Kb(38,"br"),o.hc(39),o.Kb(40,"br"),o.hc(41),o.Kb(42,"br"),o.hc(43),o.Wb(44,"percent"),o.Lb(),o.Lb(),o.Lb(),o.Mb(45,"ion-item"),o.Mb(46,"ion-card",12),o.Mb(47,"ion-card-header"),o.Mb(48,"ion-card-subtitle"),o.hc(49,"Leaderboard"),o.Lb(),o.Lb(),o.Mb(50,"ion-card-content"),o.Mb(51,"ion-grid"),o.gc(52,d,2,0,"ion-row",11),o.gc(53,m,8,0,"ion-row",11),o.gc(54,g,13,12,"ion-row",13),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(55,"ion-item"),o.Mb(56,"ion-card",9),o.Mb(57,"ion-card-header"),o.Mb(58,"ion-card-subtitle"),o.hc(59,"Hand Size Facts"),o.Lb(),o.Lb(),o.Mb(60,"ion-card-content"),o.Mb(61,"ion-text",14),o.hc(62),o.Lb(),o.Mb(63,"small"),o.hc(64," Largest Hand Ever "),o.Lb(),o.Kb(65,"br"),o.Mb(66,"ion-text",15),o.hc(67),o.Lb(),o.Mb(68,"small"),o.hc(69," Largest Hand with Win "),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(70,"ion-item"),o.Mb(71,"ion-card",12),o.Mb(72,"ion-card-header"),o.Mb(73,"ion-card-subtitle"),o.hc(74,"Game Time Facts"),o.Lb(),o.Lb(),o.Mb(75,"ion-card-content"),o.Mb(76,"ion-text",16),o.hc(77),o.Lb(),o.Kb(78,"br"),o.Mb(79,"small"),o.hc(80," Longest Game Ever "),o.Lb(),o.Kb(81,"br"),o.Kb(82,"br"),o.Mb(83,"ion-text",16),o.hc(84),o.Lb(),o.Kb(85,"br"),o.Mb(86,"small"),o.hc(87," Shortest Game Ever "),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(88,"ion-item"),o.Mb(89,"ion-card",9),o.Mb(90,"ion-card-header"),o.Mb(91,"ion-card-subtitle"),o.hc(92,'Forgot to say "Uno"'),o.Lb(),o.Lb(),o.Mb(93,"ion-card-content"),o.Mb(94,"ion-text",17),o.hc(95),o.Mb(96,"span",18),o.hc(97,"time"),o.gc(98,u,2,0,"span",11),o.Lb(),o.Lb(),o.Kb(99,"br"),o.Lb(),o.Lb(),o.Lb(),o.Mb(100,"ion-item"),o.Mb(101,"ion-card",12),o.Mb(102,"ion-card-header"),o.Mb(103,"ion-card-subtitle"),o.hc(104,"Your Game Size Stats"),o.Lb(),o.Lb(),o.Mb(105,"ion-card-content"),o.Mb(106,"ion-grid"),o.gc(107,L,2,0,"ion-row",11),o.gc(108,M,9,0,"ion-row",11),o.gc(109,p,13,4,"ion-row",13),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(110,"ion-item"),o.Mb(111,"ion-card",9),o.Mb(112,"ion-card-header"),o.Mb(113,"ion-card-subtitle"),o.hc(114,"Last Played"),o.Lb(),o.Lb(),o.Mb(115,"ion-card-content"),o.gc(116,S,6,2,"ion-text",19),o.gc(117,z,2,0,"ion-text",20),o.Lb(),o.Lb(),o.Lb(),o.Mb(118,"ion-item"),o.Mb(119,"ion-card",12),o.Mb(120,"ion-card-header"),o.Mb(121,"ion-card-subtitle"),o.hc(122,"First Card Advantage?"),o.Lb(),o.Lb(),o.Mb(123,"ion-card-content"),o.gc(124,v,2,0,"p",11),o.gc(125,F,9,5,"div",11),o.Lb(),o.Lb(),o.Lb(),o.Mb(126,"ion-item"),o.Mb(127,"ion-card",9),o.Mb(128,"ion-card-header"),o.Mb(129,"ion-card-subtitle"),o.hc(130,"Game Turn Facts"),o.Lb(),o.Lb(),o.Mb(131,"ion-card-content"),o.Mb(132,"ion-text",21),o.hc(133),o.Lb(),o.Kb(134,"br"),o.Mb(135,"small"),o.hc(136," Most "),o.Lb(),o.Kb(137,"br"),o.Kb(138,"br"),o.Mb(139,"ion-text",21),o.hc(140),o.Lb(),o.Kb(141,"br"),o.Mb(142,"small"),o.hc(143," Fewest "),o.Lb(),o.Kb(144,"br"),o.Kb(145,"br"),o.Mb(146,"ion-text",22),o.hc(147),o.Lb(),o.Kb(148,"br"),o.Mb(149,"small"),o.hc(150," Quickest Win "),o.Lb(),o.Kb(151,"br"),o.Kb(152,"br"),o.Mb(153,"ion-text",23),o.hc(154),o.Lb(),o.Kb(155,"br"),o.Mb(156,"small"),o.hc(157," Quickest Loss "),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&t&&(o.ac("translucent",!0),o.zb(7),o.ac("fullscreen",!0),o.zb(11),o.ac("routerLink",o.bc(35,y)),o.zb(10),o.jc(" ",a.basicStats.wins," Win"),o.zb(1),o.ac("ngIf",1!=a.basicStats.wins),o.zb(3),o.jc(" ",a.basicStats.losses," Loss"),o.zb(1),o.ac("ngIf",1!=a.basicStats.losses),o.zb(2),o.jc(" Winning Percent: ",o.Xb(36,31,a.basicStats.winningPercent)," "),o.zb(4),o.jc(" Total Games: ",a.basicStats.numberOfGames," "),o.zb(2),o.jc(" Quits: ",a.basicStats.quits," "),o.zb(2),o.jc(" Completion Percent: ",o.Xb(44,33,a.basicStats.completionPercent)," "),o.zb(9),o.ac("ngIf",0==a.leaderboard.length),o.zb(1),o.ac("ngIf",a.leaderboard.length>0),o.zb(1),o.ac("ngForOf",a.leaderboard),o.zb(8),o.jc(" ",a.handSizeFacts.largestHand," "),o.zb(5),o.jc(" ",a.handSizeFacts.largestHandWithWin," "),o.zb(10),o.jc(" ",a.gameTimeFacts.longest," "),o.zb(7),o.jc(" ",a.gameTimeFacts.shortest," "),o.zb(11),o.jc(" ",a.caughtNumber," "),o.zb(3),o.ac("ngIf",1!=a.caughtNumber),o.zb(9),o.ac("ngIf",0==a.gameSizeStats.length),o.zb(1),o.ac("ngIf",a.gameSizeStats.length>0),o.zb(1),o.ac("ngForOf",a.gameSizeStats),o.zb(7),o.ac("ngIf","0"!=a.daysAgo),o.zb(1),o.ac("ngIf","0"==a.daysAgo),o.zb(7),o.ac("ngIf",0==a.firstCardStats.numberOfGames),o.zb(1),o.ac("ngIf",a.firstCardStats.numberOfGames>0),o.zb(8),o.jc(" ",a.gameTurnFacts.mostTurns," turns "),o.zb(7),o.jc(" ",a.gameTurnFacts.fewestTurns," turns "),o.zb(7),o.jc(" ",a.gameTurnFacts.quickestWin," turns "),o.zb(7),o.jc(" ",a.gameTurnFacts.quickestLoss," turns "))},directives:[n.q,n.A,n.z,n.e,n.d,n.n,n.v,n.f,n.o,n.D,b.h,n.t,n.s,n.h,n.i,n.j,i.i,n.g,n.p,i.h,n.y,n.x,n.m],pipes:[i.k],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let T=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(a){return new(a||t)},imports:[[b.i.forChild(D)],b.i]}),t})(),j=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(a){return new(a||t)},imports:[[i.b,c.a,n.B,T]]}),t})()}}]);