import { noValue } from '@writetome51/has-value-no-value';

// Skeletal functionality for search operations.

export abstract class AbstractSearchService {

    // This must have same signature as the callback you pass to Array.filter().

    protected _searchAlgorithm: () => any[];
    protected _data = []; // holds all data before search filtering.

    // Subclasses must decide what this will be, and manipulate it in this._searchAlgorithm.
    // Setting its value automatically updates this.results.
    protected _criteria: any;


    get results(): any[] {
        if (noValue(this._searchAlgorithm)) {
            throw new Error(
                'The \'_searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        return this._searchAlgorithm();
    }


}
