import { Input, Pipe, PipeTransform } from "@angular/core";
import { CacheablePipe } from "../__cache.pipe";

@Pipe({
  name: "trunc",
})
export class _TruncTextPipe extends CacheablePipe implements PipeTransform {
  @Input()
  maxLength: string = "";

  constructor() {
    super();
  }

  transformFn(input: any, ...args: any[]) {
    if (args[0] && Number.isInteger(Number.parseInt(args[0]))) {
      let maxLength = Number.parseInt(args[0]);
      let strInput = String(input);

      if (0 < String(maxLength).trim().length && maxLength < strInput.length) {
        strInput = strInput.substring(0, maxLength) + "...";
      }

      return strInput;
    } else {
      return input;
    }
  }

  transform(value: any, ...args: any[]) {
    return this.doTransform(value, args);
  }
}
