var ge=Object.defineProperty,ve=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var G=(n,r,e)=>r in n?ge(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,N=(n,r)=>{for(var e in r||={})Se.call(r,e)&&G(n,e,r[e]);if(K)for(var e of K(r))we.call(r,e)&&G(n,e,r[e]);return n},Y=(n,r)=>ve(n,Ee(r));import*as i from"@angular/core";import{ɵglobal as f,ɵRuntimeError as y,InjectionToken as D,APP_ID as z,CSP_NONCE as ee,PLATFORM_ID as I,Optional as Me,ViewEncapsulation as R,RendererStyleFlags2 as b,ɵinternalCreateApplication as te,ErrorHandler as ne,ɵsetDocument as Te,PLATFORM_INITIALIZER as De,createPlatformFactory as Ce,platformCore as Re,ɵTESTABILITY_GETTER as _,ɵTESTABILITY as be,Testability as H,NgZone as k,TestabilityRegistry as q,ɵINJECTOR_SCOPE as Ae,RendererFactory2 as Oe,ApplicationModule as Ie,ApplicationRef as Ne,ɵConsole as _e,SecurityContext as m,ɵallowSanitizationBypassAndThrow as g,ɵunwrapSafeValue as v,ɵ_sanitizeUrl as He,ɵ_sanitizeHtml as Le,ɵbypassSanitizationTrustHtml as Pe,ɵbypassSanitizationTrustStyle as ke,ɵbypassSanitizationTrustScript as je,ɵbypassSanitizationTrustUrl as xe,ɵbypassSanitizationTrustResourceUrl as Ue,ENVIRONMENT_INITIALIZER as Ot,inject as It,ɵformatRuntimeError as Nt,makeEnvironmentProviders as Fe,ɵwithDomHydration as Be,Version as Ve,makeStateKey as $e,TransferState as ze}from"@angular/core";import{ɵDomAdapter as Ze,ɵsetRootDomAdapter as Ke,ɵparseCookieValue as Ge,ɵgetDOM as C,isPlatformServer as re,DOCUMENT as l,ɵPLATFORM_BROWSER_ID as Ye,XhrFactory as qe,CommonModule as We}from"@angular/common";import{ɵgetDOM as Jt}from"@angular/common";import{ɵwithHttpTransferCache as oe}from"@angular/common/http";var j=class extends Ze{constructor(){super(...arguments),this.supportsDOMEvents=!0}},x=class n extends j{static makeCurrent(){Ke(new n)}onAndCancel(r,e,t){return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.parentNode&&r.parentNode.removeChild(r)}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Xe();return e==null?null:Je(e)}resetBaseElement(){E=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Ge(document.cookie,r)}},E=null;function Xe(){return E=E||document.querySelector("base"),E?E.getAttribute("href"):null}function Je(n){return new URL(n,document.baseURI).pathname}var U=class{addToWindow(r){f.getAngularTestability=(t,o=!0)=>{let s=r.findTestabilityInTree(t,o);if(s==null)throw new y(5103,!1);return s},f.getAllAngularTestabilities=()=>r.getAllTestabilities(),f.getAllAngularRootElements=()=>r.getAllRootElements();let e=t=>{let o=f.getAllAngularTestabilities(),s=o.length,a=function(){s--,s==0&&t()};o.forEach(c=>{c.whenStable(a)})};f.frameworkStabilizers||(f.frameworkStabilizers=[]),f.frameworkStabilizers.push(e)}findTestabilityInTree(r,e,t){if(e==null)return null;let o=r.getTestability(e);return o??(t?C().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}},Qe=(()=>{class n{build(){return new XMLHttpRequest}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),A=new D(""),se=(()=>{class n{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o){return this._findPluginFor(t).addEventListener(e,t,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(s=>s.supports(e)),!t)throw new y(5101,!1);return this._eventNameToPlugin.set(e,t),t}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(A),i.ɵɵinject(i.NgZone))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),S=class{constructor(r){this._doc=r}},L="ng-app-id",ie=(()=>{class n{constructor(e,t,o,s={}){this.doc=e,this.appId=t,this.nonce=o,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=re(s),this.resetHostNodes()}addStyles(e){for(let t of e)this.changeUsageCount(t,1)===1&&this.onStyleAdded(t)}removeStyles(e){for(let t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(let t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){let t=this.styleRef;t.get(e)?.elements?.forEach(o=>o.remove()),t.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${L}="${this.appId}"]`);if(e?.length){let t=new Map;return e.forEach(o=>{o.textContent!=null&&t.set(o.textContent,o)}),t}return null}changeUsageCount(e,t){let o=this.styleRef;if(o.has(e)){let s=o.get(e);return s.usage+=t,s.usage}return o.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){let o=this.styleNodesInDOM,s=o?.get(t);if(s?.parentNode===e)return o.delete(t),s.removeAttribute(L),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(L,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){let o=this.getStyleElement(e,t),s=this.styleRef,a=s.get(t)?.elements;a?a.push(o):s.set(t,{elements:[o],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l),i.ɵɵinject(z),i.ɵɵinject(ee,8),i.ɵɵinject(I))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),P={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Z=/%COMP%/g,ae="%COMP%",et=`_nghost-${ae}`,tt=`_ngcontent-${ae}`,nt=!0,rt=new D("",{providedIn:"root",factory:()=>nt});function ot(n){return tt.replace(Z,n)}function st(n){return et.replace(Z,n)}function ce(n,r){return r.map(e=>e.replace(Z,n))}var W=(()=>{class n{constructor(e,t,o,s,a,c,d,u=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=c,this.ngZone=d,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=re(c),this.defaultRenderer=new w(e,a,d,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===R.ShadowDom&&(t=Y(N({},t),{encapsulation:R.Emulated}));let o=this.getOrCreateRenderer(e,t);return o instanceof O?o.applyToHost(e):o instanceof M&&o.applyStyles(),o}getOrCreateRenderer(e,t){let o=this.rendererByCompId,s=o.get(t.id);if(!s){let a=this.doc,c=this.ngZone,d=this.eventManager,u=this.sharedStylesHost,h=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(t.encapsulation){case R.Emulated:s=new O(d,u,t,this.appId,h,a,c,p);break;case R.ShadowDom:return new F(d,u,e,t,a,c,this.nonce,p);default:s=new M(d,u,t,h,a,c,p);break}o.set(t.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(se),i.ɵɵinject(ie),i.ɵɵinject(z),i.ɵɵinject(rt),i.ɵɵinject(l),i.ɵɵinject(I),i.ɵɵinject(i.NgZone),i.ɵɵinject(ee))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),w=class{constructor(r,e,t,o){this.eventManager=r,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(r,e){return e?this.doc.createElementNS(P[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(X(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(X(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){r&&r.removeChild(e)}selectRootElement(r,e){let t=typeof r=="string"?this.doc.querySelector(r):r;if(!t)throw new y(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,o){if(o){e=o+":"+e;let s=P[o];s?r.setAttributeNS(s,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){let o=P[t];o?r.removeAttributeNS(o,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,o){o&(b.DashCase|b.Important)?r.style.setProperty(e,t,o&b.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&b.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){r!=null&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t){if(typeof r=="string"&&(r=C().getGlobalEventTarget(this.doc,r),!r))throw new Error(`Unsupported event target ${r} for event ${e}`);return this.eventManager.addEventListener(r,e,this.decoratePreventDefault(t))}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;(this.platformIsServer?this.ngZone.runGuarded(()=>r(e)):r(e))===!1&&e.preventDefault()}}};function X(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var F=class extends w{constructor(r,e,t,o,s,a,c,d){super(r,s,a,d),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=ce(o.id,o.styles);for(let h of u){let p=document.createElement("style");c&&p.setAttribute("nonce",c),p.textContent=h,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(this.nodeOrShadowRoot(r),e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},M=class extends w{constructor(r,e,t,o,s,a,c,d){super(r,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=d?ce(d,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},O=class extends M{constructor(r,e,t,o,s,a,c,d){let u=o+"-"+t.id;super(r,e,t,s,a,c,d,u),this.contentAttr=ot(u),this.hostAttr=st(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}},it=(()=>{class n extends S{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o){return e.addEventListener(t,o,!1),()=>this.removeEventListener(e,t,o)}removeEventListener(e,t,o){return e.removeEventListener(t,o)}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),J=["alt","control","meta","shift"],at={"\b":"Backspace","\t":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ct={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},dt=(()=>{class n extends S{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,t,o){let s=n.parseEventName(t),a=n.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>C().onAndCancel(e,s.domEventName,a))}static parseEventName(e){let t=e.toLowerCase().split("."),o=t.shift();if(t.length===0||!(o==="keydown"||o==="keyup"))return null;let s=n._normalizeKey(t.pop()),a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),J.forEach(u=>{let h=t.indexOf(u);h>-1&&(t.splice(h,1),a+=u+".")}),a+=s,t.length!=0||s.length===0)return null;let d={};return d.domEventName=o,d.fullKey=a,d}static matchEventFullKeyCode(e,t){let o=at[e.key]||e.key,s="";return t.indexOf("code.")>-1&&(o=e.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),J.forEach(a=>{if(a!==o){let c=ct[a];c(e)&&(s+=a+".")}}),s+=o,s===t)}static eventCallback(e,t,o){return s=>{n.matchEventFullKeyCode(s,e)&&o.runGuarded(()=>t(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})();function Lt(n,r){return te(N({rootComponent:n},de(r)))}function Pt(n){return te(de(n))}function de(n){return{appProviders:[...fe,...(n?.providers??[])],platformProviders:ue}}function kt(){return[...le]}function ut(){x.makeCurrent()}function lt(){return new ne}function ft(){return Te(document),document}var ue=[{provide:I,useValue:Ye},{provide:De,useValue:ut,multi:!0},{provide:l,useFactory:ft,deps:[]}],jt=Ce(Re,"browser",ue),ht=new D(""),le=[{provide:_,useClass:U,deps:[]},{provide:be,useClass:H,deps:[k,q,_]},{provide:H,useClass:H,deps:[k,q,_]}],fe=[{provide:Ae,useValue:"root"},{provide:ne,useFactory:lt,deps:[]},{provide:A,useClass:it,multi:!0,deps:[l,k,I]},{provide:A,useClass:dt,multi:!0,deps:[l]},W,ie,se,{provide:Oe,useExisting:W},{provide:qe,useClass:Qe,deps:[]},[]],xt=(()=>{class n{constructor(e){}static withServerTransition(e){return{ngModule:n,providers:[{provide:z,useValue:e.appId}]}}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(ht,12))}}static{this.ɵmod=i.ɵɵdefineNgModule({type:n})}static{this.ɵinj=i.ɵɵdefineInjector({providers:[...fe,...le],imports:[We,Ie]})}}return n})(),Ut=(()=>{class n{constructor(e){this._doc=e,this._dom=C()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((o,s)=>(s&&o.push(this._getOrCreateElement(s,t)),o),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];let t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);let o=this.getTag(t);return o?this._setMetaElementAttributes(e,o):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){let a=this._parseSelector(e),c=this.getTags(a).filter(d=>this._containsAttributes(e,d))[0];if(c!==void 0)return c}let o=this._dom.createElement("meta");return this._setMetaElementAttributes(e,o),this._doc.getElementsByTagName("head")[0].appendChild(o),o}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(o=>t.setAttribute(this._getMetaKeyMap(o),e[o])),t}_parseSelector(e){let t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(o=>t.getAttribute(this._getMetaKeyMap(o))===e[o])}_getMetaKeyMap(e){return pt[e]||e}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac,providedIn:"root"})}}return n})(),pt={httpEquiv:"http-equiv"},Ft=(()=>{class n{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac,providedIn:"root"})}}return n})();function he(n,r){if(typeof COMPILED>"u"||!COMPILED){let e=f.ng=f.ng||{};e[n]=r}}var B=class{constructor(r,e){this.msPerTick=r,this.numTicks=e}},V=class{constructor(r){this.appRef=r.injector.get(Ne)}timeChangeDetection(r){let e=r&&r.record,t="Change Detection";e&&"profile"in console&&typeof console.profile=="function"&&console.profile(t);let o=performance.now(),s=0;for(;s<5||performance.now()-o<500;)this.appRef.tick(),s++;let a=performance.now();e&&"profileEnd"in console&&typeof console.profileEnd=="function"&&console.profileEnd(t);let c=(a-o)/s;return console.log(`ran ${s} change detection cycles`),console.log(`${c.toFixed(2)} ms per check`),new B(c,s)}},pe="profiler";function Bt(n){return he(pe,new V(n)),n}function Vt(){he(pe,null)}var Q=class{static all(){return()=>!0}static css(r){return e=>e.nativeElement!=null?mt(e.nativeElement,r):!1}static directive(r){return e=>e.providerTokens.indexOf(r)!==-1}};function mt(n,r){return C().isElementNode(n)?n.matches&&n.matches(r)||n.msMatchesSelector&&n.msMatchesSelector(r)||n.webkitMatchesSelector&&n.webkitMatchesSelector(r):!1}var yt={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},$=new D("HammerGestureConfig"),me=new D("HammerLoader"),gt=(()=>{class n{constructor(){this.events=[],this.overrides={}}buildHammer(e){let t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(let o in this.overrides)t.get(o).set(this.overrides[o]);return t}static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),vt=(()=>{class n extends S{constructor(e,t,o,s){super(e),this._config=t,this.console=o,this.loader=s,this._loaderPromise=null}supports(e){return!(!yt.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,o){let s=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||s.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return s.runOutsideAngular(()=>this._loaderPromise.then(()=>{if(!window.Hammer){c=()=>{};return}a||(c=this.addEventListener(e,t,o))}).catch(()=>{c=()=>{}})),()=>{c()}}return s.runOutsideAngular(()=>{let a=this._config.buildHammer(e),c=function(d){s.runGuarded(function(){o(d)})};return a.on(t,c),()=>{a.off(t,c),typeof a.destroy=="function"&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l),i.ɵɵinject($),i.ɵɵinject(i.ɵConsole),i.ɵɵinject(me,8))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac})}}return n})(),$t=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:n})}static{this.ɵinj=i.ɵɵdefineInjector({providers:[{provide:A,useClass:vt,multi:!0,deps:[l,$,_e,[new Me,me]]},{provide:$,useClass:gt,deps:[]}]})}}return n})(),Et=(()=>{class n{static{this.ɵfac=function(t){return new(t||n)}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:function(t){let o=null;return t?o=new(t||n):o=i.ɵɵinject(St),o},providedIn:"root"})}}return n})(),St=(()=>{class n extends Et{constructor(e){super(),this._doc=e}sanitize(e,t){if(t==null)return null;switch(e){case m.NONE:return t;case m.HTML:return g(t,"HTML")?v(t):Le(this._doc,String(t)).toString();case m.STYLE:return g(t,"Style")?v(t):t;case m.SCRIPT:if(g(t,"Script"))return v(t);throw new y(5200,!1);case m.URL:return g(t,"URL")?v(t):He(String(t));case m.RESOURCE_URL:if(g(t,"ResourceURL"))return v(t);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(e){return Pe(e)}bypassSecurityTrustStyle(e){return ke(e)}bypassSecurityTrustScript(e){return je(e)}bypassSecurityTrustUrl(e){return xe(e)}bypassSecurityTrustResourceUrl(e){return Ue(e)}static{this.ɵfac=function(t){return new(t||n)(i.ɵɵinject(l))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:n,factory:n.ɵfac,providedIn:"root"})}}return n})(),T=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n}(T||{});function ye(n,r=[],e={}){return{ɵkind:n,ɵproviders:r}}function zt(){return ye(T.NoHttpTransferCache)}function Zt(n){return ye(T.HttpTransferCacheOptions,oe(n))}function Kt(...n){let r=[],e=new Set,t=e.has(T.HttpTransferCacheOptions);for(let{ɵproviders:o,ɵkind:s}of n)e.add(s),o.length&&r.push(o);return Fe([[],Be(),e.has(T.NoHttpTransferCache)||t?[]:oe({}),r])}var Gt=new Ve("17.3.3"),Yt=$e,qt=ze;export{xt as BrowserModule,Q as By,Et as DomSanitizer,A as EVENT_MANAGER_PLUGINS,se as EventManager,S as EventManagerPlugin,$ as HAMMER_GESTURE_CONFIG,me as HAMMER_LOADER,gt as HammerGestureConfig,$t as HammerModule,T as HydrationFeatureKind,Ut as Meta,rt as REMOVE_STYLES_ON_COMPONENT_DESTROY,Ft as Title,qt as TransferState,Gt as VERSION,Lt as bootstrapApplication,Pt as createApplication,Vt as disableDebugTools,Bt as enableDebugTools,Yt as makeStateKey,jt as platformBrowser,Kt as provideClientHydration,kt as provideProtractorTestingSupport,Zt as withHttpTransferCacheOptions,zt as withNoHttpTransferCache,x as ɵBrowserDomAdapter,U as ɵBrowserGetTestability,it as ɵDomEventsPlugin,W as ɵDomRendererFactory2,St as ɵDomSanitizerImpl,vt as ɵHammerGesturesPlugin,ue as ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS,dt as ɵKeyEventsPlugin,ie as ɵSharedStylesHost,Jt as ɵgetDOM,ut as ɵinitDomAdapter};/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v17.3.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/