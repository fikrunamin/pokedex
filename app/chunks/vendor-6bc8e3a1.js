function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l;function a(t,n){return l||(l=document.createElement("a")),l.href=n,t===l.href}function u(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,i){if(r){const c=f(n,e,o,i);t.p(c,r)}}function _(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}const m="undefined"!=typeof window;let p=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const $=new Set;function y(t){$.forEach((n=>{n.c(t)||($.delete(n),n.f())})),0!==$.size&&g(y)}let b=!1;function x(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function v(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function w(t){const n=k("style");return function(t,n){!function(t,n){t.appendChild(n)}(t.head||t,n)}(v(t),n),n}function E(t,n){if(b){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:x(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let s=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,a=0;l<c.length;l++){for(;a<i.length&&c[l].claim_order>=i[a].claim_order;)a++;const n=a<i.length?i[a]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function A(t,n,e){b&&!e?E(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function N(t){t.parentNode.removeChild(t)}function S(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function k(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function j(){return C(" ")}function z(){return C("")}function O(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function R(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function D(t){return Array.from(t.childNodes)}function M(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function q(t,n,e){return function(t,n,e,o){return M(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,k)}function B(t,n){return M(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>C(n)),!0)}function P(t){return B(t," ")}function T(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function F(t,n){t.value=null==n?"":n}function I(t,n=document.body){return Array.from(n.querySelectorAll(t))}const L=new Set;let H,G=0;function J(t,n,e,o,r,i,c,s=0){const l=16.666/o;let a="{\n";for(let p=0;p<=1;p+=l){const t=n+(e-n)*i(p);a+=100*p+`%{${c(t,1-t)}}\n`}const u=a+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${s}`,d=v(t);L.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=w(t).sheet),_=d.__svelte_rules||(d.__svelte_rules={});_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,G+=1,f}function K(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),G-=r,G||g((()=>{G||(L.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),L.clear())})))}function Q(t){H=t}function W(){if(!H)throw new Error("Function called outside component initialization");return H}function U(t){W().$$.on_mount.push(t)}function V(t){W().$$.after_update.push(t)}function X(t,n){W().$$.context.set(t,n)}const Y=[],Z=[],tt=[],nt=[],et=Promise.resolve();let ot=!1;function rt(t){tt.push(t)}let it=!1;const ct=new Set;function st(){if(!it){it=!0;do{for(let t=0;t<Y.length;t+=1){const n=Y[t];Q(n),lt(n.$$)}for(Q(null),Y.length=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const n=tt[t];ct.has(n)||(ct.add(n),n())}tt.length=0}while(Y.length);for(;nt.length;)nt.pop()();ot=!1,it=!1,ct.clear()}}function lt(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(rt)}}let at;function ut(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const ft=new Set;let dt;function ht(){dt={r:0,c:[],p:dt}}function _t(){dt.r||i(dt.c),dt=dt.p}function mt(t,n){t&&t.i&&(ft.delete(t),t.i(n))}function pt(t,n,e,o){if(t&&t.o){if(ft.has(t))return;ft.add(t),dt.c.push((()=>{ft.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const gt={duration:0};function $t(e,o,r,s){let l=o(e,r),a=s?0:1,u=null,f=null,d=null;function h(){d&&K(e,d)}function _(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function m(o){const{delay:r=0,duration:c=300,easing:s=n,tick:m=t,css:b}=l||gt,x={start:p()+r,b:o};o||(x.group=dt,dt.r+=1),u||f?f=x:(b&&(h(),d=J(e,a,o,c,r,s,b)),o&&m(0,1),u=_(x,c),rt((()=>ut(e,o,"start"))),function(t){let n;0===$.size&&g(y),new Promise((e=>{$.add(n={c:t,f:e})}))}((t=>{if(f&&t>f.start&&(u=_(f,c),f=null,ut(e,u.b,"start"),b&&(h(),d=J(e,a,u.b,u.duration,0,s,l.css))),u)if(t>=u.end)m(a=u.b,1-a),ut(e,u.b,"end"),f||(u.b?h():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const n=t-u.start;a=u.a+u.d*s(n/u.duration),m(a,1-a)}return!(!u&&!f)})))}return{run(t){c(l)?(at||(at=Promise.resolve(),at.then((()=>{at=null}))),at).then((()=>{l=l(),m(t)})):m(t)},end(){h(),u=f=null}}}function yt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function bt(t){return"object"==typeof t&&null!==t?t:{}}function xt(t){t&&t.c()}function vt(t,n){t&&t.l(n)}function wt(t,n,e,r){const{fragment:s,on_mount:l,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,e),r||rt((()=>{const n=l.map(o).filter(c);a?a.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(rt)}function Et(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function At(t,n){-1===t.$$.dirty[0]&&(Y.push(t),ot||(ot=!0,et.then(st)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Nt(n,e,o,c,s,l,a,u=[-1]){const f=H;Q(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};a&&a(d.root);let h=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&At(n,t)),e})):[],d.update(),h=!0,i(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){b=!0;const t=D(e.target);d.fragment&&d.fragment.l(t),t.forEach(N)}else d.fragment&&d.fragment.c();e.intro&&mt(n.$$.fragment),wt(n,e.target,e.anchor,e.customElement),b=!1,st()}Q(f)}class St{$destroy(){Et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const kt=[];function Ct(n,e=t){let o;const r=new Set;function i(t){if(s(n,t)&&(n=t,o)){const t=!kt.length;for(const e of r)e[1](),kt.push(e,n);if(t){for(let t=0;t<kt.length;t+=2)kt[t][0](kt[t+1]);kt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const l=[c,s];return r.add(l),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function jt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*i}}export{U as A,e as B,Ct as C,E as D,t as E,u as F,h as G,_ as H,d as I,a as J,rt as K,$t as L,jt as M,I as N,F as O,O as P,S as Q,St as S,D as a,R as b,q as c,N as d,k as e,A as f,B as g,T as h,Nt as i,xt as j,j as k,z as l,vt as m,P as n,wt as o,yt as p,bt as q,ht as r,s,C as t,pt as u,Et as v,_t as w,mt as x,X as y,V as z};
