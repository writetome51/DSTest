import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';
import { PaginatorDataSourceService } from './services/paginator-data-source.service';
import { NgModule } from '@angular/core';
import { PaginatorService } from './services/paginator.service';
import { UserTableComponent } from './user-table/user-table.component';
import { FormsModule } from '@angular/forms';
import { UserSearchFieldComponent } from './user-search-field/user-search-field.component';


@NgModule({
    declarations: [
        AppComponent,
        CollapsibleDetailRowDirective,
        UserTableComponent,
        UserSearchFieldComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [PaginatorDataSourceService, PaginatorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
