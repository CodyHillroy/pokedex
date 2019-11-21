(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(84)},44:function(e,t,n){},49:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=(n(44),n(1)),o=(n(49),n(13)),s={normal:"159, 159, 107",fighting:"185, 32, 24",fairy:"248, 166, 255",flying:"159, 132, 238",poison:"150, 48, 150",ground:"220, 185, 90",rock:"176, 150, 40",bug:"159, 176, 17",ghost:"98, 73, 141",steel:"176, 176, 202",fire:"238, 115, 32",water:"90, 132, 238",grass:"107, 194, 65",electric:"247, 202, 32",psychic:"247, 73, 124",ice:"141, 211, 211",dragon:"98, 40, 247",dark:"98, 73, 57",unknown:"189, 189, 189"},u=n(14);function p(){var e=Object(o.a)(["\n    background: rgb(",");\n  "]);return p=function(){return e},e}function m(){var e=Object(o.a)(["\n  font-size: 12px;\n  padding: 4px 6px;\n  border-radius: 2px;\n  margin-right: 8px;\n  color: white;\n  ","\n"]);return m=function(){return e},e}var f=u.b.span(m(),(function(e){return Object(u.a)(p(),e.color)})),d=Object(l.b)(null,(function(e){return{setFilter:function(t){return e({type:"FILTER_SET",filterOption:t})}}}))((function(e){var t=e.children,n=e.setFilter,a=s[t.toLowerCase()];return r.a.createElement(f,{color:a,onClick:function(){return n(t)},className:"filter-item"},t)})),E=Object(l.b)(null,(function(e){return{showDetails:function(t){return e({type:"DETAILS_SHOW",data:t})}}}))((function(e){var t=e.pokemon,n=e.showDetails,a=t.name,i=t.types,c=t.sprite;return r.a.createElement("div",{className:"flex-column shadow poke-item"},r.a.createElement("img",{src:c,alt:a,onClick:function(){return n(t)}}),r.a.createElement("p",{className:"poke-name"},a),r.a.createElement("div",{className:"poke-types"},i.map((function(e){return r.a.createElement(d,{key:e},e)}))))})),v=n(17),h=n.n(v),b=n(35),g=n(18),k=n.n(g),y=n(8),O=n.n(y),T=function(e){return{type:"POKEMONS_SET",pokemons:e}},S=function(e){return{type:"NEXT_URL_SET",nextUrl:e}},_=function(e){var t=e.pokemons,n=e.filterOptions;return n.length?t.filter((function(e){return n.every((function(t){return e.types.includes(t)}))})):t},A=Object(l.b)((function(e){return{fetchingDataState:e.fetchingDataState,nextUrl:e.nextUrl}}))((function(e){var t=e.type,n=e.fetchingDataState,a=e.nextUrl,i=e.onClickAction,c="load"===t?"Load more":"Reset filter",l="request"===n||!a;return r.a.createElement("button",{className:"btn ".concat(t),onClick:i,disabled:l},l?"Loading":c)})),x=Object(l.b)((function(e){return{filterOptions:e.filterOptions,pokemons:_(e)}}),(function(e){return{resetAllFilters:function(){return e({type:"FILTER_RESET"})},fetchPokemons:function(){return e(function(){var e=Object(b.a)(h.a.mark((function e(t,n){var a,r,i,c,l,o,s,u,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"FETCH_DATA_REQUEST"}),a=n(),r=a.nextUrl,e.next=5,k()(r);case 5:return i=e.sent,c=i.data,l=c.results,o=c.next,s=l.map((function(e){return k()(e.url)})),e.next=12,Promise.all(s);case 12:u=e.sent,p=u.map((function(e){var t=e.data,n=t.id,a=t.name,r=t.weight,i=t.stats,c=t.types,l=t.moves,o=t.sprites,s=i.map((function(e){var t=e.base_stat;return{name:e.stat.name.split("-").map((function(e){return O()(e)})).join(" "),value:t}}));s.push({name:"Moves",value:l.length},{name:"Weight",value:r});var u=c.map((function(e){var t=e.type.name;return O()(t)})),p=o.front_default;return{id:n,name:O()(a),sprite:p,stats:s,types:u}})),t(T(p)),t(S(o)),t({type:"FETCH_DATA_SUCCESS"}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),t({type:"FETCH_DATA_FAILURE"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.pokemons,n=e.filterOptions,i=e.fetchPokemons,c=e.resetAllFilters;return Object(a.useEffect)((function(){i()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"poke-list"},t.map((function(e){return r.a.createElement(E,{pokemon:e,key:e.name})})),n.length?r.a.createElement(A,{type:"reset",onClickAction:c}):r.a.createElement(A,{type:"load",onClickAction:i})))})),j=Object(l.b)((function(e){return{detailsData:e.details.data}}))((function(e){var t=e.detailsData,n=t.sprite,a=t.name,i=t.id,c=t.stats,l=t.types;return r.a.createElement("div",{className:"poke-details-wrapper"},r.a.createElement("aside",{className:"shadow poke-details"},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("p",{className:"name"},"".concat(a," #").concat(i)),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Type"),r.a.createElement("td",null,l.join(" - "))),c.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value))}))))))})),w=Object(l.b)((function(e){return{detailsVisibility:e.details.isVisible}}))((function(e){var t=e.detailsVisibility;return r.a.createElement("div",{className:"app"},r.a.createElement("nav",{className:"nav-panel"},"POKEDEX"),r.a.createElement(x,null),t&&r.a.createElement(j,null))})),D=n(5),F=n(36),C=n(9),N=Object(D.c)({fetchingDataState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"request",t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"FETCH_DATA_REQUEST":return"request";case"FETCH_DATA_SUCCESS":return"success";case"FETCH_DATA_FAILURE":return"failure";default:return e}},pokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.pokemons;switch(n){case"POKEMONS_SET":return[].concat(Object(C.a)(e),Object(C.a)(a));default:return e}},nextUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://pokeapi.co/api/v2/pokemon/?limit=12",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.nextUrl;switch(n){case"NEXT_URL_SET":return a;default:return e}},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isVisible:!1,data:null},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.data;switch(n){case"DETAILS_SHOW":return{isVisible:!0,data:a};case"FILTER_SET":return{isVisible:!1,data:null};default:return e}},filterOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.filterOption;switch(n){case"FILTER_SET":return e.includes(a)?e:[].concat(Object(C.a)(e),[a]);case"FILTER_RESET":case"POKEMONS_ADD":return[];default:return e}}}),U=Object(D.d)(N,Object(D.a)(F.a));c.a.render(r.a.createElement(l.a,{store:U},r.a.createElement(w,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e0e6e7a1.chunk.js.map