import { noValue } from '@writetome51/has-value-no-value';


export abstract class SearchService {

    data: any[] = []; // Contains all items before filtering.

    // Must have same signature as the callback you pass to Array.filter():
    searchAlgorithm: (value, index?, array?) => boolean;

    private __results = [];
    private __searchText = '';


    get results() {
        if (this.searchText.length > 0) this._set__results();
        else this.__results = this.data;

        return this.__results;
    }


    get searchText() {
        return this.__searchText;
    }


    set searchText(value) {
        this.__searchText = String(value).trim();
    }


    private _set__results() {
        if (noValue(this.searchAlgorithm)) {
            throw new Error(
                'The \'searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        this.__results = this.data.filter(this.searchAlgorithm);
    }


}
