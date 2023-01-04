import { NgModule } from "@angular/core";
import { _TruncTextPipe } from "./trunc.pipe";

const commonModules = [_TruncTextPipe];

@NgModule({
  declarations: commonModules,
  imports: [],
  exports: commonModules,
  providers: [],
})
export class N2TextPipeModule {}
