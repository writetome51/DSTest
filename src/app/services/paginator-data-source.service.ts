import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { getTail } from '@writetome51/array-get-head-tail';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';


// `this.data` will be manipulated outside this class by search and sorting
// services.

@Injectable({
    providedIn: 'root'
})
export class PaginatorDataSourceService extends PublicArrayContainer {


    constructor() {
        super();
    }


    get dataTotal(): number {
        return this.data.length;
    }


    getBatch(batchNumber: number, itemsPerBatch: number, isLastBatch: boolean): any[] {
        const start = ((batchNumber - 1) * itemsPerBatch);
        if (isLastBatch) {

            // ...only return the remaining items in array, not itemsPerBatch:
            let numItemsToGet = (this.data.length - start);
            return getTail(numItemsToGet, this.data);
        }
        else {
            return getAdjacentAt(start, itemsPerBatch, this.data);
        }
    }
}
