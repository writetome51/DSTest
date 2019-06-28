import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SubscriptionService {

    private __data: any;
    private __subscription: Subscription; // the subscription to this.data


    constructor(
        private __observable: {
            subscribe: (dataHandler: (data) => void) => Subscription
        }
    ) {
        this.__set__subscription();
    }


    get data(): any {
        return this.__data;
    }


    unsubscribe(): void {
        this.__subscription.unsubscribe();
    }


    private async __set__subscription() {

        this.__subscription = await this.__observable.subscribe((data) => {
            this.__data = data;
        });
    }


}
