"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[266],{9266:(V,d,l)=>{l.r(d),l.d(d,{TransactionModule:()=>F});var s=l(6895),r=l(7337),p=l(4684),a=l(4650),m=l(5412),c=l(8142);function _(t,e){if(1&t&&(a.ynx(0),a._uU(1),a.BQk()),2&t){const o=e.$implicit;a.xp6(1),a.AsE(" ",o.amount," ",o.name,", ")}}function f(t,e){1&t&&(a.TgZ(0,"span",3),a._uU(1,"Departamento:"),a.qZA())}function g(t,e){1&t&&(a.TgZ(0,"span",3),a._uU(1,"Direcci\xf3n:"),a.qZA())}function T(t,e){1&t&&(a.TgZ(0,"span",3),a._uU(1,"Ciudad:"),a.qZA())}function h(t,e){1&t&&(a.TgZ(0,"span",3),a._uU(1,"M\xe1s:"),a.qZA())}let Z=(()=>{class t{constructor(){this.data=(0,a.f3M)(m.WI)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-view-transaction"]],decls:54,vars:19,consts:[[3,"titleModal"],[1,"content-transaction"],[1,"columns-2"],[1,"bold"],[4,"ngFor","ngForOf"],[1,"titles-transaction"],["class","bold",4,"ngIf"]],template:function(o,n){1&o&&(a._UZ(0,"app-title-modal",0),a.TgZ(1,"div",1)(2,"div",2)(3,"p")(4,"span",3),a._uU(5,"No Orden de pago:"),a.qZA(),a._uU(6),a.qZA(),a.TgZ(7,"p")(8,"span",3),a._uU(9,"Fecha de pago:"),a.qZA(),a._uU(10),a.ALo(11,"date"),a.qZA(),a.TgZ(12,"p")(13,"span",3),a._uU(14,"Valor:"),a.qZA(),a._uU(15),a.qZA(),a.TgZ(16,"p")(17,"span",3),a._uU(18,"Productos:"),a.qZA(),a.YNc(19,_,2,2,"ng-container",4),a.qZA()(),a.TgZ(20,"div",5)(21,"p",3),a._uU(22,"Datos del cliente"),a.qZA(),a.TgZ(23,"p",3),a._uU(24,"Datos de env\xedo"),a.qZA()(),a.TgZ(25,"div",2)(26,"p")(27,"span",3),a._uU(28,"Nombre:"),a.qZA(),a._uU(29),a.qZA(),a.TgZ(30,"p"),a.YNc(31,f,2,0,"span",6),a._uU(32),a.qZA(),a.TgZ(33,"p")(34,"span",3),a._uU(35,"Documento:"),a.qZA(),a._uU(36),a.qZA(),a.TgZ(37,"p"),a.YNc(38,g,2,0,"span",6),a._uU(39),a.qZA(),a.TgZ(40,"p")(41,"span",3),a._uU(42,"Correo:"),a.qZA(),a._uU(43),a.qZA(),a.TgZ(44,"p"),a.YNc(45,T,2,0,"span",6),a._uU(46),a.qZA(),a.TgZ(47,"p")(48,"span",3),a._uU(49,"Celular:"),a.qZA(),a._uU(50),a.qZA(),a.TgZ(51,"p"),a.YNc(52,h,2,0,"span",6),a._uU(53),a.qZA()()()),2&o&&(a.Q6J("titleModal","VER TRANSACCI\xd3N"),a.xp6(6),a.hij(" ",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.reference," "),a.xp6(4),a.hij(" ",a.lcZ(11,17,null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.created_at)," "),a.xp6(5),a.hij(" ",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.amount_in_cents," "),a.xp6(4),a.Q6J("ngForOf",n.data.products),a.xp6(10),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.customer_data?null:n.data.data.transaction.customer_data.full_name," "),a.xp6(2),a.Q6J("ngIf",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.shipping_address),a.xp6(1),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.shipping_address?null:n.data.data.transaction.shipping_address.region," "),a.xp6(4),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.customer_data?null:n.data.data.transaction.customer_data.legal_id," "),a.xp6(2),a.Q6J("ngIf",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.shipping_address),a.xp6(1),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.shipping_address?null:n.data.data.transaction.shipping_address.address_line_1," "),a.xp6(4),a.hij(" ",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.customer_email," "),a.xp6(2),a.Q6J("ngIf",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.shipping_address),a.xp6(1),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.shipping_address?null:n.data.data.transaction.shipping_address.city," "),a.xp6(4),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.customer_data?null:n.data.data.transaction.customer_data.phone_number," "),a.xp6(2),a.Q6J("ngIf",null==n.data.data||null==n.data.data.transaction?null:n.data.data.transaction.shipping_address),a.xp6(1),a.hij(" ",null==n.data.data||null==n.data.data.transaction||null==n.data.data.transaction.shipping_address?null:n.data.data.transaction.shipping_address.address_line_2," "))},dependencies:[s.sg,s.O5,c.i,s.uU],styles:[".content-transaction[_ngcontent-%COMP%]{width:90%;margin:50px auto}.bold[_ngcontent-%COMP%]{font-weight:700}.titles-transaction[_ngcontent-%COMP%]{padding:10px 0;border-top:1px solid gray;border-bottom:1px solid gray;margin:20px 0;display:grid;grid-template-columns:1fr 1fr}.columns-2[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;justify-content:center}.center[_ngcontent-%COMP%]{place-self:center;align-self:flex-start}"]}),t})();var u=l(9524),i=l(671),C=l(7392),A=l(266);function U(t,e){1&t&&(a.TgZ(0,"th",14),a._uU(1," N\xb0 Orden "),a.qZA())}function v(t,e){if(1&t&&(a.TgZ(0,"td",15),a._uU(1),a.qZA()),2&t){const o=e.$implicit;a.Q6J("matTooltipPosition","left")("matTooltip",o._id),a.xp6(1),a.hij(" ",o._id," ")}}function y(t,e){1&t&&(a.TgZ(0,"th",14),a._uU(1," Referencia "),a.qZA())}function q(t,e){if(1&t&&(a.TgZ(0,"td",15),a._uU(1),a.qZA()),2&t){const o=e.$implicit;a.Q6J("matTooltipPosition","left")("matTooltip",o.data.transaction.reference),a.xp6(1),a.hij(" ",o.data.transaction.reference," ")}}function w(t,e){1&t&&(a.TgZ(0,"th",14),a._uU(1," Fecha "),a.qZA())}function M(t,e){if(1&t&&(a.TgZ(0,"td",16),a._uU(1),a.ALo(2,"date"),a.qZA()),2&t){const o=e.$implicit;a.xp6(1),a.hij(" ",a.lcZ(2,1,o.data.transaction.created_at)," ")}}function N(t,e){1&t&&(a.TgZ(0,"th",14),a._uU(1," Total "),a.qZA())}function D(t,e){if(1&t&&(a.TgZ(0,"td",16),a._uU(1),a.qZA()),2&t){const o=e.$implicit;a.xp6(1),a.hij(" ",null==o.data||null==o.data.transaction?null:o.data.transaction.amount_in_cents," ")}}function j(t,e){1&t&&(a.TgZ(0,"th",14),a._uU(1," Acciones "),a.qZA())}function Q(t,e){if(1&t){const o=a.EpF();a.TgZ(0,"td",16)(1,"mat-icon",17),a.NdJ("click",function(){const b=a.CHM(o).$implicit,R=a.oxw();return a.KtG(R.openModal(b))}),a._uU(2,"visibility"),a.qZA()()}}function O(t,e){1&t&&a._UZ(0,"tr",18)}function P(t,e){1&t&&a._UZ(0,"tr",19)}const Y=[{path:"",component:(()=>{class t extends p.K{constructor(){super(...arguments),this.modal=Z,this.transaction=[],this.displayedColumns=["n\xb0order","reference","date","total","actions"]}ngOnInit(){this.getAllProducts()}getAllProducts(){this.baseService.getMethod("payments/getPayments").subscribe({next:o=>{this.transaction=o.data,this.dataSource=o.data}})}openModal(o){this.dialog.open(this.modal,{hasBackdrop:!0,data:o,width:"700px"})}}return t.\u0275fac=function(){let e;return function(n){return(e||(e=a.n5z(t)))(n||t)}}(),t.\u0275cmp=a.Xpm({type:t,selectors:[["app-transaction"]],features:[a.qOj],decls:21,vars:5,consts:[[3,"title","description"],[1,"content-component"],[1,"table-transactions"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","n\xb0order"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltipPosition","matTooltip",4,"matCellDef"],["matColumnDef","reference"],["matColumnDef","date"],["mat-cell","",4,"matCellDef"],["matColumnDef","total"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",3,"matTooltipPosition","matTooltip"],["mat-cell",""],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(a._UZ(0,"app-header-modules",0),a.TgZ(1,"div",1)(2,"div",2)(3,"table",3),a.ynx(4,4),a.YNc(5,U,2,0,"th",5),a.YNc(6,v,2,3,"td",6),a.BQk(),a.ynx(7,7),a.YNc(8,y,2,0,"th",5),a.YNc(9,q,2,3,"td",6),a.BQk(),a.ynx(10,8),a.YNc(11,w,2,0,"th",5),a.YNc(12,M,3,3,"td",9),a.BQk(),a.ynx(13,10),a.YNc(14,N,2,0,"th",5),a.YNc(15,D,2,1,"td",9),a.BQk(),a.ynx(16,11),a.YNc(17,j,2,0,"th",5),a.YNc(18,Q,3,0,"td",9),a.BQk(),a.YNc(19,O,1,0,"tr",12),a.YNc(20,P,1,0,"tr",13),a.qZA()()()),2&o&&(a.Q6J("title","Transacciones")("description","Aqu\xed podr\xe1s revisar a detalle todas las transacciones"),a.xp6(3),a.Q6J("dataSource",n.dataSource),a.xp6(16),a.Q6J("matHeaderRowDef",n.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[u.l,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,C.Hw,A.gM,s.uU],styles:[".title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;background:#f2f2f2}.content-component[_ngcontent-%COMP%]{padding:30px}table[_ngcontent-%COMP%]{width:100%}.table-transactions[_ngcontent-%COMP%]{max-height:400px;overflow:auto}td[_ngcontent-%COMP%]{max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[r.Bz.forChild(Y),r.Bz]}),t})();var J=l(4429);let F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[s.ez,u.l,B,J.q,c.i]}),t})()}}]);