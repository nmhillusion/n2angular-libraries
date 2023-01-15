import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";

import { LoadingEvent, N2LoadingPublisher } from "../../publisher";
import { throwIfMissingAttribute } from "../../validators";
import { N2BasePage } from "../../layouts/pages";

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
  handler!: N2BasePage;

  constructor(
    private _loadingPublisher: N2LoadingPublisher,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log("init n2layout");

    throwIfMissingAttribute(this, "handler");

    this._loadingPublisher.registerChangeListener({
      onChange: (currentState, previousState) => {
        const previousLoadingState = this.state.loading;

        this.state.loading = LoadingEvent.START === currentState;

        if (previousLoadingState != this.state.loading) {
          this._cdr.detectChanges();
        }
      },
    });
  }
}
