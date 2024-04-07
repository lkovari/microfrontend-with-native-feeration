import { Component } from '@angular/core';
import * as angular from '@angular/forms';
import * as i0 from "@angular/core";
export class AngularVersionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci12ZXJzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC1saWIvc3JjL2xpYi9hbmd1bGFyLXZlcnNpb24vYW5ndWxhci12ZXJzaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NoYXJlZC1saWIvc3JjL2xpYi9hbmd1bGFyLXZlcnNpb24vYW5ndWxhci12ZXJzaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLHVCQUF1QjtJQVBwQztRQVFFLG1CQUFjLEdBQVcsS0FBSyxDQUFDO0tBS2hDO0lBSEMsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQzs4R0FMVSx1QkFBdUI7a0dBQXZCLHVCQUF1QiwrRUNUcEMsOEpBS0E7OzJGRElhLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSxxQkFBcUIsY0FDbkIsSUFBSSxXQUNQLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhci12ZXJzaW9uJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyLXZlcnNpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9hbmd1bGFyLXZlcnNpb24uY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyVmVyc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBhbmd1bGFyVmVyc2lvbjogc3RyaW5nID0gJ04vQSc7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmd1bGFyVmVyc2lvbiA9IGFuZ3VsYXIuVkVSU0lPTi5mdWxsO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDxwIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCIgY2xhc3M9XCJ0ZXh0LWluZm9cIj5cclxuICAgIEFuZ3VsYXIgVmVyc2lvbiAoe3sgYW5ndWxhclZlcnNpb24gfX0pIGZyb20gc2hhcmVkLWxpYiB3b3JrcyFcclxuICA8L3A+XHJcbjwvZGl2PlxyXG4iXX0=