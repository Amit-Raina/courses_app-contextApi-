(this.webpackJsonpcourses_app=this.webpackJsonpcourses_app||[]).push([[0],{19:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(20),s=c.n(r),l=(c(27),c(8)),i=c(3),o=(c(28),c(22)),j=c(2),d=c(9),u=(c(29),c(0)),h=function(){return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("div",{className:"main-header",children:Object(u.jsx)("div",{className:"header-text",children:Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("p",{className:"text-home",children:"Home"}),Object(u.jsxs)(d.b,{to:"/",style:{textDecoration:"none"},children:[" ",Object(u.jsx)("p",{className:"text-courses",children:"Courses"})," "]}),Object(u.jsx)("p",{className:"text-about",children:"About"})]})})})})},b=(c(19),n.a.createContext()),O=n.a.createContext();var x=function(){var e=Object(a.useState)({isEmpty:!0,title:"",author:"",category:"",length:"",redirect:"/add-course"}),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(b),s=Object(a.useContext)(O);function d(){var e;(0===c.title.length?(alert("Enter Title"),0):0===c.author.length?(alert("Enter Author"),0):0===c.category.length?(alert("Enter Category"),0):0!==c.length.length||(alert("Enter Length"),0))&&(e={id:r.CourseDetails.length+1,title:c.title,length:c.length,category:c.category,author:c.author},s(Object(j.a)(Object(j.a)({},r),{},{CourseDetails:[].concat(Object(o.a)(r.CourseDetails),[e]),selectedToUpdate:null})),n(Object(j.a)(Object(j.a)({},c),{},{redirect:"/"})))}return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"content-body-add-course",children:[Object(u.jsx)("div",{className:"add-title",children:Object(u.jsx)("h1",{children:"Add"})}),Object(u.jsxs)("div",{className:"fields",children:[Object(u.jsx)("p",{children:"Title"}),Object(u.jsx)("input",{required:!0,type:"text",value:c.title,placeholder:"Title of the course",onChange:function(e){var t;t=e.target.value,n(Object(j.a)(Object(j.a)({},c),{},{title:t,isEmpty:0===t.length}))}}),Object(u.jsx)("p",{children:"Author"}),Object(u.jsxs)("select",{required:!0,name:"author",value:c.author,onChange:function(e){var t;t=e.target.value,n(Object(j.a)(Object(j.a)({},c),{},{author:t,isEmpty:0===t.length}))},children:[Object(u.jsx)("option",{value:""}),Object(u.jsx)("option",{value:"cory-house",children:"Cory House"}),Object(u.jsx)("option",{value:"scott-allen",children:"Scott Allen"}),Object(u.jsx)("option",{value:"dan-wahlin",children:"Dan Wahlin"})]}),Object(u.jsx)("p",{children:"Category"}),Object(u.jsx)("input",{required:!0,type:"text",value:c.category,placeholder:"Category of the course",onChange:function(e){var t;t=e.target.value,n(Object(j.a)(Object(j.a)({},c),{},{category:t,isEmpty:0===t.length}))}}),Object(u.jsx)("p",{children:"Length"}),Object(u.jsx)("input",{required:!0,type:"text",value:c.length,placeholder:"Length of course in minutes or hours",onChange:function(e){var t;t=e.target.value,n(Object(j.a)(Object(j.a)({},c),{},{length:t,isEmpty:0===t.length}))}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)(i.a,{to:c.redirect}),Object(u.jsxs)("span",{className:"button-submit",onClick:function(){return d()},children:[Object(u.jsx)("i",{className:"fa fa-paper-plane-o","aria-hidden":"true"})," Submit"]}),"\xa0\xa0\xa0\xa0",Object(u.jsx)("span",{className:c.isEmpty?"button-clear-values-inactive":"button-clear-values-active",onClick:function(){n(Object(j.a)(Object(j.a)({},c),{},{isEmpty:!0,title:"",author:"",category:"",length:""}))},children:"Clear Values"}),"\xa0\xa0\xa0\xa0",Object(u.jsx)("span",{className:"button-cancel",onClick:function(){n(Object(j.a)(Object(j.a)({},c),{},{redirect:"/"})),s(Object(j.a)(Object(j.a)({},r),{},{selectedToUpdate:null}))},children:"Cancel"})]})]})]})},g=(c(36),c(37),function(e){return Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("tr",{className:"content-detail",onClick:e.currentSelected,style:{backgroundColor:e.checked?"rgb(193,242,145)":""},children:[Object(u.jsx)("td",{className:"course-title",style:{color:"rgb(2,131,223)"},children:e.title}),Object(u.jsx)("td",{children:e.length}),Object(u.jsx)("td",{children:e.category}),Object(u.jsx)("td",{children:e.author})]})})});var p=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(b),s=Object(a.useContext)(O);return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"content-body",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:"Courses"})}),Object(u.jsxs)("div",{className:"options-bar",children:[Object(u.jsx)(d.b,{to:"/add-course",style:{textDecoration:"none"},children:Object(u.jsxs)("div",{className:"options-bar-new",children:[Object(u.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})," New"]})}),"\xa0\xa0",Object(u.jsx)(d.b,{to:null===c?"":"/edit-course",style:{textDecoration:"none"},children:Object(u.jsxs)("div",{className:"options-bar-edit",children:[Object(u.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})," Edit"]})}),"\xa0\xa0",Object(u.jsxs)("div",{className:"options-bar-delete",onClick:function(){return function(){if(null!==c){var e=r.CourseDetails.filter((function(e){return e.id!==c}));for(var t in e)e[t].id=parseInt(t)+1;s(Object(j.a)(Object(j.a)({},r),{},{CourseDetails:e}))}}()},children:[Object(u.jsx)("i",{className:"fa fa-trash-o","aria-hidden":"true"})," Delete"]})]}),Object(u.jsx)("div",{className:"course-details",children:Object(u.jsxs)("table",{className:"table-structure",cellSpacing:"0",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"table-header",children:[Object(u.jsxs)("th",{children:["Title ",Object(u.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})]}),Object(u.jsxs)("th",{children:["Length ",Object(u.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})]}),Object(u.jsxs)("th",{children:["Category"," ",Object(u.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})]}),Object(u.jsxs)("th",{children:["Author ",Object(u.jsx)("i",{className:"fa fa-sort","aria-hidden":"true"})]})]})}),Object(u.jsx)("tbody",{children:0===r.CourseDetails.length?Object(u.jsx)(g,{category:"No Data"}):r.CourseDetails.map((function(e,t){return Object(u.jsx)(g,{id:e.id,title:e.title,length:e.length,category:e.category,author:e.author,checked:c===e.id,currentSelected:function(){c===e.id?(n(null),s(Object(j.a)(Object(j.a)({},r),{},{selectedToUpdate:null}))):(n(e.id),s(Object(j.a)(Object(j.a)({},r),{},{selectedToUpdate:e.id})))}},t)}))})]})})]})]})};var m=function(){var e=Object(a.useContext)(b),t=Object(a.useContext)(O),c=Object(a.useState)({title:e.CourseDetails[e.selectedToUpdate-1].title,author:e.CourseDetails[e.selectedToUpdate-1].author,category:e.CourseDetails[e.selectedToUpdate-1].category,length:e.CourseDetails[e.selectedToUpdate-1].length,redirect:"/edit-course"}),n=Object(l.a)(c,2),r=n[0],s=n[1];function o(){(0===r.title.length?(alert("Enter Title"),0):0===r.author.length?(alert("Enter Author"),0):0===r.category.length?(alert("Enter Category"),0):0!==r.length.length||(alert("Enter Length"),0))&&(!function(c,a){var n=e.CourseDetails.map((function(e){return e.id===a?c:e}));t(Object(j.a)(Object(j.a)({},e),{},{CourseDetails:n}))}({id:e.selectedToUpdate,title:r.title,length:r.length,category:r.category,author:r.author},e.selectedToUpdate),s(Object(j.a)(Object(j.a)({},r),{},{redirect:"/"})))}return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"content-body-add-course",children:[Object(u.jsx)("div",{className:"add-title",children:Object(u.jsx)("h1",{children:"Edit"})}),Object(u.jsxs)("div",{className:"fields",children:[Object(u.jsx)("p",{children:"Title"}),Object(u.jsx)("input",{type:"text",value:r.title,placeholder:"Title of the course",onChange:function(e){var t;t=e.target.value,s(Object(j.a)(Object(j.a)({},r),{},{title:t}))}}),Object(u.jsx)("p",{children:"Author"}),Object(u.jsxs)("select",{name:"author",defaultValue:r.author,onChange:function(e){var t;t=e.target.value,s(Object(j.a)(Object(j.a)({},r),{},{author:t}))},children:[Object(u.jsx)("option",{value:""}),Object(u.jsx)("option",{value:"cory-house",children:"Cory House"}),Object(u.jsx)("option",{value:"scott-allen",children:"Scott Allen"}),Object(u.jsx)("option",{value:"dan-wahlin",children:"Dan Wahlin"})]}),Object(u.jsx)("p",{children:"Category"}),Object(u.jsx)("input",{type:"text",value:r.category,placeholder:"Category of the course",onChange:function(e){var t;t=e.target.value,s(Object(j.a)(Object(j.a)({},r),{},{category:t}))}}),Object(u.jsx)("p",{children:"Length"}),Object(u.jsx)("input",{type:"text",value:r.length,placeholder:"Length of course in minutes or hours",onChange:function(e){var t;t=e.target.value,s(Object(j.a)(Object(j.a)({},r),{},{length:t}))}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsxs)("span",{className:"button-submit",onClick:function(){return o()},children:[Object(u.jsx)(i.a,{to:r.redirect}),Object(u.jsx)("i",{className:"fa fa-paper-plane-o","aria-hidden":"true"})," Submit"]}),"\xa0\xa0\xa0\xa0",Object(u.jsx)("span",{className:"button-cancel",onClick:function(){s(Object(j.a)(Object(j.a)({},r),{},{redirect:"/"}))},children:"Cancel"})]})]})]})};var v=function(){var e=Object(a.useState)({CourseDetails:[{id:1,title:"Building Applications in React and Flux",length:"5:08",category:"JavaScript",author:"cory-house"},{id:2,title:"Clean Code: Writing Code for Humans",length:"3:10",category:"Software Practices",author:"cory-house"},{id:3,title:"Architecting Applications for the Real World",length:"2:52",category:"Software Architecture",author:"cory-house"},{id:4,title:"Becoming an Outlier: Reprogramming the Developer Mind",length:"2:30",category:"Career",author:"cory-house"},{id:5,title:"Web Component Fundamentals",length:"5:10",category:"HTML5",author:"cory-house"}],selectedToUpdate:null}),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(u.jsx)(b.Provider,{value:c,children:Object(u.jsx)(O.Provider,{value:n,children:Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/add-course",component:x}),Object(u.jsx)(i.b,{path:"/edit-course",component:m}),Object(u.jsx)(i.b,{path:"/",component:p})]})})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)(v,{})})}),document.getElementById("root")),f()}},[[38,1,2]]]);
//# sourceMappingURL=main.8e9527ed.chunk.js.map