"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[741],{1741:(I,l,a)=>{a.r(l),a.d(l,{PurchaseModule:()=>M});var r=a(6895),m=a(7337),t=a(4650),d=a(9653),g=a(266),y=a(4174);function A(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",2)(2,"p",3),t._uU(3),t.qZA(),t.TgZ(4,"p",6),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"currency"),t.qZA()(),t.BQk()),2&n){const e=i.$implicit;t.xp6(3),t.Oqu(e.amount),t.xp6(1),t.Q6J("matTooltip",e.title),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(t.lcZ(8,4,e.amount*e.price))}}let f=(()=>{class n{constructor(){this.store=(0,t.f3M)(d.yh)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invoice"]],standalone:!0,features:[t.jDz],decls:27,vars:13,consts:[[1,"content-invoice"],[1,"content-info"],[1,"text-end","list-products"],[1,"justify-self-start"],[4,"ngFor","ngForOf"],[1,"text-end","align-between"],[1,"justify-self-start","text-start","cut-text",3,"matTooltip"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Tu pedido"),t.qZA(),t.TgZ(3,"div",1)(4,"div",2)(5,"p",3),t._uU(6,"Cant."),t.qZA(),t.TgZ(7,"p",3),t._uU(8,"Producto"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Subtotal"),t.qZA()(),t.YNc(11,A,9,6,"ng-container",4),t.ALo(12,"async"),t.TgZ(13,"div",5)(14,"p"),t._uU(15,"Env\xedo"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.ALo(18,"currency"),t.qZA()(),t.TgZ(19,"div",5)(20,"p"),t._uU(21,"Total"),t.qZA(),t.TgZ(22,"p"),t._uU(23),t.ALo(24,"currency"),t.ALo(25,"totalValue"),t.ALo(26,"async"),t.qZA()()()()),2&e&&(t.xp6(11),t.Q6J("ngForOf",t.lcZ(12,3,s.store.select("cart")).products),t.xp6(6),t.Oqu(t.lcZ(18,5,0)),t.xp6(6),t.Oqu(t.lcZ(24,7,t.lcZ(25,9,t.lcZ(26,11,s.store.select("cart")).products))))},dependencies:[r.ez,r.sg,r.Ov,r.H9,y.A,g.AV,g.gM],styles:[".content-invoice[_ngcontent-%COMP%]{padding:30px;border:1px solid rgba(128,128,128,.568627451)}.content-invoice[_ngcontent-%COMP%]   .content-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.content-invoice[_ngcontent-%COMP%]   .list-products[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.content-invoice[_ngcontent-%COMP%]   .list-products[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:30px}.align-between[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.justify-self-start[_ngcontent-%COMP%]{justify-self:flex-start}.text-end[_ngcontent-%COMP%]{text-align:end}.text-start[_ngcontent-%COMP%]{text-align:start}.cut-text[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%}"]}),n})();var h=a(9071),C=a(833),c=a(1740);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-discount-coupon"]],standalone:!0,features:[t.jDz],decls:9,vars:3,consts:[[1,"content-cupon"],[1,"cupon-value"],[1,"input-cupon","input-name"],["htmlFor","name"],["pInputText","","id","name","placeholder","C\xf3digo de cup\xf3n",1,"p-inputtext-sm"],[3,"sizeButton","classButton","nameButton"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Cup\xf3n de descuento"),t.qZA(),t.TgZ(3,"div",1)(4,"span",2)(5,"label",3),t._uU(6,"\xbfTienes un cup\xf3n de descuento?"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t._UZ(8,"app-generic-button",5),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("sizeButton","small")("classButton","class_yellow")("nameButton","Aplicar"))},dependencies:[r.ez,C.x,c.j,c.o],styles:[".content-cupon[_ngcontent-%COMP%]{padding:30px;border:1px solid rgba(128,128,128,.568627451)}.content-cupon[_ngcontent-%COMP%]   .cupon-value[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:15px}.content-cupon[_ngcontent-%COMP%]   .input-cupon[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-name[_ngcontent-%COMP%]{width:100%}"]}),n})(),x=(()=>{class n{constructor(){this.emitPruchase=new t.vpe,this.disabledButton=!1}onEmitPurchase(){this.emitPruchase.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-button"]],inputs:{disabledButton:"disabledButton"},outputs:{emitPruchase:"emitPruchase"},standalone:!0,features:[t.jDz],decls:7,vars:4,consts:[[1,"content-cupon"],[1,"cupon-value"],[3,"disabledButton","sizeButton","classButton","nameButton","emitClick"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Wompi"),t.qZA(),t.TgZ(3,"div",1)(4,"p"),t._uU(5,"Paga a trav\xe9s de Wompi de Bancolombia"),t.qZA(),t.TgZ(6,"app-generic-button",2),t.NdJ("emitClick",function(){return s.onEmitPurchase()}),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("disabledButton",s.disabledButton)("sizeButton","large")("classButton","class_blue_color_yellow")("nameButton","Proceder al pago"))},dependencies:[r.ez,C.x],styles:[".content-cupon[_ngcontent-%COMP%]{padding:30px;border:1px solid rgba(128,128,128,.568627451)}.content-cupon[_ngcontent-%COMP%]   .cupon-value[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:15px}.content-cupon[_ngcontent-%COMP%]   .input-cupon[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),n})();var o=a(4006),P=a(7188),_=a(8372);let v=(()=>{class n{constructor(){this.fb=(0,t.f3M)(o.qu),this.emitForm=new t.vpe,this.form=this.fb.group({country:new o.NI({value:"CO",disabled:!0}),region:["Antioquia",o.kI.required],city:["Medellin",o.kI.required],addressLine1:["Calle 34",o.kI.required],addressLine2:["apto 14"],ZIPcode:[],phoneNumber:["3218903991"]})}ngOnInit(){this.form.statusChanges.pipe((0,_.b)(500)).subscribe({next:e=>{this.emitForm.emit({data:this.form.getRawValue(),statusForm:e})}})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shipping-form"]],outputs:{emitForm:"emitForm"},standalone:!0,features:[t.jDz],decls:26,vars:2,consts:[[1,"content-form"],[3,"formGroup"],[1,"flex","flex-column","gap-2"],["htmlFor","country"],["pInputText","","id","country","formControlName","country","placeholder","Ingrese su pa\xeds",1,"p-inputtext-sm","input-name"],["htmlFor","region"],["pInputText","","id","region","formControlName","region","placeholder","Ingrese el departamento",1,"p-inputtext-sm","input-name"],["htmlFor","city"],["pInputText","","id","city","formControlName","city","placeholder","Ingrese la ciudad",1,"p-inputtext-sm","input-name"],["htmlFor","addressLine1"],["pInputText","","id","addressLine1","formControlName","addressLine1","placeholder","Ingrese la direcci\xf3n",1,"p-inputtext-sm","input-name"],["pInputText","","id","addressLine2","formControlName","addressLine2","placeholder","Informaci\xf3n extra (opcional)",1,"p-inputtext-sm","input-name"],[1,"input-name"],["for","withoutgrouping"],["mode","decimal","formControlName","ZIPcode","inputId","withoutgrouping","placeholder","N\xfamero",1,"p-inputtext-sm","input-name",3,"useGrouping"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Direcci\xf3n de env\xedo"),t.qZA(),t.TgZ(3,"form",1)(4,"span",2)(5,"label",3),t._uU(6,"Pa\xeds / Regi\xf3n"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"span",2)(9,"label",5),t._uU(10,"Departamento"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"span",2)(13,"label",7),t._uU(14,"Ciudad"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"span",2)(17,"label",9),t._uU(18,"Direcci\xf3n"),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"span",2),t._UZ(21,"input",11),t.qZA(),t.TgZ(22,"span",12)(23,"label",13),t._uU(24,"C\xf3digo postal (opcional)"),t.qZA(),t._UZ(25,"p-inputNumber",14),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",s.form),t.xp6(22),t.Q6J("useGrouping",!1))},dependencies:[r.ez,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,c.j,c.o,P.L$,P.Rn],styles:[".content-form[_ngcontent-%COMP%]{padding:30px;border:1px solid rgba(128,128,128,.568627451)}.content-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.content-form[_ngcontent-%COMP%]   .input-name[_ngcontent-%COMP%], .content-form[_ngcontent-%COMP%]     .p-inputnumber{width:100%}"]}),n})(),F=(()=>{class n{constructor(){this.fb=(0,t.f3M)(o.qu),this.emitForm=new t.vpe,this.form=this.fb.group({name:["johnatan",o.kI.required],lastName:["ramos",o.kI.required],legalId:["1000884990",o.kI.required],legalIdType:["CC"],email:["johnatan.r1000@gmail.com",[o.kI.required,o.kI.email]]})}ngOnInit(){this.form.statusChanges.pipe((0,_.b)(500)).subscribe({next:e=>{this.emitForm.emit({data:this.form.getRawValue(),statusForm:e})}})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invoice-form"]],outputs:{emitForm:"emitForm"},decls:20,vars:1,consts:[[1,"content-form"],[3,"formGroup"],[1,"flex","flex-column","gap-2"],["htmlFor","name"],["pInputText","","id","name","formControlName","name","placeholder","Ingrese su nombre",1,"p-inputtext-sm","input-name"],["htmlFor","lastName"],["pInputText","","id","lastName","formControlName","lastName","placeholder","Ingrese sus apellidos",1,"p-inputtext-sm","input-name"],["htmlFor","legalId"],["pInputText","","id","legalId","formControlName","legalId","placeholder","Ingrese su cedula",1,"p-inputtext-sm","input-name"],["htmlFor","email"],["pInputText","","id","email","formControlName","email","placeholder","Ingrese su email",1,"p-inputtext-sm","input-name"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Datos de facturaci\xf3n"),t.qZA(),t.TgZ(3,"form",1)(4,"span",2)(5,"label",3),t._uU(6,"Nombre"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"span",2)(9,"label",5),t._uU(10,"Apellidos"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"span",2)(13,"label",7),t._uU(14,"C\xe9dula"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"span",2)(17,"label",9),t._uU(18,"Correo electr\xf3nico"),t.qZA(),t._UZ(19,"input",10),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",s.form))},dependencies:[c.o,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".content-form[_ngcontent-%COMP%]{padding:30px;border:1px solid rgba(128,128,128,.568627451)}.content-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.content-form[_ngcontent-%COMP%]   .input-name[_ngcontent-%COMP%]{width:100%}"]}),n})();const T=[{path:"",component:(()=>{class n{constructor(){this.store=(0,t.f3M)(d.yh),this.products=[],this.reference="",this.invalidCustomerForm=!1,this.invalidFormAddress=!1,this.customerData={email:"",fullName:"Lola Flores",legalId:"",legalIdType:"CC"},this.shippingAddress={addressLine1:"",addressLine2:"",city:"",phoneNumber:"0",region:"",country:"CO"},this.wompiObject={currency:"COP",amountInCents:0,reference:"",publicKey:"pub_test_YHZn4Q2jPbQ5hnohVI5MpMeUtmV1y896",redirectUrl:"http://localhost:4200/response-transaction",shippingAddress:{},customerData:{}}}ngOnInit(){this.$store=this.store.select("cart").subscribe({next:({products:e,reference:s})=>{this.reference=s,this.products=e}})}setAmount(){const e=this.products?.reduce((s,p)=>p.price*p.amount+s,0);this.wompiObject.amountInCents=Number(e+"00")}purchase(){""!==this.shippingAddress.city&&(this.wompiObject.shippingAddress={...this.shippingAddress}),this.wompiObject.customerData={...this.customerData},this.wompiObject.reference=this.reference,console.log(this.wompiObject),this.setAmount(),this.openCheckout()}setCustomerData(e){e.data.fullName=e.data.name+" "+e.data.lastName,delete e.data.name,delete e.data.lastName,this.invalidCustomerForm=e.statusForm,this.customerData=e.data}setshippingAddressData(e){delete e.data.ZIPcode,this.invalidFormAddress=e.statusForm,this.shippingAddress=e.data}openCheckout(){new WidgetCheckout(this.wompiObject).open(s=>{const p=s.transaction;console.log("Transaction ID: ",p.id),console.log("Transaction object: ",p)})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-purchase"]],decls:12,vars:0,consts:[[1,"content-invoice"],[1,"title"],[1,"content-forms"],[1,"flex-column"],[3,"emitForm"],[3,"emitPruchase"]],template:function(e,s){1&e&&(t._UZ(0,"app-menu"),t.TgZ(1,"div",0)(2,"h2",1),t._uU(3,"Finalizar compra"),t.qZA(),t.TgZ(4,"div",2)(5,"div",3)(6,"app-invoice-form",4),t.NdJ("emitForm",function(u){return s.setCustomerData(u)}),t.qZA(),t.TgZ(7,"app-shipping-form",4),t.NdJ("emitForm",function(u){return s.setshippingAddressData(u)}),t.qZA()(),t.TgZ(8,"div",3),t._UZ(9,"app-invoice")(10,"app-discount-coupon"),t.TgZ(11,"app-payment-button",5),t.NdJ("emitPruchase",function(){return s.purchase()}),t.qZA()()()())},dependencies:[f,h.M,Z,x,v,F],styles:[".title[_ngcontent-%COMP%]{color:#222e5e}.content-invoice[_ngcontent-%COMP%]{padding:35px 70px;margin-top:60px}.content-invoice[_ngcontent-%COMP%]   .content-forms[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;column-gap:40px}.content-invoice[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}"]}),n})(),title:"Pago"},{path:"**",redirectTo:"",pathMatch:"full"}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(T),m.Bz]}),n})();var b=a(901);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,O,b.W,o.UX,f,h.M,Z,x,v]}),n})()}}]);