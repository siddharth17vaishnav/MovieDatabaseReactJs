(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(14),a=c.n(r),i=(c(20),c(3)),o=c(15),l=c(0);var j=function(e){var t=e.handleInput,c=e.search;return Object(l.jsx)("section",{className:"searchbox-wrap",children:Object(l.jsx)("input",{type:"text",placeholder:"search for a movie",className:"searchbox",onChange:t,onKeyPress:c})})};var u=function(e){var t=e.result,c=e.openPopup;return Object(l.jsxs)("div",{className:"result",onClick:function(){return c(t.imdbID)},children:[Object(l.jsx)("img",{src:t.Poster}),Object(l.jsx)("h3",{children:t.Title})]})};var b=function(e){var t=e.results,c=e.openPopup;return Object(l.jsx)("section",{className:"results",children:t.map((function(e){return Object(l.jsx)(u,{result:e,openPopup:c},e.imdbID)}))})};var d=function(e){var t=e.selected,c=e.closePopup;return Object(l.jsx)("section",{className:"popup",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("h2",{children:[t.Title," ",Object(l.jsxs)("span",{children:["(",t.Year,")"]})]}),Object(l.jsxs)("p",{className:"rating",children:["Rating: ",t.imdbRating]}),Object(l.jsxs)("div",{className:"plot",children:[Object(l.jsx)("img",{src:t.Poster}),Object(l.jsx)("p",{children:t.Plot})]}),Object(l.jsx)("button",{className:"close",onClick:c,children:"Close"})]})})},p=c(5),h=c.n(p);var O=function(){var e=Object(n.useState)({s:"",results:[],selected:{}}),t=Object(o.a)(e,2),c=t[0],s=t[1],r="https://www.omdbapi.com/?apikey=cd39e789";return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Movie Database"})}),Object(l.jsxs)("main",{children:[Object(l.jsx)(j,{handleInput:function(e){var t=e.target.value;s((function(e){return Object(i.a)(Object(i.a)({},e),{},{s:t})}))},search:function(e){"Enter"===e.key&&h()(r+"&s="+c.s).then((function(e){var t=e.data.Search;s((function(e){return Object(i.a)(Object(i.a)({},e),{},{results:t})}))}))}}),Object(l.jsx)(b,{results:c.results,openPopup:function(e){h()(r+"&i="+e).then((function(e){var t=e.data;console.log(t),s((function(e){return Object(i.a)(Object(i.a)({},e),{},{selected:t})}))}))}}),"undefined"!=typeof c.selected.Title&&Object(l.jsx)(d,{selected:c.selected,closePopup:function(){s((function(e){return Object(i.a)(Object(i.a)({},e),{},{selected:{}})}))}})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[40,1,2]]]);
//# sourceMappingURL=main.3b1f9cc7.chunk.js.map