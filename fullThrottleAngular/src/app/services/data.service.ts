import { Injectable } from "@angular/core";

@Injectable()
export class DataService{
    users:string[];
    constructor() {
        this.users = ['mark','beth','sam'];
    }
    getUsers() {
        return this.users;
    }
}