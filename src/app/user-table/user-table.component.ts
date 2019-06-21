import { AfterViewInit, Component } from '@angular/core';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { Subscription } from 'rxjs';


@Component({
    selector: 'user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent extends UnsubscribeOnDestroyComponent implements AfterViewInit {

    private __usersSubscription: Subscription;


    ngAfterViewInit(): void {
        this._subscriptions.push(this.__usersSubscription);
    }

}
