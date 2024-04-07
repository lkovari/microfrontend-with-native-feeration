import*as i from"@angular/core";import{inject as l,ɵChangeDetectionScheduler as A,RendererFactory2 as v,NgZone as N,ANIMATION_MODULE_TYPE as c,ɵperformanceMarkFeature as y}from"@angular/core";import{ANIMATION_MODULE_TYPE as k}from"@angular/core";import{ɵDomRendererFactory2 as D,BrowserModule as d}from"@angular/platform-browser";import*as o from"@angular/animations/browser";import{ɵAnimationEngine as r,ɵWebAnimationsStyleNormalizer as M,ɵAnimationRendererFactory as I,ɵAnimationStyleNormalizer as g,AnimationDriver as u,ɵWebAnimationsDriver as O,NoopAnimationDriver as R}from"@angular/animations/browser";import{DOCUMENT as E}from"@angular/common";var h=(()=>{class e extends r{constructor(t,n,f){super(t,n,f,l(A,{optional:!0}))}ngOnDestroy(){this.flush()}static{this.ɵfac=function(n){return new(n||e)(i.ɵɵinject(E),i.ɵɵinject(o.AnimationDriver),i.ɵɵinject(o.ɵAnimationStyleNormalizer))}}static{this.ɵprov=i.ɵɵdefineInjectable({token:e,factory:e.ɵfac})}}return e})();function S(){return new M}function j(e,p,t){return new I(e,p,t)}var m=[{provide:g,useFactory:S},{provide:r,useClass:h},{provide:v,useFactory:j,deps:[D,r,N]}],a=[{provide:u,useFactory:()=>new O},{provide:c,useValue:"BrowserAnimations"},...m],s=[{provide:u,useClass:R},{provide:c,useValue:"NoopAnimations"},...m],V=(()=>{class e{static withConfig(t){return{ngModule:e,providers:t.disableAnimations?s:a}}static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:e})}static{this.ɵinj=i.ɵɵdefineInjector({providers:a,imports:[d]})}}return e})();function z(){return y("NgEagerAnimations"),[...a]}var B=(()=>{class e{static{this.ɵfac=function(n){return new(n||e)}}static{this.ɵmod=i.ɵɵdefineNgModule({type:e})}static{this.ɵinj=i.ɵɵdefineInjector({providers:s,imports:[d]})}}return e})();function W(){return[...s]}export{k as ANIMATION_MODULE_TYPE,V as BrowserAnimationsModule,B as NoopAnimationsModule,z as provideAnimations,W as provideNoopAnimations,h as ɵInjectableAnimationEngine};/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.3.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/