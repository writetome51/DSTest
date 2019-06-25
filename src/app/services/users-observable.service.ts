import { Injectable } from '@angular/core';
import { ObservableService } from '@writetome51/observable-service';
import { UserDisplayPrepService } from './user-display-prep.service';

@Injectable({
  providedIn: 'root'
})
export class UsersObservableService extends ObservableService{

  constructor(private __data: UserDisplayPrepService) {
      super(__data.getUsersObservable);
  }


}
