(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{312:function(e,t,a){e.exports=a(704)},319:function(e,t){},321:function(e,t){},351:function(e,t){},352:function(e,t){},445:function(e,t){},702:function(e,t,a){},703:function(e,t,a){},704:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(32),r=a.n(c),l=a(38),i=a(25),d=a(19),u={description:"",quantity:"1",rate:"0.00"},s={logo:"",logoWidth:100,title:"INVOICE",companyName:"",name:"",companyAddress:"",companyAddress2:"",companyCountry:"",billTo:"Bill To:",clientName:"",clientAddress:"",clientAddress2:"",clientCountry:"",invoiceTitleLabel:"Invoice#",invoiceTitle:"",invoiceDateLabel:"Invoice Date",invoiceDate:"",invoiceDueDateLabel:"Due Date",invoiceDueDate:"",productLineDescription:"Item Description",productLineQuantity:"Qty",productLineQuantityRate:"Rate",productLineQuantityAmount:"Amount",productLines:[{description:"Brochure Design",quantity:"2",rate:"100.00"},Object(i.a)({},u),Object(i.a)({},u)],subTotalLabel:"Sub Total",taxLabel:"Sale Tax (10%)",totalLabel:"TOTAL",currency:"\u20ac",notesLabel:"Notes (or delete to hide)",notes:"It was great doing business with you.",termLabel:"Terms & Conditions",term:"Please make the payment by the due date."},m=a(28),p={dark:{color:"#222"},white:{color:"#fff"},"bg-dark":{backgroundColor:"#666"},"bg-gray":{backgroundColor:"#e3e3e3"},flex:{display:"flex",flexDirection:"row",flexWrap:"nowrap"},"w-auto":{flex:1,paddingRight:"8px"},"ml-30":{flex:1},"w-100":{width:"100%"},"w-50":{width:"50%"},"w-55":{width:"55%"},"w-45":{width:"45%"},"w-60":{width:"60%"},"w-40":{width:"40%"},"w-48":{width:"48%"},"w-17":{width:"17%"},"w-18":{width:"18%"},row:{borderBottom:"1px solid ".concat("#e3e3e3")},"mt-40":{marginTop:"40px"},"mt-30":{marginTop:"30px"},"mt-20":{marginTop:"20px"},"mt-10":{marginTop:"10px"},"mb-5":{marginBottom:"5px"},"p-4-8":{padding:"4px 8px"},"p-5":{padding:"5px"},"pb-10":{paddingBottom:"10px"},right:{textAlign:"right"},bold:{fontWeight:"bold"},"fs-20":{fontSize:"20px"},"fs-45":{fontSize:"45px"},page:{fontFamily:"Nunito",fontSize:"13px",color:"#555",padding:"40px 35px"},span:{padding:"4px 12px 4px 0"},logo:{display:"block"}},f=function(e){var t={};return e.replace(/\s+/g," ").split(" ").forEach((function(e){void 0!==typeof p[e]&&Object.assign(t,p[e])})),t},v=function(e){var t=e.className,a=e.placeholder,n=e.value,c=e.onChange,r=e.pdfMode;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(m.Text,{style:f("span "+(t||""))},n):o.a.createElement("input",{type:"text",className:"input "+(t||""),placeholder:a||"",value:n||"",onChange:c?function(e){return c(e.target.value)}:void 0}))},b=a(310),g=function(e){var t=e.className,a=e.placeholder,n=e.value,c=e.onChange,r=e.pdfMode,l=e.rows;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(m.Text,{style:f("span "+(t||""))},n):o.a.createElement(b.a,{minRows:l||1,className:"input "+(t||""),placeholder:a||"",value:n||"",onChange:c?function(e){return c(e.target.value)}:void 0}))},E=a(303),h=a.n(E),N=(a(616),function(e){var t=e.className,a=e.value,n=e.selected,c=e.onChange,r=e.pdfMode;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(m.Text,{style:f("span "+(t||""))},a):o.a.createElement(h.a,{className:"input "+(t||""),selected:n,onChange:c?function(e){return c(e)}:function(e){return null},dateFormat:"MMM dd, yyyy"}))}),y=a(309);var w=function(e,t){Object(n.useEffect)((function(){var a=function(a){var n=null===e||void 0===e?void 0:e.current;n&&!n.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])},M=(a(701),function(e){var t=e.className,a=e.placeholder,c=e.value,r=e.width,l=e.onChangeImage,u=e.onChangeWidth,s=e.pdfMode,p=Object(n.useRef)(null),v=Object(n.useRef)(null),b=Object(n.useState)(!1),g=Object(d.a)(b,2),E=g[0],h=g[1];w(v,(function(){E&&h(!1)}));var N=function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.click()};return s?c?o.a.createElement(m.Image,{style:Object(i.a)(Object(i.a)({},f("image ".concat(t||""))),{},{maxWidth:r}),src:c}):o.a.createElement(o.a.Fragment,null):o.a.createElement("div",{className:"image ".concat(c?"mb-5":""," ").concat(t||"")},c?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:c,className:"image__img",alt:a,style:{maxWidth:r||100}}),o.a.createElement("button",{type:"button",className:"image__change",onClick:N},"Change Image"),o.a.createElement("button",{type:"button",className:"image__edit",onClick:function(){h(!E)}},"Resize Image"),o.a.createElement("button",{type:"button",className:"image__remove",onClick:function(){"function"===typeof l&&l("")}},"Remove"),E&&o.a.createElement("div",{ref:v,className:"image__width-wrapper"},o.a.createElement(y.a,{min:100,max:250,marks:{100:"100px",150:"150px",200:"200px",250:"250px"},included:!1,step:1,onChange:function(e){"function"===typeof u&&u(e)},defaultValue:r||100}))):o.a.createElement("button",{type:"button",className:"image__upload",onClick:N},a),o.a.createElement("input",{ref:p,tabIndex:-1,type:"file",accept:"image/*",className:"image__file",onChange:function(){var e;if(null===p||void 0===p||null===(e=p.current)||void 0===e?void 0:e.files){var t=p.current.files;if(t.length>0&&"function"===typeof l){var a=new FileReader;a.addEventListener("load",(function(){"string"===typeof a.result&&l(a.result)})),a.readAsDataURL(t[0])}}}}))}),C=function(e){var t=e.pdfMode,a=e.children;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(m.Document,null,a):o.a.createElement(o.a.Fragment,null,a))},x=function(e){var t=e.className,a=e.pdfMode,n=e.children;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(m.Page,{size:"A4",style:f("page "+(t||""))},n):o.a.createElement("div",{className:"page "+(t||"")},n))},L=function(e){var t=e.className,a=e.pdfMode,n=e.children;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(m.View,{style:f("view "+(t||""))},n):o.a.createElement("div",{className:"view "+(t||"")},n))},O=function(e){var t=e.className,a=e.pdfMode,n=e.children;return o.a.createElement(o.a.Fragment,null,a?o.a.createElement(m.Text,{style:f("span "+(t||""))},n):o.a.createElement("span",{className:"span "+(t||"")},n))},j=function(e){var t=e.data,a=Object(n.useState)(!1),c=Object(d.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){l(!1);var e=setTimeout((function(){l(!0)}),500);return function(){return clearTimeout(e)}}),[t]),o.a.createElement("div",{className:"download-pdf "+(r?"":"loading"),title:"Save PDF"},r&&o.a.createElement(m.PDFDownloadLink,{document:o.a.createElement(A,{pdfMode:!0,data:t}),fileName:"".concat(t.invoiceTitle?t.invoiceTitle.toLowerCase():"invoice",".pdf"),"aria-label":"Save PDF"}))},D=a(97),k=function(e){var t=e.buttonClass,a=e.buttonName,n=e.hoverTitle,c=e.onButtonClick;return o.a.createElement("button",{onClick:function(){console.log("Button click :)"),"function"===typeof c?c():console.log("onButtonClick is not a function")},className:t,title:n},o.a.createElement("span",null,a))};function T(){window.localStorage.removeItem("invoiceData"),window.location.reload()}function S(){!0===window.confirm("This will reset the form, press OK to confirm.")&&T()}m.Font.register({family:"Nunito",fonts:[{src:"https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf"},{src:"https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf",fontWeight:600}]});var A=function(e){var t=e.data,a=e.pdfMode,c=e.onChange,r=Object(n.useState)(t?Object(i.a)({},t):Object(i.a)({},s)),m=Object(d.a)(r,2),p=m[0],f=m[1],b=Object(n.useState)(),E=Object(d.a)(b,2),h=E[0],y=E[1],w=Object(n.useState)(),T=Object(d.a)(w,2),A=T[0],I=T[1],F=""!==p.invoiceDate?new Date(p.invoiceDate):new Date,R=""!==p.invoiceDueDate?new Date(p.invoiceDueDate):new Date(F.valueOf());""===p.invoiceDueDate&&R.setDate(R.getDate()+30);var _=function(e,t){if("productLines"!==e){var a=Object(i.a)({},p);("logoWidth"===e&&"number"===typeof t||"logoWidth"!==e&&"string"===typeof t)&&(a[e]=t),f(a)}},B=function(e,t,a){var n=p.productLines.map((function(n,o){if(o===e){var c=Object(i.a)({},n);if("description"===t)c[t]=a;else if("."===a[a.length-1]||"0"===a[a.length-1]&&a.includes("."))c[t]=a;else{var r=parseFloat(a);c[t]=(r||0).toString()}return c}return Object(i.a)({},n)}));f(Object(i.a)(Object(i.a)({},p),{},{productLines:n}))};return Object(n.useEffect)((function(){var e=0;p.productLines.forEach((function(t){var a=parseFloat(t.quantity),n=parseFloat(t.rate);e+=a&&n?a*n:0})),y(e)}),[p.productLines]),Object(n.useEffect)((function(){var e=p.taxLabel.match(/(\d+)%/),t=e?parseFloat(e[1]):0;I(h?h*t/100:0)}),[h,p.taxLabel]),Object(n.useEffect)((function(){c&&c(p)}),[c,p]),o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{buttonClass:"button-reset-invoice",buttonName:"Reset Invoice",hoverTitle:"Reset to Default",onButtonClick:S}),o.a.createElement(k,{buttonClass:"button-save-invoice",buttonName:"Save Invoice",hoverTitle:"Save Invoice (Does not work)",onButtonClick:""}),o.a.createElement(C,{pdfMode:a},o.a.createElement(x,{className:"invoice-wrapper",pdfMode:a},!a&&o.a.createElement(j,{data:p}),o.a.createElement(L,{className:"flex",pdfMode:a},o.a.createElement(L,{className:"w-50",pdfMode:a},o.a.createElement(M,{className:"logo",placeholder:"Your Logo",value:p.logo,width:p.logoWidth,pdfMode:a,onChangeImage:function(e){return _("logo",e)},onChangeWidth:function(e){return _("logoWidth",e)}}),o.a.createElement(v,{className:"fs-20 bold",placeholder:"Your Company",value:p.companyName,onChange:function(e){return _("companyName",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"Your Name",value:p.name,onChange:function(e){return _("name",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"Company's Address",value:p.companyAddress,onChange:function(e){return _("companyAddress",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"City, State Zip",value:p.companyAddress2,onChange:function(e){return _("companyAddress2",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"Country",value:p.companyCountry,onChange:function(e){return _("companyCountry",e)},pdfMode:a})),o.a.createElement(L,{className:"w-50",pdfMode:a},o.a.createElement(v,{className:"fs-45 right bold",placeholder:"Invoice",value:p.title,onChange:function(e){return _("title",e)},pdfMode:a}))),o.a.createElement(L,{className:"flex mt-40",pdfMode:a},o.a.createElement(L,{className:"w-55",pdfMode:a},o.a.createElement(v,{className:"bold dark mb-5",value:p.billTo,onChange:function(e){return _("billTo",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"Your Client's Name",value:p.clientName,onChange:function(e){return _("clientName",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"Client's Address",value:p.clientAddress,onChange:function(e){return _("clientAddress",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"City, State Zip",value:p.clientAddress2,onChange:function(e){return _("clientAddress2",e)},pdfMode:a}),o.a.createElement(v,{placeholder:"Country",value:p.companyCountry,onChange:function(e){return _("clientCountry",e)},pdfMode:a})),o.a.createElement(L,{className:"w-45",pdfMode:a},o.a.createElement(L,{className:"flex mb-5",pdfMode:a},o.a.createElement(L,{className:"w-40",pdfMode:a},o.a.createElement(v,{className:"bold",value:p.invoiceTitleLabel,onChange:function(e){return _("invoiceTitleLabel",e)},pdfMode:a})),o.a.createElement(L,{className:"w-60",pdfMode:a},o.a.createElement(v,{placeholder:"INV-12",value:p.invoiceTitle,onChange:function(e){return _("invoiceTitle",e)},pdfMode:a}))),o.a.createElement(L,{className:"flex mb-5",pdfMode:a},o.a.createElement(L,{className:"w-40",pdfMode:a},o.a.createElement(v,{className:"bold",value:p.invoiceDateLabel,onChange:function(e){return _("invoiceDateLabel",e)},pdfMode:a})),o.a.createElement(L,{className:"w-60",pdfMode:a},o.a.createElement(N,{value:Object(D.default)(F,"MMM dd, yyyy"),selected:F,onChange:function(e){return _("invoiceDate",e&&!Array.isArray(e)?Object(D.default)(e,"MMM dd, yyyy"):"")},pdfMode:a}))),o.a.createElement(L,{className:"flex mb-5",pdfMode:a},o.a.createElement(L,{className:"w-40",pdfMode:a},o.a.createElement(v,{className:"bold",value:p.invoiceDueDateLabel,onChange:function(e){return _("invoiceDueDateLabel",e)},pdfMode:a})),o.a.createElement(L,{className:"w-60",pdfMode:a},o.a.createElement(N,{value:Object(D.default)(R,"MMM dd, yyyy"),selected:R,onChange:function(e){return _("invoiceDueDate",e&&!Array.isArray(e)?Object(D.default)(e,"MMM dd, yyyy"):"")},pdfMode:a}))))),o.a.createElement(L,{className:"mt-30 bg-dark flex",pdfMode:a},o.a.createElement(L,{className:"w-48 p-4-8",pdfMode:a},o.a.createElement(v,{className:"white bold",value:p.productLineDescription,onChange:function(e){return _("productLineDescription",e)},pdfMode:a})),o.a.createElement(L,{className:"w-17 p-4-8",pdfMode:a},o.a.createElement(v,{className:"white bold right",value:p.productLineQuantity,onChange:function(e){return _("productLineQuantity",e)},pdfMode:a})),o.a.createElement(L,{className:"w-17 p-4-8",pdfMode:a},o.a.createElement(v,{className:"white bold right",value:p.productLineQuantityRate,onChange:function(e){return _("productLineQuantityRate",e)},pdfMode:a})),o.a.createElement(L,{className:"w-18 p-4-8",pdfMode:a},o.a.createElement(v,{className:"white bold right",value:p.productLineQuantityAmount,onChange:function(e){return _("productLineQuantityAmount",e)},pdfMode:a}))),p.productLines.map((function(e,t){return a&&""===e.description?o.a.createElement(O,{key:t}):o.a.createElement(L,{key:t,className:"row flex",pdfMode:a},o.a.createElement(L,{className:"w-48 p-4-8 pb-10",pdfMode:a},o.a.createElement(g,{className:"dark",rows:2,placeholder:"Enter item name/description",value:e.description,onChange:function(e){return B(t,"description",e)},pdfMode:a})),o.a.createElement(L,{className:"w-17 p-4-8 pb-10",pdfMode:a},o.a.createElement(v,{className:"dark right",value:e.quantity,onChange:function(e){return B(t,"quantity",e)},pdfMode:a})),o.a.createElement(L,{className:"w-17 p-4-8 pb-10",pdfMode:a},o.a.createElement(v,{className:"dark right",value:e.rate,onChange:function(e){return B(t,"rate",e)},pdfMode:a})),o.a.createElement(L,{className:"w-18 p-4-8 pb-10",pdfMode:a},o.a.createElement(O,{className:"dark right",pdfMode:a},function(e,t){var a=parseFloat(e),n=parseFloat(t);return(a&&n?a*n:0).toFixed(2)}(e.quantity,e.rate))),!a&&o.a.createElement("button",{className:"link row__remove","aria-label":"Remove Row",title:"Remove Row",onClick:function(){return function(e){var t=p.productLines.filter((function(t,a){return a!==e}));f(Object(i.a)(Object(i.a)({},p),{},{productLines:t}))}(t)}},o.a.createElement("span",{className:"icon icon-remove bg-red"})))})),o.a.createElement(L,{className:"flex",pdfMode:a},o.a.createElement(L,{className:"w-50 mt-10",pdfMode:a},!a&&o.a.createElement("button",{className:"link",onClick:function(){var e=[].concat(Object(l.a)(p.productLines),[Object(i.a)({},u)]);f(Object(i.a)(Object(i.a)({},p),{},{productLines:e}))}},o.a.createElement("span",{className:"icon icon-add bg-green mr-10"}),"Add Line Item")),o.a.createElement(L,{className:"w-50 mt-20",pdfMode:a},o.a.createElement(L,{className:"flex",pdfMode:a},o.a.createElement(L,{className:"w-50 p-5",pdfMode:a},o.a.createElement(v,{value:p.subTotalLabel,onChange:function(e){return _("subTotalLabel",e)},pdfMode:a})),o.a.createElement(L,{className:"w-50 p-5",pdfMode:a},o.a.createElement(O,{className:"right bold dark",pdfMode:a},null===h||void 0===h?void 0:h.toFixed(2)))),o.a.createElement(L,{className:"flex",pdfMode:a},o.a.createElement(L,{className:"w-50 p-5",pdfMode:a},o.a.createElement(v,{value:p.taxLabel,onChange:function(e){return _("taxLabel",e)},pdfMode:a})),o.a.createElement(L,{className:"w-50 p-5",pdfMode:a},o.a.createElement(O,{className:"right bold dark",pdfMode:a},null===A||void 0===A?void 0:A.toFixed(2)))),o.a.createElement(L,{className:"flex bg-gray p-5",pdfMode:a},o.a.createElement(L,{className:"w-50 p-5",pdfMode:a},o.a.createElement(v,{className:"bold",value:p.totalLabel,onChange:function(e){return _("totalLabel",e)},pdfMode:a})),o.a.createElement(L,{className:"w-50 p-5 flex",pdfMode:a},o.a.createElement(v,{className:"dark bold right ml-30",value:p.currency,onChange:function(e){return _("currency",e)},pdfMode:a}),o.a.createElement(O,{className:"right bold dark w-auto",pdfMode:a},("undefined"!==typeof h&&"undefined"!==typeof A?h+A:0).toFixed(2)))))),o.a.createElement(L,{className:"mt-20",pdfMode:a},o.a.createElement(v,{className:"bold w-100",value:p.notesLabel,onChange:function(e){return _("notesLabel",e)},pdfMode:a}),o.a.createElement(g,{className:"w-100",rows:2,value:p.notes,onChange:function(e){return _("notes",e)},pdfMode:a})),o.a.createElement(L,{className:"mt-20",pdfMode:a},o.a.createElement(v,{className:"bold w-100",value:p.termLabel,onChange:function(e){return _("termLabel",e)},pdfMode:a}),o.a.createElement(g,{className:"w-100",rows:2,value:p.term,onChange:function(e){return _("term",e)},pdfMode:a})))))},I=a(308),F=a(133),R=Object(I.a)({apiKey:"AIzaSyArPMHCJJ2oNvVjzHa2SdeTSHN_S0VBr5M",authDomain:"invoice-martinreinok-com.firebaseapp.com",projectId:"invoice-martinreinok-com",storageBucket:"invoice-martinreinok-com.appspot.com",messagingSenderId:"892402904173",appId:"1:892402904173:web:b7938cd64fd79f78f5a364"}),_=Object(F.a)(R),B=o.a.createContext();function W(){return Object(n.useContext)(B)}function Q(e){var t=e.children,a=Object(n.useState)(),c=Object(d.a)(a,2),r=c[0],l=c[1],i=Object(n.useState)(!0),u=Object(d.a)(i,2),s=u[0],m=u[1];Object(n.useEffect)((function(){return _.onAuthStateChanged((function(e){l(e),m(!1)}))}),[]);var p={currentUser:r,login:function(e,t){return Object(F.b)(_,e,t)}};return o.a.createElement(B.Provider,{value:p},!s&&t)}var q=a(2),P=a.n(q),z=a(4),V=(a(702),a(16));function J(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=W().login,c=Object(n.useState)(!1),r=Object(d.a)(c,1)[0],l=Object(n.useState)(""),i=Object(d.a)(l,2),u=i[0],s=i[1],m=Object(V.g)();function p(){return(p=Object(z.a)(P.a.mark((function n(o){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o.preventDefault(),n.prev=1,n.next=4,a(e.current.value,t.current.value);case 4:s("Success"),m("/invoice"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),s("Log in failed");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}return o.a.createElement("div",{className:"login-box"},o.a.createElement("h2",null,"Login"),o.a.createElement("center",null,o.a.createElement("h3",null,u)),o.a.createElement("form",null,o.a.createElement("div",{className:"user-box"},o.a.createElement("input",{type:"username",placeholder:"Username",required:!0,ref:e})),o.a.createElement("div",{className:"user-box"},o.a.createElement("input",{type:"password",placeholder:"Password",required:!0,ref:t})),o.a.createElement("button",{className:"submit-button",disabled:r,onClick:function(e){return p.apply(this,arguments)}},"Submit")))}var K=a(125),U=function(e){var t=e.children;return W().currentUser?t:o.a.createElement(V.a,{to:"/login"})};var Y=function(){var e=window.localStorage.getItem("invoiceData"),t=null;try{e&&(t=JSON.parse(e))}catch(a){}return o.a.createElement("div",{className:"app"},o.a.createElement(Q,null,o.a.createElement(K.a,null,o.a.createElement(V.d,null,o.a.createElement(V.b,{path:"/invoice",element:o.a.createElement(U,null,o.a.createElement(A,{data:t,onChange:function(e){window.localStorage.setItem("invoiceData",JSON.stringify(e))}}))}),o.a.createElement(V.b,{path:"/login",element:o.a.createElement(J,null)}),o.a.createElement(V.b,{path:"/",element:o.a.createElement(J,null)})))))};a(703);r.a.render(o.a.createElement(Y,null),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.eb71ce94.chunk.js.map