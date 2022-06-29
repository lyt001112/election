import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { take } from 'rxjs/operators';
import * as Web3 from 'web3';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
    private web3: any = null;
    private accountList: Array<string> = [];

    constructor() {
        this.web3 = typeof window.web3 !== 'undefined'
        ? new Web3(window.web3.currentProvider)
        : new Web3(new Web3.providers.HttpProvider('http://localhost:4200'));
        this.enableConnect().pipe(take(1)).subscribe(
            res => { this.accountList = res; },
            err => { console.error(err); }
        );
    }

    public enableConnect(): Observable<any> {
        return from(this.web3.currentProvider.enable());
    }

}