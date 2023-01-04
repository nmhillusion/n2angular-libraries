import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "thousandsSeperator",
})
export class _ThousandsSeperatorPipe implements PipeTransform {
  constructor() {}

  transform(value: any, ...args: any[]) {
    return this.doTransform(value);
  }

  doTransform(value: any) {
    const num = Number(value);
    if (!Number.isInteger(num)) {
      return value;
    }

    let numString = String(num);
    let outNumString = "";
    while (0 < numString.length) {
      if (3 < numString.length) {
        const part = numString.substring(numString.length - 3);
        if (0 == outNumString.length) {
          outNumString = part;
        } else {
          outNumString = `${part},${outNumString}`;
        }
        numString = numString.substring(0, numString.length - 3);
      } else {
        outNumString = `${numString},${outNumString}`;
        numString = "";
      }
    }
    // console.log({ outNumString });

    return outNumString;
  }
}
