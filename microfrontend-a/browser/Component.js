// projects/microfrontend-a/src/app/app.component.ts
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import * as i0 from "@angular/core";
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "Micro Frontend A";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-mfe-a-root"]], standalone: true, features: [i0.\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[2, "text-align", "center"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "h2", 0);
        i0.\u0275\u0275text(1);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        i0.\u0275\u0275advance();
        i0.\u0275\u0275textInterpolate1("This is a ", ctx.title, " (Remote) app is running. \u{1F389}");
      }
    }, styles: ["\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "projects\\microfrontend-a\\src\\app\\app.component.ts", lineNumber: 11 });
})();
export {
  AppComponent
};
//# sourceMappingURL=Component.js.map
