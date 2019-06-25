import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ObservableAPIDataService } from './services/observable-api-data.service';
import { UserDisplayPrepService } from './services/user-display-prep.service';
import { UsersComponent } from './users/users.component';
import { UserSearchFieldComponent } from './user-search-field/user-search-field.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserSearchService } from './services/user-search.service';
import { UsersObservableService } from './services/users-observable.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        CollapsibleDetailRowDirective,
        UserSearchFieldComponent,
        UserTableComponent,
        UsersComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        ObservableAPIDataService, UserSearchService, UsersObservableService,
        UserDisplayPrepService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
