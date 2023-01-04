import { Pipe, PipeTransform } from "@angular/core";
import { CacheablePipe } from "./__cache.pipe";

@Pipe({
  name: "ignoreChar",
})
export class _IgnoreCharacterPipe extends CacheablePipe implements PipeTransform {
  constructor() {
    super();
  }

  transformFn(input: any, ...args: any[]) {
    const transformed = String(input)
      .split("")
      .filter((c) => !args.includes(c))
      .join("");

    return transformed;
  }

  transform(value: any, ...args: any[]) {
    return this.doTransform(value, ...args);
  }
}
