import { __decorate } from "tslib";
import { Component } from "@angular/core";
let ShippingComponent = class ShippingComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.shippingCosts = this.cartService.getShippingPrices();
    }
    ngOnInit() { }
};
ShippingComponent = __decorate([
    Component({
        selector: "app-shipping",
        templateUrl: "./shipping.component.html",
        styleUrls: ["./shipping.component.css"]
    })
], ShippingComponent);
export { ShippingComponent };
//# sourceMappingURL=shipping.component.js.map