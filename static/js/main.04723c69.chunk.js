(this.webpackJsonpcatfriends=this.webpackJsonpcatfriends||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),c=n.n(s),a=(n(18),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))}),i=n(1),o=function(e){var t=e.name,n=e.email,s=e.id;return Object(i.jsxs)("div",{className:"bg-lightest-blue dib br3 pa3 ma2 grow",children:[Object(i.jsx)("img",{img:"cat",alt:s,src:"https://robohash.org/".concat(s,"?set=set4&100x100")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"blue",children:function(e){var t=0;return e.split(" ").map((function(e){return t++,Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("span",{className:"dark-blue",children:e[0].toUpperCase()}),e.substr(1,e.length-1)," "]},t)}))}(t)}),Object(i.jsx)("p",{children:n})]})]})},h=function(e){var t=e.cats;if(1===t.length&&"delectus aut autem"===t[0].title)throw new Error({message:"Not allowed to search this cat."});return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(o,{id:t[n].id,name:t[n].title,email:t[n].title},n)}))})};function l(e){e.searchField;var t=e.searchChange;return Object(i.jsxs)("div",{children:["...",Object(i.jsx)("input",{className:"b--light-blue bg-light-blue black",type:"search",placeholder:"search",onChange:t})]})}n(20);function u(e){return Object(i.jsx)("div",{className:"scroll-box",children:e.children})}var d=n(7),j=n(8),b=n(13),g=n(12),f=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={hasError:!1,message:""},r}return Object(j.a)(n,[{key:"componentDidCatch",value:function(e,t){console.dir(e),console.dir(t),this.setState({message:"Bad cat search"})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("h1",{children:this.state.message}),Object(i.jsx)("p",{children:"It cannot be searched"}),Object(i.jsx)("img",{alt:"Unsearchable cat",src:"https://robohash.org/1?set=set4&100x100"}),Object(i.jsx)("br",{}),Object(i.jsx)("a",{href:"/catFriends",children:"Refresh"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),O=n(3),p="CHANGE_SEARCH_FIELD",v="REQUEST_CATS_PENDING",x="REQUEST_CATS_SUCCESS",m="REQUEST_CATS_FAIL";var C=Object(O.b)((function(e){return{searchField:e.searchCat.searchField,cats:e.requestCats.cats,isPending:e.requestCats.isPending,error:e.requestCats.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:p,payload:n}));var n},onRequestCats:function(){return e((function(e){e({type:v}),fetch("https://jsonplaceholder.cypress.io/todos/").then((function(e){return e.json()})).then((function(t){e({type:x,payload:t})})).catch((function(t){e({type:m,payload:t})}))}))}}}))((function(e){var t=e.searchField,n=e.onSearchChange,s=e.cats,c=e.isPending,a=e.error,o=e.onRequestCats;Object(r.useEffect)((function(){o()}),[]);var d=s.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));return a?Object(i.jsx)("div",{children:a}):c?Object(i.jsx)("div",{children:"Loading"}):Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)(l,{searchChange:n}),Object(i.jsx)(f,{children:Object(i.jsx)(u,{children:Object(i.jsx)(h,{cats:d})})})]})})),y=(n(27),n(4)),E={searchField:""},F={isPending:!1,cats:[],error:""},S=n(10),N=n(11),P=Object(S.createLogger)(),w=Object(y.b)({searchCat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===p?Object.assign({},e,{searchField:t.payload}):e},requestCats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{isPending:!0});case x:return Object.assign({},e,{cats:t.payload,isPending:!1});case m:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),L=Object(y.c)(w,Object(y.a)(N.a,P));c.a.render(Object(i.jsx)(O.a,{store:L,children:Object(i.jsx)(C,{})}),document.getElementById("root")),a()}},[[29,1,2]]]);
//# sourceMappingURL=main.04723c69.chunk.js.map