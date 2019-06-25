import { AbstractSearchService } from './abstract-search.service';
import { noValue } from '@writetome51/has-value-no-value';
import { ObservableService } from '@writetome51/observable-service';
import { Subscription } from 'rxjs';

// Skeletal functionality for search operations where the data to search is retrieved
// via a Subscription to an Observable.

export abstract class SubscriptionSearchService extends AbstractSearchService {


    private __subscription: Subscription; // the subscription to this._data


    constructor(private __observable: ObservableService) {
        super();
        this.__set__subscription();
    }


    get subscription(): Subscription {
        if (noValue(this.__subscription)) {
            this.__set__subscription();
        }
        return this.__subscription;
    }


    private async __set__subscription() {

        this.__subscription = await this.__observable.subscribe((data) => {
            this._data = data;
            console.log(data);
        });
    }


}
