import { AfterViewInit, Component } from '@angular/core';
import { CollapsibleDetailRowDirective } from '../collapsible-detail-row.directive';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { UserSearchService } from '../services/user-search.service';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { UsersSubscriptionService } from '../services/users-subscription.service';


@Component({
    selector: 'user-table',
    templateUrl: './user-table.component.html',
    // Required for the collapsible rows:
    animations: [
        trigger('detailExpand', [
            state('void', style({height: '0px', minHeight: '0', visibility: 'hidden', opacity: 0})),
            state('*', style({height: '*', visibility: 'visible', opacity: 1})),
            transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class UserTableComponent extends UnsubscribeOnDestroyComponent implements AfterViewInit {

    columns = [
        {name: 'Name', property: 'name'},
        {name: 'Username', property: 'username'},
        {name: 'Email', property: 'email'}
    ];
    subtableColumns = [
        {name: 'Address', property: 'full_address'}, {name: 'Phone', property: 'phone'},
        {name: 'Website', property: 'website'}, {name: 'Company', property: 'company_name'},
        {name: 'Business Strategy', property: 'business_strategy'}
    ];

    highlightedRow = -1; // the index of the row.
    private __openedRow: CollapsibleDetailRowDirective;


    constructor(
        private __userSearch: UserSearchService,
        private __usersSubscription: UsersSubscriptionService
    ) {
        super();
    }


    get users() {
        return this.__userSearch.results;
    }


    ngAfterViewInit(): void {
        this._subscriptions.push(this.__usersSubscription);
    }


    toggleRow(cdkDetailRow: CollapsibleDetailRowDirective): void {
        if (this.__openedRow && this.__openedRow.expended) {
            this.__openedRow.toggle();
        }
        this.__openedRow = cdkDetailRow.expended ? cdkDetailRow : undefined;
    }


}
