(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{q65U:function(e,n,t){"use strict";t.r(n),t.d(n,"SetupGamePageModule",function(){return f});var o=t("ofXK"),i=t("3Pt+"),c=t("TEn/"),r=t("tyNb"),b=t("fXoL"),s=t("HMLe");function a(e,n){if(1&e&&(b.Mb(0,"ion-item"),b.Mb(1,"ion-checkbox",5),b.Tb("ngModelChange",function(e){return n.$implicit.checked=e}),b.Lb(),b.Mb(2,"ion-label"),b.fc(3),b.Lb(),b.Lb()),2&e){const e=n.$implicit;b.zb(1),b.Zb("ngModel",e.checked),b.zb(2),b.gc(" ",e.name," ")}}const l=function(){return["/play-game"]},u=[{path:"",component:(()=>{class e{constructor(e){this.appDataSvc=e,this.availablePlayers=[]}ngOnInit(){this.availablePlayers=this.appDataSvc.getPreviousOpponents()}}return e.\u0275fac=function(n){return new(n||e)(b.Jb(s.a))},e.\u0275cmp=b.Db({type:e,selectors:[["app-setup-game"]],decls:16,vars:3,consts:[["color","success"],[4,"ngFor","ngForOf"],["placeholder","Enter new player name"],["size","medium","slot","end","color","medium"],["size","medium","slot","end","color","success",3,"routerLink"],["slot","start","color","success",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.Mb(3,"ion-text",0),b.fc(4,"Me"),b.Lb(),b.fc(5," Versus"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content"),b.Mb(7,"ion-list"),b.ec(8,a,4,2,"ion-item",1),b.Lb(),b.Lb(),b.Mb(9,"ion-footer"),b.Mb(10,"ion-toolbar"),b.Kb(11,"ion-input",2),b.Mb(12,"ion-button",3),b.fc(13," + "),b.Lb(),b.Mb(14,"ion-button",4),b.fc(15," Start "),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.zb(8),b.Zb("ngForOf",n.availablePlayers),b.zb(6),b.Zb("routerLink",b.ac(2,l)))},directives:[c.l,c.u,c.t,c.s,c.j,c.q,o.h,c.k,c.m,c.y,c.c,c.x,r.h,c.n,c.i,c.a,i.d,i.e,c.p],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(n){return new(n||e)},imports:[[r.i.forChild(u)],r.i]}),e})(),f=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(n){return new(n||e)},imports:[[o.b,i.a,c.v,p]]}),e})()}}]);