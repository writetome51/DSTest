import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ObservableDataService } from './services/observable-data.service';
import { UserSearchFieldComponent } from './user-search-field/user-search-field.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserSearchService } from './services/user-search.service';
import { UsersObservableService } from './services/users-observable.service';
import { UsersComponent } from './users/users.component';
import { ExampleDirective } from './example.directive';


@NgModule({
    declarations: [
        AppComponent,
        CollapsibleDetailRowDirective,
        UserSearchFieldComponent,
        UserTableComponent,
        UsersComponent,
        ExampleDirective,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        ObservableDataService, UserSearchService, UsersObservableService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
