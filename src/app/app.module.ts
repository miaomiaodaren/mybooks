import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//ActivatedRoute 用来获取链接中的参数
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

// import {HomeComponent} from './home.component';

export const ROUTES: Routes = [
	// {path: '', components: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
