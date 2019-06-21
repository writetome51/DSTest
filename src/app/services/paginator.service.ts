import { Injectable } from '@angular/core';
import { AppPaginator } from '@writetome51/app-paginator';
import { PaginatorDataSourceService } from './paginator-data-source.service';


@Injectable()
export class PaginatorService extends AppPaginator {

    constructor(dataSource: PaginatorDataSourceService) {
        super(dataSource);
    }
}
