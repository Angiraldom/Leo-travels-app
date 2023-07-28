"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[597],{4684:(f,d,a)=>{a.d(d,{K:()=>l});var n=a(4650),m=a(4006),c=a(5412),t=a(6551),s=a(1245);class l{constructor(){this.baseService=(0,n.f3M)(t.b),this.messageService=(0,n.f3M)(s.g),this.fb=(0,n.f3M)(m.qu),this.dialog=(0,n.f3M)(c.uw)}}},4174:(f,d,a)=>{a.d(d,{A:()=>m});var n=a(4650);let m=(()=>{class c{transform(s){return this.getTotalValue(s)}getTotalValue(s){return s.reduce((u,r)=>r.price*r.amount+u,0)}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275pipe=n.Yjl({name:"totalValue",type:c,pure:!0,standalone:!0}),c})()},3597:(f,d,a)=>{a.r(d),a.d(d,{TransactionModule:()=>R});var n=a(6895),m=a(7337),c=a(4684),t=a(4650),s=a(9524),l=a(671),u=a(266),r=a(4174);function p(e,o){1&e&&(t.TgZ(0,"th",15),t._uU(1," N\xb0 Orden "),t.qZA())}function T(e,o){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("matTooltipPosition","left")("matTooltip",i._id),t.xp6(1),t.hij(" ",i._id," ")}}function C(e,o){1&e&&(t.TgZ(0,"th",15),t._uU(1," Referencia "),t.qZA())}function h(e,o){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.Q6J("matTooltipPosition","left")("matTooltip",i.data.transaction.reference),t.xp6(1),t.hij(" ",i.data.transaction.reference," ")}}function g(e,o){1&e&&(t.TgZ(0,"th",15),t._uU(1," Fecha "),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,i.data.transaction.created_at)," ")}}function v(e,o){1&e&&(t.TgZ(0,"th",15),t._uU(1," Documento "),t.qZA())}function Z(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij("",i.data.transaction.customer_data.legal_id," ")}}function x(e,o){1&e&&(t.TgZ(0,"th",15),t._uU(1," Email "),t.qZA())}function D(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",i.data.transaction.customer_email," ")}}function A(e,o){1&e&&(t.TgZ(0,"th",15),t._uU(1," Total "),t.qZA())}function P(e,o){if(1&e&&(t.TgZ(0,"td",17),t._uU(1),t.ALo(2,"currency"),t.ALo(3,"totalValue"),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.hij(" ",t.gM2(2,1,t.lcZ(3,6,i.products),"$","symbol","1.0-0")," ")}}function y(e,o){1&e&&t._UZ(0,"tr",18)}function E(e,o){1&e&&t._UZ(0,"tr",19)}const O=[{path:"",component:(()=>{class e extends c.K{constructor(){super(...arguments),this.transaction=[],this.displayedColumns=["n\xb0order","reference","date","document","email","total"]}ngOnInit(){this.getAllProducts()}getAllProducts(){this.baseService.getMethod("payments/getPayments").subscribe({next:i=>{this.transaction=i.data,this.dataSource=i.data}})}}return e.\u0275fac=function(){let o;return function(_){return(o||(o=t.n5z(e)))(_||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-transaction"]],features:[t.qOj],decls:24,vars:5,consts:[[3,"title","description"],[1,"content-component"],[1,"table-transactions"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","n\xb0order"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltipPosition","matTooltip",4,"matCellDef"],["matColumnDef","reference"],["matColumnDef","date"],["mat-cell","",4,"matCellDef"],["matColumnDef","document"],["matColumnDef","email"],["matColumnDef","total"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",3,"matTooltipPosition","matTooltip"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,_){1&i&&(t._UZ(0,"app-header-modules",0),t.TgZ(1,"div",1)(2,"div",2)(3,"table",3),t.ynx(4,4),t.YNc(5,p,2,0,"th",5),t.YNc(6,T,2,3,"td",6),t.BQk(),t.ynx(7,7),t.YNc(8,C,2,0,"th",5),t.YNc(9,h,2,3,"td",6),t.BQk(),t.ynx(10,8),t.YNc(11,g,2,0,"th",5),t.YNc(12,M,3,3,"td",9),t.BQk(),t.ynx(13,10),t.YNc(14,v,2,0,"th",5),t.YNc(15,Z,2,1,"td",9),t.BQk(),t.ynx(16,11),t.YNc(17,x,2,0,"th",5),t.YNc(18,D,2,1,"td",9),t.BQk(),t.ynx(19,12),t.YNc(20,A,2,0,"th",5),t.YNc(21,P,4,8,"td",9),t.BQk(),t.YNc(22,y,1,0,"tr",13),t.YNc(23,E,1,0,"tr",14),t.qZA()()()),2&i&&(t.Q6J("title","Transacciones")("description","Aqu\xed podr\xe1s revisar a detalle todas las transacciones"),t.xp6(3),t.Q6J("dataSource",_.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",_.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",_.displayedColumns))},dependencies:[s.l,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,u.gM,n.H9,n.uU,r.A],styles:[".title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;background:#f2f2f2}.content-component[_ngcontent-%COMP%]{padding:30px}table[_ngcontent-%COMP%]{width:100%}.table-transactions[_ngcontent-%COMP%]{max-height:400px;overflow:auto}td[_ngcontent-%COMP%]{max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(O),m.Bz]}),e})();var U=a(4429);let R=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[n.ez,s.l,B,U.q]}),e})()},9524:(f,d,a)=>{a.d(d,{l:()=>s});var n=a(4650),m=a(6895),c=a(4859);function t(l,u){if(1&l){const r=n.EpF();n.TgZ(0,"button",3),n.NdJ("click",function(){n.CHM(r);const T=n.oxw();return n.KtG(T.onHandleClick())}),n._uU(1," Crear "),n.qZA()}}let s=(()=>{class l{constructor(){this.title="",this.description="",this.removeButton=!0,this.handleClick=new n.vpe}onHandleClick(){this.handleClick.emit()}}return l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-header-modules"]],inputs:{title:"title",description:"description",removeButton:"removeButton"},outputs:{handleClick:"handleClick"},standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[[1,"title"],[3,"innerHTML"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"]],template:function(r,p){1&r&&(n.TgZ(0,"div",0)(1,"div")(2,"h2"),n._uU(3),n.qZA(),n._UZ(4,"p",1),n.qZA(),n.YNc(5,t,2,0,"button",2),n.qZA()),2&r&&(n.xp6(3),n.Oqu(p.title),n.xp6(1),n.Q6J("innerHTML",p.description,n.oJD),n.xp6(1),n.Q6J("ngIf",!p.removeButton))},dependencies:[m.ez,m.O5,c.ot,c.lW],styles:[".title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;background:#f2f2f2}.content-component[_ngcontent-%COMP%]{padding:30px}"]}),l})()}}]);