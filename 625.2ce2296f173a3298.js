"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[625],{4684:(f,r,o)=>{o.d(r,{K:()=>t});var n=o(4650),d=o(4006),c=o(5412),m=o(6551),p=o(1245);let t=(()=>{class l{constructor(){this.baseService=(0,n.f3M)(m.b),this.messageService=(0,n.f3M)(p.g),this.fb=(0,n.f3M)(d.qu),this.dialog=(0,n.f3M)(c.uw)}}return l.pageSize=10,l.pageIndex=0,l})()},9625:(f,r,o)=>{o.r(r),o.d(r,{PotentialClientModule:()=>D});var n=o(6895),d=o(4429),c=o(9524),m=o(7337),p=o(4684),t=o(4650),l=o(671);function s(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Nombre completo "),t.qZA())}function u(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.hij(" ",i.name," ")}}function _(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Correo "),t.qZA())}function h(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.hij(" ",i.email," ")}}function g(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Fecha de creaci\xf3n "),t.qZA())}function M(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.createdAt,"MMM/d/Y H:M")," ")}}function P(e,a){1&e&&t._UZ(0,"tr",13)}function v(e,a){1&e&&t._UZ(0,"tr",14)}const T=[{path:"",component:(()=>{class e extends p.K{constructor(){super(...arguments),this.user=[],this.displayedColumns=["name","email","createdAt"]}ngOnInit(){this.getAllUsers()}getAllUsers(){this.baseService.getMethod("client").subscribe({next:i=>{this.user=i.data,this.dataSource=i.data}})}}return e.\u0275fac=function(){let a;return function(C){return(a||(a=t.n5z(e)))(C||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-potential-client"]],features:[t.qOj],decls:15,vars:5,consts:[[3,"title","description"],[1,"content-component"],[1,"table-users"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","email"],["matColumnDef","createdAt"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,C){1&i&&(t._UZ(0,"app-header-modules",0),t.TgZ(1,"div",1)(2,"div",2)(3,"table",3),t.ynx(4,4),t.YNc(5,s,2,0,"th",5),t.YNc(6,u,2,1,"td",6),t.BQk(),t.ynx(7,7),t.YNc(8,_,2,0,"th",5),t.YNc(9,h,2,1,"td",6),t.BQk(),t.ynx(10,8),t.YNc(11,g,2,0,"th",5),t.YNc(12,M,3,4,"td",6),t.BQk(),t.YNc(13,P,1,0,"tr",9),t.YNc(14,v,1,0,"tr",10),t.qZA()()()),2&i&&(t.Q6J("title","Usuarios")("description","Aqu\xed podr\xe1s revisar a detalle la informaci\xf3n de los usuarios"),t.xp6(3),t.Q6J("dataSource",C.dataSource),t.xp6(10),t.Q6J("matHeaderRowDef",C.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",C.displayedColumns))},dependencies:[c.l,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,n.uU],styles:[".title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;background:#f2f2f2}.content-component[_ngcontent-%COMP%]{padding:30px}table[_ngcontent-%COMP%]{width:100%}.table-users[_ngcontent-%COMP%]{max-height:400px;overflow:auto}td[_ngcontent-%COMP%]{max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(T),m.Bz]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[n.ez,x,c.l,d.q]}),e})()},9524:(f,r,o)=>{o.d(r,{l:()=>p});var n=o(4650),d=o(6895),c=o(4859);function m(t,l){if(1&t){const s=n.EpF();n.TgZ(0,"button",3),n.NdJ("click",function(){n.CHM(s);const _=n.oxw();return n.KtG(_.onHandleClick())}),n._uU(1," Crear "),n.qZA()}}let p=(()=>{class t{constructor(){this.title="",this.description="",this.removeButton=!0,this.handleClick=new n.vpe}onHandleClick(){this.handleClick.emit()}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-header-modules"]],inputs:{title:"title",description:"description",removeButton:"removeButton"},outputs:{handleClick:"handleClick"},standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[[1,"title"],[3,"innerHTML"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"div")(2,"h2"),n._uU(3),n.qZA(),n._UZ(4,"p",1),n.qZA(),n.YNc(5,m,2,0,"button",2),n.qZA()),2&s&&(n.xp6(3),n.Oqu(u.title),n.xp6(1),n.Q6J("innerHTML",u.description,n.oJD),n.xp6(1),n.Q6J("ngIf",!u.removeButton))},dependencies:[d.ez,d.O5,c.ot,c.lW],styles:[".title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;background:#f2f2f2}.content-component[_ngcontent-%COMP%]{padding:30px}"]}),t})()}}]);