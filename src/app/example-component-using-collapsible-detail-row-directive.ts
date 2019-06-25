/********************

import {
    AfterViewInit,
    Component, Input, OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, animate, state, style, transition } from '@angular/animations';
import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';


@Component({
    selector: 'linguists-list',
    templateUrl: './linguists-list.component.html',
    styleUrls: ['./linguists-list.component.scss'],
    encapsulation: ViewEncapsulation.None,

    // Required for the collapsible rows:
    animations: [fuseAnimations,
        trigger('detailExpand', [
            state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
            state('*', style({height: '*', visibility: 'visible'})),
            transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]

})


export class LinguistsListComponent implements OnInit, AfterViewInit {


    dropdownMenu = {rowIndex: -1, isOpen: false};
    highlightedDropdownItem = -1;
    highlightedRow = -1;
    highlightedSubtableRow = -1;
    linguists: any;
    user: any;
    dialogRef: any;
    sortSubscription: Subscription;
    private openedRow: CollapsibleDetailRowDirective;
    private openedSubrow: CollapsibleDetailRowDirective;


    constructor(
        public usersDataSourceService
    ) {
    }




    onToggleRow(cdkDetailRow: CollapsibleDetailRowDirective): void {
        if (this.openedRow && this.openedRow.expended) {
            this.openedRow.toggle();
        }
        this.openedRow = cdkDetailRow.expended ? cdkDetailRow : undefined;
    }


    onToggleSubrow(cdkDetailRow: CollapsibleDetailRowDirective, row: Object): void {
        if (this.openedSubrow && this.openedSubrow.expended) {
            this.openedSubrow.toggle();
        }
        this.openedSubrow = cdkDetailRow.expended ? cdkDetailRow : undefined;
        this.usersDataSourceService.set_currentlyViewedRates(row);
    }


    toggleDropdown(rowIndex, event) {
        event.stopPropagation();
        if (this.dropdownMenu.rowIndex === rowIndex) {
            this.dropdownMenu.isOpen = (!this.dropdownMenu.isOpen);
        } else {
            this.dropdownMenu = {rowIndex: rowIndex, isOpen: true};
        }
    }



}
***********************/
