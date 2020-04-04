"use strict";function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(c):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var _ref=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)r(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)r(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(r(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,v[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===_typeof(a)?a:w(a)},u=function(b,c){return b.type===a?((!c||c.type!==a||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,void 0,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&x(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};o(a.init)}}}(),h=_ref.h,app=_ref.app,C=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===_typeof(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return h(a,{},b);return h(a,b,d)}},a=C("a"),button=C("button"),circle=C("circle"),div=C("div"),footer=C("footer"),g=C("g"),h1=C("h1"),h2=C("h2"),h3=C("h3"),h4=C("h4"),h5=C("h5"),header=C("header"),img=C("img"),input=C("input"),label=C("label"),li=C("li"),link=C("link"),main=C("main"),meta=C("meta"),nav=C("nav"),p=C("p"),path=C("path"),script=C("script"),span=C("span"),svg=C("svg"),title=C("title"),ul=C("ul"),view=C("view"),initialState={dealwithit:!1,description:["Not a Conference."," Not a Conjob."," 3-5. April 2020, Interspace"],footer:{one:{menu:[{text:"privacy notice",to:"/privacy/"},{text:"code of conduct",to:"https://www.parallele.at/code-of-conduct/"}],title:"NonCon"},three:{menu:[{text:"parallele.at",to:"https://parallele.at"},{text:"bwb.is",to:"https://bwb.is"}],title:"Network"},two:{menu:[{text:"keybase",to:"https://keybase.io/noncon"},{text:"github",to:"https://github.com/nonconorg"},{text:"telegram",to:"https://t.me/joinchat/E9fhuBVwENCRcC3-df9wxA"},{text:"twitter",to:"https://twitter.com/ParallelePolis"}],title:"Social"}},gdpr:{allowed:[]},hero:{menu:[{text:"Raffle",to:"/raffle/"},{text:"Donate",to:"/donate/"}]},image:"/img/noncon2020-banner.jpg",menu:[{text:"About",to:"/"},{text:"Raffle",to:"/raffle/"},{text:"Donate",to:"/donate/"}],pageClass:{light:!0},pages:{"/privacy/":{description:"noncon.org privacy",title:"NonCon 2020"}},raffle:{tokens:[{id:0,tok:"0AAAA0"},{id:1,tok:"1AAAAA1"},{id:2,tok:"2AAAAA2"},{id:3,tok:"3AAAAA3"},{id:4,tok:"4AAAAA4"},{id:5,tok:"5AAAAA5"},{id:6,tok:"6AAAAA6"},{id:7,tok:"7AAAAA7"},{id:8,tok:"8AAAAA8"},{id:9,tok:"9AAAAA9"},{id:10,tok:"AAAAAA"},{id:11,tok:"BAAAAAB"},{id:12,tok:"CAAAAAC"},{id:13,tok:"DAAAAAD"},{id:14,tok:"EAAAAAE"},{id:15,tok:"FAAAAAF"},{id:16,tok:"0AAAA0"},{id:17,tok:"1AAAAA1"},{id:18,tok:"2AAAAA2"},{id:19,tok:"3AAAAA3"},{id:20,tok:"4AAAAA4"},{id:21,tok:"5AAAAA5"},{id:22,tok:"6AAAAA6"},{id:23,tok:"7AAAAA7"},{id:24,tok:"8AAAAA8"},{id:25,tok:"9AAAAA9"},{id:26,tok:"AAAAAA"},{id:27,tok:"BAAAAAB"},{id:28,tok:"CAAAAAC"},{id:29,tok:"DAAAAAD"},{id:30,tok:"EAAAAAE"},{id:31,tok:"FAAAAAF"},{id:32,tok:"0AAAA0"},{id:33,tok:"1AAAAA1"},{id:34,tok:"2AAAAA2"},{id:35,tok:"3AAAAA3"},{id:36,tok:"4AAAAA4"},{id:37,tok:"5AAAAA5"},{id:38,tok:"6AAAAA6"},{id:39,tok:"7AAAAA7"},{id:40,tok:"8AAAAA8"},{id:41,tok:"9AAAAA9"},{id:42,tok:"AAAAAA"},{id:43,tok:"BAAAAAB"},{id:44,tok:"CAAAAAC"},{id:45,tok:"DAAAAAD"},{id:46,tok:"EAAAAAE"},{id:47,tok:"FAAAAAF"},{id:48,tok:"0AAAA0"},{id:49,tok:"1AAAAA1"},{id:50,tok:"2AAAAA2"},{id:51,tok:"3AAAAA3"},{id:52,tok:"4AAAAA4"},{id:53,tok:"5AAAAA5"},{id:54,tok:"6AAAAA6"},{id:55,tok:"7AAAAA7"},{id:56,tok:"8AAAAA8"},{id:57,tok:"9AAAAA9"},{id:58,tok:"AAAAAA"},{id:59,tok:"BAAAAAB"},{id:60,tok:"CAAAAAC"},{id:61,tok:"DAAAAAD"},{id:62,tok:"EAAAAAE"},{id:63,tok:"FAAAAAF"}]},root:"/",seo:{custom:[{"data-ad-client":"ca-pub-7938900206625974"}]},theme:"light",title:"NonCon 2020",url:"/"},helpers={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},BlogMonth=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[h3(b?Link({to:b},i):i),h.map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return f.map(function(c){return BlogTeaser(_objectSpread({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},BlogTeaser=function(a){return div([h4([a.day,"-",a.month,"-",a.year," - ",Link({to:a.name},a.title)]),p(a.description)])},BlogYear=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),div([h2(c?Link({to:b},d):d),Object.entries(e[d]).map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return BlogMonth(_objectSpread({},a,{month:e,days:f,link:b}))})])},Credits=function(){return div({class:"Credits"},[p("created by the parallele polis dao"),p(["made with a few bits of ",Link({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},Donate=function(){return div({class:"Donate"},[h2("Tickets: You don't need one. But you can donate :-)"),p("NonCon is free, and non-coercive. Opt-in."),p(["If you feel like donating,","we'll accept any token at the ",Link({text:"noncon.eth",to:"https://etherscan.io/address/noncon.eth"})," address,"," or you can contribute to our ",Link({text:"interspace.chat gitcoin grant",to:"https://gitcoin.co/grants/516/interspacechat?tab=description"})," and get those sweet sweet multiples during the 5th Matching Round.","Those who don't have, or don't want a gitcoin account can donate directly to the ",Link({text:"support.interspacechat.eth",to:"https://etherscan.io/address/support.interspacechat.eth"})," address"]),List({items:[{img:"/img/donate/gitcoin.png",to:"https://gitcoin.co/grants/516/interspacechat",title:"gitcoin grant"},{to:"https://etherscan.io/enslookup?q=noncon.eth",img:"/img/donate/noncon.eth.png",title:"noncon.eth"}]}),h2("NFT Raffles"),p("Choose one of the Mintbase tokens below to enter one (or both) of the raffles."),h2(Link({text:"Shift Crypto Wallet Raffle NFT",to:"https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/OjZ2GaixwXmjOwM6Tgsw"})),p("This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 6 Shift Crypto Wallets."),h2(Link({text:"Status Keycard raffle NFT",to:"https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/SknAvIIUGxlvoU0iJ7XG"})),p("This Mintbase NFT represents a raffle ticket offering the chance to win 1 of 10 Status Keycards."),h2("Full Raffle Conditions"),p(["Neither NFT represents a purchase, but a chance to win according to the rules detailed above."]),p(["We are very sorry for the possibly misleading wording in the mintbase nft token description,"," unfortunately, human error is an unintended sideeffect of too many things to do and not enought time."," 3 of our team sat together, and all of us were part of the communication finalizing creation of the nfts."," None of us thought about immutability."]),p(["all proceeds go towards our non-profit dao \"Parallele Polis\"",Link({to:"https://noncon.org/impressum/"})," and will be used to finance the work of our volunteers,"," as well as covering for hosting and other infrastructure cost"," for this conference and for the future conferences we will host for other organisations."]),p(["A more technical description for the raffle can be found on the ",Link({to:"/raffle/",text:"raffle page"})]),List({items:[{to:"https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/SknAvIIUGxlvoU0iJ7XG",img:"/img/donate/nft-keycard.png",title:"keycard raffle"},{to:"https://mintbase.io/pez-dispenser/0x0b23ad11e92fdf87eb5c9b0f24b9860f9c4689ee/OjZ2GaixwXmjOwM6Tgsw",img:"/img/donate/nft-shift.png",title:"shift wallet raffle"}]}),p(["Although we have no production costs associated with a conference produced in meatspace,"," the hours of organization, pre-production, "," public communication are just as high as with a normal event."]),p(["When the livestreams have ended,"," all individual talks will be available in edited form in playlists on our Youtube channel,"," so any donation you make will also be to the benefit of our videocuttin volunteers,"," as well as towards the streamers that work 11 hour shifts of sitting there, streaming to youtube."])])},Footer=function(a,b){var c=a.footer,d=c.one,e=c.two,f=c.three;return footer({class:"Footer"},[div({class:"Container"},[(d||e||f)&&div({class:"Menus"},[d&&div({class:"Child Info"},[d.title&&h2(d.title),d.before&&d.before.map(function(b){return p(b)}),d.menu&&ul([d.menu.map(function(a){return li(Link(a))})]),d.after&&d.after.map(function(b){return p(b)})]),e&&div({class:"Child"},[e.title&&h2(e.title),e.before&&e.before.map(function(b){return p(b)}),e.menu&&ul([e.menu.map(function(a){return li(Link(a))})]),e.after&&e.after.map(function(b){return p(b)})]),f&&div({class:"Child"},[f.title&&h2(f.title),f.before&&f.before.map(function(b){return p(b)}),f.menu&&ul([f.menu.map(function(a){return li(Link(a))})]),f.after&&f.after.map(function(b){return p(b)})])]),Credits(a),b])])},Gdpr=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,h=c.title,i=void 0===h?"Privacy Information":h,j=c.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=c.noDataText,m=void 0===l?"Awesome.":l,n=c.allowTitle,o=void 0===n?"Allow:":n,q=c.allowAllText,r=void 0===q?"All":q,s=c.allowText,t=void 0===s?"Selected":s,u=c.denyText,v=void 0===u?"None":u;if(!f)return div({class:"Gdpr"},svg({class:"ShowHide",onclick:[actions.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[g([path({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),circle({cx:"192",cy:"128",r:"32"}),circle({cx:"128",cy:"256",r:"32"}),circle({cx:"288",cy:"384",r:"32"}),circle({cx:"272",cy:"272",r:"16"}),circle({cx:"400",cy:"336",r:"16"}),circle({cx:"176",cy:"368",r:"16"})])]));var w=!!e.length;return div({class:"Gdpr"},[div({class:"Container"},[i&&h3(i),k&&p(k),w&&[ul(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return li({class:"Cookie"},[input({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[actions.gdpr.toggleAllow,{name:b}]}),(d||e)&&label({for:b},[d&&h4(d),e&&p(e)])])}))],w?[h5(o),input({class:"allow all",onclick:actions.gdpr.allow,type:"button",value:r}),input({class:"allow",onclick:actions.gdpr.close,type:"button",value:t}),input({class:"allow none",onclick:actions.gdpr.deny,type:"button",value:v})]:input({onclick:actions.gdpr.close,value:m,type:"button"})])])},Header=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=_objectWithoutProperties(a,["logo","menu","logotext"]);return c||d||e?header({class:"Header"},[HeaderLogo({root:f.root,theme:f.theme,img:c,text:e}),d&&Menu({state:f,items:d}),b]):void 0},HeaderLogo=function(a){var b=a.branding,c=a.root,d=a.theme,e=void 0===d?"light":d,f=a.logo;return Link({to:c,class:"Logo"},Img(f||"/noncon2020-logo-".concat(e,".png")))},Hero=function(a){var b=a.state,c=b.hero,d=Array.isArray(c.title)?c.title:[c.title],e=c.content;return e&&!Array.isArray(e)&&(e=[e]),div({id:"hero",class:"Hero"},[div({class:"LogoWrapper"},[Logo(b),c.title&&h1([span(d[0]),d[1]]),c.description&&p(c.description)]),e&&div({class:"content"},e.map(function(b){return p(b)})),c.menu&&Menu({items:c.menu,state:b})])},Img=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),img(a)},LightSwitch=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return button({class:"LightSwitch",onclick:actions.changeTheme},svg({viewBox:"0 0 352 460"},[path({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),path({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),path({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},Link=function(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=b.to,e=b.action,f=void 0===e?actions.go:e,g=_objectWithoutProperties(b,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=_objectWithoutProperties(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,lib.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),a(l,[i,c])},List=function(a){var b=a.items,c=a.title,d=a["class"],e=void 0===d?"":d;return ul({class:_defineProperty({List:!0},e,e)},b.map(function(a){return[li(Link({to:a.to},[Img({src:a.img,height:"90"}),a.title]))]}))},Logo=function(a){var b=a.branding,c=a.root;return Link({to:c,class:"Logo"},Img("/img/NFT-raffle-hero.jpg"))},Menu=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),nav({className:c},ul(e.map(function(a){return MenuItem(_objectSpread({},a,{url:g,root:i,collapse:void 0===d||d}))})))},MenuItem=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.root,g=a.parentTo,h=void 0===g?void 0:g,j=a.collapse,k=_objectWithoutProperties(a,["text","items","url","root","parentTo","collapse"]),l={class:{}},i=k.to;f&&i.startsWith("/")&&(i=i.substr(1));var m=k.to[0];h&&("-"===m||"#"===m)&&(i=h+i);var n=i.startsWith(f);f&&("/"===m||"-"===m||"#"===m)&&!n&&(i=f+i),k.to=i.replace(/\/\//g,"/"),k.to===e&&(l["class"].active=!0);var o=[],p=e.startsWith(k.to)||!j;return p&&d.length&&(o=ul(d.map(function(a){return MenuItem(_objectSpread({parentTo:k.to,url:e,root:f,collapse:j},a))}))),li(l,[k.to?MenuLink(k,b):span(k,b),o])},MenuLink=function(a,b){return Link(a,b)},Page=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return main(e,div({class:{Wrapper:!0}},[Header(d),div({class:"Page",id:"page"},c(d)),Footer(d),b]))},ParticipantList=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return ul(a.map(function(a){var b=a.tok,c=a.id;return li({class:"Participant p-".concat(c)},["participant: ",b])}))},Raffle=function(a){var b=a.state;return div({class:"Raffle"},[h1("raffle"),b.raffle&&b.raffle.tokens&&ParticipantList(b.raffle.tokens)])},lib={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=lib.db.init(),g=lib.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=lib.db.init(),f=void 0;return d&&e[d]&&(f=lib.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=lib.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){return{parse:function parse(){return lib.tryCatch(JSON.parse).apply(void 0,arguments)},stringify:function stringify(){return lib.tryCatch(JSON.stringify).apply(void 0,arguments)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}(),tryCatch:function(){return function tryCatch(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}}}()},actions={changeTheme:function changeTheme(a){return _objectSpread({},a,{pageClass:_objectSpread({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},dealwithit:{toggle:function toggle(a){return _objectSpread({},a,{dealwithit:!a.dealwithit})}},gdpr:{allow:function allow(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[actions.gdpr.show,{show:!1}]}]]},close:function close(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[actions.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:[]})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[actions.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),_objectSpread({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=_slicedToArray(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=window,j=i.scrollY,k=a.pages&&a.pages[f]&&a.pages[f].title;if(k&&(document.title=a.title=k),f===a.url)window.location.hash=h;else if(!h){var l=document.getElementsByTagName("html"),m=_slicedToArray(l,1),n=m[0],o=n.style.scrollBehavior;n.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),n.style.scrollBehavior=o}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),_objectSpread({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),_objectSpread({},a,{url:d,hash:e})},raffle:{interval:function interval(a,b){setInterval(function(){return a(b.action)},b.time)},update:function update(a){var b=a.raffle.tokens.sort(function(){return Math.random()-Math.random()});return _objectSpread({},a,{raffle:_objectSpread({},a.raffle,{tokens:b})})}}},pages={"/":function _(a){return[Hero({state:a}),div([p(["Welcome to the ",Link({to:"https://noncon.org/",text:"noncon 2020"})," raffle page."]),h1({id:"raffle"},"raffle"),p("the raffle will happen on sunday\n(or after that, as soon as we have implemented the functionality.)."),p(["it will happen on this url:\n",Link({to:"https://raffle.noncon.org",text:"https://raffle.noncon.org"}),"\nthat you are visiting now."])])]},"/404/":function _(a){return[Hero({state:a}),div([h2({id:"404---not-found"},"404 - not found."),p("unfortunately, there is nothing here but nothingness."),p([Link({to:"/",text:"click here"})," to get back to safety"])])]},"/donate/":function donate(a){return[Donate({state:a})]},"/privacy/":function privacy(a){return[Hero({state:a}),div([h2({id:"privacy-notice"},"Privacy Notice"),p("This page does not:"),p("Collect personal data, load tracking scripts,\nor use any other means of spying on its users.")])]},"/raffle/":function raffle(a){return[div([h1({id:"raffle"},"raffle"),p("the raffle will happen on sunday\n(or after that, as soon as we have implemented the functionality.)."),p(["it will happen on this url:\n",Link({to:"https://raffle.noncon.org",text:"https://raffle.noncon.org"}),"\nthat you are visiting now."]),h2({id:"the-raffle-below-is-a-simulation"},"The raffle below is a simulation."),h3({id:"watch-me-develop"},"watch me develop."),Raffle({state:a}),h3({id:"abstract"},"abstract"),ul([li("predefine a blocktime in the future."),li("use the hash of this block + x minutes of blocks as seed."),li("find x users, distribute devices.")]),p("more info, including a link to the raffle git and docs will follow here soon.")])]}};app({init:[_objectSpread({},initialState,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[lib.db.get,{key:"magic-gdpr",action:actions.gdpr.show}]]],subscriptions:function subscriptions(){return[[helpers.listenPopState,actions.pop],[actions.raffle.interval,{time:1e3,action:actions.raffle.update}]]},view:function(a){var b=pages[a.url]?a.url:"/404/",c=pages[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,Page({page:c,state:a},[LightSwitch(a),Gdpr(a)])},node:document.getElementById("Magic")});