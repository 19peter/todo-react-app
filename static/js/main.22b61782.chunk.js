(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),o=c(8),i=c.n(o),s=c(2),r=c(0);var l=function(t){var e=t.path;return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("img",{className:"header-image",src:e,alt:"background-image"})})};var d=function(t){var e=t.backgrounColorClass;return Object(r.jsx)("div",{className:e})},j=c(3),b=c(5),u=c.p+"static/media/icon-check.a8fb15d0.svg",O=c.p+"static/media/icon-cross.6ee81d30.svg";var p=function(t){var e=t.text,c=t.todoContainer,n=t.onDelete,a=t.id,o=t.handleCompleted,i=t.btnClass,s=t.strike;return Object(r.jsxs)("div",{className:c,children:[Object(r.jsx)("div",{onClick:function(){o(a)},className:i,children:Object(r.jsx)("img",{className:"check",src:u,alt:"icon"})}),Object(r.jsx)("span",{className:"todo-text",children:s?Object(r.jsx)("h4",{style:{textDecorationLine:"line-through",textDecorationStyle:"solid"},children:e}):Object(r.jsxs)("h4",{children:[" ",e]})}),Object(r.jsx)("img",{onClick:function(){return n(a)},className:"cross-icon",src:O,alt:"icon"})]})};var m=function(t){var e=t.icon,c=t.iconChange,a=t.inputContainer,o=t.todoContainer,i=t.input,l=t.footer,d=Object(n.useState)(""),u=Object(s.a)(d,2),O=u[0],m=u[1],h=Object(n.useState)([{id:0,task:"Get Your Coffee",completed:!1},{id:1,task:"Check your TODO",completed:!1}]),f=Object(s.a)(h,2),g=f[0],x=f[1],v=Object(n.useState)([]),C=Object(s.a)(v,2),k=C[0],N=C[1],S=Object(n.useState)([]),y=Object(s.a)(S,2),D=y[0],w=y[1],A=Object(n.useState)(),K=Object(s.a)(A,2),T=K[0],E=K[1],J=Object(n.useState)(!1),B=Object(s.a)(J,2),G=B[0],I=B[1],L=Object(n.useState)(!1),M=Object(s.a)(L,2),P=M[0],U=M[1],Y=Object(n.useState)(!1),q=Object(s.a)(Y,2),z=q[0],F=q[1],H=g.length;function Q(t){t.target.value.length>40&&(t.target.value=t.target.value.substr(0,40))}function R(t){x((function(e){return e.filter((function(e,c){return e.id!==t}))}))}function V(){var t=g.filter((function(t){return!1===t.completed}));N(t)}function W(){var t=g.filter((function(t){return!0===t.completed}));w(t)}function X(t){var e=g.map((function(e){return t===e.id&&!1===e.completed?Object(j.a)(Object(j.a)({},e),{},{completed:!0}):t===e.id&&!0===e.completed?Object(j.a)(Object(j.a)({},e),{},{completed:!1}):e}));x(e);var c=k.map((function(e){return t===e.id&&!1===e.completed?Object(j.a)(Object(j.a)({},e),{},{completed:!0}):t===e.id&&!0===e.completed?Object(j.a)(Object(j.a)({},e),{},{completed:!1}):e}));N(c);var n=D.map((function(e){return t===e.id&&!1===e.completed?Object(j.a)(Object(j.a)({},e),{},{completed:!0}):t===e.id&&!0===e.completed?Object(j.a)(Object(j.a)({},e),{},{completed:!1}):e}));N(n)}return Object(n.useEffect)((function(){V(),W()}),[g]),Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)("div",{className:"header-title",children:[Object(r.jsx)("h1",{children:"TODO"}),Object(r.jsx)("img",{src:e,onClick:c,alt:"icon"})]}),Object(r.jsxs)("div",{className:a,children:[Object(r.jsx)("button",{onClick:function(){var t=[].concat(Object(b.a)(g),[{id:g.length,task:O,completed:!1}]);O.trim().length?x(t):x(Object(b.a)(g)),m(""),E(""),I(!1)},class:"input-btn"}),Object(r.jsx)("input",{onChange:function(t){m(t.target.value),E(t.target.value)},onKeyPress:function(t){if(13===(t.keyCode||t.which)){var e=[].concat(Object(b.a)(g),[{id:g.length,task:O,completed:!1}]);O.trim().length?x(e):x(Object(b.a)(g)),m(""),E(""),I(!1)}},onKeyDown:Q,onKeyUp:Q,class:i,placeholder:"Create a new Todo...",type:"text",value:T})]}),G?P?k.map((function(t){return Object(r.jsx)(p,{id:t.id,text:t.task,todoContainer:o,onDelete:R,handleCompleted:X,btnClass:t.completed?"input-btn-click":"input-btn"},t.id)})):z?D.map((function(t){return Object(r.jsx)(p,{id:t.id,text:t.task,todoContainer:o,onDelete:R,handleCompleted:X,btnClass:t.completed?"input-btn-click":"input-btn"},t.id)})):null:g.map((function(t){return Object(r.jsx)(p,{id:t.id,text:t.task,todoContainer:o,onDelete:R,handleCompleted:X,btnClass:t.completed?"input-btn-click":"input-btn",strike:!!t.completed},t.id)})),Object(r.jsxs)("div",{className:l,children:[Object(r.jsx)("span",{children:Object(r.jsxs)("h6",{children:[P?k.length:z?D.length:H+""," items left"]})}),Object(r.jsx)("a",{onClick:function(){1==G&&(I(!1),U(!1),F(!1))},className:"footer-btn",children:"All"}),Object(r.jsx)("a",{onClick:function(){I(!0),U(!0),F(!1),V()},className:"footer-btn",children:"Active"}),Object(r.jsx)("a",{onClick:function(){F(!0),I(!0),U(!1),W()},className:"footer-btn",children:"Completed"}),Object(r.jsx)("a",{onClick:function(){x((function(t){return g.filter((function(t){return!0!==t.completed}))})),w([])},className:"footer-btn",children:"Clear Completed"})]})]})},h=c.p+"static/media/bg-desktop-light.3508d620.jpg",f=c.p+"static/media/bg-desktop-dark.73e47dbb.jpg",g=c.p+"static/media/icon-sun.910b1f9a.svg",x=c.p+"static/media/icon-moon.6c03114b.svg";var v=function(){var t=Object(n.useState)(g),e=Object(s.a)(t,2),c=e[0],a=e[1],o=Object(n.useState)("body-light"),i=Object(s.a)(o,2),j=i[0],b=i[1],u=Object(n.useState)("input-container"),O=Object(s.a)(u,2),p=O[0],v=O[1],C=Object(n.useState)("todo-container"),k=Object(s.a)(C,2),N=k[0],S=k[1],y=Object(n.useState)("input"),D=Object(s.a)(y,2),w=D[0],A=D[1],K=Object(n.useState)(h),T=Object(s.a)(K,2),E=T[0],J=T[1],B=Object(n.useState)("footer"),G=Object(s.a)(B,2),I=G[0],L=G[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{path:E}),Object(r.jsx)(d,{backgrounColorClass:j}),Object(r.jsx)(m,{icon:c,iconChange:function(){c==x&&(a(g),b("body-light"),v("input-container"),S("todo-container"),A("input"),J(h),L("footer")),c==g&&(a(x),b("body-dark"),v("input-container-night"),S("todo-container-night"),A("input-night"),J(f),L("footer-night"))},inputContainer:p,todoContainer:N,input:w,footer:I})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.22b61782.chunk.js.map