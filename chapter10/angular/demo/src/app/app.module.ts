import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// 引入组件
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo.component";

@NgModule({
  // 声明组件
  declarations: [AppComponent, DemoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
