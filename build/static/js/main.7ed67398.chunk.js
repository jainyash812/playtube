(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(78),i=n.n(o),c=n(6),l=(n(95),n(214)),s=n(15),u=n(3),m=n(215),f=n(81),p=n(82),h=n.n(p);function d(){d=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),i=new O(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var u={};function m(){}function f(){}function p(){}var h={};c(h,r,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(k([])));v&&v!==t&&n.call(v,r)&&(h=v);var y=p.prototype=m.prototype=Object.create(h);function x(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,o){function i(){return new t(function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return a("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},x(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(l(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(y),c(y,i,"Generator"),c(y,r,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var g={params:{maxResults:50},headers:{"X-RapidAPI-Key":"d5f660637dmsh5f78af6982e9f9bp174f33jsn63a967b34c7f","X-RapidAPI-Host":"youtube-v31.p.rapidapi.com"}},v=function(){var e=Object(f.a)(d().mark(function e(t){var n,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("https://youtube-v31.p.rapidapi.com","/").concat(t),g);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=n(209),x=n(211),E=n(213),b=n(40),w=n.n(b),j=n(207),O=n(212),k=n(126),S=n.n(k),N=n(83),L=n.n(N),C=n(55),I=n.n(C),T=n(129),z=n.n(T),D=n(130),W=n.n(D),P=n(85),_=n.n(P),G=n(127),F=n.n(G),R=n(132),B=n.n(R),J=n(131),A=n.n(J),M=n(128),H=n.n(M),Y=n(86),q=n.n(Y),K=n(62),X=n.n(K),Z=n(133),V=n.n(Z),Q=[{name:"New",icon:r.a.createElement(L.a,null)},{name:"Coding",icon:r.a.createElement(I.a,null)},{name:"ReactJS",icon:r.a.createElement(I.a,null)},{name:"NextJS",icon:r.a.createElement(I.a,null)},{name:"Music",icon:r.a.createElement(S.a,null)},{name:"Education",icon:r.a.createElement(F.a,null)},{name:"Podcast",icon:r.a.createElement(H.a,null)},{name:"Movie",icon:r.a.createElement(z.a,null)},{name:"Gaming",icon:r.a.createElement(W.a,null)},{name:"Live",icon:r.a.createElement(_.a,null)},{name:"Sport",icon:r.a.createElement(X.a,null)},{name:"Fashion",icon:r.a.createElement(A.a,null)},{name:"Beauty",icon:r.a.createElement(B.a,null)},{name:"Comedy",icon:r.a.createElement(q.a,null)},{name:"Gym",icon:r.a.createElement(X.a,null)},{name:"Crypto",icon:r.a.createElement(V.a,null)}],U=function(e){var t=e.videoDetailInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{sx:{maxWidth:345},className:"video-card"},r.a.createElement(j.a,null,r.a.createElement(s.b,{to:t.id.videoId?"/video/".concat(t.id.videoId):"/video/GDa8kZLNhJ4"},r.a.createElement(x.a,{component:"img",sx:{width:350,height:180},image:t.snippet.thumbnails.high.url,alt:t.snippet.title})),r.a.createElement(O.a,null,r.a.createElement(E.a,{sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textTransform:"capitalize",lineHeight:"1.3rem",marginBottom:"7px",cursor:"pointer"},variant:"subtitle1",fontWeight:"bold",color:"black"},t.snippet.title),r.a.createElement(E.a,{variant:"subtitle2",color:"gray"},t.snippet.channelTitle,r.a.createElement(w.a,{sx:{fontSize:"12px",color:"gray",ml:"5px"}}))))))},$=function(e){var t=e.selectedCategoryNav,n=Object(a.useState)([]),o=Object(c.a)(n,2),i=o[0],s=o[1],f=Object(u.f)();return Object(a.useEffect)(function(){v("search?part=snippet&q=".concat(t)).then(function(e){s(e.items)}).catch(function(e){f("/error")})},[t]),0===i.length?r.a.createElement(l.a,{sx:{color:"red",display:"flex",width:"100vw",height:"91vh",justifyContent:"center",alignItems:"center",background:"#f7f6f2"}},r.a.createElement(m.a,{sx:{height:"100vh",width:"100vw"}})):r.a.createElement(l.a,{sx:{paddingTop:"2rem",background:"#f7f6f2",height:"100%",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",gap:"1.5rem"}},i.map(function(e,t){return r.a.createElement(U,{key:"".concat(t,"xyz"),videoDetailInfo:e})}))},ee=n(9),te=n(138),ne=n(206),ae=n(21),re=n(134),oe=function(e){var t=e.videoDetailInfo,n=e.searchCard,a=Object(ae.a)(function(e){var t=e.className,n=Object(te.a)(e,["className"]);return r.a.createElement(ne.a,Object.assign({},n,{arrow:!0,classes:{popper:t}}))})(function(e){var t=e.theme;return Object(ee.a)({},"& .".concat(re.a.tooltip),{backgroundColor:t.palette.common.white,margin:"0 !important",fontSize:"0.7rem",color:"black"})});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{sx:{minWidth:n?800:445,maxWidth:n?800:445,maxHeight:n?250:150,display:"flex"},className:n?"responsive-search-card":"ultra-search-card"},r.a.createElement(s.b,{to:t.id.videoId?"/video/".concat(t.id.videoId):"/video/GDa8kZLNhJ4"},r.a.createElement(x.a,{component:"img",sx:{width:n?350:200,height:n?250:150},image:t.snippet.thumbnails.high.url,alt:t.snippet.title,className:n?"responsive-image":"ultra-responsive-image"})),r.a.createElement("div",{style:{padding:"1rem"}},r.a.createElement(a,{sx:{border:"1px solid black",margin:0},title:t.snippet.title,placement:"bottom"},r.a.createElement(E.a,{sx:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"3",WebkitBoxOrient:"vertical",textTransform:"capitalize",lineHeight:"1.3rem",marginBottom:"7px",cursor:"pointer"},variant:"subtitle1",fontWeight:"bold",color:"black"},t.snippet.title.toLowerCase())),r.a.createElement(E.a,{variant:"subtitle2",color:"gray"},t.snippet.channelTitle,r.a.createElement(w.a,{sx:{fontSize:"12px",color:"gray",ml:"5px"}})),r.a.createElement(E.a,{variant:"subtitle2",color:"gray"},Math.floor(1e4*Math.random())," views"))))},ie=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(u.f)(),s=Object(u.g)().searchText;return Object(a.useEffect)(function(){v("search?part=snippet&q=".concat(s)).then(function(e){o(e.items.splice(1))}).catch(function(e){i("/error")})},[s]),0===n.length?r.a.createElement(l.a,{sx:{color:"red",display:"flex",width:"100vw",height:"91vh",justifyContent:"center",alignItems:"center",background:"#f7f6f2"}},r.a.createElement(m.a,{sx:{height:"100vh",width:"100vw"}})):r.a.createElement(l.a,{className:"search-feed-container",sx:{padding:"2rem 0",background:"#f7f6f2",height:"100%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"1.5rem"}},n.map(function(e,t){return r.a.createElement(oe,{key:"".concat(t,"xyz"),searchCard:!0,videoDetailInfo:e})}))},ce=n(135),le=n.n(ce),se=n(204),ue=n(137),me=n.n(ue),fe=n(136),pe=n.n(fe),he=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(null),f=Object(c.a)(i,2),p=f[0],h=f[1],d=Object(u.g)().videoId,g=Object(a.useState)(!1),y=Object(c.a)(g,2),x=y[0],b=y[1],j=Object(a.useState)(!1),O=Object(c.a)(j,2),k=O[0],S=O[1],N=Object(u.f)();Object(a.useEffect)(function(){b(!0),S(!0),v("videos?part=snippet,statistics&id=".concat(d)).then(function(e){setTimeout(function(){b(!1)},2e3),o(e.items[0])}).catch(function(e){N("/error")}),v("search?part=snippet,statistics&relatedToVideoId=".concat(d,"&type=video")).then(function(e){setTimeout(function(){S(!1)},2e3),h(e.items)}).catch(function(e){N("/error")})},[d]);var L=n?n.snippet.title:"PlayTube Title",C=n?n.snippet.channelTitle:"PlayTube Channel Title",I=n?n.statistics.viewCount:"2457855",T=n?n.statistics.likeCount:"234";return r.a.createElement(l.a,{sx:{background:"#f7f6f2",width:"100%"}},r.a.createElement(se.a,{direction:{xs:"column",md:"row"},sx:{display:"flex",flexDirection:"row",justifyContent:"center"}},r.a.createElement(l.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center"},className:"video-container"},x&&k?r.a.createElement(l.a,{sx:{color:"red",display:"flex",width:"100vw",height:"91vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(m.a,{sx:{height:"100vh",width:"100vw"}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{sx:{padding:"1.3rem"}},r.a.createElement(le.a,{url:"https://www.youtube.com/watch?v=".concat(d),className:"react-player",controls:!0,width:1e3,height:510,fallback:r.a.createElement(m.a,{sx:{height:"100vh",width:"100vw"}})}),r.a.createElement(E.a,{color:"black",variant:"h5",fontWeight:"bold",sx:{fontSize:"1.28rem",fontWeight:"100",padding:"16px 0 0"}},L),r.a.createElement(se.a,{direction:"row",sx:{color:"black",padding:"16px 0",borderBottom:"1px solid #e9e9e9"}},r.a.createElement(s.b,{to:"/",style:{marginRight:"10px",textDecoration:"none",fontSize:"1.1rem",border:"1px solid black",borderRadius:"10px",padding:"5px"}},r.a.createElement(E.a,{variant:{sm:"subtitle1",md:"h6"},color:"black"},C,r.a.createElement(w.a,{sx:{fontSize:"12px",color:"black",ml:"5px"}}))),r.a.createElement(se.a,{direction:"row",gap:"20px",alignItems:"center"},r.a.createElement(E.a,{variant:"body1",sx:{display:"flex"}},r.a.createElement(pe.a,{sx:{marginRight:"10px"},className:"visible-icon"}),parseInt(I).toLocaleString()||"2345"," views..."),r.a.createElement(E.a,{variant:"body1",sx:{display:"flex"}},r.a.createElement(me.a,{sx:{marginRight:"10px"},className:"thumbs-up-icon"}),parseInt(T).toLocaleString()," likes")))),r.a.createElement(l.a,{sx:{marginTop:"1.3rem"}},!!p&&p.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{key:"item".concat(t),sx:{display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",marginBottom:"1rem"}},r.a.createElement(oe,{searchCard:!1,videoDetailInfo:e})))}))))))},de=n(205),ge=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(u.f)();return r.a.createElement(l.a,{sx:{display:"flex",flexDirection:"row",alignItems:"center",margin:"5px"}},r.a.createElement("input",{onChange:function(e){o(e.target.value.replace(/\s*/g,""))},onKeyPress:function(e){"Enter"===e.code&&""!=n.replace(/\s*/g,"")&&i("/search/".concat(n))},className:"search-bar",placeholder:"Search"}),r.a.createElement(s.b,{to:n?"/search/".concat(n):""},r.a.createElement(de.a,{sx:{background:"#f6f6f6",color:"#030303",cursor:"pointer",border:"1px solid #e0e0e0",padding:"6px 10px",display:"flex"}})))},ve=n(210),ye=n(52),xe=n.n(ye),Ee=n(46),be=n.n(Ee),we=function(e){var t=e.categorySelected,n=e.changeSelectedCategory,a=e.openStatus,o=e.toggleSideBar,i=Object(u.f)();return r.a.createElement(ve.a,{sx:{position:"absolute",top:0,left:0,width:"15rem",height:"100vh",padding:"0 20px"}},r.a.createElement("div",{className:"logo-with-menuicon sidebar-logo-icon"},r.a.createElement("span",{onClick:function(){o(!a)},style:{cursor:"pointer"}},r.a.createElement(be.a,null)),r.a.createElement(s.b,{to:"/",className:"logo-with-text"},r.a.createElement(xe.a,{sx:{color:"red",fontSize:"20px"}}),r.a.createElement("h1",{style:{fontSize:"20px",letterSpacing:"-1px"}},"PlayTube"))),r.a.createElement(se.a,{direction:"row",sx:{overflowY:"auto",display:"flex",flexDirection:"column",marginTop:"10px"}},Q.map(function(e){return r.a.createElement("button",{key:"".concat(e.name),onClick:function(){i("/"),n(e.name)},className:t===e.name?"sidebar-button active":"sidebar-button"},r.a.createElement("span",{className:"sidebar-icon"},e.icon),r.a.createElement("span",{className:"sidebar-icon-name"},e.name))})))},je=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),o=n[0],i=n[1];return r.a.createElement(se.a,{direction:"row",alignItems:"center",sx:{position:"sticky",top:0,justifyContent:"space-between",padding:"5px",background:"#ffffff",zIndex:1},className:"navbar-container"},r.a.createElement("div",{className:"logo-with-menuicon"},r.a.createElement("span",{style:{cursor:"pointer"}},o?r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a,null),r.a.createElement(we,{categorySelected:e.selectedCategoryNav,changeSelectedCategory:function(t){return e.setSelectedCategoryNav(t)},openStatus:o,toggleSideBar:function(e){return i(e)}})):r.a.createElement("span",{onClick:function(){i(!0)}},r.a.createElement(be.a,null))),r.a.createElement(s.b,{to:"/",className:"logo-with-text"},r.a.createElement(xe.a,{sx:{color:"red",fontSize:"20px"}}),r.a.createElement("h1",{style:{fontSize:"20px",letterSpacing:"-1px"}},"PlayTube"))),r.a.createElement(ge,null),r.a.createElement("div",{className:"feature-bar"}))},Oe=function(){return r.a.createElement(l.a,{sx:{paddingTop:"2rem",background:"#f7f6f2",height:"87vh",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap",fontSize:"1.5rem",fontWeight:"bold"}},"SORRY Currently the API Server is not able to serve requests. ")};function ke(){var e=Object(a.useState)("New"),t=Object(c.a)(e,2),n=t[0],o=t[1];return r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement(je,{selectedCategoryNav:n,setSelectedCategoryNav:function(e){return o(e)}}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement($,{selectedCategoryNav:n})}),r.a.createElement(u.a,{path:"/video/:videoId",element:r.a.createElement(he,null)}),r.a.createElement(u.a,{path:"/search/:searchText",element:r.a.createElement(ie,null)}),r.a.createElement(u.a,{path:"/error",element:r.a.createElement(Oe,null)}))))}var Se=document.getElementById("root");i.a.createRoot(Se).render(r.a.createElement(a.StrictMode,null,r.a.createElement(ke,null)))},88:function(e,t,n){e.exports=n(168)},95:function(e,t,n){}},[[88,2,1]]]);
//# sourceMappingURL=main.7ed67398.chunk.js.map