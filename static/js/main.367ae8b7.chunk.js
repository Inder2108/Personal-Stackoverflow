(this["webpackJsonpReference-App"]=this["webpackJsonpReference-App"]||[]).push([[0],{36:function(e,t,a){e.exports=a(58)},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(41),a(20)),s=a(8),i=a(4),u=Object(i.a)(),m=a(16),d=a(17),p=a(21),h=a(18),g=a(22),f=(a(46),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"blog-header py-3"},r.a.createElement("div",{className:"row flex-nowrap justify-content-between align-items-center"},r.a.createElement("div",{className:"col-4 pt-1"},r.a.createElement("a",{className:"text-muted",href:"#"},"Subscribe")),r.a.createElement("div",{className:"col-4 text-center"},r.a.createElement("a",{className:"blog-header-logo text-dark",href:"#"},"Personal Stuff")),r.a.createElement("div",{className:"col-4 d-flex justify-content-end align-items-center"},r.a.createElement("a",{className:"btn btn-sm btn-outline-secondary",href:"#"},"Sign up")))),r.a.createElement("div",{className:"nav-scroller py-1 mb-2"},r.a.createElement("nav",{className:"nav d-flex justify-content-between"},r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"World"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"U.S."),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Technology"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Design"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Culture"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Business"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Politics"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Opinion"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Science"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Health"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Style"),r.a.createElement("a",{className:"p-2 text-muted",href:"#"},"Travel"))),r.a.createElement("div",null,e.children)))}),b=a(12),v=(a(47),function(e){var t=e.blogObj,a=t.id,n=t.title,c=t.preview,l=t.date,o=t.category,s=t.subCategory;return r.a.createElement("div",{class:"card flex-md-row mb-4 box-shadow h-md-250"},r.a.createElement("div",{class:"card-body d-flex flex-column align-items-start"},r.a.createElement("strong",{class:"d-inline-block mb-2 text-primary"},o," / ",s),r.a.createElement("h3",{class:"mb-0 btn btn-link",onClick:e.onShowDetailsClick},r.a.createElement(b.a,{to:"/Reference-App/blog-detail/"+a},n)),r.a.createElement("div",{class:"mb-1 text-muted"},l),r.a.createElement("p",{class:"card-text mb-auto"},c)))}),E=a(19),w=a.n(E),y=(a(50),a(6)),x=a.n(y),j=a(11),k={10000001:{id:10000001,title:"All about autocomplete",preview:"All about what goes on behind the attribute autocomplete of a HTML tag.",date:"13 Apr 2020",category:"IT",subCategory:"HTML"},10000002:{id:10000002,title:"Finding center amongst list of google map markers",preview:"Given a list of Google map marker objects, how to find out the geographical center of all these markers using google API.",date:"15 Apr 2020",category:"IT",subCategory:"HTML"}},N={10000001:{content:[{type:"paragraph",value:"This is a content"},{type:"code",value:'\n    if (contentObj.type === "paragraph") {\n        return <p class="card-text mb-auto">{contentObj.value}</p>;\n    } else {\n        return <code>{contentObj.value}</code>\n    }\n            '}]},10000002:{content:[{type:"paragraph",value:"Given a list of markers, google API provides an easy way to figure out the exact geographical center of all these markers. The idea is to keep extending 'bounds' based on markers and then find out the center. Code below:"},{type:"code",value:'\n    var bounds = new google.maps.LatLngBounds();\n    var marker1 = new google.maps.Marker({position: new google.maps.LatLng({"lat":48.64244,"lng":2.22988})});\n    var marker2 = new google.maps.Marker({position: new google.maps.LatLng({"lat":-33.8688,"lng":151.209295})});\n    bounds.extend(marker1.position);\n    bounds.extend(marker2.position);\n    console.log(bounds.getCenter().lat(),bounds.getCenter().lng());\n                '}]}},O={getBlogs:function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getBlog:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N[t]){e.next=3;break}throw{error:"Error"};case 3:return e.abrupt("return",N[t]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showLoader:!0,blogs:[]},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.getBlogs().then((function(t){e.setState({showLoader:!1,blogs:t})})).catch((function(e){console.error(e)}))}},{key:"returnToListView",value:function(){this.setState({showBlogDetails:!1})}},{key:"render",value:function(){var e=this.state.showLoader?null:w.a.map(this.state.blogs,(function(e){return r.a.createElement("div",{className:"col-6"},r.a.createElement(v,{blogObj:e,onShowDetailsClick:function(e){console.log("requesting a detail blog")}}))}));return r.a.createElement(f,null,r.a.createElement("div",{class:"row"},e))}}]),t}(n.Component),L=a(31),T=a(32),C=(a(55),function(e){var t=e.blogObj,a=t.title,n=t.content,c=w.a.map(n,(function(e){return"paragraph"===e.type?r.a.createElement("p",{class:"card-text mb-auto"},e.value):r.a.createElement("pre",null,r.a.createElement("code",null,e.value))}));return r.a.createElement("div",{class:"card mb-4 box-shadow h-md-250"},r.a.createElement("div",{class:"card-header"},r.a.createElement("span",null,a),r.a.createElement("span",{class:"float-right"},r.a.createElement(b.a,{to:"/Reference-App/"},r.a.createElement(L.a,{icon:T.a,className:"text-danger"})))),r.a.createElement("div",{class:"card-body"},c))}),S=(a(56),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showLoader:!0,blogDetail:{}},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.url;O.getBlog(t).then((function(t){e.setState({showLoader:!1,blogDetail:t})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this.state.showLoader?null:r.a.createElement(C,{blogObj:this.state.blogDetail});return r.a.createElement(f,null,e)}}]),t}(n.Component)),D=(a(57),function(){return r.a.createElement(s.b,{history:u},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/Reference-App/",component:A}),r.a.createElement(s.a,{path:"/Reference-App/blog-detail/:url",component:S})))}),B=Object(o.b)((function(e){return{}}),{})(D),I=a(33),M=a(34),H=a(10),R=a(35);var P={uuid:null,isAuthenticated:!0};var U=Object(H.c)({authState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE":return Object(R.a)({},e,{uuid:"placeholder-uuid",isAuthenticated:!0});case"UNAUTHENTICATE":return{uuid:null,isAuthenticated:!1};default:return e}}}),G=function(e,t){return U(e,t)},J=Object(M.createLogger)(),q=Object(H.d)(G,Object(H.a)(I.a,J));l.a.render(r.a.createElement(o.a,{store:q},r.a.createElement(B,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.367ae8b7.chunk.js.map