"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var cache = {};
exports.memoize = function (target, propName, desc) {
    if (desc.value) {
        var originalMethod_1 = desc.value;
        console.log(target);
        console.log(propName);
        console.log(desc);
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var params = args.map(function (x) { return JSON.stringify(x); }).join();
            var cacheKey = propName + "(" + params + ")";
            !_this[cacheKey] &&
                (console.log("such cacheKey doesn't exist"),
                    _this[cacheKey] = originalMethod_1.apply(_this, args));
            return _this[cacheKey];
        };
        desc.value = fn;
        return desc;
    }
    else {
        throw "decorato can be used only for methods";
    }
};
//# sourceMappingURL=memoize.js.map