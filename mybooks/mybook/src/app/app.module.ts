import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { appRouter } from './app.routes';
import { HttpApiService } from './api.service';

import { AppComponent } from './app.component';
import { BookcComponent } from './bookc/bookc.component';

@NgModule({
    declarations: [
        AppComponent,
        BookcComponent
    ],
    imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(appRouter),
    ],
    providers: [
        HttpApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
