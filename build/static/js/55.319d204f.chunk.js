(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[55],{2102:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},2215:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(15),s=t(17),l=t(16),c=t(1),i=t.n(c),o=t(1392),u=t(1393),p=t(1394),m=t(1395),d=t(1396),f=t(815),b=t(796),h=t(797),g=t(1397),v=t(816),E=t(817),y=t(4),j=t.n(y),N=t(855),O=t(818),T=t(814),C=t(1405),w=t(189),x=t(811),k=t(271),P=t(27),R=t(47),I=t(22),M=(t(581),t(582),t(42)),S=t.n(M),z=t(215);R.apps.length||R.initializeApp(z.a);var W=R.auth(),A=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(N.a,{onSubmit:this.handleRegister},i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),i.a.createElement(C.a,null,"Name")),i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),i.a.createElement(C.a,null,"Email")),i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),i.a.createElement(C.a,null,"Password")),i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),i.a.createElement(C.a,null,"Confirm Password")),i.a.createElement(O.a,null,i.a.createElement(x.a,{color:"primary",icon:i.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(w.a.Ripple,{onClick:function(){return I.a.push("/pages/login")},color:"primary",outline:!0},"Login"),i.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(i.a.Component),q=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var r=null;W.createUserWithEmailAndPassword(e,a).then((function(e){W.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(r=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:r,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:r,name:t}}))})),I.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(A),L=t(69),F=function(e){var a=Object(L.b)(),t=a.isAuthenticated,n=a.loginWithRedirect;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{className:"pt-1 pb-3"},i.a.createElement(w.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),t?console.log("Already Logged In"):n()}},"Register With Auth0")))},J=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(N.a,{action:"/",onSubmit:this.handleRegister},i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),i.a.createElement(C.a,null,"Name")),i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),i.a.createElement(C.a,null,"Email")),i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),i.a.createElement(C.a,null,"Password")),i.a.createElement(O.a,{className:"form-label-group"},i.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),i.a.createElement(C.a,null,"Confirm Password")),i.a.createElement(O.a,null,i.a.createElement(x.a,{color:"primary",icon:i.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(w.a.Ripple,{color:"primary",outline:!0,onClick:function(){I.a.push("/pages/login")}},"Login"),i.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(i.a.Component),_=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t){return function(n){S.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),I.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(J),D=t(2102),G=t.n(D),H=(t(944),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(o.a,{className:"m-0 justify-content-center"},i.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},i.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},i.a.createElement(o.a,{className:"m-0"},i.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},i.a.createElement("img",{className:"mr-1",src:G.a,alt:"registerImg"})),i.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},i.a.createElement(p.a,{className:"rounded-0 mb-0 p-2"},i.a.createElement(m.a,{className:"pb-1 pt-50"},i.a.createElement(d.a,null,i.a.createElement("h4",{className:"mb-0"},"Create Account"))),i.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),i.a.createElement(f.a,{tabs:!0,className:"px-2"},i.a.createElement(b.a,null,i.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"JWT")),i.a.createElement(b.a,null,i.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Firebase")),i.a.createElement(b.a,null,i.a.createElement(h.a,{className:j()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Auth0"))),i.a.createElement(g.a,{className:"pt-1 pb-50"},i.a.createElement(v.a,{activeTab:this.state.activeTab},i.a.createElement(E.a,{tabId:"1"},i.a.createElement(_,null)),i.a.createElement(E.a,{tabId:"2"},i.a.createElement(q,null)),i.a.createElement(E.a,{tabId:"3"},i.a.createElement(F,null))))))))))}}]),t}(i.a.Component));a.default=H},807:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(1),r=t.n(n).a.createContext({})},811:function(e,a,t){"use strict";var n=t(14),r=t(15),s=t(17),l=t(16),c=t(1),i=t.n(c),o=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=o},814:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(12),l=t(13),c=t(1),i=t.n(c),o=t(2),u=t.n(o),p=t(4),m=t.n(p),d=t(5),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,o=e.invalid,u=e.tag,p=e.addon,f=e.plaintext,b=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),y="form-control";f?(y+="-plaintext",E=u||"input"):"file"===s?y+="-file":"range"===s?y+="-range":g&&(y=p?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(d.mapToCssModules)(m()(a,o&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,y),t);return("input"===E||u&&"function"===typeof u)&&(h.type=s),h.children&&!f&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(E,Object(n.a)({},h,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},815:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(1),l=t.n(s),c=t(2),i=t.n(c),o=t(4),u=t.n(o),p=t(5),m={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:p.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tabs,c=e.pills,i=e.vertical,o=e.horizontal,m=e.justified,d=e.fill,f=e.navbar,b=e.card,h=e.tag,g=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(p.mapToCssModules)(u()(a,f?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":s,"card-header-tabs":b&&s,"nav-pills":c,"card-header-pills":b&&c,"nav-justified":m,"nav-fill":d}),t);return l.a.createElement(h,Object(n.a)({},g,{className:v}))};d.propTypes=m,d.defaultProps={tag:"ul",vertical:!1},a.a=d},816:function(e,a,t){"use strict";var n=t(6),r=t(13),s=t(1),l=t.n(s),c=t(2),i=t.n(c),o=t(4),u=t.n(o),p=t(807),m=t(5),d={tag:m.tagPropType,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,s=Object(m.omit)(this.props,Object.keys(d)),c=Object(m.mapToCssModules)(u()("tab-content",a),t);return l.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},s,{className:c})))},a}(s.Component);a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},817:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(6),r=t(8),s=t(1),l=t.n(s),c=t(2),i=t.n(c),o=t(4),u=t.n(o),p=t(807),m=t(5),d={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function f(e){var a=e.className,t=e.cssModule,s=e.tabId,c=e.tag,i=Object(r.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(m.mapToCssModules)(u()("tab-pane",a,{active:s===e}),t)};return l.a.createElement(p.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(c,Object(n.a)({},i,{className:o(a)}))}))}f.propTypes=d,f.defaultProps={tag:"div"}},818:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(1),l=t.n(s),c=t(2),i=t.n(c),o=t(4),u=t.n(o),p=t(5),m={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:p.tagPropType,className:i.a.string,cssModule:i.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,i=e.check,o=e.inline,m=e.tag,d=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(p.mapToCssModules)(u()(a,!!s&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===m&&(d.disabled=c),l.a.createElement(m,Object(n.a)({},d,{className:f}))};d.propTypes=m,d.defaultProps={tag:"div"},a.a=d},855:function(e,a,t){"use strict";var n=t(6),r=t(8),s=t(12),l=t(13),c=t(1),i=t.n(c),o=t(2),u=t.n(o),p=t(4),m=t.n(p),d=t(5),f={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,o=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(d.mapToCssModules)(m()(a,!!s&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:c,className:u}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},944:function(e,a,t){}}]);
//# sourceMappingURL=55.319d204f.chunk.js.map