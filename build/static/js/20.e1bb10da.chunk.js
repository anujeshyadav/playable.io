(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[20],{1099:function(e,a,t){},1213:function(e,a,t){"use strict";var r=t(14),n=t(15),l=t(17),s=t(16),o=t(1),i=t.n(o),c=t(800),p=t(804),d=t(801),u=t(799),m=t(189),h=t(814),g=t(938),f=t(952),b=t.n(f),v=t(4),E=t.n(v),y=t(887),w=t.n(y),P=t(22),D=t(314),N=t(451),x=t(272),C=t(403),S=t(273),k=t(204),A=t(271),j=t(27),F=t(79),O=t.n(F),I=t(131),R=t(42),_=t.n(R),V=function(e){return function(){var a=Object(I.a)(O.a.mark((function a(t){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.get("/api/datalist/data",e).then((function(a){t({type:"GET_DATA",data:a.data.data,totalPages:a.data.totalPages,params:e})}));case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},L=t(3),T=t(818),z=t(1405),U=t(200),H=t(49),W=t.n(H),G=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}},e.addNew=!1,e.handleSubmit=function(a){null!==e.props.data?e.props.updateData(a):(e.addNew=!0,e.props.addData(a));var t=Object.keys(e.props.dataParams).length?e.props.dataParams:{page:1,perPage:4};e.props.handleSidebar(!1,!0),e.props.getData(t)},e}return Object(n.a)(t,[{key:"componentDidUpdate",value:function(e,a){null!==this.props.data&&null===e.data&&(this.props.data.id!==a.id&&this.setState({id:this.props.data.id}),this.props.data.name!==a.name&&this.setState({name:this.props.data.name}),this.props.data.category!==a.category&&this.setState({category:this.props.data.category}),this.props.data.popularity.popValue!==a.popularity&&this.setState({popularity:Object(L.a)(Object(L.a)({},this.state.popularity),{},{popValue:this.props.data.popularity.popValue})}),this.props.data.order_status!==a.order_status&&this.setState({order_status:this.props.data.order_status}),this.props.data.price!==a.price&&this.setState({price:this.props.data.price}),this.props.data.img!==a.img&&this.setState({img:this.props.data.img})),null===this.props.data&&null!==e.data&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew&&this.setState({id:"",name:"",category:"Audio",order_status:"pending",price:"",img:"",popularity:{popValue:""}}),this.addNew=!1}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,r=a.handleSidebar,n=a.data,l=this.state,s=l.name,o=l.category,c=l.order_status,p=l.price,d=l.popularity,u=l.img;return i.a.createElement("div",{className:E()("data-list-sidebar",{show:t})},i.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},i.a.createElement("h4",null,null!==n?"UPDATE DATA":"ADD NEW DATA"),i.a.createElement(U.a,{size:20,onClick:function(){return r(!1,!0)}})),i.a.createElement(W.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},this.props.thumbView&&u.length?i.a.createElement(T.a,{className:"text-center"},i.a.createElement("img",{className:"img-fluid",src:u,alt:s}),i.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mt-2"},i.a.createElement("label",{className:"btn btn-flat-primary",htmlFor:"update-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"update-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})),i.a.createElement(m.a,{color:"flat-danger",onClick:function(){return e.setState({img:""})}},"Remove Image"))):null,i.a.createElement(T.a,null,i.a.createElement(z.a,{for:"data-name"},"Name"),i.a.createElement(h.a,{type:"text",value:s,placeholder:"Apple IphoneX",onChange:function(a){return e.setState({name:a.target.value})},id:"data-name"})),i.a.createElement(T.a,null,i.a.createElement(z.a,{for:"data-category"},"Category"),i.a.createElement(h.a,{type:"select",id:"data-category",value:o,onChange:function(a){return e.setState({category:a.target.value})}},i.a.createElement("option",null,"Audio"),i.a.createElement("option",null,"Computers"),i.a.createElement("option",null,"Fitness"),i.a.createElement("option",null,"Appliances"))),i.a.createElement(T.a,null,i.a.createElement(z.a,{for:"data-popularity"},"Popularity"),i.a.createElement(h.a,{type:"number",value:d.popValue,id:"data-popularity",placeholder:"0 - 100%",onChange:function(a){return e.setState({popularity:{popularity:d,popValue:a.target.value}})}})),i.a.createElement(T.a,null,i.a.createElement(z.a,{for:"data-status"},"Order Status"),i.a.createElement(h.a,{type:"select",id:"data-status",value:c,onChange:function(a){return e.setState({order_status:a.target.value})}},i.a.createElement("option",null,"pending"),i.a.createElement("option",null,"canceled"),i.a.createElement("option",null,"delivered"),i.a.createElement("option",null,"on hold"))),i.a.createElement(T.a,null,i.a.createElement(z.a,{for:"data-price"},"Price"),i.a.createElement(h.a,{type:"number",value:p,onChange:function(a){return e.setState({price:a.target.value})},id:"data-price",placeholder:"69.99"})),this.props.thumbView&&u.length<=0?i.a.createElement("label",{className:"btn btn-primary",htmlFor:"upload-image",color:"primary"},"Upload Image",i.a.createElement("input",{type:"file",id:"upload-image",hidden:!0,onChange:function(a){return e.setState({img:URL.createObjectURL(a.target.files[0])})}})):null),i.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},i.a.createElement(m.a,{color:"primary",onClick:function(){return e.handleSubmit(e.state)}},null!==n?"Update":"Submit"),i.a.createElement(m.a,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return r(!1,!0)}},"Cancel")))}}]),t}(o.Component),J=t(953),$=t(811),M=(t(1099),t(1255),{"on hold":"warning",delivered:"success",pending:"primary",canceled:"danger"}),X={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},Y=function(e){return i.a.createElement("div",{className:"data-list-action"},i.a.createElement(D.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),i.a.createElement(N.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},q=function(e){return i.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},i.a.createElement("div",{className:"actions-left d-flex flex-wrap"},i.a.createElement(c.a,{className:"data-list-dropdown mr-1"},i.a.createElement(p.a,{className:"p-1",color:"primary"},i.a.createElement("span",{className:"align-middle mr-1"},"Actions"),i.a.createElement(x.a,{size:15})),i.a.createElement(d.a,{tag:"div",right:!0},i.a.createElement(u.a,{tag:"a"},"Delete"),i.a.createElement(u.a,{tag:"a"},"Archive"),i.a.createElement(u.a,{tag:"a"},"Print"),i.a.createElement(u.a,{tag:"a"},"Export"))),i.a.createElement(m.a,{className:"add-new-btn",color:"primary",onClick:function(){return e.handleSidebar(!0,!0)},outline:!0},i.a.createElement(C.a,{size:15}),i.a.createElement("span",{className:"align-middle"},"Add New"))),i.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},i.a.createElement(c.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},i.a.createElement(p.a,{color:"",className:"sort-dropdown"},i.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]," - ").concat(e.index[1]," of ").concat(e.total)),i.a.createElement(x.a,{size:15})),i.a.createElement(d.a,{tag:"div",right:!0},i.a.createElement(u.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(4)}},"4"),i.a.createElement(u.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),i.a.createElement(u.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(15)}},"15"),i.a.createElement(u.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(20)}},"20"))),i.a.createElement("div",{className:"filter-section"},i.a.createElement(h.a,{type:"text",onChange:function(a){return e.handleFilter(a)}}))))},B=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Name",selector:"name",sortable:!0,minWidth:"300px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return i.a.createElement(g.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return i.a.createElement(J.a,{className:"m-0",color:M[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(a){return i.a.createElement(Y,{row:a,getData:e.props.getData,parsedFilter:e.props.parsedFilter,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:""},e.thumbView=e.props.thumbView,e.handleFilter=function(a){e.setState({value:a.target.value}),e.props.filterData(a.target.value)},e.handleRowsPerPage=function(a){var t=e.props,r=t.parsedFilter,n=t.getData,l=void 0!==r.page?r.page:1;P.a.push("/data-list/list-view?page=".concat(l,"&perPage=").concat(a)),e.setState({rowsPerPage:a}),n({page:r.page,perPage:a})},e.handleSidebar=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:a}),!0===t&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(a){if(e.props.deleteData(a),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var t=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";P.a.push("".concat(t,"list-view?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.handleCurrentData=function(a){e.setState({currentData:a}),e.handleSidebar(!0)},e.handlePagination=function(a){var t=e.props,r=t.parsedFilter,n=t.getData,l=void 0!==r.perPage?r.perPage:4,s=e.props.thumbView?"/data-list/thumb-view/":"/data-list/list-view/";P.a.push("".concat(s,"list-view?page=").concat(a.selected+1,"&perPage=").concat(l)),n({page:a.selected+1,perPage:l}),e.setState({currentPage:a.selected})},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.parsedFilter),this.props.getInitialData()}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(this.thumbView){this.thumbView=!1;var r=[{name:"Image",selector:"img",minWidth:"220px",cell:function(e){return i.a.createElement("img",{src:e.img,height:"100",alt:e.name})}},{name:"Name",selector:"name",sortable:!0,minWidth:"250px",cell:function(e){return i.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Category",selector:"category",sortable:!0},{name:"Popularity",selector:"popularity",sortable:!0,cell:function(e){return i.a.createElement(g.a,{className:"w-100 mb-0",color:e.popularity.color,value:e.popularity.popValue})}},{name:"Order Status",selector:"order_status",sortable:!0,cell:function(e){return i.a.createElement(J.a,{className:"m-0",color:M[e.order_status],text:e.order_status})}},{name:"Price",selector:"price",sortable:!0,cell:function(e){return"$".concat(e.price)}},{name:"Actions",sortable:!0,cell:function(e){return i.a.createElement(Y,{row:e,getData:t.props.getData,parsedFilter:t.props.parsedFilter,currentData:t.handleCurrentData,deleteRow:t.handleDelete})}}];this.setState({columns:r})}}},{key:"render",value:function(){var e=this,a=this.state,t=a.columns,r=a.data,n=a.allData,l=a.totalPages,s=a.value,o=a.rowsPerPage,c=a.currentData,p=a.sidebar,d=a.totalRecords,u=a.sortIndex;return i.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},i.a.createElement(b.a,{columns:t,data:s.length?n:r,pagination:!0,paginationServer:!0,paginationComponent:function(){return i.a.createElement(w.a,{previousLabel:i.a.createElement(S.a,{size:15}),nextLabel:i.a.createElement(k.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:l,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(a){return e.handlePagination(a)}})},noHeader:!0,subHeader:!0,selectableRows:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(a){return e.setState({selected:a.selectedRows})},customStyles:X,subHeaderComponent:i.a.createElement(q,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:o,total:d,index:u}),sortIcon:i.a.createElement(x.a,null),selectableRowsComponent:$.a,selectableRowsComponentProps:{color:"primary",icon:i.a.createElement(A.a,{className:"vx-icon",size:12}),label:"",size:"sm"}}),i.a.createElement(G,{show:p,data:c,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),i.a.createElement("div",{className:E()("data-list-overlay",{show:p}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.dataList.data.length!==a.data.length||a.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),t}(o.Component);a.a=Object(j.b)((function(e){return{dataList:e.dataList}}),{getData:V,deleteData:function(e){return function(a){_.a.post("/api/datalist/delete-data",{obj:e}).then((function(t){a({type:"DELETE_DATA",obj:e})}))}},updateData:function(e){return function(a,t){_.a.post("/api/datalist/update-data",{obj:e}).then((function(t){a({type:"UPDATE_DATA",obj:e})}))}},addData:function(e){return function(a,t){var r=t().dataList.params;_.a.post("/api/datalist/add-data",{obj:e}).then((function(t){a({type:"ADD_DATA",obj:e}),a(V(r))}))}},getInitialData:function(){return function(){var e=Object(I.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/datalist/initial-data").then((function(e){a({type:"GET_ALL_DATA",data:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},filterData:function(e){return function(a){return a({type:"FILTER_DATA",value:e})}}})(B)},1255:function(e,a,t){},811:function(e,a,t){"use strict";var r=t(14),n=t(15),l=t(17),s=t(16),o=t(1),i=t.n(o),c=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=c},953:function(e,a,t){"use strict";var r=t(14),n=t(15),l=t(17),s=t(16),o=t(1),i=t.n(o),c=t(200),p=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).closeChip=function(e){e.target.closest(".chip").remove()},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chip ".concat(this.props.className," ").concat(this.props.color?"chip-".concat(this.props.color):null)},i.a.createElement("div",{className:"chip-body"},!this.props.avatarImg&&this.props.avatarText||!this.props.avatarImg&&this.props.avatarIcon?i.a.createElement("div",{className:"avatar ".concat(this.props.avatarColor?"bg-".concat(this.props.avatarColor):null)},i.a.createElement("div",{className:"avatar-content"},this.props.avatarText?this.props.avatarText:null,this.props.avatarIcon?this.props.avatarIcon:null)):this.props.avatarImg?i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:this.props.avatarImg,alt:"chipImg",height:"20",width:"20"})):null,i.a.createElement("div",{className:"chip-text"},this.props.text),this.props.closable?i.a.createElement("div",{className:"chip-closable",onClick:function(a){return e.closeChip(a)}},this.props.closableIcon?this.props.closableIcon:i.a.createElement(c.a,null)):null))}}]),t}(i.a.Component);a.a=p}}]);
//# sourceMappingURL=20.e1bb10da.chunk.js.map