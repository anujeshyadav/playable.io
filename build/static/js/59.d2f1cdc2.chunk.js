(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[59],{2265:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},2372:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(15),s=t(17),l=t(16),c=t(0),o=t.n(c),i=t(1570),u=t(1571),m=t(1572),p=t(1573),d=t(1574),f=t(818),b=t(796),h=t(797),g=t(1575),v=t(819),E=t(820),y=t(4),j=t.n(y),N=t(869),O=t(821),T=t(817),C=t(836),w=t(187),x=t(815),k=t(270),P=t(27),M=t(47),R=t(22),z=(t(581),t(582),t(42)),I=t.n(z),S=t(214);M.apps.length||M.initializeApp(S.a);var W=M.auth(),A=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{onSubmit:this.handleRegister},o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(C.a,null,"Email")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(C.a,null,"Password")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(C.a,null,"Confirm Password")),o.a.createElement(O.a,null,o.a.createElement(x.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(w.a.Ripple,{onClick:function(){return R.a.push("/pages/login")},color:"primary",outline:!0},"Login"),o.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),q=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var r=null;W.createUserWithEmailAndPassword(e,a).then((function(e){W.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(r=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:r,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:r,name:t}}))})),R.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(A),F=t(69),L=function(e){var a=Object(F.b)(),t=a.isAuthenticated,n=a.loginWithRedirect;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{className:"pt-1 pb-3"},o.a.createElement(w.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),t?console.log("Already Logged In"):n()}},"Register With Auth0")))},J=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(C.a,null,"Email")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(C.a,null,"Password")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(C.a,null,"Confirm Password")),o.a.createElement(O.a,null,o.a.createElement(x.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(w.a.Ripple,{color:"primary",outline:!0,onClick:function(){R.a.push("/pages/login")}},"Login"),o.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),_=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t){return function(n){I.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),R.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(J),D=t(2265),G=t.n(D),H=(t(961),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(m.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:G.a,alt:"registerImg"})),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(m.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(p.a,{className:"pb-1 pt-50"},o.a.createElement(d.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),o.a.createElement(f.a,{tabs:!0,className:"px-2"},o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"JWT")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Firebase")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Auth0"))),o.a.createElement(g.a,{className:"pt-1 pb-50"},o.a.createElement(v.a,{activeTab:this.state.activeTab},o.a.createElement(E.a,{tabId:"1"},o.a.createElement(_,null)),o.a.createElement(E.a,{tabId:"2"},o.a.createElement(q,null)),o.a.createElement(E.a,{tabId:"3"},o.a.createElement(L,null))))))))))}}]),t}(o.a.Component));a.default=H},807:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},815:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(17),l=t(16),c=t(0),o=t.n(c),i=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},817:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(12),l=t(13),c=t(0),o=t.n(c),i=t(1),u=t.n(i),m=t(4),p=t.n(m),d=t(5),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),y="form-control";f?(y+="-plaintext",E=u||"input"):"file"===s?y+="-file":"range"===s?y+="-range":g&&(y=m?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||u&&"function"===typeof u)&&(h.type=s),h.children&&!f&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(E,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":i}))},a}(o.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},818:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(5),p={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tabs,c=e.pills,o=e.vertical,i=e.horizontal,p=e.justified,d=e.fill,f=e.navbar,b=e.card,h=e.tag,g=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(m.mapToCssModules)(u()(a,f?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":s,"card-header-tabs":b&&s,"nav-pills":c,"card-header-pills":b&&c,"nav-justified":p,"nav-fill":d}),t);return l.a.createElement(h,Object(n.a)({},g,{className:v}))};d.propTypes=p,d.defaultProps={tag:"ul",vertical:!1},a.a=d},819:function(e,a,t){"use strict";var n=t(6),r=t(13),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(807),p=t(5),d={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,s=Object(p.omit)(this.props,Object.keys(d)),c=Object(p.mapToCssModules)(u()("tab-content",a),t);return l.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},s,{className:c})))},a}(s.Component);a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},820:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(6),r=t(8),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(807),p=t(5),d={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function f(e){var a=e.className,t=e.cssModule,s=e.tabId,c=e.tag,o=Object(r.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(p.mapToCssModules)(u()("tab-pane",a,{active:s===e}),t)};return l.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(c,Object(n.a)({},o,{className:i(a)}))}))}f.propTypes=d,f.defaultProps={tag:"div"}},821:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(5),p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,o=e.check,i=e.inline,p=e.tag,d=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(m.mapToCssModules)(u()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===p&&(d.disabled=c),l.a.createElement(p,Object(n.a)({},d,{className:f}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},836:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(5),p=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),f={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,p=e.size,d=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];c.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var s,l=!n;if(Object(m.isObject)(r)){var c,o=l?"-":"-"+a+"-";s=h(l,a,r.size),b.push(Object(m.mapToCssModules)(u()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else s=h(l,a,r),b.push(s)}}));var g=Object(m.mapToCssModules)(u()(a,!!s&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:d},f,{className:g}))};g.propTypes=f,g.defaultProps=b,a.a=g},869:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(12),l=t(13),c=t(0),o=t.n(c),i=t(1),u=t.n(i),m=t(4),p=t.n(m),d=t(5),f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(p()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},961:function(e,a,t){}}]);
//# sourceMappingURL=59.d2f1cdc2.chunk.js.map