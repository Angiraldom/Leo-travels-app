"use strict";(self.webpackChunkleo_travels_app=self.webpackChunkleo_travels_app||[]).push([[753],{8753:(P,f,r)=>{r.d(f,{t:()=>R});var e=r(4650),p=r(9653),l=r(7337),u=r(6551),h=r(566),c=r(6895),x=r(5227),d=r(9071),m=r(5900),a=r(833);let _=(()=>{class n{constructor(){this.onAddTravelKit=new e.vpe}handleClick(){this.onAddTravelKit.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-discount-session"]],outputs:{onAddTravelKit:"onAddTravelKit"},decls:11,vars:8,consts:[[1,"discount-content"],[1,"stress"],["classButton","class_blue",3,"nameButton","sizeButton","emitClick"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"p"),e._uU(2,"Si compras el "),e.TgZ(3,"span",1),e._uU(4,"KIT VIAJERO"),e.qZA(),e._uU(5),e.ALo(6,"currency"),e.qZA(),e.TgZ(7,"h2"),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"app-generic-button",2),e.NdJ("emitClick",function(){return i.handleClick()}),e.qZA()()),2&t&&(e.xp6(5),e.hij(" completo te descontamos el 10% en todos los productos, as\xed te ahorras ",e.lcZ(6,4,27900),""),e.xp6(3),e.hij("Kit viajero: ",e.lcZ(9,6,251100),""),e.xp6(2),e.Q6J("nameButton","COMPRAR KIT")("sizeButton","large"))},dependencies:[a.x,c.H9],styles:[".discount-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px;background-color:#fad030;color:#222e5e;padding:40px 0;text-align:center}.discount-content[_ngcontent-%COMP%]   .stress[_ngcontent-%COMP%]{color:#222e5e;font-weight:700}p[_ngcontent-%COMP%]{color:#222e5e;max-width:530px;text-align:center;padding:0 20px}"]}),n})();var g=r(266);function v(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",5),e._UZ(1,"img",6),e.TgZ(2,"div",7)(3,"p",8),e._uU(4),e.qZA(),e.TgZ(5,"p",9),e._uU(6),e.ALo(7,"currency"),e.qZA(),e.TgZ(8,"app-generic-button",10),e.NdJ("emitClick",function(){const C=e.CHM(t).$implicit,q=e.oxw(2);return e.KtG(q.handleClick(C))}),e.qZA()()()}if(2&n){const t=o.$implicit;e.xp6(1),e.s9C("alt",t.name),e.Q6J("routerLink","view-product/"+t._id)("ngSrc",t.imageProperties[0].url)("width","1080")("height","1350"),e.xp6(2),e.Q6J("matTooltip",t.name)("routerLink","view-product/"+t._id),e.xp6(1),e.Oqu(t.name),e.xp6(1),e.Q6J("routerLink","view-product/"+t._id),e.xp6(1),e.Oqu(e.lcZ(7,12,t.price)),e.xp6(2),e.Q6J("sizeButton","small")("nameButton","A\xf1adir al carrito")}}function w(n,o){if(1&n&&(e.TgZ(0,"div",3),e.YNc(1,v,9,14,"div",4),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.products)}}let A=(()=>{class n{constructor(){this.onAddProduct=new e.vpe,this.products=[]}handleClick(t){this.onAddProduct.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-buy-products"]],inputs:{products:"products"},outputs:{onAddProduct:"onAddProduct"},decls:4,vars:1,consts:[[1,"content"],[1,"text-center"],["class","content-cards",4,"ngIf"],[1,"content-cards"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["oncontextmenu","return false","onkeydown","return false",3,"routerLink","ngSrc","alt","width","height"],[1,"card-info"],[1,"product-name",3,"matTooltip","routerLink"],[3,"routerLink"],[1,"component-button",3,"sizeButton","nameButton","emitClick"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2,"O si quieres comprar los productos por individual, tambi\xe9n puedes hacerlo:"),e.qZA(),e.YNc(3,w,2,1,"div",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",i.products.length>0))},dependencies:[c.sg,c.O5,l.rH,a.x,c.Zd,g.gM,c.H9],styles:[".content[_ngcontent-%COMP%]{background-color:#222e5e;display:flex;flex-direction:column;align-items:center;gap:45px;padding:45px 0}.content-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:30px;width:80%}.card[_ngcontent-%COMP%]{border-radius:8px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;cursor:pointer}.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin:8px 0 0 8px;gap:8px}.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;cursor:pointer}p[_ngcontent-%COMP%]{cursor:pointer;color:#fff}"]}),n})(),M=(()=>{class n{constructor(){this.router=(0,e.f3M)(l.F0)}changeRoute(){this.router.navigate(["/cursos"])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recommendation-session"]],decls:8,vars:2,consts:[[1,"discount-content"],[1,"stress"],["classButton","class_white_color_blue",3,"nameButton","sizeButton","emitClick"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"p"),e._uU(2,"Esperamos que disfrutes el uso de tu KIT VIAJERO y pongas en pr\xe1ctica lo aprendido en el "),e.TgZ(3,"span",1),e._uU(4,"curso de fotograf\xeda para viajes con tu celular "),e.qZA()(),e.TgZ(5,"p"),e._uU(6," Si a\xfan no lo has adquirido, da click aqu\xed: "),e.qZA(),e.TgZ(7,"app-generic-button",2),e.NdJ("emitClick",function(){return i.changeRoute()}),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("nameButton","CURSO FOTOGRAF\xcdA")("sizeButton","large"))},dependencies:[a.x],styles:[".discount-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px;background-color:#fff;color:#222e5e;padding:40px 20px;text-align:center}.discount-content[_ngcontent-%COMP%]   .stress[_ngcontent-%COMP%]{color:#222e5e;font-weight:700}p[_ngcontent-%COMP%]{color:#222e5e;max-width:570px;text-align:center;margin:0 auto}"]}),n})();var T=r(2174),O=r(805),Z=r(9429);function y(n,o){if(1&n&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.s9C("src",t.imageProperties[0].url,e.LSH),e.s9C("alt","image0")}}function b(n,o){if(1&n&&(e.TgZ(0,"div",15)(1,"div",16),e._UZ(2,"i",17),e.TgZ(3,"span",18),e._uU(4),e.qZA()(),e.TgZ(5,"span",19),e._uU(6),e.ALo(7,"currency"),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(4),e.Oqu(t.name),e.xp6(2),e.Oqu(e.lcZ(7,2,t.price))}}function k(n,o){if(1&n&&e._UZ(0,"p",20),2&n){const t=e.oxw().$implicit;e.Q6J("innerHTML",t.description,e.oJD)}}function K(n,o){1&n&&(e.ynx(0),e.TgZ(1,"p-accordionTab"),e.YNc(2,b,8,4,"ng-template",13),e.YNc(3,k,1,1,"ng-template",14),e.qZA(),e.BQk())}function S(n,o){if(1&n&&(e.TgZ(0,"div",10)(1,"p-accordion",11),e.YNc(2,K,4,0,"ng-container",12),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",t.products)}}function j(n,o){if(1&n&&(e.TgZ(0,"div",3)(1,"p-carousel",4),e.YNc(2,y,2,2,"ng-template",5),e.qZA(),e.TgZ(3,"div",6),e.YNc(4,S,3,1,"div",7),e.TgZ(5,"p",1),e._uU(6),e.ALo(7,"currency"),e.qZA()()()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("value",t.products)("numVisible",1)("numScroll",1)("circular",!0)("showIndicators",!1),e.xp6(3),e.Q6J("ngIf",t.products.length>0),e.xp6(2),e.hij("Valor total de los productos: ",e.lcZ(7,7,279e3),"")}}let B=(()=>{class n{constructor(){this.products=[],this.slideConfig={slidesToShow:1,slidesToScroll:1,arrows:!0,touchMove:!0,autoplay:!0,autoplaySpeed:7e3}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-description-session"]],inputs:{products:"products"},decls:4,vars:1,consts:[[1,"content-session"],[1,"color-blue","text-center"],["class","content-children",4,"ngIf"],[1,"content-children"],[3,"value","numVisible","numScroll","circular","showIndicators"],["pTemplate","item"],[1,"accordion"],["class","content-accordion",4,"ngIf"],[1,"slide"],["width","100%",3,"src","alt"],[1,"content-accordion"],[1,"w-full"],[4,"ngFor","ngForOf"],["pTemplate","header"],["pTemplate","content"],[1,"content-title"],[1,"flex","align-items-center"],[1,"pi","pi-calendar","mr-2"],[1,"vertical-align-middle"],[1,"price"],[1,"m-0",3,"innerHTML"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2,"\xbfQu\xe9 contiene?"),e.qZA(),e.YNc(3,j,8,9,"div",2),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",i.products.length>0))},dependencies:[c.sg,c.O5,T.UQ,T.US,O.jx,Z.l,c.H9],styles:[".color-blue[_ngcontent-%COMP%]{color:#222e5e}.content-session[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:40px 0}.text-center[_ngcontent-%COMP%]{text-align:center}.accordion[_ngcontent-%COMP%]{width:53%}.content-accordion[_ngcontent-%COMP%]{display:flex;justify-content:space-around}  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link{background-color:#222e5e;color:#fff}  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link{background-color:#222e5e;color:#fff}  .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{color:#222e5e}  .p-accordion .p-accordion-header .p-accordion-header-link{color:#222e5e}  .p-accordion .p-accordion-header .p-accordion-header-link{border:none}  .p-accordion .p-accordion-content{border:none;color:#222e5e;background-color:#fff}p-accordion[_ngcontent-%COMP%]{width:85%}.content-title[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}p-carousel[_ngcontent-%COMP%]{width:35%;align-self:flex-start}@media only screen and (max-width: 753px){.content-accordion[_ngcontent-%COMP%]{flex-direction:column}p-accordion[_ngcontent-%COMP%]{width:100%}}.slick-slider[_ngcontent-%COMP%]{background:rgb(14,13,13);margin-left:62px;width:30%;align-self:flex-start}  .slick-prev,   .slick-next{height:45px;width:40px;z-index:100}  .slick-prev:before,   .slick-next:before{color:#222e5e;font-size:49px;opacity:1}  .slick-prev{left:-53px}  .slick-next{right:-45px}.content-children[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;margin:0 auto;width:90%}@media only screen and (max-width: 768px){.content-children[_ngcontent-%COMP%]{flex-direction:column;gap:25px}.accordion[_ngcontent-%COMP%]{width:100%}.slick-slider[_ngcontent-%COMP%]{width:60%;margin-left:0;align-self:center}p-carousel[_ngcontent-%COMP%]{width:60%;align-self:center}}@media only screen and (max-width: 457px){.slick-slider[_ngcontent-%COMP%]{width:100%}p-carousel[_ngcontent-%COMP%]{width:100%}  .slick-prev,   .slick-next{display:none!important}}"]}),n})(),U=(()=>{class n{constructor(){this.onAddTravelKit=new e.vpe}handleClick(){this.onAddTravelKit.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-kit-price-session"]],outputs:{onAddTravelKit:"onAddTravelKit"},decls:12,vars:8,consts:[[1,"discount-content"],[1,"line-through"],[1,"color-blue"],["classButton","class_blue_color_yellow",3,"nameButton","sizeButton","emitClick"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"p"),e._uU(2," Valor de los productos: "),e.TgZ(3,"span",1),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e._uU(7," Ll\xe9valos todos en kit y ahorra 10% "),e.qZA(),e.TgZ(8,"h2",2),e._uU(9),e.ALo(10,"currency"),e.qZA(),e.TgZ(11,"app-generic-button",3),e.NdJ("emitClick",function(){return i.handleClick()}),e.qZA()()),2&t&&(e.xp6(4),e.hij("",e.lcZ(5,4,279e3)," "),e.xp6(5),e.hij("Kit viajero: ",e.lcZ(10,6,251100),""),e.xp6(2),e.Q6J("nameButton","COMPRAR KIT")("sizeButton","large"))},dependencies:[a.x,c.H9],styles:[".discount-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px;background-color:#f2f2f2;color:#222e5e;padding:40px 0;text-align:center}.discount-content[_ngcontent-%COMP%]   .stress[_ngcontent-%COMP%]{color:#222e5e;font-weight:700}p[_ngcontent-%COMP%]{color:#222e5e;max-width:570px;text-align:center;margin:0 auto}.line-through[_ngcontent-%COMP%]{text-decoration-line:line-through}"]}),n})(),E=(()=>{class n{constructor(){this.onAddTravelKit=new e.vpe}handleClick(){this.onAddTravelKit.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-video-session"]],outputs:{onAddTravelKit:"onAddTravelKit"},decls:11,vars:3,consts:[[1,"content-session"],[1,"paragraph"],[1,"sub-title"],["oncontextmenu","return false","onkeydown","return false","width","500px","controls","","src","https://vilean.s3.us-east-2.amazonaws.com/VIDEOS/Promocion+Kit+viajero.mp4"],[1,"button",3,"nameButton","sizeButton","classButton","emitClick"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p"),e._uU(3,"Con el KIT VIAJERO podr\xe1s tomar mejores fotos sin depender de nadie. Adem\xe1s es s\xfaper liviano, peque\xf1o y f\xe1cil de llevar, \xa1no te pondr\xe1n problema en ning\xfan avi\xf3n ni tendr\xe1 costo adicional!"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"p"),e._uU(6,"Este kit es el que siempre llevamos a todos nuestros viajes y nos permite aplicar lo que te ense\xf1amos en el curso de fotograf\xeda."),e.qZA()(),e.TgZ(7,"h2",2),e._uU(8,"\xa1Adquiere el tuyo y ll\xe9valo a todos tus viajes!"),e.qZA(),e._UZ(9,"video",3),e.TgZ(10,"app-generic-button",4),e.NdJ("emitClick",function(){return i.handleClick()}),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("nameButton","COMPRAR KIT")("sizeButton","large")("classButton","class_yellow"))},dependencies:[a.x],styles:[".content-session[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;padding:0 80px 0 145px;background-color:#222e5e;color:#fff;grid-template-rows:repeat(12,55.5px)}.paragraph[_ngcontent-%COMP%]{grid-row-start:4;grid-row-end:6;grid-column-start:2;text-align:center;max-width:450px;align-self:center;justify-self:center}.sub-title[_ngcontent-%COMP%]{grid-row-start:8;grid-row-end:10;grid-column-start:2;max-width:414px;text-align:center}.button[_ngcontent-%COMP%]{grid-row-start:10;grid-row-end:10;grid-column-start:2}video[_ngcontent-%COMP%]{grid-row-start:1;grid-row-end:12;grid-column-start:1}p[_ngcontent-%COMP%]{padding:0 20px}@media only screen and (max-width: 956px){.content-session[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:40px;padding:50px 0}video[_ngcontent-%COMP%]{width:40%;align-self:center}}@media only screen and (max-width: 748px){video[_ngcontent-%COMP%]{width:70%}}@media only screen and (max-width: 425px){video[_ngcontent-%COMP%]{width:100%}}"]}),n})();var I=r(1192);const V=["mainContent"];let J=(()=>{class n{constructor(){this.router=(0,e.f3M)(l.F0),this.onAddCourse=new e.vpe}ngAfterViewInit(){setTimeout(()=>{this.mainContent.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})},0)}addCourse(){this.onAddCourse.emit()}changeRoute(){this.router.navigate(["pagar"])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-course-promotion"]],viewQuery:function(t,i){if(1&t&&e.Gf(V,5),2&t){let s;e.iGM(s=e.CRH())&&(i.mainContent=s.first)}},outputs:{onAddCourse:"onAddCourse"},decls:17,vars:7,consts:[["mainContent",""],[1,"content","background-white","color-primary"],[1,"title"],[1,"container"],["oncontextmenu","return false","onkeydown","return false","fill","","priority","","alt","kit-viajero",1,"responsive-img",3,"ngSrc"],[1,"color-primary"],[3,"sizeButton","classButton","nameButton","emitClick"],[1,"footer"]],template:function(t,i){1&t&&(e._UZ(0,"div",null,0)(2,"app-header-promotions"),e.TgZ(3,"div",1)(4,"h2",2),e._uU(5,"\xbfQuieres a\xf1adir el curso a tu compra?"),e.qZA(),e.TgZ(6,"div",3),e._UZ(7,"img",4),e.qZA(),e.TgZ(8,"div")(9,"p"),e._uU(10,"Si compras el curso, el kit tendr\xe1 un"),e.qZA(),e.TgZ(11,"h2",5),e._uU(12,"15% de descuento"),e.qZA()(),e.TgZ(13,"app-generic-button",6),e.NdJ("emitClick",function(){return i.addCourse()}),e.qZA(),e.TgZ(14,"app-generic-button",6),e.NdJ("emitClick",function(){return i.changeRoute()}),e.qZA()(),e.TgZ(15,"div",7),e._uU(16," \xa9 2023 GRUPO LEAN S.A.S.\n"),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngSrc","https://vilean.s3.us-east-2.amazonaws.com/PORTADAS/Portada+H.jpg"),e.xp6(6),e.Q6J("sizeButton","large")("classButton","class_yellow")("nameButton","A\xf1adir al carrito"),e.xp6(1),e.Q6J("sizeButton","large")("classButton","class_white_color_blue")("nameButton","No a\xf1adir"))},dependencies:[a.x,c.Zd,I.T],styles:[".footer[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#222e5e;padding:30px}.background-white[_ngcontent-%COMP%]{background-color:#f2f2f2}.color-primary[_ngcontent-%COMP%]{color:#222e5e}.content[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;gap:20px;align-items:center;padding:30px 0;margin:1px 0;text-align:center}img[_ngcontent-%COMP%]{border-radius:8px}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:500px;height:auto}.responsive-img[_ngcontent-%COMP%]{position:relative!important;max-width:100%;max-height:100%}@media only screen and (max-width: 508px){img[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:auto}.title[_ngcontent-%COMP%]{max-width:297px}}"]}),n})();function D(n,o){if(1&n){const t=e.EpF();e.ynx(0),e._UZ(1,"app-menu"),e.TgZ(2,"div",1)(3,"p-messages",2),e.NdJ("valueChange",function(s){e.CHM(t);const C=e.oxw();return e.KtG(C.message=s)}),e.qZA()(),e.TgZ(4,"div",3),e._UZ(5,"div",4),e.qZA(),e.TgZ(6,"app-kit-price-session",5),e.NdJ("onAddTravelKit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addKitViajero())}),e.qZA(),e.TgZ(7,"app-video-session",5),e.NdJ("onAddTravelKit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addKitViajero())}),e.qZA(),e._UZ(8,"app-description-session",6),e.TgZ(9,"app-discount-session",5),e.NdJ("onAddTravelKit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addKitViajero())}),e.qZA(),e.TgZ(10,"app-buy-products",7),e.NdJ("onAddProduct",function(s){e.CHM(t);const C=e.oxw();return e.KtG(C.addProduct(s))}),e.qZA(),e._UZ(11,"app-recommendation-session")(12,"app-footer"),e.BQk()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("value",t.message),e.xp6(5),e.Q6J("products",t.products),e.xp6(2),e.Q6J("products",t.products)}}function F(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-course-promotion",8),e.NdJ("onAddCourse",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addCourse())}),e.qZA(),e.BQk()}}let R=(()=>{class n{constructor(){this.baseService=(0,e.f3M)(u.b),this.travelKitService=(0,e.f3M)(h.R),this.store=(0,e.f3M)(p.yh),this.router=(0,e.f3M)(l.F0),this.idKitViajero="64a75cd97a31b132537ae59a",this.idCourse="64a04a387a31b132537ae49d",this.products=[],this.productsInList=[],this.showPromotion=!1,this.message=[{severity:"warn",summary:"Los productos f\xedsicos solo est\xe1n disponibles para env\xedo en Colombia"}]}ngOnInit(){this.getAllProducts(),this.getCourse(),this.$store=this.store.select("cart").subscribe({next:t=>{this.productsInList=t.products}})}ngOnDestroy(){this.$store.unsubscribe()}getAllProducts(){this.baseService.getMethod("product").subscribe({next:t=>{this.products=t.data.filter(i=>i._id!==this.idKitViajero),this.productKitViajero=t.data.find(i=>i._id===this.idKitViajero)}})}getTravelKit(){this.baseService.getMethod("product/"+this.idKitViajero).subscribe({next:t=>{this.productKitViajero=t.data}})}getCourse(){this.baseService.getMethod("course/getCourse/"+this.idCourse).subscribe({next:t=>{this.course=t.data}})}addProduct(t){t&&this.addProductsCart(t)}addKitViajero(){if(this.productKitViajero){if(this.addProductsCart(this.productKitViajero),this.validateCourseExistInCart())return void this.router.navigate(["pagar"]);this.showPromotion=!0}}addCourse(){this.course&&(this.addProductsCart(this.course),this.router.navigate(["pagar"]))}addProductsCart(t){this.travelKitService.validateReference(t,this.productsInList)}validateCourseExistInCart(){return this.productsInList.some(t=>t.modules)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-kit-viajero"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"container-p-messages-kit"],["severity","warn",3,"value","valueChange"],[1,"container"],["oncontextmenu","return false","onkeydown","return false",1,"content-image"],[3,"onAddTravelKit"],[3,"products"],[3,"products","onAddProduct"],[3,"onAddCourse"]],template:function(t,i){1&t&&(e.YNc(0,D,13,3,"ng-container",0),e.YNc(1,F,2,0,"ng-container",0)),2&t&&(e.Q6J("ngIf",!i.showPromotion),e.xp6(1),e.Q6J("ngIf",i.showPromotion))},dependencies:[c.O5,x.c,d.M,m.V,_,A,M,B,U,E,J],styles:[".p-message.p-message-warn{background:#FAD030;border:solid #FAD030;border-width:0 0 0 6px;color:#222e5e}  .p-message.p-message-warn .p-message-icon{color:#222e5e}  .p-message.p-message-warn .p-message-close{color:#fff}.container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:80%;height:calc(100vh - 60px);margin:60px auto 0}.responsive-img[_ngcontent-%COMP%]{position:relative!important;max-width:100%;max-height:100%}.container-p-messages-kit[_ngcontent-%COMP%]{margin-top:60px;width:100%;z-index:1}.content-image[_ngcontent-%COMP%]{background:url(https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Kit+viajero+H.jpg) no-repeat center center;background-size:cover;width:100%;height:100%}@media only screen and (max-width: 908px){.content-image[_ngcontent-%COMP%]{background:url(https://vilean.s3.us-east-2.amazonaws.com/KIT+VIAJERO/Kit+viajero+V.jpg) no-repeat center center;background-size:cover;max-width:511px}.container[_ngcontent-%COMP%]{width:100%}}@media only screen and (min-width: 908px){.content-image[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{width:100%}}@media only screen and (min-width: 1138px){.container[_ngcontent-%COMP%]{width:80%}}"]}),n})()},566:(P,f,r)=>{r.d(f,{R:()=>h});var e=r(4650),p=r(9653),l=r(8571),u=r(1245);let h=(()=>{class c{constructor(){this.store=(0,e.f3M)(p.yh),this.mesaggeService=(0,e.f3M)(u.g)}addProduct(d,m,a){const _=a.find(g=>g._id===d._id);if(_){const g={..._};g.amount=_.amount+1,this.store.dispatch(l.nM({reference:m,product:g}))}else d.hasOwnProperty("amount")||(d=Object.assign({},d,{amount:1})),this.store.dispatch(l.gK({reference:m,product:d}));this.mesaggeService.succesMessage("","Producto a\xf1adido al carrito")}validateReference(d,m){let a=localStorage.getItem("reference");a||(a=this.generateReference(),localStorage.setItem("reference",a)),this.addProduct(d,a,m)}generateReference(){const d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=d.length;let a="";for(let g=0;g<10;g++){const v=Math.floor(Math.random()*m);a+=d.charAt(v)}return a+="-"+Date.now().toString(36),a}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},1192:(P,f,r)=>{r.d(f,{T:()=>l});var e=r(6895),p=r(4650);let l=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=p.Xpm({type:u,selectors:[["app-header-promotions"]],standalone:!0,features:[p.jDz],decls:2,vars:0,consts:[[1,"icon-logo"]],template:function(c,x){1&c&&(p.TgZ(0,"header"),p._UZ(1,"span",0),p.qZA())},dependencies:[e.ez],styles:["header[_ngcontent-%COMP%]{width:100%;height:60px;padding:0 20px;display:flex;justify-content:center;align-items:center;background:#222e5e}.icon-logo[_ngcontent-%COMP%]{display:block;width:115px;height:30px;background-image:url(logo.26b852e5e58a16c9.png);background-repeat:no-repeat;background-size:cover}"]}),u})()}}]);