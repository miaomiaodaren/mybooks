import { NgModule } from '@angular/core';
import { DelHtmlPipe } from './books.pipe';
import { DelBrPipe } from './delbr.pipe';

@NgModule({
    imports: [],
    declarations: [
        DelHtmlPipe,
        DelBrPipe,
    ],
    exports: [
        DelHtmlPipe,
        DelBrPipe,
    ],
})

export class PipeModule {
    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: []
        }
    }
}