import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { N2MaterialModule } from "./n2-material.module";
import { N2PipeModule } from "../pipes/pipe.module";

const commonModules = [
  CommonModule,
  FormsModule,
  N2MaterialModule,
  N2PipeModule,
];

@NgModule({
  declarations: [],
  imports: commonModules,
  exports: commonModules,
  providers: [],
})
export class N2CommonModule {}
