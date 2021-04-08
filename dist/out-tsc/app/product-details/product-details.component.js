import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { products } from "../products";
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, cartService) {
        this.route = route;
        this.cartService = cartService;
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        window.alert('Your product has been addet to the Cart!');
    }
    ngOnInit() {
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get("productId"));
        // Find the product that correspond with the id provided in route.
        this.product = products.find(product => product.id === productIdFromRoute);
    }
};
ProductDetailsComponent = __decorate([
    Component({
        selector: "app-product-details",
        templateUrl: "./product-details.component.html",
        styleUrls: ["./product-details.component.css"]
    })
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map