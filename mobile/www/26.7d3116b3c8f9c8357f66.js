(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"f+ep":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=u("J563"),r=function(){function l(l,n){this.router=l,this.authService=n,this.loading=!1,this.loginError=!1}return l.prototype.ngOnInit=function(){this.loading=!1,this.loginError=!1,this.username="",this.password=""},l.prototype.ionViewWillEnter=function(){this.loading=!1,this.loginError=!1,this.username="",this.password=""},l.prototype.login=function(){var l=this;this.loading=!0,this.loginError=!1,this.authService.login(this.username,this.password).then(function(n){l.router.navigate(["/coaching-paths"])},function(n){console.log(JSON.stringify(n)),l.loading=!1,l.loginError=!0})},l}(),i=function(){return function(){}}(),t=u("pMnS"),a=u("gIcY"),s=u("Ip0R"),b=u("oBZk"),c=u("ZZ/e"),g=u("ZYCi"),d=e.ob({encapsulation:0,styles:[[".login-cont[_ngcontent-%COMP%]{min-height:80vh;overflow-y:scroll}.logo-cont[_ngcontent-%COMP%]{height:26vh;margin:2vh 0;width:100%;display:flex;flex-direction:row;align-content:center;align-items:center;justify-content:center;background:url(elan-coaching-app-logo.d429493edf20e7bca9db.png) center/contain no-repeat}.form-err[_ngcontent-%COMP%]{color:red}"]],data:{}});function p(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","error-cont"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Username o password non corretti "])),(l()(),e.qb(2,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function h(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,37,"div",[["class","p-5"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,0,"div",[["class","logo-cont"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,35,"form",[["class","flex-1 flex-cont-col"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==e.Ab(l,4).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Ab(l,4).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.login()&&o),o},null,null)),e.pb(3,16384,null,0,a.m,[],null,null),e.pb(4,4210688,[["loginForm",4]],0,a.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Fb(2048,null,a.a,null,[a.i]),e.pb(6,16384,null,0,a.h,[[4,a.a]],null,null),(l()(),e.qb(7,0,null,null,26,"div",[["class","flex-1 h-center flex-cont-col v-center"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,25,"div",[["class","w-100"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,p)),e.pb(10,16384,null,0,s.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(11,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Username"])),(l()(),e.qb(13,0,null,null,9,"ion-input",[["email",""],["name","username"],["placeholder","Username"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,r=l.component;return"ionBlur"===n&&(o=!1!==e.Ab(l,17)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.Ab(l,17)._handleInputEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(r.username=u)&&o),o},b.H,b.m)),e.pb(14,16384,null,0,a.k,[],{required:[0,"required"]},null),e.pb(15,16384,null,0,a.b,[],{email:[0,"email"]},null),e.Fb(1024,null,a.d,function(l,n){return[l,n]},[a.k,a.b]),e.pb(17,16384,null,0,c.Kb,[e.k],null,null),e.Fb(1024,null,a.e,function(l){return[l]},[c.Kb]),e.pb(19,671744,null,0,a.j,[[2,a.a],[6,a.d],[8,null],[6,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.f,null,[a.j]),e.pb(21,16384,null,0,a.g,[[4,a.f]],null,null),e.pb(22,49152,null,0,c.F,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.qb(23,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Password"])),(l()(),e.qb(25,0,null,null,8,"ion-input",[["name","password"],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0,r=l.component;return"ionBlur"===n&&(o=!1!==e.Ab(l,28)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.Ab(l,28)._handleInputEvent(u.target.value)&&o),"ngModelChange"===n&&(o=!1!==(r.password=u)&&o),o},b.H,b.m)),e.pb(26,16384,null,0,a.k,[],{required:[0,"required"]},null),e.Fb(1024,null,a.d,function(l){return[l]},[a.k]),e.pb(28,16384,null,0,c.Kb,[e.k],null,null),e.Fb(1024,null,a.e,function(l){return[l]},[c.Kb]),e.pb(30,671744,null,0,a.j,[[2,a.a],[6,a.d],[8,null],[6,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,a.f,null,[a.j]),e.pb(32,16384,null,0,a.g,[[4,a.f]],null,null),e.pb(33,49152,null,0,c.F,[e.h,e.k,e.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),e.qb(34,0,null,null,3,"div",[["class","pt-5 w-100 flex-cont-col v-center h-center"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,2,"ion-button",[["class","not-fixed"],["color","primary"],["fill","solid"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.login()&&e),e},b.x,b.c)),e.pb(36,49152,null,0,c.j,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],fill:[2,"fill"]},null),(l()(),e.Ib(-1,0,[" Login "]))],function(l,n){var u=n.component;l(n,10,0,u.loginError),l(n,14,0,""),l(n,15,0,""),l(n,19,0,"username",u.username),l(n,22,0,"username","Username","","email"),l(n,26,0,""),l(n,30,0,"password",u.password),l(n,33,0,"password","Password","","password"),l(n,36,0,"primary",e.Ab(n,4).invalid,"solid")},function(l,n){l(n,2,0,e.Ab(n,6).ngClassUntouched,e.Ab(n,6).ngClassTouched,e.Ab(n,6).ngClassPristine,e.Ab(n,6).ngClassDirty,e.Ab(n,6).ngClassValid,e.Ab(n,6).ngClassInvalid,e.Ab(n,6).ngClassPending),l(n,13,0,e.Ab(n,14).required?"":null,e.Ab(n,21).ngClassUntouched,e.Ab(n,21).ngClassTouched,e.Ab(n,21).ngClassPristine,e.Ab(n,21).ngClassDirty,e.Ab(n,21).ngClassValid,e.Ab(n,21).ngClassInvalid,e.Ab(n,21).ngClassPending),l(n,25,0,e.Ab(n,26).required?"":null,e.Ab(n,32).ngClassUntouched,e.Ab(n,32).ngClassTouched,e.Ab(n,32).ngClassPristine,e.Ab(n,32).ngClassDirty,e.Ab(n,32).ngClassValid,e.Ab(n,32).ngClassInvalid,e.Ab(n,32).ngClassPending)})}function f(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"ion-spinner",[],null,null,null,b.M,b.r)),e.pb(1,49152,null,0,c.qb,[e.h,e.k,e.z],null,null)],null,null)}function m(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","flex-cont-col v-center h-center h-100"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[["class","flex-cont-col v-center h-center"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,f)),e.pb(3,16384,null,0,s.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Caricamento..."]))],function(l,n){l(n,3,0,n.component.loading)},null)}function v(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,5,"ion-content",[["fullscreen","true"],["scroll-y","true"]],null,null,null,b.E,b.j)),e.pb(1,49152,null,0,c.t,[e.h,e.k,e.z],{fullscreen:[0,"fullscreen"]},null),(l()(),e.hb(16777216,null,0,1,null,h)),e.pb(3,16384,null,0,s.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,0,1,null,m)),e.pb(5,16384,null,0,s.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,"true"),l(n,3,0,!u.loading),l(n,5,0,u.loading)},null)}function C(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-login",[],null,null,null,v,d)),e.pb(1,114688,null,0,r,[g.m,o.a],null,null)],function(l,n){l(n,1,0)},null)}var y=e.mb("app-login",r,C,{},{},[]);u.d(n,"LoginPageModuleNgFactory",function(){return q});var q=e.nb(i,[],function(l){return e.xb([e.yb(512,e.j,e.bb,[[8,[t.a,y]],[3,e.j],e.x]),e.yb(4608,s.n,s.m,[e.u,[2,s.C]]),e.yb(4608,a.n,a.n,[]),e.yb(4608,c.b,c.b,[e.z,e.g]),e.yb(4608,c.Fb,c.Fb,[c.b,e.j,e.q]),e.yb(4608,c.Ib,c.Ib,[c.b,e.j,e.q]),e.yb(1073742336,s.b,s.b,[]),e.yb(1073742336,a.l,a.l,[]),e.yb(1073742336,a.c,a.c,[]),e.yb(1073742336,c.Cb,c.Cb,[]),e.yb(1073742336,g.o,g.o,[[2,g.u],[2,g.m]]),e.yb(1073742336,i,i,[]),e.yb(1024,g.k,function(){return[[{path:"",component:r}]]},[])])})}}]);