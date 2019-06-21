import { Injectable } from '@angular/core';
import { SearchService } from './search.service';


@Injectable()
export class UserSearchService extends SearchService {

    constructor() {
        super();

        this.searchAlgorithm = (user) => {
            if (user.name === undefined) return false;

            return (user.name.includes(this.searchText));
        };
    }


}
