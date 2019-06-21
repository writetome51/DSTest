import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CollapsibleDetailRowDirective } from './collapsible-detail-row.directive';
import { PaginatorDataSourceService } from './services/paginator-data-source.service';
import { NgModule } from '@angular/core';
import { PaginatorService } from './services/paginator.service';


@NgModule({
    declarations: [
        AppComponent,
        CollapsibleDetailRowDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [PaginatorDataSourceService, PaginatorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
