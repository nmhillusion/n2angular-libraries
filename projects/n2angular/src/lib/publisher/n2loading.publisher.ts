import { Injectable } from "@angular/core";

export enum LoadingEvent {
  START = 1,
  END = 2,
}

export interface LoadingChangeListener {
  onChange(currentState: LoadingEvent, previousState: LoadingEvent): void;
}

@Injectable({
  providedIn: "root",
})
export class N2LoadingPublisher {
  static readonly MAX_TIMEOUT: number | undefined = 120_000;
  #changeListener: LoadingChangeListener[] = [];
  #loadingRequest: number = 0;
  #cancellerTimer: number | null = null;

  registerChangeListener(listener: LoadingChangeListener) {
    if (listener) {
      this.#changeListener.push(listener);
    }
  }

  emitStart() {
    this.handleEvent(true);

    if (!this.#cancellerTimer) {
      this.#cancellerTimer = window.setTimeout(() => {
        this.#loadingRequest = 0;
        this.handleEvent(false);
      }, N2LoadingPublisher.MAX_TIMEOUT);
    }
  }

  emitEnd() {
    this.handleEvent(false);
  }

  private handleEvent(isStart: boolean) {
    const previousState = this.getLoadingStatusFromLoadingRequest(
      this.#loadingRequest
    );

    if (isStart) {
      this.#loadingRequest += 1;
    } else {
      this.#loadingRequest -= 1;
    }

    const currentState = this.getLoadingStatusFromLoadingRequest(
      this.#loadingRequest
    );

    if (previousState !== currentState) {
      this.triggerChangeStateEvent(currentState, previousState);
    }
  }

  private getLoadingStatusFromLoadingRequest(loadingRequest: number) {
    return loadingRequest > 0 ? LoadingEvent.START : LoadingEvent.END;
  }

  private triggerChangeStateEvent(
    currentState: LoadingEvent,
    previousState: LoadingEvent
  ) {
    console.log("triggerChangeStateEvent", {
      currentState,
      previousState,
    });

    if (LoadingEvent.END == currentState) {
      if (this.#cancellerTimer) {
        clearTimeout(this.#cancellerTimer);
      }
      this.#cancellerTimer = null;
    }

    if (this.#changeListener) {
      for (const listener_ of this.#changeListener) {
        listener_.onChange(currentState, previousState);
      }
    }
  }
}
