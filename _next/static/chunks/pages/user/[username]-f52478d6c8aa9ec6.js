(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{796:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return t(6119)}])},6119:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(5893),a=t(1664),s=t.n(a),i=t(1163),u=t(7294),c=t(3264),o=t(9540),l=t(1608),d=t(1555),f=t(4184),v=t.n(f),p=(t(2473),t(5446)),x=t(930);var m=t(5654);const h=u.createContext(null);h.displayName="NavContext";var b=h,g=t(7126);var y=u.createContext(null),j=t(2747),k=t(1176);const w=["as","disabled"];const Z=u.forwardRef(((e,n)=>{let{as:t,disabled:a}=e,s=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,w);const[i,{tagName:u}]=function({tagName:e,disabled:n,href:t,target:r,rel:a,onClick:s,tabIndex:i=0,type:u}){e||(e=null!=t||null!=r||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:u||"button",disabled:n},c];const o=r=>{(n||"a"===e&&function(e){return!e||"#"===e.trim()}(t))&&r.preventDefault(),n?r.stopPropagation():null==s||s(r)};return"a"===e&&(t||(t="#"),n&&(t=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:i,href:t,target:"a"===e?r:void 0,"aria-disabled":n||void 0,rel:"a"===e?a:void 0,onClick:o,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),o(e))}},c]}(Object.assign({tagName:t,disabled:a},s));return(0,r.jsx)(u,Object.assign({},s,i,{ref:n}))}));Z.displayName="Button";var N=Z;const C=["as","active","eventKey"];function P({key:e,onClick:n,active:t,id:r,role:a,disabled:s}){const i=(0,u.useContext)(g.Z),c=(0,u.useContext)(b),o=(0,u.useContext)(y);let l=t;const d={role:a};if(c){a||"tablist"!==c.role||(d.role="tab");const n=c.getControllerId(null!=e?e:null),s=c.getControlledId(null!=e?e:null);d[(0,j.PB)("event-key")]=e,d.id=n||r,l=null==t&&null!=e?c.activeKey===e:t,!l&&(null!=o&&o.unmountOnExit||null!=o&&o.mountOnEnter)||(d["aria-controls"]=s)}return"tab"===d.role&&(d["aria-selected"]=l,l||(d.tabIndex=-1),s&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=(0,k.Z)((t=>{s||(null==n||n(t),null!=e&&i&&!t.isPropagationStopped()&&i(e,t))})),[d,{isActive:l}]}const O=u.forwardRef(((e,n)=>{let{as:t=N,active:a,eventKey:s}=e,i=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,C);const[u,c]=P(Object.assign({key:(0,g.h)(s,i.href),active:a},i));return u[(0,j.PB)("active")]=c.isActive,(0,r.jsx)(t,Object.assign({},i,u,{ref:n}))}));O.displayName="NavItem";var I=O;const D=["as","onSelect","activeKey","role","onKeyDown"];const K=()=>{},E=(0,j.PB)("event-key"),$=u.forwardRef(((e,n)=>{let{as:t="div",onSelect:a,activeKey:s,role:i,onKeyDown:c}=e,o=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,D);const l=(0,u.useReducer)((function(e){return!e}),!1)[1],d=(0,u.useRef)(!1),f=(0,u.useContext)(g.Z),v=(0,u.useContext)(y);let p,h;v&&(i=i||"tablist",s=v.activeKey,p=v.getControlledId,h=v.getControllerId);const k=(0,u.useRef)(null),w=e=>{const n=k.current;if(!n)return null;const t=(0,x.Z)(n,`[${E}]:not([aria-disabled=true])`),r=n.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const a=t.indexOf(r);if(-1===a)return null;let s=a+e;return s>=t.length&&(s=0),s<0&&(s=t.length-1),t[s]},Z=(e,n)=>{null!=e&&(null==a||a(e,n),null==f||f(e,n))};(0,u.useEffect)((()=>{if(k.current&&d.current){const e=k.current.querySelector(`[${E}][aria-selected=true]`);null==e||e.focus()}d.current=!1}));const N=(0,m.Z)(n,k);return(0,r.jsx)(g.Z.Provider,{value:Z,children:(0,r.jsx)(b.Provider,{value:{role:i,activeKey:(0,g.h)(s),getControlledId:p||K,getControllerId:h||K},children:(0,r.jsx)(t,Object.assign({},o,{onKeyDown:e=>{if(null==c||c(e),!v)return;let n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=w(-1);break;case"ArrowRight":case"ArrowDown":n=w(1);break;default:return}n&&(e.preventDefault(),Z(n.dataset[(0,j.$F)("EventKey")]||null,e),d.current=!0,l())},ref:N,role:i}))})})}));$.displayName="Nav";var _=Object.assign($,{Item:I}),R=t(6792);const S=u.forwardRef((({bsPrefix:e,active:n,disabled:t,eventKey:a,className:s,variant:i,action:u,as:c,...o},l)=>{e=(0,R.vE)(e,"list-group-item");const[d,f]=P({key:(0,g.h)(a,o.href),active:n,...o}),p=(0,k.Z)((e=>{if(t)return e.preventDefault(),void e.stopPropagation();d.onClick(e)}));t&&void 0===o.tabIndex&&(o.tabIndex=-1,o["aria-disabled"]=!0);const x=c||(u?o.href?"a":"button":"div");return(0,r.jsx)(x,{ref:l,...o,...d,onClick:p,className:v()(s,e,f.isActive&&"active",t&&"disabled",i&&`${e}-${i}`,u&&`${e}-action`)})}));S.displayName="ListGroupItem";var L=S;const T=u.forwardRef(((e,n)=>{const{className:t,bsPrefix:a,variant:s,horizontal:i,numbered:u,as:c="div",...o}=(0,p.Ch)(e,{activeKey:"onSelect"}),l=(0,R.vE)(a,"list-group");let d;return i&&(d=!0===i?"horizontal":`horizontal-${i}`),(0,r.jsx)(_,{ref:n,...o,as:c,className:v()(t,l,s&&`${l}-${s}`,d&&`${l}-${d}`,u&&`${l}-numbered`)})}));T.displayName="ListGroup";var U=Object.assign(T,{Item:L}),A=function(e){var n=e.friends,t=void 0===n?[]:n;return t?(0,r.jsx)(U,{children:t.map((function(e){return(0,r.jsx)(U.Item,{children:(0,r.jsx)(s(),{href:"/user/[username]",as:"/user/".concat(e),children:e})},e)}))}):null},B=function(e){var n=e.user;if(n){var t=n.username,a=n.friends,s=n.tracksListenedTo;return(0,r.jsxs)("div",{className:"m-2",children:[(0,r.jsxs)(l.Z,{className:"mb-2",children:[(0,r.jsx)(d.Z,{xs:12,md:3,lg:2,children:"Username:"}),(0,r.jsx)(d.Z,{xs:12,md:9,lg:10,children:t})]}),(0,r.jsxs)(l.Z,{className:"mb-2",children:[(0,r.jsx)(d.Z,{xs:12,md:3,lg:2,children:"Tracks Listened To:"}),(0,r.jsx)(d.Z,{xs:12,md:9,lg:10,children:s})]}),(0,r.jsxs)(l.Z,{className:"mb-2",children:[(0,r.jsx)(d.Z,{xs:12,md:3,lg:2,children:"Friends:"}),(0,r.jsx)(d.Z,{xs:12,md:8,lg:9,children:(0,r.jsx)(A,{friends:a})})]})]})}return null},q=t(9928),z=t(4232),F=function(){var e=(0,i.useRouter)().query.username,n=(0,z.r)((0,u.useCallback)((function(){return(0,q.P)(e)}),[e])),t=(n.execute,n.status),a=n.value,l=n.error,d=null;d="success"===t?(0,r.jsx)(B,{user:a}):(0,r.jsx)(c.Z,{status:t,error:l});var f=(0,r.jsx)(s(),{href:"/",children:"Return Home"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{message:e,rightMsg:f}),d]})}},3264:function(e,n,t){"use strict";var r=t(5893),a=t(6968);n.Z=function(e){var n=e.status,t=e.error;return"pending"===n?(0,r.jsx)(a.Z,{animation:"border"}):"error"===n?(0,r.jsx)("div",{children:t}):"idle"===n?(0,r.jsx)("div",{children:"Nothing is happening..."}):null}},9540:function(e,n,t){"use strict";var r=t(5893),a=t(1608),s=t(1555);n.Z=function(e){var n=e.message,t=e.rightMsg,i=void 0===t?null:t;return(0,r.jsx)("div",{className:"bg-secondary text-white p-1",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{xs:2,children:n}),(0,r.jsx)(s.Z,{xs:10,children:i})]})})}},9928:function(e,n,t){"use strict";t.d(n,{P:function(){return y},u:function(){return g}});var r=t(7568),a=t(828),s=t(9815),i=t(4051),u=t.n(i),c=t(9669),o=t.n(c),l="https://mauvelous-leopard-5257.twil.io",d="/friends",f="/friend-detail",v="/plays",p="/plays-detail",x=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l).concat(d),e.next=3,o().get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l).concat(v),e.next=3,o().get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(l).concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.friends||[]);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,o().get("".concat(l).concat(n));case 3:return r=e.sent,e.abrupt("return",(null===(t=r.data.plays)||void 0===t?void 0:t.length)||0);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r,i,c,o,l,d,f,v,p,g,y,j,k,w,Z;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Promise.all([x(),m()]);case 3:t=e.sent,r=(0,a.Z)(t,2),i=r[0],c=r[1],o=i.friends.map((function(e){var n=e.username,t=e.uri,r=c.plays.find((function(e){return e.username===n}));return{friends:[],tracksListenedTo:0,username:n,friendDetailUri:t,playsDetailUri:r?r.uri:void 0}})),(n=o).push.apply(n,(0,s.Z)(c.plays.filter((function(e){return!o.find((function(n){return n.username===e.username}))})).map((function(e){return{username:e.username,playsDetailUri:e.uri,tracksListenedTo:0,friends:[]}})))),l=!0,d=!1,f=void 0,e.prev=8,v=o[Symbol.iterator]();case 10:if(l=(p=v.next()).done){e.next=25;break}return g=p.value,y=g.friendDetailUri,j=g.playsDetailUri,e.t0=a.Z,e.next=16,Promise.all([y?h(y):Promise.resolve([]),j?b(j):Promise.resolve(0)]);case 16:e.t1=e.sent,k=(0,e.t0)(e.t1,2),w=k[0],Z=k[1],g.friends=w,g.tracksListenedTo=Z;case 22:l=!0,e.next=10;break;case 25:e.next=31;break;case 27:e.prev=27,e.t2=e.catch(8),d=!0,f=e.t2;case 31:e.prev=31,e.prev=32,l||null==v.return||v.return();case 34:if(e.prev=34,!d){e.next=37;break}throw f;case 37:return e.finish(34);case 38:return e.finish(31);case 39:return e.abrupt("return",o);case 40:case"end":return e.stop()}}),e,null,[[8,27,31,39],[32,,34,38]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,s,i,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",void 0);case 2:return t="".concat(f,"?username=").concat(n),r="".concat(p,"?username=").concat(n),e.t0=a.Z,e.next=7,Promise.all([h(t),b(r)]);case 7:return e.t1=e.sent,s=(0,e.t0)(e.t1,2),i=s[0],c=s[1],e.abrupt("return",{username:n,friends:i,tracksListenedTo:c,friendDetailUri:t,playsDetailUri:r});case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4232:function(e,n,t){"use strict";t.d(n,{r:function(){return a}});var r=t(7294),a=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,r.useState)("idle"),a=t[0],s=t[1],i=(0,r.useState)(void 0),u=i[0],c=i[1],o=(0,r.useState)(void 0),l=o[0],d=o[1],f=(0,r.useCallback)((function(){return s("pending"),c(void 0),d(void 0),e().then((function(e){c(e),s("success")})).catch((function(e){d(e),s("error")}))}),[e]);return(0,r.useEffect)((function(){n&&f()}),[f,n]),{execute:f,status:a,value:u,error:l}}},1163:function(e,n,t){e.exports=t(387)},2473:function(e){"use strict";var n=function(){};e.exports=n}},function(e){e.O(0,[900,774,888,179],(function(){return n=796,e(e.s=n);var n}));var n=e.O();_N_E=n}]);