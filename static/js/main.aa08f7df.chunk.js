(this["webpackJsonpbluefit-assigment"]=this["webpackJsonpbluefit-assigment"]||[]).push([[0],{84:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(9),c=t.n(s),i=t(33),o=t(14),l=t(10),u=t(34),d=t(18),b=t(35),h={isLoading:!1,error:!1,errorMessage:"",result:[],searchText:"",hasMore:!0},p={key:"root",storage:t.n(b).a},f=Object(l.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_SEARCH":return Object.assign({},e,{isLoading:!0,error:!1,hasMore:!0,searchText:n.searchText});case"FETCH_SEARCH_SUCCESS":return Object.assign({},e,{isLoading:!1,error:!1,result:n.data});case"FETCH_SEARCH_ERROR":return console.log("test",n),Object.assign({},e,{isLoading:!1,error:!0,errorMessage:n.error.message});case"CLEAR_SEARCH":return Object.assign({},e,{result:[]});case"FOLLOW_NEWS":var t=e.result.map((function(e){return e.title===n.id&&(e.follow?e.follow=!e.follow:e.follow=!0),e}));return Object.assign({},e,{result:t});default:return e}}}),j=Object(d.a)(p,f);var g,x,O,m,v,w,S,y,C,E,A,L=t(3),N=t(4),R=Object(N.a)(g||(g=Object(L.a)(["\n@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Source+Sans+Pro:200,400');\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Playfair Display', serif;\n}\n\np, a {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n\n/* Generic styles */\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Montserrat';\n}\n"]))),F=t(20),H=t(38),T=t(17),_=t.n(T),k=t(39),M=t(40),P=t.n(M),D=function(e){return{type:"FETCH_SEARCH",searchText:e}},U=function(e){return{type:"FETCH_SEARCH_SUCCESS",data:e}},z=function(e){return{type:"FETCH_SEARCH_ERROR",error:e}},B="https://newsapi.org/v2",I="/top-headlines",J="e7e96e1236764908956d99ff99a18f3c",W=t(43),K=t(13),G=N.b.figure(x||(x=Object(L.a)(["\n    width: 50%;\n    height: 100%;\n    background: #242C39;\n    box-shadow: 0 0 12px 2px rgba(0, 0, 0, .5);\n    margin-bottom: 20px;\n    border-radius: 10px;\n    font-size: 14px;\n    margin: auto;\n    margin-bottom: 50px;\n\n    @media (max-width: 768px) {\n      width: 100%;\n  }\n\n    .tags {\n        font-size: 12px;\n        color: #FFDF3B;\n        padding-top: 10px;\n      }\n      \n     .footer {\n        display: flex;\n        justify-content: space-between;\n        padding-top: 20px;\n      }\n      \n     .footer .like {\n        flex: 0 0 25%;\n      }\n      \n     .footer i {\n        padding-right: 3px;\n      }\n"]))),Z=(N.b.p(O||(O=Object(L.a)(["\n    padding: 15px;\n    padding-bottom: 0;\n    font-weight: 400;\n    text-align: left;\n"]))),Object(N.b)(K.LazyLoadImage)(m||(m=Object(L.a)(["\n    background-position: 50%;\n    background-size: cover;\n    height: 200px;\n    width: 100%;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n"])))),q=N.b.div(v||(v=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 15px 10px;\n    text-align: center;\n"]))),Q=N.b.div(w||(w=Object(L.a)(["\n    align-items: center;\n"]))),V=N.b.div(S||(S=Object(L.a)(["\n  margin-left: 10px;\n  text-align: center;\n"]))),X=t(2),Y=function(e){var n=e.author,t=e.title,r=e.description,a=e.urlToImage,s=e.publishedAt,c=e.follow,i=e.followNews;return Object(X.jsxs)(G,{children:[Object(X.jsx)(Z,{alt:t,src:a,effect:"blur",visibleByDefault:!0}),Object(X.jsxs)(q,{children:[Object(X.jsx)(Q,{children:Object(X.jsxs)(V,{children:[Object(X.jsx)("p",{className:"name",children:n}),Object(X.jsx)("p",{className:"posted",children:s})]})}),Object(X.jsx)("div",{className:"desc",children:r}),Object(X.jsxs)("div",{className:"tags",children:[Object(X.jsx)("span",{children:"#party"}),Object(X.jsx)("span",{children:"#colorful"})]}),Object(X.jsx)("div",{className:"footer",children:Object(X.jsxs)("div",{className:"like",onClick:function(e){e.preventDefault(),i(t)},children:[Object(X.jsx)(W.a,{color:c?"red":"white"}),Object(X.jsx)("span",{children:" 1k"})]})})]})]})},$=t(41),ee=t(42),ne=N.b.main(y||(y=Object(L.a)(["\n    text-align: center;\n    margin: auto;\n    width: 50%;\n    overflow: auto;\n    position: relative;\n    padding-bottom: 100px;\n\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),te=Object(N.b)(ee.a)(C||(C=Object(L.a)(["\n    margin:15px 0;\n    padding:15px 10px;\n    width:100%;\n    outline:none;\n    display:inline-block;\n    text-align: center;\n    width: 50%;\n    margin: auto;\n\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),re=N.b.section(E||(E=Object(L.a)(["\n    padding: 2rem;\n    color: white;\n"]))),ae=Object(N.b)(r.Fragment)(A||(A=Object(L.a)(["\n\n"]))),se=Object(o.b)((function(e){return{isLoading:e.search.isLoading,error:e.search.error,errorMessage:e.search.errorMessage,result:e.search.result,searchText:e.search.searchText,hasMore:e.search.hasMore}}),(function(e){return{fetchSearchApi:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us";return function(){var n=Object(k.a)(_.a.mark((function n(t){var r;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(D(e)),n.next=4,P.a.get("".concat(B).concat(I,"?country=").concat(e,"&apiKey=").concat(J));case 4:void 0!==(r=n.sent).data.end?t({type:"SEARCH_END"}):t(U(r.data.articles)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),void 0===n.t0.response?t(z({success:!1,error:{message:n.t0.message}})):t(z(n.t0.response.data));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n))},clearSearchAction:function(){return e({type:"CLEAR_SEARCH"})},followNews:function(n){return e(function(e){return{type:"FOLLOW_NEWS",id:e}}(n))}}}))((function(e){var n=function(n){e.clearSearchAction(),n?e.fetchSearchApi(n.value):e.fetchSearchApi("US")},t=Object(r.useMemo)((function(){return Object(H.debounce)(n,1e3)}),[]);Object(r.useEffect)((function(){return e.fetchSearchApi("US"),e.followNews("t"),function(){t.cancel()}}),[]);var a=e.isLoading;return Object(X.jsxs)(ne,{children:[Object(X.jsx)(te,{className:"basic-single",classNamePrefix:"select",isLoading:a,isClearable:!0,isSearchable:!0,name:"country",options:[{value:"US",label:"United States"},{value:"AU",label:"Australia"},{value:"KR",label:"Korea"},{value:"JP",label:"Japan"},{value:"NZ",label:"New zealand"}],onChange:t}),Object(X.jsxs)(re,{id:"breweries",children:[e.error?e.errorMessage:null,Object(X.jsx)(ae,{children:0!==e.result.length?e.result.map((function(n,t){return Object(X.jsx)(K.LazyLoadComponent,{children:Object(X.jsx)(Y,Object(F.a)(Object(F.a)({},n),{},{followNews:function(n){return e.followNews(n)}}))},t)})):Object(X.jsx)($.a,{})})]})]})})),ce=function(){var e=Object(l.c)(j,Object(l.a)(u.a));return{store:e,persistor:Object(d.b)(e)}}(),ie=ce.store,oe=ce.persistor;var le=function(){return Object(X.jsx)(o.a,{store:ie,children:Object(X.jsxs)(i.a,{loading:null,persistor:oe,children:[Object(X.jsx)(R,{}),Object(X.jsx)(se,{})]})})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,85)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(le,{})}),document.getElementById("root")),ue()}},[[84,1,2]]]);
//# sourceMappingURL=main.aa08f7df.chunk.js.map