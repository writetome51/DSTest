import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PaginatorDataSourceService } from './services/paginator-data-source.service';
import { PaginatorService } from './services/paginator.service';
import { UserSearchFieldComponent } from './user-search-field/user-search-field.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserSearchService } from './services/user-search.service';
import { UsersObservableService } from './services/users-observable.service';


@NgModule({
    declarations: [
        AppComponent,
        CollapsibleDetailRowDirective,
        UserSearchFieldComponent,
        UserTableComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        DataService, PaginatorDataSourceService, PaginatorService,
        UserSearchService, UsersObservableService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
