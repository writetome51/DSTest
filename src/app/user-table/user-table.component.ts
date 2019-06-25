import { AfterViewInit, Component } from '@angular/core';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { UserSearchService } from '../services/user-search.service';


@Component({
    selector: 'user-table',
    templateUrl: './user-table.component.html'
})
export class UserTableComponent extends UnsubscribeOnDestroyComponent implements AfterViewInit {

    columns = [
        {name: 'Name', property: 'name'},
        {name: 'Username', property: 'username'},
        {name: 'Email', property: 'email'}
    ];

    highlightedRow = -1; // the index of the row.


    constructor(private __userSearch: UserSearchService) {
        super();
    }


    get users() {
        return this.__userSearch.results;
    }


    ngAfterViewInit(): void {
        this._subscriptions.push(this.__userSearch.subscription);
    }

}
