import { Component } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';


@Component({
    selector: 'user-search-field',
    templateUrl: './user-search-field.component.html',
    styleUrls: ['./user-search-field.component.sass']
})
export class UserSearchFieldComponent {

    constructor(private __userSearch: UserSearchService) {
    }


    set searchText(value) {
        this.__userSearch.searchText = value;
    }


    get searchText() {
        return this.__userSearch.searchText;
    }


}
