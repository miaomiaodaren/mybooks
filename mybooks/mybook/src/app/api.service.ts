import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

//使用Observable的时候要引入这二个
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { GetNews, GetBookType, GetBookList } from './home/model/model';

@Injectable()

export class HttpApiService {
    constructor(private http: Http) { }
    //获取书本的列表
    getBooksList(): Promise<GetNews[]> {
        return this.http.get(`/books/showbook`).toPromise().then(res => res.json() as GetNews[]).catch(this.handleError);
    }
    //获取书本的分类
    getBooksType(): Promise<GetBookType[]> {
        return this.http.get(`/books/BookTypeList`).toPromise().then(res=> res.json() as GetBookType[]).catch(this.handleError);
    }

    getBookCList(id: string): Promise<GetBookList[]> {
        return this.http.get(`/books/getZlist`, id).toPromise().then(res => res.json() as GetBookList[]).catch(this.handleError);
    }

    // getBookCList(id: string): Observable<GetBookList[]> {
    //     let params = new URLSearchParams();
    //     if(id) {
    //         params.append('id', id)
    //     }
    //     return this.http.post(`/books/getZlist`, params).map((res:Response) => {
    //         console.info(res);
    //         return res.json()
    //     }).catch((err: any) => Observable.throw(err || 'Server error'));
    // }


    //错误处理
    private handleError(error: any): Promise<any> {
        console.info('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
