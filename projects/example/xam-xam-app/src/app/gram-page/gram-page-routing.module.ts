import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GramPageComponent } from "./gram-page.component";

const routes: Routes = [
  {
    path: "",
    component: GramPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GramPageRoutingModule {}
