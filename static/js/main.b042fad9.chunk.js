(this.webpackJsonpemployes=this.webpackJsonpemployes||[]).push([[0],{165:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),a=s(18),c=s.n(a),i=(s(61),s(62),s(48)),o=s(49),p=s(56),d=s(55),h=s(50),l=s.n(h),u=s(20),j=s(28),b=s(2),O={state:[],users:[],usersSize:1,pageSize:50,currentPage:1,showEmploy:""},f=(s(88),s(89),s(0)),m=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{class:"lds-roller",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{}),Object(f.jsx)("div",{})]})})},x=s(3),v=s.n(x),g=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={id:!0,FN:!0,LN:!0,Em:!0,Ph:!0,btn:!0},e.setCurrentPage=function(t){e.props.setCurrentPage(t);var s=e.props.state.state,r=[],n=50*t;if(t===Math.ceil(e.props.state.usersSize/e.props.state.pageSize))for(var a=n-50;a<n-50+e.props.state.usersSize%50;a++)r.push(s[a]);if(t!==Math.ceil(e.props.state.usersSize/e.props.state.pageSize))for(var c=n-50;c<n;c++)r.push(s[c]);e.props.getUsers(r)},e.changeId=function(){if(e.setState({id:!1}),e.state.id||e.setState({id:!0}),e.state.id){var t=e.props.state.users.sort((function(e,t){return e.id-t.id}));e.props.sortId(t)}else{var s=e.props.state.users.sort((function(e,t){return e.id-t.id}));e.props.sortId(s.reverse())}},e.changeFN=function(){if(e.setState({FN:!1}),e.state.FN||e.setState({FN:!0}),e.state.FN)!function(){for(var t=e.props.state.users.map((function(e){return e.firstName})).sort(),s=[],r=function(r){s.push(e.props.state.users.filter((function(e){return e.firstName===t[r]})))},n=0;n<t.length;n++)r(n);for(var a=[],c=0;c<s.length;c++)for(var i=0;i<s[c].length;i++)a.push(s[c][i]);e.props.sortFN(a)}();else{var t=e.props.state.users.reverse();e.props.sortFN(t)}},e.changeLN=function(){if(e.setState({LN:!1}),e.state.LN||e.setState({LN:!0}),e.state.LN)!function(){for(var t=e.props.state.users.map((function(e){return e.lastName})).sort(),s=[],r=function(r){s.push(e.props.state.users.filter((function(e){return e.lastName===t[r]})))},n=0;n<t.length;n++)r(n);for(var a=[],c=0;c<s.length;c++)for(var i=0;i<s[c].length;i++)a.push(s[c][i]);e.props.sortLN(a)}();else{var t=e.props.state.users.reverse();e.props.sortLN(t)}},e.changeEm=function(){if(e.setState({Em:!1}),e.state.Em||e.setState({Em:!0}),e.state.Em)!function(){for(var t=e.props.state.users.map((function(e){return e.email})).sort(),s=[],r=function(r){s.push(e.props.state.users.filter((function(e){return e.email===t[r]})))},n=0;n<t.length;n++)r(n);for(var a=[],c=0;c<s.length;c++)for(var i=0;i<s[c].length;i++)a.push(s[c][i]);e.props.sortEm(a)}();else{var t=e.props.state.users.reverse();e.props.sortEm(t)}},e.changePh=function(){if(e.setState({Ph:!1}),e.state.Ph||e.setState({Ph:!0}),e.state.Ph)!function(){for(var t=e.props.state.users.map((function(e){return e.phone})).sort(),s=[],r=function(r){s.push(e.props.state.users.filter((function(e){return e.phone===t[r]})))},n=0;n<t.length;n++)r(n);for(var a=[],c=0;c<s.length;c++)for(var i=0;i<s[c].length;i++)a.push(s[c][i]);e.props.sortPh(a)}();else{var t=e.props.state.users.reverse();e.props.sortPh(t)}},e.showEmploy=function(t){e.props.showEmploy(t)},e.add=function(){v()("#showTable").slideToggle(500)},e.addInTable=function(t){var s={id:e.props.state.state.length+1,firstName:v()("#FirstNameT").val(),lastName:v()("#LastNameT").val(),email:v()("#EmailT").val(),phone:v()("#PhoneT").val(),description:"\u0412\u043e\u0442 \u0442\u0430\u043a \u0432\u043e\u0442",address:{zip:"1234",streetAddress:"Moscow",state:"MSK",city:"MOSCOW"}};e.props.usersSize(e.props.state.usersSize+1),e.props.addEmploy(s),e.props.addUser(s),v()("#FirstNameT").val(""),v()("#LastNameT").val(""),v()("#EmailT").val(""),v()("#PhoneT").val("")},e.changeForm=function(){v()("#FirstNameT").val().length>1&&v()("#LastNameT").val().length>1&&v()("#EmailT").val().length>1&&v()("#PhoneT").val().length>1?e.setState({btn:!1}):e.setState({btn:!0})},e.find=function(){var t=e.props.state.state.filter((function(e){return e.firstName.match(v()("#find").val())||e.lastName.match(v()("#find").val())||e.phone.match(v()("#find").val())||e.email.match(v()("#find").val())}));e.props.findUser(t)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;l.a.get("https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}").then((function(t){e.props.getState(t.data),e.props.usersSize(t.data.length),e.props.pageSize(50);for(var s=[],r=0;r<50;r++)s.push(t.data[r]);e.props.getUsers(s)}))}},{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.state.usersSize/this.props.state.pageSize),s=[],r=1;r<=t;r++)s.push(r);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"header",children:"Employees"}),Object(f.jsx)("div",{className:"button1",children:Object(f.jsx)("button",{onClick:this.add,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),Object(f.jsxs)("div",{id:"showTable",children:[Object(f.jsxs)("div",{className:"addEmploy",children:[Object(f.jsxs)("div",{className:"addText",children:[Object(f.jsx)("div",{children:"First Name:"}),Object(f.jsx)("div",{children:"Last Name:"}),Object(f.jsx)("div",{children:"Email:"}),Object(f.jsx)("div",{children:"Phone:"})]}),Object(f.jsxs)("div",{className:"addInput",onChange:this.changeForm,children:[Object(f.jsx)("div",{children:Object(f.jsx)("input",{id:"FirstNameT",type:"text",minLength:"2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{id:"LastNameT",type:"text",minLength:"2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{id:"EmailT",type:"text",minLength:"2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{id:"PhoneT",type:"text",minLength:"2"})})]})]}),Object(f.jsx)("div",{className:"button",children:Object(f.jsx)("button",{disabled:this.state.btn,onClick:this.addInTable,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443"})})]}),Object(f.jsxs)("div",{className:"find",children:[Object(f.jsx)("input",{id:"find",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0438\u043b\u0438 email"}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:this.find,children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(f.jsxs)("div",{className:"body_container",children:[0===this.props.state.state.length&&Object(f.jsx)(m,{}),this.props.state.state.length>0&&Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"paginator",children:s.map((function(t){return Object(f.jsx)("span",{className:e.props.state.currentPage===t&&"page",onClick:function(){e.setCurrentPage(t)},children:t},t)}))}),this.props.state.users.length>0&&Object(f.jsx)("div",{children:Object(f.jsxs)("table",{className:"table",children:[Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{children:["id ",Object(f.jsx)("span",{onClick:this.changeId,children:this.state.id?"\u25bc":"\u25b2"})," "]}),Object(f.jsxs)("th",{children:["FirstName",Object(f.jsx)("span",{onClick:this.changeFN,children:this.state.FN?"\u25bc":"\u25b2"})]}),Object(f.jsxs)("th",{children:["lastName",Object(f.jsx)("span",{onClick:this.changeLN,children:this.state.LN?"\u25bc":"\u25b2"})]}),Object(f.jsxs)("th",{children:["Email",Object(f.jsx)("span",{onClick:this.changeEm,children:this.state.Em?"\u25bc":"\u25b2"})]}),Object(f.jsxs)("th",{children:["phone",Object(f.jsx)("span",{onClick:this.changePh,children:this.state.Ph?"\u25bc":"\u25b2"})]})]}),this.props.state.users.map((function(t){return Object(f.jsxs)("tr",{ket:t.id,onClick:function(){return e.showEmploy(t)},children:[Object(f.jsx)("td",{children:t.id}),Object(f.jsx)("td",{children:t.firstName}),Object(f.jsx)("td",{children:t.lastName}),Object(f.jsx)("td",{children:t.email}),Object(f.jsx)("td",{children:t.phone})]})}))]})})]})]}),this.props.state.showEmploy&&Object(f.jsx)("div",{className:"body_container showEmploy",children:this.props.state.showEmploy.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",Object(f.jsx)("b",{children:e.firstName}),Object(f.jsx)("br",{}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",Object(f.jsx)("br",{}),Object(f.jsx)("textarea",{children:e.description}),Object(f.jsx)("br",{}),"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",Object(f.jsx)("b",{children:e.address.streetAddres}),Object(f.jsx)("br",{}),"\u0413\u043e\u0440\u043e\u0434: ",Object(f.jsx)("b",{children:e.address.city}),Object(f.jsx)("br",{}),"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",Object(f.jsx)("b",{children:e.address.state}),Object(f.jsx)("br",{}),"\u0418\u043d\u0434\u0435\u043a\u0441: ",Object(f.jsx)("b",{children:e.address.zip})]})}))})]})}}]),s}(n.a.Component),N=Object(u.b)((function(e){return{state:e.reducerMain}}),{findUser:function(e){return{type:"FIND_USER",user:e}},addUser:function(e){return{type:"ADD_USER",user:e}},getState:function(e){return{type:"GET_STATE",state:e}},pageSize:function(e){return{type:"PAGE_SIZE",count:e}},usersSize:function(e){return{type:"USERS_SIZE",count:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",count:e}},getUsers:function(e){return{type:"GET_USERS",state:e}},sortId:function(e){return{type:"SORT_ID",sort:e}},sortFN:function(e){return{type:"SORT_FN",sort:e}},sortLN:function(e){return{type:"SORT_LN",sort:e}},sortEm:function(e){return{type:"SORT_Em",sort:e}},sortPh:function(e){return{type:"SORT_Ph",sort:e}},showEmploy:function(e){return{type:"SHOW_EMPLOY",show:e}},addEmploy:function(e){return{type:"ADD_EMPLOY",add:e}}})(g);var S=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(N,{})})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,168)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))},T=s(11),y=s(167),P=Object(T.b)({reducerMain:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_STATE":return Object(b.a)(Object(b.a)({},e),{},{state:t.state});case"GET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.state});case"USERS_SIZE":return Object(b.a)(Object(b.a)({},e),{},{usersSize:t.count});case"PAGE_SIZE":return Object(b.a)(Object(b.a)({},e),{},{pageSize:t.count});case"SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.count});case"SORT_ID":case"SORT_FN":case"SORT_LN":case"SORT_Em":case"SORT_Ph":return Object(b.a)(Object(b.a)({},e),{},{users:t.sort});case"SHOW_EMPLOY":return Object(b.a)(Object(b.a)({},e),{},{showEmploy:[t.show]});case"ADD_EMPLOY":return Object(b.a)(Object(b.a)({},e),{},{state:[t.add].concat(Object(j.a)(e.state))});case"ADD_USER":return Object(b.a)(Object(b.a)({},e),{},{users:[t.user].concat(Object(j.a)(e.users))});case"FIND_USER":return Object(b.a)(Object(b.a)({},e),{},{users:t.user});default:return e}},form:y.a}),_=Object(T.c)(P);c.a.render(Object(f.jsx)(u.a,{store:_,children:Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(S,{})})}),document.getElementById("root")),E()},61:function(e,t,s){},62:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){}},[[165,1,2]]]);
//# sourceMappingURL=main.b042fad9.chunk.js.map