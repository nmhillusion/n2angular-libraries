import { NgModule } from "@angular/core";
import { N2DialogModule } from "./dialogs/dialogs.module";

const _modules = [N2DialogModule];

@NgModule({
  imports: _modules,
  exports: _modules,
})
export class N2WidgetModule {}
