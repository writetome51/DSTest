import { AbstractSearchService } from './abstract-search.service';
import { errorIfNotString } from 'error-if-not-string';
import { Injectable } from '@angular/core';
import { SearchDataProviderService } from './search-data-provider.service';


@Injectable()
export class UserSearchService extends AbstractSearchService {

    private __searchText = '';


    constructor(private __dataProvider: SearchDataProviderService) {

        super();

        this._searchAlgorithm = () => {
            if (this.searchText.length === 0) return this.__dataProvider.data;

            return this.__dataProvider.data.filter((user) => {
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
