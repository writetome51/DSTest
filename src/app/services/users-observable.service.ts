import { Injectable } from '@angular/core';
import { ObservableService } from '@writetome51/observable-service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersObservableService extends ObservableService{

  constructor(__data: DataService) {
      super(__data.get);
  }
}
