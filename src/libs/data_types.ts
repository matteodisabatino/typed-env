import {
  Boolean,
  Partial,
  String
} from 'runtypes'

export const CheckOptions = Partial({
  allowUndefined: Boolean,
  allowNaN: Boolean,
  allowAnyPrototype: Boolean,
  of: String
})
