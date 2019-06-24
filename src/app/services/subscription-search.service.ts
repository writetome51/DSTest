import { AbstractSearchService } from './abstract-search.service';
import { noValue } from '@writetome51/has-value-no-value';
import { ObservableService } from '@writetome51/observable-service';
import { Subscription } from 'rxjs';

// Implements functionality for simple search where the data to search is retrieved
// via a subscription to an observable.

export abstract class SubscriptionSearchService extends AbstractSearchService {

    private __subscription: Subscription; // the subscription to this._data


    constructor(private __observable: ObservableService) {
        super();
        if (noValue(this.__subscription)) {
            this.__set__subscription();
        }
    }


    get subscription(): Subscription {
        return this.__subscription;
    }


    private async __set__subscription() {

        this.__subscription = await this.__observable.subscribe((data) => {
            this._data = data;
        });
    }


}
