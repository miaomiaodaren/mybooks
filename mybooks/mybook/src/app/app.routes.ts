import { RouterModule } from '@angular/router' ;

import { BookcComponent } from './bookc/bookc.component';


// Routes是路由配置数组。每个都有以下属性：
//     path 是使用路由匹配器DSL的字符串。
//     pathMatch 是指定匹配策略的字符串。
//     matcher定义了路径匹配并取代自定义策略path和pathMatch。有关详细信息，请参阅UrlMatcher。
//     component 是组件类型。
//     redirectTo 是将替换当前匹配段的url片段。
//     outlet 是组件应放入的插座的名称。
//     canActivate是用于查找CanActivate处理程序的DI令牌数组。查看 CanActivate更多信息。
//     canActivateChild是用于查找CanActivateChild处理程序的DI令牌数组。查看 CanActivateChild更多信息。
//     canDeactivate是用于查找CanDeactivate处理程序的DI令牌数组。查看 CanDeactivate更多信息。
//     canLoad是用于查找CanDeactivate处理程序的DI令牌数组。查看 CanLoad更多信息。
//     data是提供给组件via的附加数据ActivatedRoute。
//     resolve是用于查找数据解析器的DI令牌的映射。查看Resolve更多信息。
//     children 是子路由定义的数组。
//     loadChildren是对延迟加载子路由的引用。
export const appRouter = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        //延迟加载,后面属性为模块的路径加#模块名称
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'bookc/:id',
        component: BookcComponent
    }
]