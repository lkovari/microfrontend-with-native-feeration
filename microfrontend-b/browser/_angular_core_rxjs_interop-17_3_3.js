import{assertInInjectionContext as l,inject as c,DestroyRef as u,\u0275RuntimeError as y,\u0275getOutputDestroyRef as f,Injector as g,effect as v,untracked as d,signal as b,computed as m}from"@angular/core";import{Observable as h,ReplaySubject as w}from"rxjs";import{takeUntil as j}from"rxjs/operators";function p(n){n||(l(p),n=c(u));let e=new h(t=>n.onDestroy(t.next.bind(t)));return t=>t.pipe(j(e))}var a=class{constructor(e){this.source=e,this.destroyed=!1,this.destroyRef=c(u),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(e){if(this.destroyed)throw new y(953,!1);let t=this.source.pipe(p(this.destroyRef)).subscribe({next:r=>e(r)});return{unsubscribe:()=>t.unsubscribe()}}};function I(n,e){return new a(n)}function O(n){let e=f(n);return new h(t=>{e?.onDestroy(()=>t.complete());let r=n.subscribe(o=>t.next(o));return()=>r.unsubscribe()})}function x(n,e){!e?.injector&&l(x);let t=e?.injector??c(g),r=new w(1),o=v(()=>{let i;try{i=n()}catch(s){d(()=>r.error(s));return}d(()=>r.next(i))},{injector:t,manualCleanup:!0});return t.get(u).onDestroy(()=>{o.destroy(),r.complete()}),r.asObservable()}function D(n,e){let t=!e?.manualCleanup;t&&!e?.injector&&l(D);let r=t?e?.injector?.get(u)??c(u):null,o;e?.requireSync?o=b({kind:0}):o=b({kind:1,value:e?.initialValue});let i=n.subscribe({next:s=>o.set({kind:1,value:s}),error:s=>{if(e?.rejectErrors)throw s;o.set({kind:2,error:s})}});return r?.onDestroy(i.unsubscribe.bind(i)),m(()=>{let s=o();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new y(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}export{I as outputFromObservable,O as outputToObservable,p as takeUntilDestroyed,x as toObservable,D as toSignal};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v17.3.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
