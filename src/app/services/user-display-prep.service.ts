import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableAPIDataService } from './observable-api-data.service';
import { map } from 'rxjs/operators';
import { getProperty } from '@writetome51/get-property';


@Injectable({
    providedIn: 'root'
})
export class UserDisplayPrepService {


    constructor(private __observableAPIData: ObservableAPIDataService) {
    }


    getUsersObservableFunction(): () => Observable<any[]> {
        return () => {
            return this.__observableAPIData.get().pipe(
                map((users) => this.__getPreppedUsers(users))
            );
        };

    }


    private __getPreppedUsers(users) {
        return this._getWithPropertiesAdded(users);
    }


    private _getWithPropertiesAdded(users) {
        users.forEach((user, index) => {
            users[index]['full_address'] = this.__getAddress(user);
            users[index]['company_name'] = getProperty('company.name', user);
            users[index]['business_strategy'] = getProperty('company.bs', user);
        });
        return users;
    }


    private __getAddress(user): string {
        let properties = ['address.street', 'address.suite', 'address.city', 'address.zipcode'];
        let addressParts = [];
        properties.forEach((prop) => addressParts.push(getProperty(prop, user)));
        return addressParts.join(', ');
    }


}
