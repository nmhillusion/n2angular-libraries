export abstract class CacheablePipe {
  private cacheMap = new Map();

  abstract transformFn(input: any, ...args: any[]): any;

  doTransform(input: any, ...args: any[]): any {
    if (this.cacheMap.has(input)) {
      return this.cacheMap.get(input);
    } else {      
      const transformedVal = this.transformFn(input, ...args);
      this.cacheMap.set(input, transformedVal);
      return transformedVal;
    }
  }
}
