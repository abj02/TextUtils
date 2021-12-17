(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),l=a.n(s),o=(a(9),a(2)),r=(a(10),a(0));function i(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label mx-3  text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{className:" btn btn-danger",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Text Coverted in UpperCase","success")},children:"Convert To UpperCase"}),Object(r.jsx)("button",{className:" btn btn-info mx-2",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Text Coverted in LowerCase","success")},children:"Convert To LowerCase"}),Object(r.jsx)("button",{className:" btn btn-info mx-2",onClick:function(){s(""),e.showAlert("Text Cleared","success")},children:"Clear Text"}),Object(r.jsx)("button",{className:" btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied To Clipbord","success")},children:"Copy Text"}),Object(r.jsx)("button",{className:" btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Spaces Removed","success")},children:"Remove Extra Space"})]}),Object(r.jsx)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}})]})}i.defaultProps={title:"Set title here",about:"About text here"};var d=function(e){return e.alert&&Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})};var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(o.a)(s,2),u=l[0],h=l[1],j=function(e,t){h({msg:e,type:t})};return setTimeout((function(){h(null)}),1500),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="black",j("Dark Mode Enable","success")):(n("light"),document.body.style.backgroundColor="white",j("Light Mode Enable","success"))}}),Object(r.jsx)(d,{alert:u}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)(b,{heading:"Enter the Text below",mode:a,showAlert:j})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.65a791fa.chunk.js.map