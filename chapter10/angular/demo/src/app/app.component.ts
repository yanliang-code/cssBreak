import { Component } from "@angular/core";

// 真正的组件格式
// selector：用于获取dom；templateUrl：页面模板；styleUrls：样式；
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
// 组件成员，template中有使用此属性
export class AppComponent {
  title = "app";
}
