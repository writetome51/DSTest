import { AfterViewInit, Component } from '@angular/core';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { UserSearchService } from '../services/user-search.service';
import { CollapsibleDetailRowDirective } from '../collapsible-detail-row.directive';


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
    subtableColumns = [
        {name: 'Address', property: ''}, {name: 'Phone', property: ''},
        {name: 'Website', property: ''}, {name: 'Company', property: ''},
        {name: 'Business Strategy', property: ''}
    ];

    highlightedRow = -1; // the index of the row.
    private __openedRow: CollapsibleDetailRowDirective;


    constructor(private __userSearch: UserSearchService) {
        super();
    }


    get users() {
        return this.__userSearch.results;
    }


    ngAfterViewInit(): void {
        this._subscriptions.push(this.__userSearch.subscription);
    }


    onToggleRow(cdkDetailRow: CollapsibleDetailRowDirective): void {
        if (this.__openedRow && this.__openedRow.expended) {
            this.__openedRow.toggle();
        }
        this.__openedRow = cdkDetailRow.expended ? cdkDetailRow : undefined;
    }


}
