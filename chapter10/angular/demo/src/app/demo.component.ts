import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
  /* 
    指定样式如何封装 
        Emulated模拟(模拟Scoped CSS)
            此时，所有组件的style都在head中，但css选择器名会加属性，从而保证唯一性
            不支持 :host 写法
        Native原生（ShadowDOM）
            此种方式不会对css选择器的名称做改变，因为shdowDOM本身就是封闭的（style就在shadowDOM内定义）
        None不做任何额外处理
            此时，所有组件的style都在head中，css选择器也不会特殊处理，来保证唯一性
    */
  encapsulation: ViewEncapsulation.Emulated,
})
export class DemoComponent {
  message = "I am demo";
}
