import { NgModule } from "@angular/core";
import { N2CommonModule, N2LayoutModule } from "@nmhillusion/n2angular";

import { DemoPageRoutingModule } from "./demo-page-routing.module";
import { DemoPageComponent } from "./demo-page.component";

@NgModule({
  declarations: [DemoPageComponent],
  imports: [N2CommonModule, DemoPageRoutingModule, N2LayoutModule],
})
export class DemoPageModule {}
