import { Injectable } from '@angular/core';
import { UsersSubscriptionService } from './users-subscription.service';


@Injectable({
    providedIn: 'root'
})
export class SearchDataProviderService {

    constructor(private __subscription: UsersSubscriptionService) {
    }


    get subscription() {
        return this.__subscription;
    }


    get data() {
        return this.__subscription.data;
    }


}
