import { Component } from "@angular/core";
import { Customer } from "./Customer";
@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent{
    title="Angular";
    showTitle:boolean = true;
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
        this.setCurrentClasses();
    }
    imageURL:string = 'http://lorempixel.com/600/400';
    needsUpdate: boolean = true;
    isSpecial: boolean = true;
    canSave:boolean = true;
    currentClasses = {};
    setCurrentClasses() {
        this.currentClasses = {
            saveable:this.canSave,
            special:this.isSpecial
        }
    }
    birthday = new Date(1990,5,23);
    total = 500;
    fee = .10;
    fireClickEvent(e){
        console.log(e);
    }
    value:boolean = true;
    toggleText() {
        this.value = !this.value;
    }
    fireEvent(e) {
        console.log(e.type)
    }
    text:string = 'Hello';
    changeText(e) {
        this.text = e.target.value;
    }
    dataBound = '';
    name1 = '';
    users = [];
    onSubmit() {
        this.users.push(this.name1);
        this.name1 = '';
    }

    user1 = {
        name: '',
        email: '',
        phone: ''
    }
    onSubmit1({value,valid}) {
        if(valid) {
            console.log(value)
        } else {
            console.log('Form is invalid!')
        }
    }
    
}

