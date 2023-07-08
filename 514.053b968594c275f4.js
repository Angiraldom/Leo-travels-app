"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[514],{5514:(k,p,a)=>{a.r(p),a.d(p,{ProductsModule:()=>j});var Z=a(6895),s=a(4006),m=a(9066),u=a(7337),t=a(4650),d=a(5412),f=a(6551),T=a(9766),v=a(1740),x=a(5121),M=a(7188),g=a(8142),h=a(3615);const _=function(){return{height:"180px"}};let C=(()=>{class e{constructor(){this.fb=(0,t.f3M)(s.qu),this.data=(0,t.f3M)(d.WI),this.dialogRef=(0,t.f3M)(d.so),this.baseService=(0,t.f3M)(f.b),this.selectedFiles=[],this.loading=!1,this.form=this.fb.group({_id:[],name:["",s.kI.required],description:["",s.kI.required],price:[0,s.kI.required],weight:[0,s.kI.required],broad:[0],height:[0],long:[0],imageProperties:[]})}ngOnInit(){this.data&&this.form.patchValue(this.data)}validateAction(){if(!this.form.invalid){if(this.loading=!0,!this.data)return void this.saveProduct();this.updateProduct()}}updateProduct(){const o=this.form.getRawValue();delete o.id;const n=new FormData;this.selectedFiles.forEach((l,c)=>{n.append("images",this.selectedFiles[c])}),n.append("data",JSON.stringify(o)),this.baseService.patchMethod("product/"+this.data._id,n).subscribe({next:()=>{console.log("Actualizo correctamente"),this.form.reset(),this.selectedFiles=[],this.loading=!1,this.dialogRef.close({refresh:!0})},error:()=>this.loading=!1})}saveProduct(){const o=this.form.getRawValue();delete o.id;const n=new FormData;this.selectedFiles.forEach((l,c)=>{n.append("images",this.selectedFiles[c])}),n.append("data",JSON.stringify(o)),this.baseService.postMethod("product",n).subscribe({next:()=>{console.log("Guardo correctamente"),this.form.reset(),this.selectedFiles=[],this.dialogRef.close({refresh:!0})},error:()=>this.loading=!1})}onFileSelected(o){const n=o.target.files[0];this.selectedFiles.push(n),this.setNameImage(n.name)}setNameImage(o){const n=this.form.get("imageProperties")?.value,l={key:o,url:""};n?(n.push(l),this.form.get("imageProperties")?.setValue(n)):this.form.get("imageProperties")?.setValue([l])}removeImage(o){this.selectedFiles=this.selectedFiles.filter(n=>n.name!==o.value.key)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-create-product"]],decls:46,vars:25,consts:[[3,"titleModal"],[3,"formGroup"],[1,"content-form"],[1,"p-float-label"],["pInputText","","id","username","formControlName","name",1,"input-name"],["htmlFor","username"],["formControlName","description"],[1,"course-content-image"],[1,"content-three"],["pInputText","","id","long","formControlName","height",1,"input-name"],["for","height"],["pInputText","","id","long","formControlName","long",1,"input-name"],["htmlFor","long"],["pInputText","","id","broad","formControlName","broad",1,"input-name"],["htmlFor","broad"],["id","weight","inputId","integeronly","formControlName","weight",1,"input-name"],["htmlFor","weight"],["id","float-input","formControlName","price","inputId","currency-us","mode","currency","currency","USD","locale","en-US"],["for","float-input"],[1,"content-images"],[1,"button-file"],["type","file","id","images","name","images",1,"custom-file-input",3,"change"],["for","images",1,"custom-file-label"],[1,"card","p-fluid"],["formControlName","imageProperties","field","key"],[3,"disabledButton","loading","handleSaveButton"]],template:function(o,n){1&o&&(t._UZ(0,"app-title-modal",0),t.TgZ(1,"form",1)(2,"div",2)(3,"span",3),t._UZ(4,"input",4),t.TgZ(5,"label",5),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t._UZ(8,"p-editor",6),t.TgZ(9,"h3"),t._uU(10,"Especificaciones del producto"),t.qZA(),t.TgZ(11,"div",7)(12,"div",8)(13,"span",3),t._UZ(14,"input",9),t.TgZ(15,"label",10),t._uU(16),t.ALo(17,"translate"),t.qZA()(),t.TgZ(18,"span",3),t._UZ(19,"input",11),t.TgZ(20,"label",12),t._uU(21),t.ALo(22,"translate"),t.qZA()(),t.TgZ(23,"span",3),t._UZ(24,"input",13),t.TgZ(25,"label",14),t._uU(26),t.ALo(27,"translate"),t.qZA()()(),t.TgZ(28,"span",3),t._UZ(29,"p-inputNumber",15),t.TgZ(30,"label",16),t._uU(31),t.ALo(32,"translate"),t.qZA()(),t.TgZ(33,"span",3),t._UZ(34,"p-inputNumber",17),t.TgZ(35,"label",18),t._uU(36),t.ALo(37,"translate"),t.qZA()()(),t.TgZ(38,"div",19)(39,"div",20)(40,"input",21),t.NdJ("change",function(c){return n.onFileSelected(c)}),t.qZA(),t.TgZ(41,"label",22),t._uU(42,"Seleccionar imagen"),t.qZA()(),t.TgZ(43,"div",23),t._UZ(44,"p-chips",24),t.qZA()()()(),t.TgZ(45,"app-buttons-modal",25),t.NdJ("handleSaveButton",function(){return n.validateAction()}),t.qZA()),2&o&&(t.Q6J("titleModal","crear producto"),t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(5),t.Oqu(t.lcZ(7,12,"products.form.name")),t.xp6(2),t.Akn(t.DdM(24,_)),t.xp6(8),t.Oqu(t.lcZ(17,14,"products.form.height")),t.xp6(5),t.Oqu(t.lcZ(22,16,"products.form.long")),t.xp6(5),t.Oqu(t.lcZ(27,18,"products.form.broad")),t.xp6(5),t.Oqu(t.lcZ(32,20,"products.form.weight")),t.xp6(5),t.Oqu(t.lcZ(37,22,"products.form.price")),t.xp6(9),t.Q6J("disabledButton",n.form.invalid)("loading",n.loading))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,T.cL,v.o,x.ML,M.Rn,g.i,h.p,m.X$],styles:[".custom-file-input[_ngcontent-%COMP%]{display:none}.custom-file-label[_ngcontent-%COMP%]{display:inline-block;padding:10px 20px;background-color:#222e5e;color:#fff;border-radius:5px;cursor:pointer}  .p-button{background:#222e5e}form[_ngcontent-%COMP%]{width:90%;margin:30px auto}.content-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-row-gap:30px}.content-form[_ngcontent-%COMP%]   .course-content-image[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);justify-items:right}.content-form[_ngcontent-%COMP%]   .course-content-image[_ngcontent-%COMP%]   .button-file[_ngcontent-%COMP%]{width:25%;justify-self:flex-start}.modules[_ngcontent-%COMP%]{max-height:220px;overflow-x:hidden;overflow-y:auto}.modules[_ngcontent-%COMP%]   .title-module[_ngcontent-%COMP%]{display:flex;align-items:center;column-gap:8px}.modules[_ngcontent-%COMP%]   .form-modules[_ngcontent-%COMP%]{margin:10px auto}textarea[_ngcontent-%COMP%], .input-name[_ngcontent-%COMP%]{width:100%}.content-three[_ngcontent-%COMP%]{width:335px;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.content-images[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.content-images[_ngcontent-%COMP%]   .p-fluid[_ngcontent-%COMP%]{width:75%}"]}),e})();var P=a(9524),r=a(671),y=a(7392),b=a(266);function A(e,i){1&e&&(t.TgZ(0,"th",10),t._uU(1," Producto "),t.qZA())}function O(e,i){if(1&e&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("matTooltipPosition","left")("matTooltip",o.name),t.xp6(1),t.hij(" ",o.name," ")}}function U(e,i){1&e&&(t.TgZ(0,"th",10),t._uU(1," Descripci\xf3n "),t.qZA())}function N(e,i){if(1&e&&(t.TgZ(0,"td",11),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.Q6J("matTooltipPosition","left")("matTooltip",o.description),t.xp6(1),t.hij(" ",o.description," ")}}function w(e,i){1&e&&(t.TgZ(0,"th",10),t._uU(1," Precio "),t.qZA())}function F(e,i){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.hij(" ",o.price," ")}}function L(e,i){1&e&&(t.TgZ(0,"th",10),t._uU(1," Acciones "),t.qZA())}function D(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"td",12)(1,"mat-icon",13),t.NdJ("click",function(){const c=t.CHM(o).$implicit,Y=t.oxw();return t.KtG(Y.openModal(c))}),t._uU(2,"edit"),t.qZA(),t.TgZ(3,"mat-icon"),t._uU(4," delete "),t.qZA()()}}function S(e,i){1&e&&t._UZ(0,"tr",14)}function J(e,i){1&e&&t._UZ(0,"tr",15)}let q=(()=>{class e{constructor(){this.baseService=(0,t.f3M)(f.b),this.dialog=(0,t.f3M)(d.uw),this.createModal=C,this.products=[],this.displayedColumns=["name","description","price","actions"]}ngOnInit(){this.getAllProducts()}getAllProducts(){this.baseService.getMethod("product").subscribe({next:o=>{this.products=o.data,this.dataSource=o.data}})}openModal(o){this.dialog.open(this.createModal,{hasBackdrop:!1,data:o}).afterClosed().subscribe({next:({refresh:n})=>{n&&this.getAllProducts()}})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-products"]],decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltipPosition","matTooltip",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","price"],["mat-cell","",4,"matCellDef"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",3,"matTooltipPosition","matTooltip"],["mat-cell",""],[3,"click"],["mat-header-row",""],["mat-row",""]],template:function(o,n){1&o&&(t.TgZ(0,"table",0),t.ynx(1,1),t.YNc(2,A,2,0,"th",2),t.YNc(3,O,2,3,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,U,2,0,"th",2),t.YNc(6,N,2,3,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,w,2,0,"th",2),t.YNc(9,F,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,L,2,0,"th",2),t.YNc(12,D,5,0,"td",6),t.BQk(),t.YNc(13,S,1,0,"tr",8),t.YNc(14,J,1,0,"tr",9),t.qZA()),2&o&&(t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,y.Hw,b.gM],styles:["table[_ngcontent-%COMP%]{width:100%}td[_ngcontent-%COMP%]{max-width:100px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]}),e})();const I=[{path:"",component:(()=>{class e{constructor(){this.dialog=(0,t.f3M)(d.uw),this.createModal=C}openModal(){this.dialog.open(this.createModal,{disableClose:!0})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:3,vars:2,consts:[[3,"title","description","handleClick"],[1,"content-component"]],template:function(o,n){1&o&&(t.TgZ(0,"app-header-modules",0),t.NdJ("handleClick",function(){return n.openModal()}),t.qZA(),t.TgZ(1,"div",1),t._UZ(2,"app-list-products"),t.qZA()),2&o&&t.Q6J("title","Productos")("description","Aqu\xed podr\xe1s crear, revisar, y editar todos tus productos")},dependencies:[P.l,q],styles:[".title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:30px;background:#f2f2f2}.content-component[_ngcontent-%COMP%]{padding:30px}"]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(I),u.Bz]}),e})();var Q=a(1636),R=a(4429);let j=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z.ez,B,s.UX,R.q,m.aw,Q.W,g.i,h.p,P.l]}),e})()}}]);