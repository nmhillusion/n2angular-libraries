import { Component } from "@angular/core";

@Component({
  selector: "demo-page",
  templateUrl: "./demo-page.component.html",
  styleUrls: ["./demo-page.component.scss"],
})
export class DemoPageComponent {
  title = "Demo App";
  content = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur porro aliquam, corporis alias, laborum atque molestiae ullam expedita nisi ut nihil dolorum voluptate distinctio minima a. Optio, nisi consequatur!
  `;
}
