import { noValue } from '@writetome51/has-value-no-value';
import { ObservableService } from '@writetome51/observable-service';
import { Subscription } from 'rxjs';


export abstract class SearchService {

    // Must have same signature as the callback you pass to Array.filter():
    searchAlgorithm: (value, index?, array?) => boolean;
    subscription: Subscription;

    private __data = []; // holds all data before search filtering.
    private __results = [];
    private __searchText = '';


    constructor(private __observable: ObservableService) {
        if (!(this.subscription)) this.__set_subscription();
    }


    get results(): any[] {
        return this.__results;
    }


    set searchText(value) {
        this.__searchText = String(value).trim();
        this.__set__results();
    }


    get searchText() {
        return this.__searchText;
    }


    private async __set_subscription() {

        this.subscription = await this.__observable.subscribe((data) => {
            this.__data = data;
            this.__set__results();
        });
    }


    private __set__results() {
        if (this.searchText.length > 0) {
            this.__results = this.__getResults();
        } else {
            this.__results = this.__data;
        }
    }


    private __getResults() {
        if (noValue(this.searchAlgorithm)) {
            throw new Error(
                'The \'searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        return this.__data.filter(this.searchAlgorithm);
    }


}
