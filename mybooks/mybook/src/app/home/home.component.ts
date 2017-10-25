import { Component, OnInit } from '@angular/core';

import { HttpApiService } from '../api.service';
import { GetNews, GetBookType } from './model/model';

@Component({
    selector: 'home-root',
    templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
    bookList: GetNews[];
    bookTypeList: GetBookType[];
    constructor(private apiservice: HttpApiService,) {}
    getBooks() : void {
        this.apiservice.getBooksList().then(res => {
            this.bookList = res;
            console.info(res)
        })
    };
    getBookTypeList(): void {
        this.apiservice.getBooksType().then(res => {
            this.bookTypeList = res;
            console.info(res);
        })
    }
    ngOnInit(): void {
        this.getBooks();
        this.getBookTypeList();
    }
}