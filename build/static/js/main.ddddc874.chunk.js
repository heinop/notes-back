(this["webpackJsonpnotes-front"]=this["webpackJsonpnotes-front"]||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),u=n(4),l=n(2),i=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},f=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},s=n(3),p=n.n(s),d=function(){return p.a.get("/api/notes").then((function(t){return t.data}))},g=function(t){return p.a.post("/api/notes",t).then((function(t){return t.data}))},b=function(t,e){return console.log("Updating object",t),p.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},E=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)("a new note..."),s=Object(l.a)(c,2),p=s[0],E=s[1],v=Object(a.useState)(!0),h=Object(l.a)(v,2),j=h[0],O=h[1],S=Object(a.useState)(null),k=Object(l.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){console.log("effect"),d().then((function(t){r(t)}))}),[]),console.log("render",n.length,"notes");var C=j?n:n.filter((function(t){return t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(m,{message:y}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return O(!j)}},"show ",j?"important":"all")),o.a.createElement("ul",null,C.map((function(t){return o.a.createElement(i,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});console.log("Changed note",a),b(t,a).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(a){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),r(n.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:p,date:(new Date).toISOString(),important:Math.random()>.5};g(e).then((function(t){r(n.concat(t)),E("")}))}},o.a.createElement("input",{value:p,onChange:function(t){console.log(t.target.value),E(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement(f,null))};n(37);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ddddc874.chunk.js.map