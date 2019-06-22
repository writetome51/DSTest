import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import { UsersObservableService } from './users-observable.service';


@Injectable()
export class UserSearchService extends SearchService {

    constructor(__usersObservable: UsersObservableService) {

        super(__usersObservable);

        this.searchAlgorithm = (user) => {
            if (user.name === undefined) return false;
            else return (user.name.includes(this.searchText));
        };
    }


}
