"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[789],{4684:(C,g,o)=>{o.d(g,{K:()=>u});var n=o(4650),c=o(4006),m=o(5412),s=o(6551),p=o(1245),t=o(1687);let u=(()=>{class e{constructor(){this.baseService=(0,n.f3M)(s.b),this.messageService=(0,n.f3M)(p.g),this.fb=(0,n.f3M)(c.qu),this.dialog=(0,n.f3M)(m.uw),this.conversionesService=(0,n.f3M)(t.S)}}return e.pageSize=10,e.pageIndex=0,e})()},1687:(C,g,o)=>{o.d(g,{S:()=>m});var n=o(6551),c=o(4650);let m=(()=>{class s extends n.b{constructor(){super()}customEvent(t){this.postMethod("conversiones/standard",{eventName:t}).subscribe()}standardEvent(t){this.postMethod("conversiones/standard",{eventName:t}).subscribe()}purchaseEvent(t){this.postMethod("conversiones/purchase",{value:t}).subscribe()}suscriptionEvent(){this.standardEvent("Subscribe")}leadEvent(){this.standardEvent("Lead")}addToCartEvent(){this.standardEvent("AddToCart")}initiateCheckoutEvent(){this.standardEvent("InitiateCheckout")}viewContentEvent(){this.standardEvent("ViewContent")}addPaymentInfoEvent(){this.standardEvent("AddPaymentInfo")}startTrial(){this.standardEvent("StartTrial")}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},789:(C,g,o)=>{o.r(g),o.d(g,{default:()=>A});var n=o(6895),c=o(1192),m=o(5227),s=o(833),p=o(4684),t=o(4006),u=o(4429),e=o(4650),d=o(5412),f=o(1572);function v(a,l){1&a&&e.GkF(0)}function x(a,l){1&a&&(e.TgZ(0,"span",19),e._uU(1," Debe llenar el nombre "),e.qZA())}function M(a,l){1&a&&(e.TgZ(0,"span",19),e._uU(1," Debe llenar el correo "),e.qZA())}function O(a,l){1&a&&(e.TgZ(0,"span",19),e._uU(1," El correo no es valido "),e.qZA())}function b(a,l){1&a&&e._UZ(0,"mat-spinner",20),2&a&&e.Q6J("color","primary")}function P(a,l){if(1&a){const r=e.EpF();e.TgZ(0,"div",21)(1,"button",22),e.NdJ("click",function(){e.CHM(r);const _=e.oxw(2);return _.sendEmail(),e.KtG(_.sendEvent())}),e._uU(2," REGISTRARME "),e.qZA()()}if(2&a){const r=e.oxw(2);let i;e.xp6(1),e.Q6J("disabled",r.formSuscribe.invalid||!(null!=(i=r.formSuscribe.get("dataTreatment"))&&i.value))}}const h=function(a){return{"input-error":a}};function T(a,l){if(1&a){const r=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"span",5),e._uU(3," close "),e.qZA()(),e.TgZ(4,"div",6)(5,"p"),e._uU(6,"Reg\xedstrate para ver la clase gratuita"),e.qZA(),e.TgZ(7,"h3"),e._uU(8,"5 ERRORES COMUNES AL TOMAR FOTOS EN TUS VIAJES"),e.qZA()(),e.TgZ(9,"div",7)(10,"form",8)(11,"div",9),e._UZ(12,"input",10),e.YNc(13,x,2,0,"span",11),e.qZA(),e.TgZ(14,"div",9),e._UZ(15,"input",12),e.YNc(16,M,2,0,"span",11),e.YNc(17,O,2,0,"span",11),e.qZA(),e.TgZ(18,"div",13),e._UZ(19,"input",14),e.TgZ(20,"a",15),e.NdJ("click",function(){e.CHM(r);const _=e.oxw();return e.KtG(_.showPolitcs=!0)}),e.TgZ(21,"p"),e._uU(22,"Autorizo el tratamiento de datos personales"),e.qZA()()()(),e.TgZ(23,"div",16),e.YNc(24,b,1,1,"mat-spinner",17),e.qZA(),e.YNc(25,P,3,1,"div",18),e.qZA()()}if(2&a){const r=e.oxw();e.xp6(2),e.Q6J("mat-dialog-close",!0),e.xp6(8),e.Q6J("formGroup",r.formSuscribe),e.xp6(2),e.Q6J("ngClass",e.VKq(9,h,r.validateInput("name"))),e.xp6(1),e.Q6J("ngIf",r.formSuscribe.controls.name.invalid&&r.formSuscribe.controls.name.touched),e.xp6(2),e.Q6J("ngClass",e.VKq(11,h,r.validateInput("email"))),e.xp6(1),e.Q6J("ngIf",r.formSuscribe.controls.email.hasError("required")&&r.formSuscribe.controls.email.touched),e.xp6(1),e.Q6J("ngIf",r.formSuscribe.controls.email.hasError("email")),e.xp6(7),e.Q6J("ngIf",r.load),e.xp6(1),e.Q6J("ngIf",!r.load)}}function E(a,l){if(1&a){const r=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"span",23),e.NdJ("click",function(){e.CHM(r);const _=e.oxw();return e.KtG(_.showPolitcs=!1)}),e._uU(3," close "),e.qZA()(),e.TgZ(4,"div",6)(5,"p"),e._uU(6," Tratamiento de datos personales "),e.qZA()(),e.TgZ(7,"div",24)(8,"p",25)(9,"span",26),e._uU(10,'Dando cumplimiento a lo dispuesto en la Ley 1581 de 2012, "Por el cual se dictan disposiciones generales para la protecci\xf3n de datos personales" y de conformidad con lo se\xf1alado en el Decreto 1377 de 2013, con la firma de este documento manifiesto que he sido informado por GRUPO LEAN S.A.S. de lo siguiente:'),e.qZA()(),e.TgZ(11,"p",25),e._UZ(12,"br"),e.qZA(),e.TgZ(13,"ol")(14,"li",25)(15,"span",27),e._uU(16,"La sociedad GRUPO LEAN S.A.S. actuar\xe1 como responsable del tratamiento de datos personales de los cuales soy titular y que, conjunta o separadamente podr\xe1 recolectar, usar y tratar mis datos personales conforme la Pol\xedtica de Tratamiento de Datos Personales en la p\xe1gina web de www.vilean.co\xa0"),e.qZA()(),e._UZ(17,"br"),e.TgZ(18,"li",25)(19,"span",27),e._uU(20,"La recolecci\xf3n de los datos personales, tiene como finalidad hacer una prestaci\xf3n de servicios \xf3ptima para procesar pedidos, entregar productos o brindar servicios al cliente. Adem\xe1s de gestionar la relaci\xf3n con los clientes, lo que incluye el an\xe1lisis de preferencias, historial de compras o comportamiento del cliente para mejorar la calidad de los productos o servicios ofrecidos. Y finalmente, tiene fines de marketing y publicidad, para enviar informaci\xf3n sobre nuevos productos, promociones o eventos relevantes para los intereses del titular de los datos."),e.qZA()(),e._UZ(21,"br"),e.TgZ(22,"li",25)(23,"span",27),e._uU(24,"Es de car\xe1cter facultativo o voluntario responder preguntas que versen sobre Datos Sensibles o sobre menores de edad."),e.qZA()(),e._UZ(25,"br"),e.TgZ(26,"li",25)(27,"span",27),e._uU(28,"Mis derechos como titular de los datos son los previstos en la Constituci\xf3n y la ley, especialmente el derecho a conocer, actualizar, rectificar y suprimir mi informaci\xf3n personal, as\xed como el derecho a revocar el consentimiento otorgado para el tratamiento de datos personales.\xa0"),e.qZA()(),e._UZ(29,"br"),e.TgZ(30,"li",25)(31,"span",27),e._uU(32,"Los derechos pueden ser ejercidos a trav\xe9s de los canales dispuestos por GRUPO LEAN S.A.S.\xa0 y observando la Pol\xedtica de Tratamiento de Datos Personales de GRUPO LEAN S.A.S., mediante el correo electr\xf3nico "),e.qZA(),e.TgZ(33,"a",28),e._uU(34,"vileanrg@gmail.com"),e.qZA(),e.TgZ(35,"span",27),e._uU(36," podr\xe9 radicar cualquier tipo de requerimiento relacionado con el tratamiento de mis datos personales.\xa0"),e.qZA()(),e._UZ(37,"br"),e.TgZ(38,"li",25)(39,"span",27),e._uU(40,"La sociedad GRUPO LEAN S.A.S. y sus titulares garantizar\xe1n la confidencialidad, libertad, seguridad, veracidad, transparencia, acceso y circulaci\xf3n restringida de mis datos y se reservar\xe1 el derecho de modificar su Pol\xedtica de Tratamiento de Datos Personales en cualquier momento.\xa0"),e.qZA()(),e._UZ(41,"br"),e.TgZ(42,"li",25)(43,"span",27),e._uU(44,"Teniendo en cuenta lo anterior, autorizo de manera voluntaria, previa, expl\xedcita, informada e inequ\xedvoca a GRUPO LEAN S.A.S.\xa0 para tratar mis datos personales de acuerdo con su Pol\xedtica de Tratamiento de Datos Personales para los fines relacionados con su objeto y en especial para fines legales, contractuales, misionales descritos en la pol\xedtica de tratamiento de datos personales de la entidad."),e.qZA()(),e._UZ(45,"br"),e.TgZ(46,"li",25)(47,"span",27),e._uU(48,"La informaci\xf3n obtenida para el Tratamiento de mis datos personales la he suministrado de forma voluntaria y es ver\xeddica."),e.qZA()()()()()}}let Z=(()=>{class a extends p.K{constructor(){super(...arguments),this.load=!1,this.showPolitcs=!1}ngOnInit(){this.buildForm()}buildForm(){this.formSuscribe=this.fb.group({name:["",t.kI.required],email:["",[t.kI.required,t.kI.email]],dataTreatment:[!1,t.kI.required]})}validateInput(r){return!(!this.formSuscribe.controls[r].invalid||!this.formSuscribe.controls[r].touched)}sendEmail(){this.load=!0;const r=this.formSuscribe.getRawValue();this.baseService.postMethod("client/clase-gratis",r).subscribe(i=>{i&&(this.messageService.succesMessage("\n        Recuerda revisar tu bandeja de SPAM.\n        Si no lo recibes, reg\xedstrate con otro correo o escr\xedbenos al WhatsApp.","Env\xedo exitoso"),this.load=!1,this.dialog.closeAll())})}sendEvent(){this.conversionesService.customEvent("Solicitud enviada")}}return a.\u0275fac=function(){let l;return function(i){return(l||(l=e.n5z(a)))(i||a)}}(),a.\u0275cmp=e.Xpm({type:a,selectors:[["app-form-modal-free-class"]],standalone:!0,features:[e.qOj,e.jDz],decls:5,vars:1,consts:[[4,"ngTemplateOutlet"],["form",""],["politcs",""],[1,"container"],[1,"header"],[1,"material-icons",3,"mat-dialog-close"],[1,"texto","text-center","color-primary"],[1,"content"],[3,"formGroup"],[1,"form-col"],["formControlName","name","type","text","placeholder","Nombre",1,"form-input",3,"ngClass"],["class","error",4,"ngIf"],["email","true","formControlName","email","type","email","placeholder","Correo",1,"form-input",3,"ngClass"],[1,"form-col","check"],["type","checkbox","formControlName","dataTreatment",1,"check-autoriza"],[3,"click"],[1,"content-spinner"],["diameter","25",3,"color",4,"ngIf"],["class","button",4,"ngIf"],[1,"error"],["diameter","25",3,"color"],[1,"button"],[1,"btn",3,"disabled","click"],[1,"material-icons",3,"click"],[1,"content-politic"],[1,"ql-align-justify"],[2,"background-color","transparent","color","rgb(0, 0, 0)"],[2,"color","rgb(0, 0, 0)"],["href","mailto:vileanrg@gmail.com","rel","noopener noreferrer","target","_blank",2,"background-color","transparent","color","rgb(0, 0, 0)"]],template:function(r,i){if(1&r&&(e.YNc(0,v,1,0,"ng-container",0),e.YNc(1,T,26,13,"ng-template",null,1,e.W1O),e.YNc(3,E,49,0,"ng-template",null,2,e.W1O)),2&r){const _=e.MAs(2),y=e.MAs(4);e.Q6J("ngTemplateOutlet",i.showPolitcs?y:_)}},dependencies:[n.ez,n.mk,n.O5,n.tP,t.UX,t._Y,t.Fj,t.Wl,t.JJ,t.JL,t.on,t.sg,t.u,u.q,d.ZT,f.Ou],styles:[".content-politic[_ngcontent-%COMP%]{max-height:330px;overflow:auto}.container[_ngcontent-%COMP%]{padding:40px}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{margin-bottom:30px}.form-col[_ngcontent-%COMP%]{width:100%;margin-bottom:25px}.form-col[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #646363;color:#646363;font-size:14.5px;padding-bottom:10px;font-family:Poppins,sans-serif;outline:none}.form-col[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:active{border-bottom:1px solid #646363}.form-col[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;font-size:11px;background-color:#fff}.form-col[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]{border-color:red}.form-col[_ngcontent-%COMP%]   .input-error[_ngcontent-%COMP%]::placeholder{color:red}.check[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;gap:2px}.check[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}.check[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#222e5e;font-weight:500}.check[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.check-autoriza[_ngcontent-%COMP%]{width:13px;height:13px;border-radius:0;display:inline-block}.celular[_ngcontent-%COMP%]{display:flex;padding-bottom:5px;gap:10px}.celular[_ngcontent-%COMP%]   .indicativo[_ngcontent-%COMP%]{width:30%!important}.celular[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{width:calc(70% - 10px);display:flex;flex-direction:column}.button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;margin:30px 0}.button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{text-transform:uppercase;background-color:#222e5e;color:#fad030;padding:5px 30px;font-size:20px;border-radius:50px;font-weight:700;border:none;font-family:Poppins,sans-serif;cursor:pointer}.button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled, .button[_ngcontent-%COMP%]   .btn[disabled][_ngcontent-%COMP%]{border:1px solid #999999;background-color:#ccc;color:#666}.content-spinner[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}"]}),a})(),A=(()=>{class a extends p.K{changeExternalRoute(r){window.open(r,"_blank")}openModal(){this.dialog.open(Z)}sendEvent(){this.conversionesService.startTrial()}}return a.\u0275fac=function(){let l;return function(i){return(l||(l=e.n5z(a)))(i||a)}}(),a.\u0275cmp=e.Xpm({type:a,selectors:[["app-free-class"]],standalone:!0,features:[e.qOj,e.jDz],decls:54,vars:10,consts:[[1,"content-title"],[1,"content-image"],[1,"content-paragraph"],[1,"slider-text"],[1,"font-bold","free-class"],[1,"color-primary"],[1,"mark"],[1,"color-secondary","mobile","background-primary"],[1,"color-primary","desktop"],[1,"content-button","button"],[3,"sizeButton","showCouponTextCourse","nameButton","classButton","emitClick"],[1,"center-columns-flex","standard-paggind","background-primary"],[1,"color-white","text-center","mx-w-515"],[1,"color-white","mx-w-515"],[1,"color-secondary"],[1,"color-white","text-center",2,"max-width","420px"],[1,"buy-content"],[1,"icon-image"],["src","assets/images/icono.png","alt","Logo Cel cam"],[1,"buy-content-paragraphs"],[1,"color-primary","mx-w-515"],[1,"font-bold"],[3,"sizeButton","classButton","nameButton","emitClick"],[1,"standard-paggind","center-columns-flex","background-gray"],[1,"center-columns-flex","standard-paggind"]],template:function(r,i){1&r&&(e._UZ(0,"app-header-promotions"),e.TgZ(1,"div",0),e._UZ(2,"div",1),e.TgZ(3,"div",2)(4,"div",3)(5,"p",4),e._uU(6,"Clase gratuita:"),e.qZA(),e.TgZ(7,"h2",5)(8,"mark",6),e._uU(9," 5 ERRORES "),e.qZA(),e._uU(10," COMUNES AL TOMAR FOTOS EN TUS VIAJES "),e.qZA(),e.TgZ(11,"p",7),e._uU(12," y c\xf3mo corregirlos f\xe1cilmente "),e.qZA(),e.TgZ(13,"p",8),e._uU(14," y c\xf3mo corregirlos f\xe1cilmente "),e.qZA()(),e.TgZ(15,"div",9)(16,"app-generic-button",10),e.NdJ("emitClick",function(){return i.openModal(),i.sendEvent()}),e.qZA()()()(),e.TgZ(17,"div",11)(18,"h3",12),e._uU(19," El 85% de las personas cometen estos errores sin darse cuenta... "),e.qZA(),e.TgZ(20,"p",13),e._uU(21," Y pierden la oportunidad de traerse un gran recuerdo de su viaje al no ser conscientes de los errores. "),e.qZA(),e.TgZ(22,"p",14),e._uU(23," Pero con unos ajustes simples, tus fotos pueden transformarse. "),e.qZA(),e.TgZ(24,"p",13),e._uU(25," A\xfan si no eres un experto en fotograf\xeda ni tienes un celular de alta gama, puedes mejorar tus habilidades fotogr\xe1ficas al aprender a identificar y corregir cada error. "),e.qZA(),e._UZ(26,"hr"),e.TgZ(27,"p",15),e._uU(28," \xa1Aprende a capturar fotos que destaquen en tus redes sociales! "),e.qZA()(),e.TgZ(29,"div",16)(30,"div",17),e._UZ(31,"img",18),e.qZA(),e.TgZ(32,"div",19)(33,"p",20),e._uU(34," Reg\xedstrate para ver nuestra clase gratuita de "),e.TgZ(35,"span",21),e._uU(36,"5 ERRORES COMUNES AL TOMAR FOTOS EN TUS VIAJES"),e.qZA()(),e.TgZ(37,"app-generic-button",22),e.NdJ("emitClick",function(){return i.openModal(),i.sendEvent()}),e.qZA()()(),e.TgZ(38,"div",23)(39,"p",20),e._uU(40," Esta clase pertenece a Vilean, que tiene "),e.TgZ(41,"span",21),e._uU(42,"como prop\xf3sito "),e.qZA(),e._uU(43," inspirarte a SO\xd1AR, VIAJAR Y CRECER. "),e.qZA(),e.TgZ(44,"p",20),e._uU(45," Aprovecha esta oportunidad de aprender los "),e.TgZ(46,"span",21),e._uU(47,"5 ERRORES COMUNES AL TOMAR FOTOS EN TUS VIAJES"),e.qZA(),e._uU(48," y comienza a mejorar tus fotos... "),e.qZA()(),e.TgZ(49,"div",24)(50,"p",5),e._uU(51," Si quieres inspirarte y antojarte a viajar, s\xedguenos en Instagram: "),e.qZA(),e.TgZ(52,"app-generic-button",22),e.NdJ("emitClick",function(){return i.changeExternalRoute("https://www.instagram.com/vilean__/")}),e.qZA()(),e._UZ(53,"app-footer")),2&r&&(e.xp6(16),e.Q6J("sizeButton","large")("showCouponTextCourse",!1)("nameButton","VER CLASE GRATIS")("classButton","class_yellow"),e.xp6(21),e.Q6J("sizeButton","large")("classButton","class_blue")("nameButton","VER CLASE GRATIS"),e.xp6(15),e.Q6J("sizeButton","large")("classButton","class_white_color_blue")("nameButton","@vilean__"))},dependencies:[n.ez,c.T,m.c,s.x],styles:[".content-title[_ngcontent-%COMP%]{background:url(https://vilean.s3.us-east-2.amazonaws.com/Clase+gratis/FV.webp) no-repeat center center;background-size:cover;width:100%;height:calc(100vh - 60px)}.content-paragraph[_ngcontent-%COMP%]{height:100%}.slider-text[_ngcontent-%COMP%]{padding-top:24px;margin:0 auto;text-align:center}.content-button[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative;top:52%}.button[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center}.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;margin-bottom:20px!important;text-align:center}h2[_ngcontent-%COMP%]{max-width:286px;line-height:30px}.mark[_ngcontent-%COMP%]{color:#fad030;background-color:transparent}.free-class[_ngcontent-%COMP%]{color:#fff}.desktop[_ngcontent-%COMP%]{display:none}.mobile[_ngcontent-%COMP%]{max-width:276px;margin:0 auto}.buy-content[_ngcontent-%COMP%]{text-align:center;background-color:#fad030;position:relative}.buy-content[_ngcontent-%COMP%]   .icon-image[_ngcontent-%COMP%]{position:absolute;width:50px;top:-25px;left:calc(50% - 25px)}.buy-content[_ngcontent-%COMP%]   .icon-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.buy-content-paragraphs[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:55px 28px 40px;gap:20px}.center-columns-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px}.standard-paggind[_ngcontent-%COMP%]{padding:40px 30px}.background-gray[_ngcontent-%COMP%]{background-color:#f2f2f2}hr[_ngcontent-%COMP%]{border-bottom:white;width:80%}.mx-w-515[_ngcontent-%COMP%]{max-width:515px}@media only screen and (min-width: 768px){.desktop[_ngcontent-%COMP%]{display:block}.mobile[_ngcontent-%COMP%]{display:none}h2[_ngcontent-%COMP%]{margin:5px 0}.mark[_ngcontent-%COMP%]{color:#222e5e;background-color:#fad030}.free-class[_ngcontent-%COMP%]{color:#222e5e}.slider-text[_ngcontent-%COMP%]{padding-top:100px}.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6d6e71}.content-image[_ngcontent-%COMP%]{background:url(https://vilean.s3.us-east-2.amazonaws.com/Clase+gratis/FH.webp) no-repeat center center;background-size:cover;width:50%;height:auto;margin:0 0 0 auto}.content-title[_ngcontent-%COMP%]{display:flex;background-image:none;background-color:#bdbdbd52}.content-paragraph[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:-60px auto 0 0}.content-button[_ngcontent-%COMP%]{top:8%}}"]}),a})()},5227:(C,g,o)=>{o.d(g,{c:()=>p});var n=o(4650),c=o(6895),m=o(7337),s=o(1687);let p=(()=>{class t{constructor(){this.conversionesService=(0,n.f3M)(s.S)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-footer"]],standalone:!0,features:[n.jDz],decls:44,vars:5,consts:[[1,"content-footer"],[1,"footer"],[1,"margin","content-logo"],[1,"logo-footer"],[1,"color-secondary"],[1,"content-info"],[1,"content-icons"],["href","https://wa.me/3160520963","target","_blank",1,"msj","wpp",3,"click"],["href","https://www.instagram.com/vilean__/","target","_blank",1,"msj","ig"],["href","https://mailto:vileanrg@gmail.com","target","_blank",1,"msj","gmail",3,"click"],[1,"color-white","text-start",3,"click"],["href","https://wa.me/3160520963","target","_blank"],[1,"color-white","text-start"],["href","https://www.instagram.com/vilean__/","target","_blank"],["href","mailto:vileanrg@gmail.com","target","_blank"],[1,"politics"],[1,"color-secondary","pointer",3,"routerLink"],[1,"color-secondary","punto"]],template:function(e,d){1&e&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n._UZ(3,"div",3),n.qZA(),n.TgZ(4,"div")(5,"h2",4),n._uU(6," CONTACTO "),n.qZA(),n.TgZ(7,"div",5)(8,"div",6)(9,"a",7),n.NdJ("click",function(){return d.conversionesService.leadEvent()}),n.qZA(),n._UZ(10,"a",8),n.TgZ(11,"a",9),n.NdJ("click",function(){return d.conversionesService.leadEvent()}),n.qZA()(),n.TgZ(12,"div")(13,"p",10),n.NdJ("click",function(){return d.conversionesService.leadEvent()}),n.TgZ(14,"a",11),n._uU(15,"+57 316 052 0963"),n.qZA()(),n.TgZ(16,"p",12)(17,"a",13),n._uU(18,"@vilean__"),n.qZA()(),n.TgZ(19,"p",10),n.NdJ("click",function(){return d.conversionesService.leadEvent()}),n.TgZ(20,"a",14),n._uU(21,"vileanrg@gmail.com"),n.qZA()()()()(),n._UZ(22,"hr"),n.TgZ(23,"div",15)(24,"p",16),n._uU(25,"T\xe9rminos y condiciones"),n.qZA(),n.TgZ(26,"p",17),n._uU(27," \xb7 "),n.qZA(),n.TgZ(28,"p",16),n._uU(29,"Pol\xedtica de privacidad"),n.qZA(),n.TgZ(30,"p",17),n._uU(31," \xb7 "),n.qZA(),n.TgZ(32,"p",16),n._uU(33,"Pol\xedtica de cookies"),n.qZA(),n.TgZ(34,"p",17),n._uU(35," \xb7 "),n.qZA(),n.TgZ(36,"p",16),n._uU(37,"Aviso legal"),n.qZA(),n.TgZ(38,"p",17),n._uU(39," \xb7 "),n.qZA(),n.TgZ(40,"p",16),n._uU(41,"Tratamiento de datos"),n.qZA()()()(),n.TgZ(42,"div",1),n._uU(43," \xa9 2023 GRUPO LEAN S.A.S.\n"),n.qZA()),2&e&&(n.xp6(24),n.Q6J("routerLink","/terminos-condiciones"),n.xp6(4),n.Q6J("routerLink","/politicas-privacidad"),n.xp6(4),n.Q6J("routerLink","/politicas-cookies"),n.xp6(4),n.Q6J("routerLink","/aviso-legal"),n.xp6(4),n.Q6J("routerLink","/tratamiento-datos"))},dependencies:[c.ez,m.Bz,m.rH],styles:[".footer[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#222e5e;padding:30px}.pointer[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}a[_ngcontent-%COMP%]:active{color:#fff}.content-footer[_ngcontent-%COMP%]{background:#222e5e;padding-top:20px;padding-bottom:20px}.footer[_ngcontent-%COMP%]{color:#f0f0f0;text-align:center}p[_ngcontent-%COMP%]{text-align:center;font-weight:400;line-height:22px}.logo-footer[_ngcontent-%COMP%]{position:relative;width:160px;height:65px;background:url(logo_footer.d9598d8b5be80621.png) no-repeat center center;background-size:155px 58px;z-index:10;margin:0 auto}.margin[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}.content-logo[_ngcontent-%COMP%]{padding-bottom:35px}.msj[_ngcontent-%COMP%]{width:17px;height:17px;margin-right:4px}.wpp[_ngcontent-%COMP%]{background-image:url(https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/CO-23.png);background-repeat:no-repeat;background-size:cover}.ig[_ngcontent-%COMP%]{background-image:url(https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/CO-24.png);background-repeat:no-repeat;background-size:cover}.gmail[_ngcontent-%COMP%]{background-image:url(https://vilean.s3.us-east-2.amazonaws.com/IMAGENES+SITIO+WEB/CO-25.png);background-repeat:no-repeat;background-size:cover}hr[_ngcontent-%COMP%]{width:280px;margin:40px auto;border-color:#fad030}.content-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:50px 180px;margin:15px auto;justify-content:center;column-gap:5px}.content-icons[_ngcontent-%COMP%]{display:grid;justify-content:flex-end;align-items:center}.text-start[_ngcontent-%COMP%]{text-align:start}.punto[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 728px){.politics[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:25px;margin-top:40px}hr[_ngcontent-%COMP%]{display:none}.punto[_ngcontent-%COMP%]{display:block;font-size:30px}}"]}),t})()},833:(C,g,o)=>{o.d(g,{x:()=>p});var n=o(4650),c=o(6895);function m(t,u){if(1&t&&(n.TgZ(0,"p",3)(1,"mark",4),n._uU(2),n.qZA()()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngClass",e.classMarkCoupon),n.xp6(1),n.hij(" Cup\xf3n descuento: ",e.showCouponTextCourse?"20LANZAMIENTO":"10KITVIAJERO"," ")}}const s=function(t,u){return[t,u]};let p=(()=>{class t{constructor(){this.classButton="class_yellow",this.sizeButton="large",this.nameButton="",this.load=!1,this.disabledButton=!1,this.textKit="15KITVIAJERO",this.textCourse="20LANZAMIENTO",this.showCouponTextKit=!1,this.showCouponTextCourse=!1,this.classMarkCoupon="coupon-color_blue_white",this.emitClick=new n.vpe}handelClick(){this.disabledButton||this.emitClick.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-generic-button"]],inputs:{classButton:"classButton",sizeButton:"sizeButton",nameButton:"nameButton",load:"load",disabledButton:"disabledButton",textKit:"textKit",textCourse:"textCourse",showCouponTextKit:"showCouponTextKit",showCouponTextCourse:"showCouponTextCourse",classMarkCoupon:"classMarkCoupon"},outputs:{emitClick:"emitClick"},standalone:!0,features:[n.jDz],decls:5,vars:6,consts:[[1,"button"],[3,"ngClass","click"],["class","text-center",4,"ngIf"],[1,"text-center"],[3,"ngClass"]],template:function(e,d){1&e&&(n.TgZ(0,"div")(1,"div",0)(2,"a",1),n.NdJ("click",function(){return d.handelClick()}),n._uU(3),n.qZA()(),n.YNc(4,m,3,2,"p",2),n.qZA()),2&e&&(n.xp6(2),n.Q6J("ngClass",n.WLB(3,s,d.classButton,d.sizeButton)),n.xp6(1),n.Oqu(d.nameButton),n.xp6(1),n.Q6J("ngIf",d.showCouponTextCourse||d.showCouponTextKit))},dependencies:[c.ez,c.mk,c.O5],styles:[".button[_ngcontent-%COMP%]{display:flex;justify-content:center}.button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{justify-content:center;align-self:center;border-radius:25px;border-style:none;cursor:pointer;display:flex;align-items:center;font-weight:700}.class_yellow[_ngcontent-%COMP%]{background:#FAD030;color:#222e5e}.class_blue[_ngcontent-%COMP%]{background:#222e5e;color:#fff}.class_blue_color_yellow[_ngcontent-%COMP%]{background:#222e5e;color:#fad030}.class_white_color_blue[_ngcontent-%COMP%]{background:white;color:#222e5e;border:1px solid #222e5e!important}.class_gray_color_blue[_ngcontent-%COMP%]{background:#f2f2f2;color:#222e5e;border:1px solid #222e5e!important}.large[_ngcontent-%COMP%]{min-width:300px;height:40px;letter-spacing:1px;font-size:20px}.small[_ngcontent-%COMP%]{min-width:140px;height:30px;font-size:14px}.medium[_ngcontent-%COMP%]{min-width:220px;height:40px;font-size:20px}.coupon-color_white_blue[_ngcontent-%COMP%]{color:#fff;background-color:#222e5e}.coupon-color_blue_white[_ngcontent-%COMP%]{color:#222e5e;background-color:#fff}"]}),t})()},1192:(C,g,o)=>{o.d(g,{T:()=>m});var n=o(6895),c=o(4650);let m=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-header-promotions"]],standalone:!0,features:[c.jDz],decls:2,vars:0,consts:[[1,"icon-logo"]],template:function(t,u){1&t&&(c.TgZ(0,"header"),c._UZ(1,"span",0),c.qZA())},dependencies:[n.ez],styles:["header[_ngcontent-%COMP%]{width:100%;height:60px;padding:0 20px;display:flex;justify-content:center;align-items:center;background:#222e5e}.icon-logo[_ngcontent-%COMP%]{display:block;width:115px;height:30px;background-image:url(logo.26b852e5e58a16c9.png);background-repeat:no-repeat;background-size:cover}"]}),s})()}}]);