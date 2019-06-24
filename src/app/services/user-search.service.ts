import { Injectable } from '@angular/core';
import { UsersObservableService } from './users-observable.service';
import { SubscriptionSearchService } from './subscription-search.service';


@Injectable()
export class UserSearchService extends SubscriptionSearchService {

    constructor(__usersObservable: UsersObservableService) {

        super(__usersObservable);

        this._searchAlgorithm = (user) => {
            if (user.name === undefined) return false;

            else {
                let searchText = this.searchText.toLowerCase();
                let username = user.name.toLowerCase();
                return (username.includes(searchText));
            }
        };
    }


}
