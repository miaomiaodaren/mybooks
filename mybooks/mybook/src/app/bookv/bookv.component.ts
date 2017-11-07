import { Component, OnInit, OnChanges, Input, SimpleChanges, DoCheck, KeyValueDiffers  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpApiService } from '../api.service';

@Component({
    selector: 'bookview-root',
    templateUrl: './bookv.component.html',
})

export class BookvComponent implements OnInit, OnChanges, DoCheck {
    constructor(
        public rouer: Router,
        public activeRouter:  ActivatedRoute,
        public apiService: HttpApiService,
        private differs: KeyValueDiffers
    ) {}
    bookid: number;
    bookzid: string;
    public bookContent : string;
    public isseting: false;
    defSize: number = 14;  //默认页面字体大小为14
    cansetting: boolean = false;  //页面的设置是否打开
    bgstyle: object[] = [{type: 'rj', name: '日间', color: '#fffdf9'}, { type: 'hy', name: '护眼', color: '#dcecd2'}, { type: 'zz', name: '纸张', color: '#f4eee1'}, { type: 'yj', name: '夜间', color: '#32373b'}];             //换肤数组，后期可从数据库中读取
    tactive: string = 'rj'; 
    defbgcolor: string = '#fffdf9';
    differ: any;

    getBookv(bid: number, zid: string): void {
        this.apiService.getBookVLsit(this.bookid, this.bookzid).subscribe(res => {
            //后台返回的是一个数组[后续研究如何返回object]: 因为数据只会返回一条吧
            this.bookContent = res[0].zview.content;
            this.apiService.BookTopCon = res[0].zview.title;
        }, error => {
            console.info(error);
        })
    }
    //返回目录
    goCatalog(): void {
        this.rouer.navigateByUrl(`/bookc/${this.bookzid}`);       
    }
    gotoppage() {
        if(this.bookid === 1) return false
        this.rouer.navigateByUrl(`/bookv/${this.bookid - 1}/${this.bookzid}`);   
    }
    gobtmpage() {
        if(this.bookid === this.apiService.BookCount[this.bookzid]) return false
        this.rouer.navigateByUrl(`/bookv/${Number(this.bookid) + 1}/${this.bookzid}`);
    }
    getbooklen(bookzid: string) {
        this.apiService.getBooksLen(bookzid).subscribe(res => {
            console.info('1');
        })
    }

    fontsizej(t) {
        if(t === '-') {
            this.defSize = this.defSize === 10 ? 10 : this.defSize - 2;
        } else {
            this.defSize = this.defSize === 20 ? 20 : this.defSize + 2;
        }
    }

    ngOnInit(): void {
        this.activeRouter.params.subscribe(params => {
            this.bookid = params.bookid;
            this.bookzid = params.bookzid;
            this.getBookv(this.bookid, this.bookzid);
            //如果内存中已经存在了该小说的章节统计，则不用再请求数据
            Object.keys(this.apiService.BookCount).includes(this.bookzid) ? '' : this.getbooklen(this.bookzid);
        })
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.info(changes['defSize'], '222222', changes);
    }

    ngDoCheck(): void {
        let n = this.bgstyle.filter(v => {
            return v['type'] === this.tactive
        })
        this.defbgcolor = n[0]['color'];
    }
}

