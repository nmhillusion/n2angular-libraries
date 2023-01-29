import { NgModule } from "@angular/core";

import { N2CommonModule } from "@n2/modules/n2-common.module";
import { _N2LayoutComponent } from "./n2layout.component";

@NgModule({
  declarations: [_N2LayoutComponent],
  imports: [N2CommonModule],
  exports: [_N2LayoutComponent],
})
export class N2LayoutModule {}
