import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { appRouter } from './app.routes';
import { HttpApiService } from './api.service';

import { AppComponent } from './app.component';
import { BookcComponent } from './bookc/bookc.component';
import { BookvComponent } from './bookv/bookv.component';


//引入管道指令
import { PipeModule } from './pipes/pipe.module';

@NgModule({
    declarations: [
        AppComponent,
        BookcComponent,
        BookvComponent,
    ],
    imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(appRouter),
      PipeModule.forRoot()
    ],
    providers: [
        HttpApiService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
