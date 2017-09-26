import { Component } from "@angular/core";
import { Customer } from "./Customer";
@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent{
    customer:Customer;
    customers:Customer[];
    friends = ['Jack','Phil','Ben'];
    constructor() {
        this.customer = {
            id: 3726,
            name: 'Derek',
            email: 'test@123.com'
        },
        this.customers = [
        {
            id: 3726,
            name: 'Derek',
            email: 'test1@123.com'
        },
        {
            id: 3425,
            name: 'Sam',
            email: 'test2@123.com'
        },
        {
            id: 2837,
            name: 'Jake',
            email: 'test3@123.com'
        },
        ]
    }
}

