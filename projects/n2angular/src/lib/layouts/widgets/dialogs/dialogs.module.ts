import { NgModule } from "@angular/core";
import { N2AlertDialog } from "./alert/alert.dialog.component";

const _components = [N2AlertDialog];

@NgModule({
  declarations: _components,
  exports: _components,
})
export class N2DialogModule {}
