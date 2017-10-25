import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpApiService } from '../api.service';

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
    BookZlIST = [];
    getZList(id: string) : void {
        this.apiService.getBookCList(id).subscribe(res => {
            this.BookZlIST = res;
            console.info(res, '2222');
        }, error => {
            console.info(error)
        })
    } 
    sorttoggle(): void {
        this.BookZlIST.reverse();
    }
    ngOnInit(): void {
        this.activeRouter.params.subscribe(params => {
            this.bookid = params.id;
            this.getZList(this.bookid);
            console.info()
        })
    }
}