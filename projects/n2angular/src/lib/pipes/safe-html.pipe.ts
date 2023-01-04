import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { CacheablePipe } from "./__cache.pipe";

@Pipe({
  name: "safeHtml",
})
export class _SafeHtmlPipe extends CacheablePipe implements PipeTransform {
  constructor(private santizer: DomSanitizer) {
    super();
  }

  transformFn(input: any, ...args: any[]) {
    return this.santizer.bypassSecurityTrustHtml(input);
  }

  transform(value: any, ...args: any[]) {
    return this.doTransform(value, args);
  }
}
