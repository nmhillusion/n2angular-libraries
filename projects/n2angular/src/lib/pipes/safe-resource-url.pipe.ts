import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CacheablePipe } from "./__cache.pipe";

@Pipe({
  name: "safeResourceUrl",
})
export class _SafeResourceUrlPipe
  extends CacheablePipe
  implements PipeTransform {
  private ACCEPTED_RESOURCE_URL_PATTERN = [
    /^https:\/\/(www)?\.youtube.com\/embed\/(.+?)/,
    /data:(.+?);base64,/,
  ];

  constructor(private santizer: DomSanitizer) {
    super();
  }

  transformFn(input: any, ...args: any[]) {
    let accepted = this.ACCEPTED_RESOURCE_URL_PATTERN.some((pattern) =>
      pattern.test(String(input).trim())
    );

    if (accepted) {
      return this.santizer.bypassSecurityTrustResourceUrl(input);
    } else {
      console.error(
        "Does not allow this resource url: ",
        input,
        " ACCEPTED_RESOURCE_URLS: ",
        this.ACCEPTED_RESOURCE_URL_PATTERN
      );
      return null;
    }
  }

  transform(value: any, ...args: any[]) {
    return this.doTransform(value, args);
  }
}
