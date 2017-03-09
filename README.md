使用[angular-cli](https://github.com/angular/angular-cli)搭建demo项目

分页组件代码：page.html，page.ts

（1）在项目中引入分页组件
```
import { Page }   from './page/page';

declarations: [
    Page
  ],
```
(2)在页面中使用分页组件
```
<!--分页组件参数：pageSize,totalNum,curPage,totalPage-->
<page-template [pageParams]="{pageSize:20,totalNum:100,curPage:1,totalPage:5}" (changeCurPage)="getPageData($event)"></page-template>
```
```
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'demo',
  templateUrl: './demo.html'
})
export class Demo {
  public params; // 保存页面url参数
  public totalNum = 0; // 总数据条数
  public pageSize = 20;// 每页数据条数
  public totalPage = 0;// 总页数
  public curPage = 1;// 当前页码
  constructor(location:Location) {
    let vm = this;
    if (vm.params) {
      vm.params = vm.params.replace('?', '').split('&');
      let theRequest = [];
      for (let i = 0; i < vm.params.length; i++) {
        theRequest[vm.params[i].split("=")[0]] = vm.params[i].split("=")[0] == 'pageNo' ? parseInt(vm.params[i].split("=")[1]) : vm.params[i].split("=")[1];
      }
      vm.params = theRequest;
      if (vm.params['pageNo']) {
        vm.curPage = vm.params['pageNo'];
        //console.log('当前页面', vm.curPage);
      }
    } else {
      vm.params = {};
    }
  }
  getPageData(pageNo) {
    let vm = this;
    vm.curPage = pageNo;
    console.log('触发', pageNo);
  }
}
```
