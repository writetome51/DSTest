import { noValue } from '@writetome51/has-value-no-value';


// Skeletal functionality for search operations.

export abstract class AbstractSearchService {

    protected _searchAlgorithm: () => any[];


    get results(): any[] {
        if (noValue(this._searchAlgorithm)) {
            throw new Error(
                'The \'_searchAlgorithm\' property must be set before you can access the \'results\' property'
            );
        }
        return this._searchAlgorithm();
    }


}
