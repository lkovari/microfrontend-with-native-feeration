// dist/shared-lib/fesm2022/lkovari-shared-lib.mjs
import * as i0 from "@angular/core";
import { Injectable, Component } from "@angular/core";
import * as angular from "@angular/forms";
var SharedLibService = class _SharedLibService {
  constructor() {
  }
  static {
    this.\u0275fac = function SharedLibService_Factory(t) {
      return new (t || _SharedLibService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
      token: _SharedLibService,
      factory: _SharedLibService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(SharedLibService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var SharedLibComponent = class _SharedLibComponent {
  static {
    this.\u0275fac = function SharedLibComponent_Factory(t) {
      return new (t || _SharedLibComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _SharedLibComponent,
      selectors: [["lib-shared-lib"]],
      standalone: true,
      features: [i0.\u0275\u0275StandaloneFeature],
      decls: 2,
      vars: 0,
      template: function SharedLibComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275elementStart(0, "p");
          i0.\u0275\u0275text(1, " shared-lib works! ");
          i0.\u0275\u0275elementEnd();
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(SharedLibComponent, [{
    type: Component,
    args: [{
      selector: "lib-shared-lib",
      standalone: true,
      imports: [],
      template: `
    <p>
      shared-lib works!
    </p>
  `
    }]
  }], null, null);
})();
var AngularVersionComponent = class _AngularVersionComponent {
  constructor() {
    this.angularVersion = "N/A";
  }
  ngOnInit() {
    this.angularVersion = angular.VERSION.full;
  }
  static {
    this.\u0275fac = function AngularVersionComponent_Factory(t) {
      return new (t || _AngularVersionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
      type: _AngularVersionComponent,
      selectors: [["lib-angular-version"]],
      standalone: true,
      features: [i0.\u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 1,
      consts: [[1, "text-info", 2, "text-align", "center"]],
      template: function AngularVersionComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.\u0275\u0275elementStart(0, "div")(1, "p", 0);
          i0.\u0275\u0275text(2);
          i0.\u0275\u0275elementEnd()();
        }
        if (rf & 2) {
          i0.\u0275\u0275advance(2);
          i0.\u0275\u0275textInterpolate1(" Angular Version (", ctx.angularVersion, ") from shared-lib works! ");
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AngularVersionComponent, [{
    type: Component,
    args: [{
      selector: "lib-angular-version",
      standalone: true,
      imports: [],
      template: '<div>\r\n  <p style="text-align: center" class="text-info">\r\n    Angular Version ({{ angularVersion }}) from shared-lib works!\r\n  </p>\r\n</div>\r\n'
    }]
  }], null, null);
})();
export {
  AngularVersionComponent,
  SharedLibComponent,
  SharedLibService
};
//# sourceMappingURL=shared_lib.js.map
