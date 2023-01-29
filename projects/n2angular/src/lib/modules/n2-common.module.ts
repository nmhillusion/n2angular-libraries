import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { N2MaterialModule } from "./n2-material.module";
import { N2PipeModule } from "@n2/pipes/pipe.module";
import { N2WidgetModule } from "@n2/layouts/widgets/widgets.module";

const commonModules = [
  CommonModule,
  FormsModule,
  N2MaterialModule,
  N2PipeModule,
  N2WidgetModule,
];

@NgModule({
  declarations: [],
  imports: commonModules,
  exports: commonModules,
  providers: [],
})
export class N2CommonModule {}
