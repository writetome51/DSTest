import { Injectable } from '@angular/core';
import { SearchService } from '../../../../../services/search.service';


@Injectable()
export class UserSearchService extends SearchService {

	constructor() {
		super();
		this._set_searchAlgorithm(this);
	}


	private _set_searchAlgorithm(self){
		this.searchAlgorithm = function (user) {
			let firstName = String(user.first_name).toLowerCase();
			let lastName = String(user.last_name).toLowerCase();
			let fullName = firstName + ' ' + lastName;
			let email = String(user.email).toLowerCase();

			return (fullName.includes(self._searchText) ||
				email.includes(self._searchText));
		};
	}


}
