(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{1824:function(e,a,t){},2328:function(e,a,t){"use strict";t.r(a);var n=t(42),c=t(0),l=t.n(c),s=t(831),r=t(186),o=t(130),i=t(1483),m=(t(1824),t(37)),d=t(43),u=t.n(d),p=t(1053),E=t.n(p),v=t(22);a.default=function(){var e=Object(c.useState)({}),a=Object(n.a)(e,2),t=a[0],d=a[1],p=Object(c.useState)(""),b=Object(n.a)(p,2),h=b[0],N=b[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"row cancelbtn"},l.a.createElement("span",null,l.a.createElement(m.a,{to:"/dashboard"},l.a.createElement(o.b,{size:35})))),l.a.createElement("div",{className:"dashboard-sectionss dashboard-main"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"workspace"},l.a.createElement("h3",null,"Create a workspace")),l.a.createElement("p",{className:"parawork"},"A workspace is a group of social media channels and collaborators, a place where you can organize your campaigns, workflows and assets.")),l.a.createElement("div",{className:"centrr"},l.a.createElement("div",{className:"inputcoc"},l.a.createElement(s.a,{className:"labelnew"},"Workspace name"),l.a.createElement("input",{required:!0,type:"text",id:"fname",placeholder:"Nutella",className:"form-control",value:h,onChange:function(e){return N(e.target.value)}})),l.a.createElement("div",{className:"inputcoc"},l.a.createElement(s.a,{className:"labelnew"},"Workspace timezone (optional)"),l.a.createElement("p",null,l.a.createElement(i.a,{required:!0,value:t,onChange:d}))),l.a.createElement("div",{onClick:function(e){e.preventDefault(),console.log(h,null===t||void 0===t?void 0:t.label),""!==h&&void 0!==t?u.a.post("http://13.127.168.84:3000/user/createWorkSpace",{workspacename:h,timezone:null===t||void 0===t?void 0:t.label}).then((function(e){console.log(e.data),"success"==e.data.message&&v.a.push("/workspaceone/".concat(e.data.data._id))})).catch((function(e){"already exists"==e.response.data.message&&E()("Workspace already exist with This Name")})):E()("Enter Details First")},className:"inputcoc intutbtn"},l.a.createElement(m.a,null,l.a.createElement("div",{className:"btnnextform"},l.a.createElement(r.a,{className:"btnnext"},l.a.createElement("span",{className:"nextvtn"},"Next ",l.a.createElement(o.l,{size:15})))))))))}}}]);
//# sourceMappingURL=144.d26f744d.chunk.js.map