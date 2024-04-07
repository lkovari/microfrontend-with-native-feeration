import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import * as angular from '@angular/forms';

class SharedLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: SharedLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: SharedLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: SharedLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SharedLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: SharedLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.3", type: SharedLibComponent, isStandalone: true, selector: "lib-shared-lib", ngImport: i0, template: `
    <p>
      shared-lib works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: SharedLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared-lib', standalone: true, imports: [], template: `
    <p>
      shared-lib works!
    </p>
  ` }]
        }] });

class AngularVersionComponent {
    constructor() {
        this.angularVersion = 'N/A';
    }
    ngOnInit() {
        this.angularVersion = angular.VERSION.full;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: AngularVersionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.3", type: AngularVersionComponent, isStandalone: true, selector: "lib-angular-version", ngImport: i0, template: "<div>\r\n  <p style=\"text-align: center\" class=\"text-info\">\r\n    Angular Version ({{ angularVersion }}) from shared-lib works!\r\n  </p>\r\n</div>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.3", ngImport: i0, type: AngularVersionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-angular-version', standalone: true, imports: [], template: "<div>\r\n  <p style=\"text-align: center\" class=\"text-info\">\r\n    Angular Version ({{ angularVersion }}) from shared-lib works!\r\n  </p>\r\n</div>\r\n" }]
        }] });

/*
 * Public API Surface of shared-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularVersionComponent, SharedLibComponent, SharedLibService };
//# sourceMappingURL=lkovari-shared-lib.mjs.map
