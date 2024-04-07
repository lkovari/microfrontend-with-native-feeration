var j=Object.defineProperty,$=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var N=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i=(e,t)=>{for(var o in t||={})_.call(t,o)&&N(e,o,t[o]);if(w)for(var o of w(t))z.call(t,o)&&N(e,o,t[o]);return e},l=(e,t)=>$(e,U(t));var c=(e,t,o)=>new Promise((n,r)=>{var s=a=>{try{u(o.next(a))}catch(f){r(f)}},m=a=>{try{u(o.throw(a))}catch(f){r(f)}},u=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,m);u((o=o.apply(e,t)).next())});function h(e,t){return{imports:i(i({},e.imports),t.imports),scopes:i(i({},e.scopes),t.scopes)}}var E="__NATIVE_FEDERATION__",x=globalThis;x[E]??={externals:new Map,remoteNamesToRemote:new Map,baseUrlToRemoteNames:new Map};var d=x[E],R=d.externals;function I(e){return`${e.packageName}@${e.version}`}function B(e){let t=I(e);return R.get(t)}function M(e,t){let o=I(e);R.set(o,t)}function y(e){let t=e.split("/");return t.pop(),t.join("/")}function p(e,t){for(;e.endsWith("/");)e=e.substring(0,e.length-1);return t.startsWith("./")&&(t=t.substring(2,t.length)),`${e}/${t}`}var b=d.remoteNamesToRemote,g=d.baseUrlToRemoteNames;function K(e,t){b.set(e,t),g.set(t.baseUrl,e)}function v(e){return g.get(e)}function A(e){return g.has(e)}function C(e){return b.get(e)}function k(e){document.body.appendChild(Object.assign(document.createElement("script"),{type:"importmap-shim",innerHTML:JSON.stringify(e)}))}function G(){return c(this,arguments,function*(e={}){let t=typeof e=="string"?yield D(e):e,o=yield J(),n=yield H(t),r=h(o,n);return k(r),r})}function D(e){return c(this,null,function*(){return yield fetch(e).then(t=>t.json())})}function H(e){return c(this,null,function*(){let t={imports:{},scopes:{}};for(let o of Object.keys(e))try{let n=e[o],r=yield T(n,o);t=h(t,r)}catch{console.error(`Error loading remote entry for ${o} from file ${e[o]}`)}return t})}function T(e,t){return c(this,null,function*(){let o=y(e),n=yield F(e);t||(t=n.name);let r=P(n,t,o);return K(t,l(i({},n),{baseUrl:o})),r})}function P(e,t,o){let n=W(e,t,o),r=S(e,o);return{imports:n,scopes:r}}function F(e){return c(this,null,function*(){return yield fetch(e).then(o=>o.json())})}function S(e,t){let o={},n={};for(let r of e.shared){let s=B(r)??p(t,r.outFileName);M(r,s),n[r.packageName]=s}return o[t+"/"]=n,o}function W(e,t,o){let n={};for(let r of e.exposes){let s=p(t,r.key),m=p(o,r.outFileName);n[s]=m}return n}function J(){return c(this,null,function*(){let e=yield F("./remoteEntry.json"),t=e.shared.reduce((o,n)=>l(i({},o),{[n.packageName]:"./"+n.outFileName}),{});for(let o of e.shared)M(o,"./"+o.outFileName);return{imports:t,scopes:{}}})}function Q(e,t){return c(this,null,function*(){let o=V(e,t);yield O(o);let n=L(o),r=C(n);if(!r)throw new Error("unknown remote "+n);let s=r.exposes.find(a=>a.key===o.exposedModule);if(!s)throw new Error(`Unknown exposed module ${o.exposedModule} in remote ${n}`);let m=p(r.baseUrl,s.outFileName);return yield importShim(m)})}function L(e){let t;if(e.remoteName)t=e.remoteName;else if(e.remoteEntry){let o=y(e.remoteEntry);t=v(o)}else throw new Error("unexpcted arguments: Please pass remoteName or remoteEntry");if(!t)throw new Error("unknown remoteName "+t);return t}function O(e){return c(this,null,function*(){if(e.remoteEntry&&!A(y(e.remoteEntry))){let t=yield T(e.remoteEntry);k(t)}})}function V(e,t){let o;if(typeof e=="string"&&t)o={remoteName:e,exposedModule:t};else if(typeof e=="object"&&!t)o=e;else throw new Error("unexpected arguments: please pass options or a remoteName/exposedModule-pair");return o}export{G as a,Q as b};