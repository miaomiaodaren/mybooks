import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//定义数据接口
interface Address {
    province: string;
    city: string;
}

//@component 创建组件
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

//创建组件类
export class AppComponent implements OnInit {
    title = 'app';
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {

    }
    address: Address = {
        province: '福建',
        city: '厦门'
    }
}
