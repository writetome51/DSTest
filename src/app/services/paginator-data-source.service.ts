import { getTail } from '@writetome51/array-get-head-tail';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { Injectable } from '@angular/core';
import { UserSearchService } from './user-search.service';


@Injectable({
    providedIn: 'root'
})
export class PaginatorDataSourceService {


    constructor(
        // The data is filtered by UserSearchService before getting handed to the Paginator.
        private __userSearch: UserSearchService
    ) {
    }


    private get __data() {
        return this.__userSearch.results;
    }


    get dataTotal(): number {
        return this.__data.length;
    }


    getBatch(batchNumber: number, itemsPerBatch: number, isLastBatch: boolean): any[] {
        const start = ((batchNumber - 1) * itemsPerBatch);

        if (isLastBatch) {
            // ...only return the remaining items in array, not itemsPerBatch:
            let numItemsToGet = (this.dataTotal - start);
            return getTail(numItemsToGet, this.__data);
        } else {
            return getAdjacentAt(start, itemsPerBatch, this.__data);
        }
    }
}
