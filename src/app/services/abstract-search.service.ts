import { noValue } from '@writetome51/has-value-no-value';

// Skeletal functionality for simple search using 1 text search string (like a single text input field).

export abstract class AbstractSearchService {

    // This must have same signature as the callback you pass to Array.filter().
    // You must use this.searchText inside the algorithm.

    protected _searchAlgorithm: (value, index?, array?) => boolean;
    protected _data = []; // holds all data before search filtering.

    private __searchText = '';


    get results(): any[] {
         if (this.searchText.length === 0) return this._data;

        if (noValue(this._searchAlgorithm)) {
            throw new Error(
                'The \'_searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        return this._data.filter(this._searchAlgorithm);
    }


    // Setting this automatically updates this.results .

    set searchText(value) {
        this.__searchText = String(value).trim();
    }


    get searchText(): string {
        return this.__searchText;
    }


}
