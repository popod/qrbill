(this["webpackJsonp@nexys/qrbill"]=this["webpackJsonp@nexys/qrbill"]||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(62),o=a.n(l),i=a(15),s=a(7),c=a(21),m={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},d="Swiss QR Bill",u=[{name:"QR Reader",link:"/qr/read"},{name:"QR Writer",link:"/qr/write"},{name:"Convert",link:"/convert"},{name:"Validate",link:"/validate"}];var p=function(e){var t=r.a.createElement("header",null,r.a.createElement("div",{style:m,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},r.a.createElement(c.a,{to:"/"},d)),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},u.map((function(e,t){return r.a.createElement(c.a,{className:"p-2 text-dark",key:t,to:e.link},e.name)})))));return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("div",{className:"container"},e.children))};var h=function(){return r.a.createElement("p",null,"converts output (break line separated text) into JSON")};var E=function(){return r.a.createElement("p",null,"Display textarea where the json can be pasted and checked")},g=a(65),f=a(66),v=a(71),y=a(67),C=a(72),w=a(68),R=a.n(w),b=a(1),N=a.n(b),x=N.a.object({AdrTp:N.a.string().regex(/^[ST]$/),Ctry:N.a.string().regex(/^\w{2}$/),Name:N.a.string(),PstCd:N.a.string(),StrNameOrAdrLine1:N.a.string(),StrNameOrAdrLine2:N.a.string(),TmwNm:N.a.string()}).unknown(!0),A=N.a.object({IBAN:N.a.string().regex(/[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/),Cdtr:x}),S=N.a.object({QRType:N.a.string().valid("SPC"),Version:N.a.string().regex(/^\d{4}$/).valid("0200"),Coding:N.a.string().regex(/^1$/)}),k=N.a.object({Amt:N.a.string().regex(/^\d+\.\d{2}$/),Ccy:N.a.string().regex(/^[A-Z]{3}$/)}),P=N.a.object({AddInf:N.a.object({SrdBkgInfo:N.a.string().optional(),Trailer:N.a.string().valid("EPD"),Ustrd:N.a.string().optional()}),Ref:N.a.string().optional(),Tp:N.a.string().valid("QRR")}),T=N.a.object({AltPmt1:N.a.string().optional(),AltPmt2:N.a.string().optional()}),B=N.a.object({Header:S,CdtrInf:A,CcyAmt:k,UltmtDtr:x.allow(null).optional(),UltmtCdtr:x.allow(null).optional(),RmtInf:P,AltPmtInf:T}),j=function(e,t){var a=e.validate(t,{presence:"required"});return console.log(a),null===a.error},I={QRType:"SPC",Version:"0200",Coding:"1"},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={AdrTp:e[t],Name:e[t+1],StrNameOrAdrLine1:e[t+2],StrNameOrAdrLine2:e[t+3],PstCd:e[t+4],TmwNm:e[t+5],Ctry:e[t+6]},n=Object.keys(a).map((function(e){return""===a[e]})).reduce((function(e,t){return e&&t}));return!0===n?null:a},O=function(e){var t={IBAN:e[3],Cdtr:F(e,4)},a=F(e,11),n=F(e,20),r={Ccy:e[19],Amt:e[18]},l={Ustrd:e[29],Trailer:e[30],SrdBkgInfo:e[31]},o={Tp:e[27],Ref:e[28],AddInf:l},i={AltPmt1:e[32],AltPmt2:e[33]};return{Header:I,CdtrInf:t,UltmtCdtr:a,UltmtDtr:n,CcyAmt:r,RmtInf:o,AltPmtInf:i}},Q=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(y.a)(t).call(this,e))).handleScan=function(e){if(e){var t=e.split("\n"),n=O(t);console.log(n),j(B,n)?a.setState({result:n}):a.setState({result:"The QR Code read is not a valid Swiss QRBIll"})}},a.handleError=function(e){console.error(e)},a.state={show:!0,result:"No result"},a}return Object(C.a)(t,e),Object(f.a)(t,[{key:"renderReader",value:function(){return this.state.show?r.a.createElement(R.a,{delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"300px"}}):null}},{key:"toggleReader",value:function(){var e=!this.state.show;this.setState({show:e})}},{key:"render",value:function(){return console.log(this.state.result),r.a.createElement("div",null,this.renderReader(),r.a.createElement("pre",null,JSON.stringify(this.state.result,null,2)))}}]),t}(n.Component),D=a(70),q=a.n(D);var L=function(e){var t=e.value;if(!Array.isArray(t)||34!==t.length)return null;var a="#000000",n="#ffffff",l="M",o="svg",i=!1,s=300/46*7;return r.a.createElement("div",{className:"svgHolder",style:{position:"relative"}},r.a.createElement(q.a,{value:t.join("\n"),size:300,fgColor:a,bgColor:n,level:l,renderAs:o,includeMargin:i}),r.a.createElement("svg",{style:{margin:"0 auto",position:"absolute",top:150-s+"px",left:150-s+"px"}},r.a.createElement("rect",{x:18.26086956521739,y:18.26086956521739,width:1.2*s,height:1.2*s,r:s,fill:"white"}),r.a.createElement("rect",{x:s/2,y:s/2,width:s,height:s,r:s,fill:"black"}),r.a.createElement("rect",{x:40.630434782608695,y:27.847826086956523,width:1.1/5*s,height:.78*s,fill:"white"}),r.a.createElement("rect",{x:27.847826086956523,y:40.630434782608695,width:.78*s,height:1.1/5*s,fill:"white"})))},$=["QRType","Version","Coding Type","Compte (IBAN CRE)","Type d'adresse (CRE)","Nom (CRE)","Rue ou ligne d'adresse 1 (CRE)","Num\xe9ro de maison ou ligne d'adresse 2 (CRE)","Code postale (CRE)","Lieu (CRE)","Pays (CRE)","Type d'adresse (CREF)","Nom (CREF)","Rue ou ligne d'adresse 1 (CREF)","Num\xe9ro de maison ou ligne d'adresse 2 (CREF)","Code postale (CREF)","Lieu (CREF)","Pays (CREF)","Montant","Monnaie","Type d'adresse (DEBF)","Nom (DEBF)","Rue ou ligne d'adresse 1 (DEBF)","Num\xe9ro de maison ou ligne d'adresse 2 (DEBF)","Code postale (DEBF)","Lieu (DEBF)","Pays (DEBF)","Type de r\xe9f\xe9rence","R\xe9f\xe9rence","Communication non structur\xe9e","Trailer","Informations de facture","PA1 \u2013 Param\xe8tres","PA2 \u2013 Param\xe8tres"];var U=function(e){var t=e.value;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null," Generated Swiss QR"),r.a.createElement(L,{value:t})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,"QR Content (as an array)"),r.a.createElement("pre",null,JSON.stringify(t,null,2))))},J=function(){return r.a.createElement("p",null,"Page Not Found")},z=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"here you can play with different tools to understand the Swiss QR Bill"),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement(c.a,{to:"/qr/read"},"Click here")," if you would like to read a Swiss QR Code")),r.a.createElement("p",null,"See all options in the menu"),r.a.createElement("p",null,"Do you need help with the transition to the new QR Bill and in general ISO20001? Please get in touch at ",r.a.createElement("a",{href:"info@nexys.ch"},"info [@] nexys.ch")))};var M=Object(i.f)((function(e){return r.a.createElement(p,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/qr/read",component:Q,props:e}),r.a.createElement(i.a,{path:"/qr/write",component:function(){return r.a.createElement(U,{value:$})},props:e}),r.a.createElement(i.a,{path:"/convert",component:h,props:e}),r.a.createElement(i.a,{path:"/validate",component:E,props:e}),r.a.createElement(i.a,{exact:!0,path:"/",component:z}),r.a.createElement(i.a,{path:"/",component:J})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=s.a();o.a.render(r.a.createElement(i.b,{history:V},r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},73:function(e,t,a){e.exports=a(145)}},[[73,1,2]]]);
//# sourceMappingURL=main.041c0985.chunk.js.map