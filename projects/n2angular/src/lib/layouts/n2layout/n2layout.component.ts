import { Component, Input, OnInit } from "@angular/core";
import { BasePage } from "../pages/base-page";

@Component({
  selector: "n2layout",
  templateUrl: "./n2layout.component.html",
  styleUrls: ["./n2layout.component.scss"],
})
export class _N2LayoutComponent implements OnInit {
  state = {
    loading: true,
  };

  @Input("handler")
  handler: BasePage = new BasePage();

  ngOnInit() {
    console.log("init n2layout");
  }
}
