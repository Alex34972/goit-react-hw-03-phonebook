(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={forma:"ContactForm_forma__3I3jl",title:"ContactForm_title__xNz6b",inputForm:"ContactForm_inputForm__3fq11",formBtn:"ContactForm_formBtn__1foHH"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=(n(19),n(12)),i=n(7),u=n(10),l=n(11),d=n(14),m=n(13),h=n(4),b=n.n(h),f=n(2),j=n.n(f),p=n(0),C=function(t){var e=t.name,n=t.number,a=t.onChange,c=t.onHandleAppend,r=t.nameId,o=t.numberId;return Object(p.jsxs)("form",{className:j.a.forma,children:[Object(p.jsx)("p",{className:j.a.title,children:"Name"}),Object(p.jsx)("input",{className:j.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,id:r,onChange:a}),Object(p.jsx)("p",{className:j.a.title,children:"Number"}),Object(p.jsx)("input",{className:j.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,id:o,onChange:a}),Object(p.jsx)("button",{className:j.a.formBtn,type:"button",onClick:c,children:"Add contact"})]})},g=n(8),O=n.n(g),v=function(t){var e=t.filter,n=t.onChange;return Object(p.jsxs)("label",{className:O.a.filter,children:["Find contacts by name",Object(p.jsx)("input",{className:O.a.filterInput,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:n})]})},x=n(5),_=n.n(x),I=function(t){var e=t.contacts,n=t.onDelete;return Object(p.jsx)("ul",{className:_.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return a.length>0&&c.length>0&&Object(p.jsxs)("li",{className:_.a.contact,children:[a,": ",c,Object(p.jsx)("button",{className:_.a.contactBtn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},A=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:"",filter:""},t.nameInputId=b.a.generate(),t.numberInputId=b.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t.handleAppend=function(){var e=t.state,n=e.name,a=e.number,c={id:b.a.generate(),name:n,number:a};void 0===t.noAddContact()?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}})):alert("".concat(n," is alredy in contact")),t.reset()},t.get\u0421ontactSearch=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.getFilterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deletContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.noAddContact=function(){var e=t.state,n=e.name;return e.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.filter,c=this.getFilterContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Phonebook"}),Object(p.jsx)(C,{name:e,number:n,onChange:this.handleChange,onHandleAppend:this.handleAppend,nameId:this.nameInputId,numberId:this.numberInputId}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{filter:a,onChange:this.get\u0421ontactSearch}),Object(p.jsx)(I,{contacts:c,onDelete:this.deletContact})]})}}]),n}(c.a.Component);var F=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(A,{})})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),N()},5:function(t,e,n){t.exports={contact:"ContactList_contact__2n55u",contactBtn:"ContactList_contactBtn__Xm_WY"}},8:function(t,e,n){t.exports={filter:"Filter_filter__1yT5Y",filterInput:"Filter_filterInput__32x_l"}}},[[29,1,2]]]);
//# sourceMappingURL=main.4d2f15a1.chunk.js.map