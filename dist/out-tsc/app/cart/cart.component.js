import { __decorate } from "tslib";
import { Component } from "@angular/core";
let CartComponent = class CartComponent {
    constructor(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: "",
            address: ""
        });
    }
    onSubmit() {
        //Process checkout data here
        this.items = this.cartService.clearCart();
        console.warn("Your order has been submitted", this.checkoutForm.value);
        this.checkoutForm.reset();
    }
};
CartComponent = __decorate([
    Component({
        selector: "app-cart",
        templateUrl: "./cart.component.html",
        styleUrls: ["./cart.component.css"]
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map