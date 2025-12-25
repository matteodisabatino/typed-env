"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOptions = void 0;
const runtypes_1 = require("runtypes");
exports.CheckOptions = (0, runtypes_1.Object)({
    allowUndefined: runtypes_1.Boolean.undefinedable().optional(),
    allowNaN: runtypes_1.Boolean.undefinedable().optional(),
    allowAnyPrototype: runtypes_1.Boolean.undefinedable().optional(),
    of: runtypes_1.String.undefinedable().optional()
});
//# sourceMappingURL=data_types.js.map