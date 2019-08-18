const cache = {};

//can be used for pure fn
export const memoize = (
    target: object,
    propName: string,
    desc: PropertyDescriptor) => {
    if (desc.value) {
        const originalMethod = desc.value;

        console.log(target);
        console.log(propName);
        console.log(desc);

        let fn = (...args) => {
            const params = args.map(x => JSON.stringify(x)).join();
            const cacheKey = `${propName}(${params})`;
            !this[cacheKey] &&
                (console.log("such cacheKey doesn't exist"),
                    this[cacheKey] = originalMethod.apply(this, args));

            return this[cacheKey];
        };

        desc.value = fn;
        return desc;
    } else {
        throw "decorato can be used only for methods";
    }
}