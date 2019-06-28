import { errorIfNotString } from 'error-if-not-string';
import { Injectable } from '@angular/core';
import { SubscriptionService } from './subscription.service';
import { AbstractSearchService } from './abstract-search.service';


@Injectable()
export class UserSearchService extends AbstractSearchService {

    private __searchText = '';


    constructor(public subscription: SubscriptionService) {

        super();

        this._searchAlgorithm = () => {
            if (this.searchText.length === 0) return this._data;

            return this._data.filter((user) => {
                if (user.name === undefined) return false;
                else {
                    let searchText = this.searchText.toLowerCase();
                    let username = user.name.toLowerCase();
                    return (username.includes(searchText));
                }
            });

        };
    }


    set searchText(value) {
        errorIfNotString(value);
        this.__searchText = value;
    }


    get searchText(): string {
        return this.__searchText;
    }


}
