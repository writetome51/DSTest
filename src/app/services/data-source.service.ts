import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DataSourceService {

    private __dataTotal;


    constructor() {
    }


    get dataTotal(): number {
        return;
    }


    getBatch(batchNumber: number, itemsPerBatch: number, isLastBatch: boolean): any[] {
        const start = (batchNumber - 1) * itemsPerBatch + 1;
        let end = start + itemsPerBatch - 1;
        if (isLastBatch) {
            end = this.dataTotal;
        }

      //  return ?
    }
}
