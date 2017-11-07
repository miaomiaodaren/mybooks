import { Component, OnInit } from '@angular/core';
import { HttpApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        private apiService: HttpApiService,
    ) {}
    title: string = '';
    datalist = [{id: 1, name: '1'}, {id: 2, name: '2'}];
    ngOnInit(): void {
        this.apiService.BookTopCon = '喵喵小说商城';
    }
}

