import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ObservableService } from '@writetome51/observable-service';

@Injectable({
  providedIn: 'root'
})
export class UsersObservableService extends ObservableService{

  constructor(private __data: DataService) {
      super(__data.getObservableFunction());
  }


}
