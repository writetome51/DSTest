import { Injectable } from '@angular/core';
import { SubscriptionService } from '@writetome51/subscription-service';
import { UsersObservableService } from './users-observable.service';


@Injectable({
    providedIn: 'root'
})
export class UsersSubscriptionService extends SubscriptionService {

    constructor(__observable: UsersObservableService) {
        super(__observable);
    }
}
