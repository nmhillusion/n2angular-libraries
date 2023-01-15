import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { LoadingEvent, N2LoadingPublisher } from "../../publisher";
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
  handler!: BasePage;

  constructor(
    private _loadingPublisher: N2LoadingPublisher,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log("init n2layout");

    if (!this.handler) {
      throw new Error("missing handler for BasePage");
    }

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
