import { Injectable } from '@angular/core';
import { AppPaginator } from '@writetome51/app-paginator';
import { DataSourceService } from './data-source.service';


@Injectable()
export class PaginatorService extends AppPaginator {

    constructor(dataSource: DataSourceService) {
        super(dataSource);
    }
}
