(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),r=n.n(a),l=(n(13),n(6)),i=n(2);function d(){var e=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}var s=n(0),j=Object(c.createContext)();function u(e){var t=e.children,n=Object(c.useState)(""),o=Object(i.a)(n,2),a=o[0],r=o[1],u=function(e,t){var n=t;localStorage.getItem(e)?n=JSON.parse(localStorage.getItem(e)):localStorage.setItem(e,JSON.stringify(t));var o=Object(c.useState)(n),a=Object(i.a)(o,2),r=a[0],l=a[1];return[r,function(t){var n=JSON.stringify(t);localStorage.setItem(e,n),l(t)}]}("TODOS_V1",[]),x=Object(i.a)(u,2),h=x[0],b=x[1],v=h.length,O=h.filter((function(e){return!!e.completed})).length,f=h.filter((function(e){return e.text.toLowerCase().includes(a.toLowerCase())}));function p(e){b(e),localStorage.setItem("TODOS_V1",JSON.stringify(e))}return Object(s.jsx)(j.Provider,{value:{filterTodos:f,totalTodos:v,todosCompleted:O,toggleCompleteTodo:function(e){var t=h.findIndex((function(t){return t._id===e}));if(-1!==t){var n=Object(l.a)(h);n[t].completed=!n[t].completed,p(n)}},deleteTodo:function(e){var t=h.findIndex((function(t){return t._id===e}));if(-1!==t){var n=Object(l.a)(h);n.splice(t,1),p(n)}},searchValue:a,setSearchValue:r,addTodo:function(e){var t=Object(l.a)(h);t.push({_id:d(),text:e,completed:!1}),p(t)}},children:t})}var x=n(8);n(15);function h(){var e=Object(c.useContext)(j),t=e.totalTodos,n=e.todosCompleted;return Object(s.jsxs)("h2",{className:"TodoCounter",children:["You have completed ",n," of ",t," TODOs"]})}n(16);function b(e){var t=e.children;return Object(s.jsx)("ul",{className:"TodoList",children:t})}n(17);function v(e){var t=e.children,n=e.onChange,c=e.checked,o=void 0!==c&&c,a=e.disabled,r=void 0!==a&&a;return Object(s.jsxs)("label",{className:"Checkbox bounce",children:[Object(s.jsx)("input",{type:"checkbox",checked:o,disabled:r,onChange:n}),Object(s.jsx)("svg",{viewBox:"0 0 21 21",children:Object(s.jsx)("polyline",{points:"5 10.75 8.5 14.25 16 6"})}),t&&Object(s.jsx)("span",{children:t})]})}n(18);function O(e){var t=e.text,n=e.completed,c=e.onToggleComplete,o=e.onDelete;return Object(s.jsxs)("li",{className:"TodoItem",children:[Object(s.jsx)("div",{className:"Icon Icon-check",children:Object(s.jsx)(v,{checked:n,onChange:c})}),Object(s.jsx)("p",{className:"TodoItem-text ".concat(n?"TodoItem-text--completed":""),children:t}),Object(s.jsx)("div",{className:"Icon Icon-delete",children:Object(s.jsx)("button",{onClick:o,children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"})})})})]})}n(19);function f(e){var t=e.onChange,n=e.placeholder,c=void 0===n?"":n,o=e.value,a=void 0===o?"":o,r=e.type,l=void 0===r?"text":r;return Object(s.jsx)("input",{className:"Control Control__input",placeholder:c,type:l,value:a,onChange:t})}function p(e){var t=e.onChange,n=e.placeholder,c=void 0===n?"":n,o=e.value,a=void 0===o?"":o;return Object(s.jsx)("textarea",{className:"Control Control__textarea",placeholder:c,value:a,onChange:t})}n(20);function m(){var e=Object(c.useContext)(j),t=e.searchValue,n=e.setSearchValue,o=e.filterTodos,a=e.totalTodos;return Object(s.jsxs)("div",{className:"TodoSearch",children:[Object(s.jsx)(f,{type:"text",placeholder:"Search TODOs",value:t,onChange:function(e){return n(e.target.value)}}),Object(s.jsxs)("p",{children:["records found ",Object(s.jsx)("b",{children:o.length})," of ",Object(s.jsx)("b",{children:a})]})]})}n(21);function g(e){var t=e.children,n=e.onClick,c=e.variant,o=e.disabled,a=void 0!==o&&o,r=e.color,l=void 0===r?"primary":r,i=e.type,d=void 0===i?"button":i;return Object(s.jsx)("button",{className:"Button ".concat(l," ").concat(null!==c&&void 0!==c?c:""," ").concat(a?"disabled":""),type:d,disabled:a,onClick:n,children:t})}n(22);function C(e){var t=e.onOpenModal;return Object(s.jsx)("div",{className:"CreateTodoButton",children:Object(s.jsx)(g,{variant:"fab",onClick:function(){null===t||void 0===t||t(!0)},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})})})})}n(23);var N=document.createElement("div");function w(e){var t=e.children,n=e.open,c=e.width,o=e.onClose;return r.a.createPortal(Object(s.jsx)(s.Fragment,{children:n&&Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"Modal__overlay",onClick:o,children:Object(s.jsx)("div",{className:"Modal__content",onClick:function(e){e.stopPropagation()},style:{maxWidth:null!==c&&void 0!==c?c:"auto"},children:t})})})}),N)}function T(e){var t=e.children;return Object(s.jsx)("div",{className:"ModalHeader",children:t})}function y(e){var t=e.children;return Object(s.jsx)("div",{className:"ModalBody",children:t})}function S(e){var t=e.children;return Object(s.jsx)("div",{className:"ModalFooter",children:t})}N.classList.add("Modal"),document.body.appendChild(N);n(24);function M(e){var t=e.onOpenModal,n=Object(c.useState)(""),o=Object(i.a)(n,2),a=o[0],r=o[1],l=Object(c.useContext)(j).addTodo;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("form",{tabIndex:"1",className:"FormTodo",onSubmit:function(e){e.preventDefault(),l(a),t(!1)},children:[Object(s.jsx)(T,{children:Object(s.jsx)("h2",{children:"New todo"})}),Object(s.jsx)(y,{children:Object(s.jsx)(p,{placeholder:"description",value:a,onChange:function(e){var t=e.target.value;r(t)}})}),Object(s.jsxs)(S,{children:[Object(s.jsx)(g,{color:"secundary",onClick:function(){return t(!1)},children:"Cancel"}),Object(s.jsx)(g,{disabled:""===a,type:"submit",children:"Save"})]})]})})}n(25);function _(e){var t=e.onOpenModal,n=Object(c.useContext)(j).totalTodos;return Object(s.jsxs)("div",{className:"NoData",children:[Object(s.jsx)("p",{children:"No records found"}),0===n&&Object(s.jsx)(g,{variant:"fab",onClick:function(){null===t||void 0===t||t(!0)},children:Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:Object(s.jsx)("path",{d:"M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"})})})]})}n(26);function k(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"App-header",children:[Object(s.jsxs)("div",{className:"App-header__content",children:[Object(s.jsx)(h,{}),Object(s.jsx)(m,{})]}),Object(s.jsx)("div",{className:"App-header__wave",children:Object(s.jsx)("div",{style:{height:"150px",overflow:"hidden"},children:Object(s.jsx)("svg",{viewBox:"0 0 500 150",preserveAspectRatio:"none",style:{height:"100%",width:"100%"},children:Object(s.jsx)("path",{d:"M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z",style:{stroke:"none"}})})})})]}),Object(s.jsx)("div",{className:"App-body",children:Object(s.jsx)(j.Consumer,{children:function(e){var t=e.filterTodos,n=e.toggleCompleteTodo,c=e.deleteTodo,a=e.totalTodos;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{children:t.length?t.map((function(e){return Object(s.jsx)(O,Object(x.a)(Object(x.a)({},e),{},{onToggleComplete:function(){return n(e._id)},onDelete:function(){return c(e._id)}}),e._id)})):Object(s.jsx)(_,{onOpenModal:o})}),a>0&&Object(s.jsx)(C,{onOpenModal:o})]})}})}),Object(s.jsx)(w,{open:n,width:"26em",onClose:function(){return o(!1)},children:Object(s.jsx)(M,{onOpenModal:o})})]})}var I=function(){return Object(s.jsx)(u,{children:Object(s.jsx)(k,{})})};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.8d157824.chunk.js.map