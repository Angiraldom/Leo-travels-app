"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[874],{4684:(h,c,n)=>{n.d(c,{K:()=>v});var a=n(4650),d=n(4006),u=n(5412),t=n(6551),l=n(1245),o=n(1687);let v=(()=>{class p{constructor(){this.baseService=(0,a.f3M)(t.b),this.messageService=(0,a.f3M)(l.g),this.fb=(0,a.f3M)(d.qu),this.dialog=(0,a.f3M)(u.uw),this.conversionesService=(0,a.f3M)(o.S),this.filters={},this.fieldsFilters=[]}}return p.pageSize=10,p.pageIndex=0,p})()},1687:(h,c,n)=>{n.d(c,{S:()=>u});var a=n(6551),d=n(4650);let u=(()=>{class t extends a.b{constructor(){super()}customEvent(o){this.postMethod("conversiones/standard",{eventName:o}).subscribe()}standardEvent(o){this.postMethod("conversiones/standard",{eventName:o}).subscribe()}purchaseEvent(o){this.postMethod("conversiones/purchase",{value:o}).subscribe()}suscriptionEvent(){this.standardEvent("Subscribe")}leadEvent(){this.standardEvent("Lead")}addToCartEvent(){this.standardEvent("AddToCart")}initiateCheckoutEvent(){this.standardEvent("InitiateCheckout")}viewContentEvent(){this.standardEvent("ViewContent")}addPaymentInfoEvent(){this.standardEvent("AddPaymentInfo")}startTrial(){this.standardEvent("StartTrial")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},8874:(h,c,n)=>{n.r(c),n.d(c,{AnalyticsModule:()=>m});var a=n(6895),d=n(7337),u=n(4684),t=n(4650),l=n(9524);const v=[{path:"",component:(()=>{class e extends u.K{constructor(){super(...arguments),this.totalUsers=0,this.courseStarted=0,this.courseCompleted=0}ngOnInit(){this.getUsers()}getUsers(){this.baseService.getMethod("user/analytics").subscribe({next:s=>{this.totalUsers=s.data.totalUsers,this.courseStarted=s.data.usersStartedCourse,this.courseCompleted=s.data.usersCompletedCourse}})}}return e.\u0275fac=function(){let r;return function(i){return(r||(r=t.n5z(e)))(i||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-analytics"]],features:[t.qOj],decls:20,vars:7,consts:[[3,"title","description"],[1,"content-component"],[1,"analytics-title"],[1,"font-bold"],[1,"table"],[1,"content-analytics"]],template:function(s,i){1&s&&(t._UZ(0,"app-header-modules",0),t.TgZ(1,"div",1)(2,"div",2)(3,"p",3),t._uU(4," Fotograf\xeda para viajes con tu celular "),t.qZA()(),t.TgZ(5,"div",4)(6,"div",5)(7,"p"),t._uU(8,"Estudiantes"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Curso iniciado"),t.qZA(),t.TgZ(11,"p"),t._uU(12,"Curso completado"),t.qZA()(),t.TgZ(13,"div",5)(14,"p"),t._uU(15),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA(),t.TgZ(18,"p"),t._uU(19),t.qZA()()()()),2&s&&(t.Q6J("title","Anal\xedticas")("description","Aqu\xed puedes revisar y analizar el progreso de tus estudiantes"),t.xp6(15),t.Oqu(i.totalUsers),t.xp6(2),t.AsE("",i.courseStarted," (",i.courseStarted/i.totalUsers*100,"%)"),t.xp6(2),t.AsE("",i.courseCompleted," (",i.courseCompleted/i.totalUsers*100,"%)"))},dependencies:[l.l],styles:[".content-component[_ngcontent-%COMP%]{padding:30px}table[_ngcontent-%COMP%]{width:100%}.table-transactions[_ngcontent-%COMP%]{max-height:400px;overflow:auto}td[_ngcontent-%COMP%]{max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.analytics-title[_ngcontent-%COMP%]{width:100%;padding:8px;background-color:#f2f2f2;text-align:center;border-radius:8px;display:flex;justify-content:center}.analytics-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:min-content;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.table[_ngcontent-%COMP%]{overflow:auto;width:100%}.table[_ngcontent-%COMP%]   .content-analytics[_ngcontent-%COMP%]:first-child{width:100%;border-bottom:solid 1px rgba(0,0,0,.12)}.table[_ngcontent-%COMP%]   .content-analytics[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,minmax(160px,1fr));justify-items:center;padding:10px}@media screen and (max-width: 500px){.table[_ngcontent-%COMP%]   .content-analytics[_ngcontent-%COMP%]:first-child{width:max-content}}"]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(v),d.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,p,l.l]}),e})()}}]);