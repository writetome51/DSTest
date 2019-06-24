import { Injectable } from '@angular/core';
import { ObservableDataService } from './observable-data.service';
import { ObservableService } from '@writetome51/observable-service';

@Injectable({
  providedIn: 'root'
})
export class UsersObservableService extends ObservableService{

  constructor(private __data: ObservableDataService) {
      super(__data.getObservableFunction());
  }


}
