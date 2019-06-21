import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataSourceService } from './services/data-source.service';
import { NgModule } from '@angular/core';
import { PaginatorService } from './services/paginator.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [DataSourceService, PaginatorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
