import { AfterViewInit, Component } from '@angular/core';
import { CollapsibleDetailRowDirective } from '../collapsible-detail-row.directive';
import { getProperty } from '@writetome51/get-property';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { UserSearchService } from '../services/user-search.service';
import { UserDisplayPrepService } from '../services/user-display-prep.service';


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
        {name: 'Address', property: 'full_address'}, {name: 'Phone', property: 'phone'},
        {name: 'Website', property: 'website'}, {name: 'Company', property: 'company_name'},
        {name: 'Business Strategy', property: 'business_strategy'}
    ];

    highlightedRow = -1; // the index of the row.
    private __openedRow: CollapsibleDetailRowDirective;


    constructor(
        private __userSearch: UserSearchService
    ) {
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


/**********

 <!--   Hidden Subtable    -->
 <ng-template #expandedRowTpl let-this>
 <div [@detailExpand]>

 <!--   Subtable header row    -->
 <div class="mini-row  subtable-header-row">
 <div *ngFor="let subtableColumn of subtableColumns"
 class="cell"
 >
 {{subtableColumn.name}}
 </div>
 </div>
 <!--  / Subtable header row   -->


 <!--   Subtable data row    -->
 <div *ngFor="let row of thisRow.rows; let rowID = index;" title="Click for rates"
 class="mini-row subtable-data-row"
 [class.highlightedRow]="highlightedSubtableRow === rowID"
 (mouseover)="highlightRow('highlightedSubtableRow',rowID)"
 >

 </div>
 <!--  / Subtable data row   -->

 </div>
 </ng-template>
 <!--  / Hidden Subtable    -->

 *********/
