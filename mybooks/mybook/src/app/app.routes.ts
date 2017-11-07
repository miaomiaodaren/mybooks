import { RouterModule } from '@angular/router' ;

import { BookcComponent } from './bookc/bookc.component';
import { BookvComponent } from './bookv/bookv.component';


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

// 1.this.router.navigate(['user', 1]);
// 以根路由为起点跳转
// 2.this.router.navigate(['user', 1],{relativeTo: route});
// 默认值为根路由，设置后相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute
// 3.this.router.navigate(['user', 1],{ queryParams: { id: 1 } });
// 路由中传参数 /user/1?id=1
// 4.this.router.navigate(['view', 1], { preserveQueryParams: true });
// 默认值为false，设为true，保留之前路由中的查询参数/user?id=1 to /view?id=1
// 5.this.router.navigate(['user', 1],{ fragment: 'top' });
// 路由中锚点跳转 /user/1#top
// 6.this.router.navigate(['/view'], { preserveFragment: true });
// 默认值为false，设为true，保留之前路由中的锚点/user/1#top to /view#top
// 7.this.router.navigate(['/user',1], { skipLocationChange: true });
// 默认值为false，设为true路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效
// 8.this.router.navigate(['/user',1], { replaceUrl: true });
// 未设置时默认为true，设置为false路由不会进行跳转
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
    },
    {
        path: 'bookv/:bookid/:bookzid',
        component: BookvComponent
    },
    {
        path: 'book',                                      //针对在node环境部署的时候，根据book作为路由判断，进入小说页面
        loadChildren: './home/home.module#HomeModule'
    }
]