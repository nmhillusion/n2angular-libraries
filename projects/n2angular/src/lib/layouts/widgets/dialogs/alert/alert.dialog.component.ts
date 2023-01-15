import { Component, Input, OnInit } from "@angular/core";

import { throwIfMissingAttribute } from "../../../../validators";

@Component({
  selector: "n2-alert-dialog",
  styleUrls: ["./alert.dialog.scss"],
  templateUrl: "./alert.dialog.html",
})
export class N2AlertDialog implements OnInit {
  @Input()
  message!: string;

  ngOnInit() {
    console.log("on-init - alertDialog");

    throwIfMissingAttribute(this, "message");
  }
}
