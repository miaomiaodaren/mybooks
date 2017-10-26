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
    public BookZlIST: GetBookList[];
    bookListLen: number = 0;
    getZList(id: string) : void {
        // this.apiService.getBookCList(id).subscribe(res => {
        //     this.BookZlIST = res;
        //     console.info('2222', this.BookZlIST);
        //     // console.info(this.BookZlIST, '212312312', this.BookZlIST.zview);
        //     // this.bookListLen = this.BookZlIST.zview.length;
        // }, error => {
        //     console.info(error)
        // })
        this.apiService.getBooksType(id).then(res => {
            this.BookZlIST = res;
        })
    } 
    sorttoggle(): void {
        alert('222');
        // this.BookZlIST.zview.reverse();
    }
    ngOnInit(): void {
        this.activeRouter.params.subscribe(params => {
            this.bookid = params.id;
            this.getZList(this.bookid);
            console.info()
        })
    }
}