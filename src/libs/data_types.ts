import {
  Boolean,
  Object,
  String
} from 'runtypes'

export const CheckOptions = Object({
  allowUndefined: Boolean.undefinedable().optional(),
  allowNaN: Boolean.undefinedable().optional(),
  allowAnyPrototype: Boolean.undefinedable().optional(),
  of: String.undefinedable().optional()
})
