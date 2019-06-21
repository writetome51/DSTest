import { noValue } from '@writetome51/has-value-no-value';
import { ObservableService } from '@writetome51/observable-service';
import { Subscription } from 'rxjs';


export abstract class SearchService {

    // Must have same signature as the callback you pass to Array.filter():
    searchAlgorithm: (value, index?, array?) => boolean;
    subscription: Subscription;

    private __data: any[]; // contains all data before getting filtered by search.
    private __results = [];
    private __searchText = '';


    constructor(private __observable: ObservableService) {
    }


    get results() {
        if (!(this.subscription)) this.__set_subscription();

        return this.__results;
    }


    set searchText(value) {
        this.__searchText = String(value).trim();
    }


    get searchText() {
        return this.__searchText;
    }


    private async __set_subscription() {

        this.subscription = await this.__observable.subscribe((data) => {
            if (this.searchText.length > 0) this.__set__results(data);
            else this.__results = data;
        });
    }


    private __set__results(data) {
        if (noValue(this.searchAlgorithm)) {
            throw new Error(
                'The \'searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        this.__results = data.filter(this.searchAlgorithm);
    }


}
