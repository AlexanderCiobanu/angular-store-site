import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { products } from '../products';
let ProductListComponent = class ProductListComponent {
    constructor() {
        this.products = products;
    }
    share() {
        window.alert('The product has been shared!');
    }
    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
};
ProductListComponent = __decorate([
    Component({
        selector: 'app-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css']
    })
], ProductListComponent);
export { ProductListComponent };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 
//# sourceMappingURL=product-list.component.js.map