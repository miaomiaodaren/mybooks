import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpApiService } from '../api.service';
import { GetBookList } from '../home/model/model'

@Component({
    selector: 'booklist-root',
    templateUrl: './bookc.component.html',
})

export class BookcComponent implements OnInit {
    constructor(
        private router: Router,
        private activeRouter:  ActivatedRoute,
        private apiService: HttpApiService,
    ) {}
    bookid: any = 0;
    public BookZlIST: GetBookList = new GetBookList();
    bookListLen: number = 0;
    public Zlength: number = 0;
    getZList(id: string) : void {
        this.apiService.getBookCList(id).subscribe(res => {
            this.BookZlIST = res;
            this.Zlength = res.zview.length;
            this.apiService.BookTopCon = res.title;
        }, error => {
            console.info(error)
        })
    } 
    sorttoggle(): void {
        this.BookZlIST.zview.reverse();
    }
    ngOnInit(): void {
        this.activeRouter.params.subscribe(params => {
            this.bookid = params.id;
            this.getZList(this.bookid);
            console.info(this.bookid);
        })
    }
}