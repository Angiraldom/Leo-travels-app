"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[274],{1274:(m,i,e)=>{e.r(i),e.d(i,{default:()=>g});var o=e(4650),d=e(6895),r=e(4006),u=e(5311),p=e(263),c=e(7337);function l(t,s){1&t&&(o.TgZ(0,"div",9),o._uU(1," Las contrase\xf1as no coinciden "),o.qZA())}let g=(()=>{class t{constructor(){this.fb=(0,o.f3M)(r.qu),this.authService=(0,o.f3M)(p.e),this.router=(0,o.f3M)(c.F0),this.activatedRoute=(0,o.f3M)(c.gz),this.token="",this.form=this.fb.group({password:["",r.kI.required],confirmPassword:["",r.kI.required]},{validators:[u.d.MatchValidator("password","confirmPassword")]})}ngOnInit(){this.activatedRoute.queryParamMap.subscribe(n=>{const a=n.get("token");a?this.token=a:this.router.navigateByUrl("login")})}sendData(){if(this.form.invalid)return;const{password:n}=this.form.getRawValue();this.authService.postMethod("user/change-password",{password:n,token:this.token}).subscribe({next:()=>{console.log("Cambio exitoso"),this.form.reset(),this.router.navigateByUrl("login")},error:()=>{console.log("Hubo un error")}})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-change-password"]],standalone:!0,features:[o.jDz],decls:15,vars:3,consts:[[1,"container"],[3,"formGroup"],[1,"form-group"],["for","password"],["type","password","id","password","name","password","formControlName","password","placeholder","Ingrese su contrase\xf1a","required",""],["for","confirmPassword"],["type","password","id","confirmPassword","name","confirmPassword","formControlName","confirmPassword","placeholder","Confirmar contrase\xf1a","required",""],["class","error-message",4,"ngIf"],["type","submit",3,"disabled","click"],[1,"error-message"]],template:function(n,a){1&n&&(o.TgZ(0,"div",0)(1,"form",1)(2,"h2"),o._uU(3,"Ingresa tu nueva contrase\xf1a"),o.qZA(),o.TgZ(4,"div",2)(5,"label",3),o._uU(6,"Contrase\xf1a:"),o.qZA(),o._UZ(7,"input",4),o.qZA(),o.TgZ(8,"div",2)(9,"label",5),o._uU(10,"Confirmar contrase\xf1a:"),o.qZA(),o._UZ(11,"input",6),o.qZA(),o.YNc(12,l,2,0,"div",7),o.TgZ(13,"button",8),o.NdJ("click",function(){return a.sendData()}),o._uU(14,"Cambiar contrase\xf1a"),o.qZA()()()),2&n&&(o.xp6(1),o.Q6J("formGroup",a.form),o.xp6(11),o.Q6J("ngIf",a.form.getError("passwordMismatch")),o.xp6(1),o.Q6J("disabled",a.form.invalid))},dependencies:[d.ez,d.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".container[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:20px}form[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:20px;border-radius:5px}h2[_ngcontent-%COMP%]{text-align:center}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}label[_ngcontent-%COMP%]{display:block;font-weight:700}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:4px}button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#4caf50;color:#fff;border:none;border-radius:4px;cursor:pointer}.error-message[_ngcontent-%COMP%]{color:red}@media (max-width: 600px){.container[_ngcontent-%COMP%]{max-width:100%;padding:10px}}"]}),t})()}}]);