(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{q65U:function(e,t,n){"use strict";n.r(t),n.d(t,"SetupGamePageModule",function(){return u});var a=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),r=n("tyNb"),s=n("mrSG"),c=n("fXoL"),l=n("HMLe");function b(e,t){if(1&e&&(c.Mb(0,"ion-item"),c.Mb(1,"ion-checkbox",5),c.Tb("ngModelChange",function(e){return t.$implicit.checked=e}),c.Lb(),c.Mb(2,"ion-label"),c.hc(3),c.Lb(),c.Lb()),2&e){const e=t.$implicit;c.zb(1),c.ac("ngModel",e.checked),c.zb(2),c.jc(" ",e.name," ")}}const h=[{path:"",component:(()=>{class e{constructor(e,t,n){this.appDataSvc=e,this.router=t,this.toastController=n,this.availablePlayers=[],this.newPlayerName="",this.meCheckedState=!0}ngOnInit(){this.availablePlayers=this.appDataSvc.getPreviousOpponents()}addNewPlayer(){0==this.newPlayerName.trim().length||"ME"==this.newPlayerName.toUpperCase()||"NONE"==this.newPlayerName.toUpperCase()||this.availablePlayers.some(e=>e.name.toUpperCase()==this.newPlayerName.toUpperCase())?this.presentToast("Please enter unique name"):(this.availablePlayers=[...this.availablePlayers,{name:this.newPlayerName,checked:!0}].sort((e,t)=>e.name.toUpperCase()>t.name.toUpperCase()?1:-1),this.newPlayerName="")}presentToast(e){return Object(s.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3,color:"warning"})).present()})}startGame(){this.availablePlayers.some(e=>e.checked)?(this.appDataSvc.currentGameStartDateTime=(new Date).toISOString(),this.appDataSvc.currentGameOpponents=[...this.availablePlayers.filter(e=>e.checked).map(e=>e.name)],this.router.navigate(["/play-game"])):this.presentToast("Pick at least one opponent")}uncheckingMe(){this.meCheckedState||(console.log("uncheckingMe()"),this.presentUncheckingMeToast(),setTimeout(()=>this.meCheckedState=!0,100))}presentUncheckingMeToast(){return Object(s.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:"You are always playing ! ! !",duration:4e3,color:"warning"})).present()})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(l.a),c.Jb(r.g),c.Jb(i.G))},e.\u0275cmp=c.Db({type:e,selectors:[["app-setup-game"]],decls:21,vars:3,consts:[["slot","start","color","success",3,"ngModel","ngModelChange","ionChange"],[4,"ngFor","ngForOf"],["placeholder","Enter new player name",3,"ngModel","ngModelChange"],["size","small","color","medium",3,"click"],["size","large","color","success","expand","block",3,"click"],["slot","start","color","success",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.hc(3,"Choose Players"),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content"),c.Mb(5,"ion-list"),c.Mb(6,"ion-item"),c.Mb(7,"ion-checkbox",0),c.Tb("ngModelChange",function(e){return t.meCheckedState=e})("ionChange",function(){return t.uncheckingMe()}),c.Lb(),c.Mb(8,"ion-label"),c.hc(9," Me (Yo, Moi, Ich) "),c.Lb(),c.Lb(),c.gc(10,b,4,2,"ion-item",1),c.Lb(),c.Lb(),c.Mb(11,"ion-footer"),c.Mb(12,"ion-grid"),c.Mb(13,"ion-row"),c.Mb(14,"ion-input",2),c.Tb("ngModelChange",function(e){return t.newPlayerName=e}),c.Lb(),c.Mb(15,"ion-button",3),c.Tb("click",function(){return t.addNewPlayer()}),c.hc(16," Add New Player "),c.Lb(),c.Lb(),c.Mb(17,"ion-row"),c.Mb(18,"ion-col"),c.Mb(19,"ion-button",4),c.Tb("click",function(){return t.startGame()}),c.hc(20," Start Game "),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(7),c.ac("ngModel",t.meCheckedState),c.zb(3),c.ac("ngForOf",t.availablePlayers),c.zb(4),c.ac("ngModel",t.newPlayerName))},directives:[i.q,i.B,i.A,i.n,i.v,i.s,i.k,i.b,o.d,o.e,i.u,a.i,i.o,i.p,i.x,i.r,i.F,i.d,i.m],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(h)],r.i]}),e})(),u=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[a.b,o.a,i.C,p]]}),e})()}}]);