import { noValue } from '@writetome51/has-value-no-value';
import { ObservableService } from '@writetome51/observable-service';
import { Subscription } from 'rxjs';


export abstract class SearchService {

    // Must have same signature as the callback you pass to Array.filter():
    protected _searchAlgorithm: (value, index?, array?) => boolean;

    private __data = []; // holds all data before search filtering.
    private __results = [];
    private __searchText = '';
    private __subscription: Subscription; // the subscription to this.__data


    constructor(private __observable: ObservableService) {
        if (noValue(this.__subscription)) {
            this.__set__subscription();
        }
    }


    get results(): any[] {
        return this.__results;
    }


    set searchText(value) {
        this.__searchText = String(value).trim();
        this.__results = this.__getResults();
    }


    get searchText(): string {
        return this.__searchText;
    }


    get subscription(): Subscription {
        return this.__subscription;
    }


    private async __set__subscription() {

        this.__subscription = await this.__observable.subscribe((data) => {
            this.__data = data;
            this.__results = this.__getResults();
        });
    }


    private __getResults(): any[] {
        if (this.searchText.length === 0) return this.__data;

        if (noValue(this._searchAlgorithm)) {
            throw new Error(
                'The \'_searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        return this.__data.filter(this._searchAlgorithm);
    }


}
