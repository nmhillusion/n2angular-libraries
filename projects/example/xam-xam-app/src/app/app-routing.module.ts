import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "app",
    component: AppComponent,
  },
  {
    path: "demo",
    loadChildren: () =>
      import("./demo-page/demo-page.module").then((m) => m.DemoPageModule),
  },
  {
    path: "gram",
    loadChildren: () =>
      import("./gram-page/gram-page.module").then((m) => m.GramPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
