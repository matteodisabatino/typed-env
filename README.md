# typed-env

`typed-env` adds a layer over [@humanwhocodes/env](https://www.npmjs.com/package/@humanwhocodes/env) that allows you to convert environment variables into various JavaScript types.

The methods are in some cases identical and in some others very similar to those of `@humanwhocodes/env`, but the way they work is the same. So, please, refer to the documentation of `@humanwhocodes/env` to know more about.

The differences between `typed-env` and `@humanwhocodes/env` are basically four:

1. `typed-env` is written in TypeScript following the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html). Have you found something not compliant with? Please provide a pull request.
2. `typed-env` allows you to convert environment variables into several different JavaScript types. The list of the supported and unsupported types and the way to convert is shown below.
3. `typed-env` checks the type of every input of every function via [Runtypes](https://www.npmjs.com/package/runtypes): if there is a mismatch between the input expected type and the given one, an exception is thrown.
4. `typed-env` throws an exception if is not possible to convert the given input into the wanted type.

## Methods

```typescript
constructor (source_?: object) // same as @humanwhocodes/env
static get version (): string // new: simply returns module version
get (key_: string, toType_: string = 'string', defaultValue_?: unknown): any
has (key_: string): boolean // same as @humanwhocodes/env
first (keys_: string[], toType_: string = 'string', defaultValue_?: unknown): any
require (key_: string, toType_: string = 'string'): any
requireFirst (keys_: string[], toType_: string = 'string'): any
get exists (): any // same as @humanwhocodes/env
get required (): any // same as @humanwhocodes/env
```

## JavaScript types

This is the list of supported and unsupported JavaScript types according to the official [JavaScript standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

| Type | Supported? | If not, why? |
| - | - | - |
| Infinity | ❌ | It's actually a number, so you can convert the string "Infinity" into number to get this. |
| NaN | ❌ | It's actually a number, but it's considered as an invalid number value unless is passed as default value. Please read below to know more about. |
| undefined | ❌ | It's the value assumed by environment variables if they are unset and no default value is provided, but you cannot convert variables into undefined. |
| globalThis | ❌ | It's a special object defined by JavaScript runtime environment. Unable to covert into this. |
| eval() | ❌ | It's a global function. Unable to covert into this. |
| isFinite() | ❌ | It's a global function. Unable to covert into this. |
| isNaN() | ❌ | It's a global function. Unable to covert into this. |
| parseFloat() | ❌ | It's a global function. Unable to covert into this. |
| parseInt() | ❌ | It's a global function. Unable to covert into this. |
| encodeURI() | ❌ | It's a global function. Unable to covert into this. |
| encodeURIComponent() | ❌ | It's a global function. Unable to covert into this. |
| decodeURI() | ❌ | It's a global function. Unable to covert into this. |
| decodeURIComponent() | ❌ | It's a global function. Unable to covert into this. |
| escape() *(deprecated)* | ❌ | It's a global function. Unable to covert into this. |
| unescape() *(deprecated)* | ❌ | It's a global function. Unable to covert into this. |
| Object | ✅ | |
| Function | ✅ | |
| Boolean | ✅ | |
| Symbol | ✅ | |
| Error | ❌ | It's an error class, why convert a variable into error? |
| AggregateError | ❌ | It's an error class, why convert a variable into error? |
| EvalError | ❌ | It's an error class, why convert a variable into error? |
| InternalError *(non standard)* | ❌ | It's an error class, why convert a variable into error? |
| RangeError | ❌ | It's an error class, why convert a variable into error? |
| ReferenceError | ❌ | It's an error class, why convert a variable into error? |
| SyntaxError | ❌ | It's an error class, why convert a variable into error? |
| TypeError | ❌ | It's an error class, why convert a variable into error? |
| URIError | ❌ | It's an error class, why convert a variable into error? |
| Number | ✅ | |
| BigInt | ✅ | |
| Math | ❌ | It's a class of static methods. Unable to covert into this. |
| Date | ✅ | |
| String | ✅ | |
| RegExp | ✅ | |
| Array | ✅ | |
| Int8Array | ✅ | |
| Uint8Array | ✅ | |
| Uint8ClampedArray | ✅ | |
| Int16Array | ✅ | |
| Uint16Array | ✅ | |
| Int32Array | ✅ | |
| Uint32Array | ✅ | |
| Float32Array | ✅ | |
| Float64Array | ✅ | |
| BigInt64Array | ✅ | |
| BigUint64Array | ✅ | |
| Map | ✅ | |
| Set | ✅ | |
| WeakMap | ❌ | It's required that keys must be Objects, how to do that? |
| WeakSet | ❌ | It's required that keys must be Objects, how to do that? |
| ArrayBuffer | ❌ | Not needed since you can simply convert environment variables into Typed Arrays. |
| SharedArrayBuffer | ❌ | Not needed since you can simply convert environment variables into Typed Arrays. |
| Atomics | ❌ | It's a class of static methods. Unable to covert into this. |
| DataView | ❌ | Not needed since you can simply convert environment variables into Typed Arrays. |
| JSON | ❌ | A JSON is actually a string, so you can set an environment variable to a JSON and simply covert it to string (or not convert it, if you prefer). |
| Promise | ❌ | Not needed since you can simply convert environment variables into Functions. |
| Generator | ❌ | Not needed since you can simply convert environment variables into Functions. |
| GeneratorFunction | ❌ | Not needed since you can simply convert environment variables into Functions. |
| AsyncFunction | ❌ | Not needed since you can simply convert environment variables into Functions. |
| AsyncGenerator | ❌ | Not needed since you can simply convert environment variables into Functions. |
| AsyncGeneratorFunction | ❌ | Not needed since you can simply convert environment variables into Functions. |
| Reflect | ❌ | It's a class of static methods. Unable to covert into this. |
| Proxy | ❌ | A Proxy - as name suggests - is a proxy to an existing Object, how to do that? |
| Intl | ❌ | It's a class of various constructors and static methods. Unable to covert into this. |
| Intl.Collator | ❌ | It's a class that offers methods for string comparison. Unable to covert into this. |
| Intl.DateTimeFormat | ❌ | It's a class that offers methods for date formatting. Unable to covert into this. |
| Intl.ListFormat | ❌ | It's a class that offers methods for array formatting. Unable to covert into this. |
| Intl.NumberFormat | ❌ | It's a class that offers methods for number formatting. Unable to covert into this. |
| Intl.PluralRules | ❌ | It's a class that offers methods for plural rules. Unable to covert into this. |
| Intl.RelativeTimeFormat | ❌ | It's a class that offers methods for time formatting. Unable to covert into this. |
| Intl.Locale | ❌ | It's a class that offers methods for easy manipulation of Unicode locales. Unable to covert into this. |

Do you thing something can be implemented? Please provide a pull request.

## How to convert?

In the above examples method `get()` will be used. Please refer to `@humanwhocodes/env` documentation to know how it works and to know - as well - how `first()`, `require()` and `requireFirst()` work.

Please note that in every example the argument `toType_` will always appear in lower case. Anyway, this argument is case insensitive: if - for instance - you pass "array", or "ARRAY", or "Array", or "arRay", or any other combination of upper case and lower case letters that form the word "array", you'll always get the environment variable converted into Array (if the wanted environment variable can be converted into Array).

### To Object

To convert into Object, JSON must be provided:

```shell
TO_OBJECT="{\"key1\":\"val1\",\"key2\":42,\"key3\":{\"key4\":[1,2,3,4]}}" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myObject = env.get('TO_OBJECT', 'object')

console.log(myObject.key2) // <-- this will print 42
```

### To Function

To convert into Function, stringified function must be provided:

```shell
TO_FUNCTION="x => x ** 2" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myFunction = env.get('TO_FUNCTION', 'function')
const squared = myFunction(9)

console.log(squared) // <-- this will print 81
```

#### Please pay attention

For conversion into Functions the built-in object [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) is used, however eval() is known to be problematic since statement is directly executed and this exposes the application to security risks. So, please, use this conversion with caution.

Moreover, please note that only [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are supported. Have you got a solution to support classic functions too? Please provide a pull request.

### To Boolean

To convert into Boolean, either string "true" or string "false" must be provided:

```shell
TO_BOOLEAN="false" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myBoolean = env.get('TO_BOOLEAN', 'boolean')

console.log(myBoolean) // <-- this will print false
```

#### Please pay attention

Only strings "true" and "false" are considered as valid convertible Boolean values. If you try to pass "0", "no", "1", "yes" and - in general - any other value that is neither "true" nor "false", an exception will be thrown.

### To Symbol

To convert into Symbol, any string can be provided:

```shell
TO_SYMBOL_1="example" TO_SYMBOL_2="{\"key1\":\"prop1\"}" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const mySymbol1 = env.get('TO_SYMBOL_1', 'symbol')
const mySymbol2 = env.get('TO_SYMBOL_2', 'symbol')

console.log(mySymbol1) // <-- this will print Symbol(example)
console.log(mySymbol2) // <-- this will print Symbol({"key1":"prop1"})
```

### To Number

To convert into Number, stringified number must be provided:

```shell
TO_NUMBER_1="Infinity" TO_NUMBER_2="8.1" TO_NUMBER_3="42" TO_NUMBER_4="test" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myNumber1 = env.get('TO_NUMBER_1', 'number')
const myNumber2 = env.get('TO_NUMBER_2', 'number')
const myNumber3 = env.get('TO_NUMBER_3', 'number')

console.log(myNumber1) // <-- this will print Infinity
console.log(myNumber1) // <-- this will print 8.1
console.log(myNumber3) // <-- this will print 42

const myNumber4 = env.get('TO_NUMBER_4', 'number') // <-- this will throw an exception
```

#### Please pay attention

[Number() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) doesn't throw an exception if the given value cannot be converted into number, it simply returns [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) because standard IEEE 754 requires it:

```javascript
console.log(Number('this is a string')) // <-- this will print NaN and no exception will be thrown
```

The fact is that NaN is actually... a number:

```javascript
console.log(typeof NaN) // <-- this will print number
```

So now the question is, how can I know if the conversion into NaN is intentional? The answer is I cannot.

That's why I decided to consider NaN as an invalid number value: if the conversion into Number results in NaN, an exception will be thrown.

However, NaN is considered valid if passed as default value:

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myVariable = env.get('MY_ENV_VAR', 'number', NaN)

// What will happen here will depend on the following cases:
// 1. MY_ENV_VAR is set:
//   1.1 its converted value is not NaN --> myVariable will assume the converted value
//   1.1 its converted value is NaN --> an exception will be thrown
// 2. MY_ENV_VAR is unset --> myVariable will assume the value NaN
```

Why is NaN considered valid in here? Because - as mentioned - NaN is a number and the default value is decided by you. In other words, the choice to assign NaN to a variable, in this case, is per sure intentional and there is no reason to me to throw an exception.

### To BigInt

To convert into BigInt, stringified integer must be provided:

```shell
TO_BIG_INT="100" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myBigInt = env.get('TO_BIG_INT', 'bigint')

console.log(myBigInt) // <-- this will print 100n
```

### To Date

To convert into Date, either a stringified number or a date string must be provided:

```shell
TO_DATE_1="946681200000" TO_DATE_2="2000-01-31T23:00:00.000Z" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myDate1 = env.get('TO_DATE_1', 'date')
const myDate2 = env.get('TO_DATE_2', 'date')

console.log(myDate1.toISOString()) // <-- this will print 1999-12-31T23:00:00.000Z (ISO String of January 1st 2000)
console.log(myDate2.getTime()) // <-- this will print 949359600000 (Timestamp of February 1st 2000)
```

### To String

To convert into String, any string can be provided (this actually means to not convert the environment variable):

```shell
TO_STRING_1="example" TO_STRING_2="test" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myString1 = env.get('TO_STRING_1', 'string')
const myString2 = env.get('TO_STRING_2') // please note that default value for
                                         // argument ToType_ is "string": if
                                         // you want to convert an environment
                                         // variable into a string, you can
                                         // omit it

console.log(myString1) // <-- this will print example
console.log(myString1) // <-- this will print test
```

### To RegExp

To convert into RegExp, stringified regular expressions must be provided:

```shell
TO_REG_EXP="(?:10|100|1000)" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myRegExp = env.get('TO_REG_EXP', 'regexp')

console.log(myRegExp) // <-- this will print /(?:10|100|1000)/
```

### To Array

To convert into Array, stringified array must be provided:

```shell
TO_ARRAY="[1,2,3,4]" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myArray = env.get('TO_ARRAY', 'array')

console.log(myArray[2]) // <-- this will print 3
```

### To Typed Arrays (Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array)

To convert into Typed Arrays, stringified array of numbers must be provided (Float64Array will be used in the example, but all other cases are equivalent):

```shell
TO_FLOAT_64_ARRAY="[11.99,2,3.0002,4.2]" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myFloat64Array = env.get('TO_FLOAT_64_ARRAY', 'float64array')

console.log(myFloat64Array[1]) // <-- this will print 11.99
```

#### Please pay attention

Typed Arrays are serializable objects, however this serialization cannot be used to construct them:

```javascript
const myFloat64ArrayToString = myFloat64Array.toString()
const JSONStringifiedMyFloat64Array = JSON.stringify(myFloat64Array)
console.log(myFloat64ArrayToString) // <-- this will print 11.99,2,3.0002,4.2
console.log(JSONStringifiedMyFloat64Array) // <-- this will print {"0":11.99,"1":2,"2":3.0002,"3":4.2}
```

None of the two aforementioned stringifications can be used to construct a Typed Array:

```javascript
const mySecondFloat64Array = new Float64Array(myFloat64ArrayToString)
const myThirdFloat64Array = new Float64Array(JSONStringifiedMyFloat64Array)
console.log(JSON.stringify(mySecondFloat64Array)) // <-- this will print {}
console.log(JSON.stringify(myThirdFloat64Array)) // <-- this will print {}
```

That's why I made the choice of use stringified array of numbers to constructor Typed Arrays.

Please note that after the conversion into Array and before the construction of a Typed Array, is checked that all elements of the array are numbers. If not, an exception is thrown:

```shell
TO_INT_16_ARRAY="[40,\"foo\"]" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myInt16Array = env.get('TO_INT_16_ARRAY', 'int16array')
// the above line will throw an exception: "foo" that is the second element of
// the provided array is not a number
```

### To Map

To convert into Map, JSON must be provided:

```shell
TO_MAP="{\"hello\":\"world\"}" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myMap = env.get('TO_MAP', 'map')

console.log(myMap.get('hello')) // <-- this will print world
```

#### Please pay attention

Maps are not serializable objects:

```javascript
const myMap = new Map([['key1', 'val1'],['key2','val2']])
console.log(myMap.toString()) // <-- this will print [object Map]
console.log(JSON.stringify(myMap)) // <-- this will print {}
```

But since [Map() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) requires array of arrays, it's natural to use Objects - in conjunction with method [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) - to construct Maps. Any kind of Object can be provided, Arrays too.

### To Set

To convert into Set, stringified array must be provided:

```shell
TO_SET="[\"entry1\",\"entry2\",\"entry3\"]" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const mySet = env.get('TO_SET', 'set')

console.log(mySet.has('entry2')) // <-- this will print true
console.log(mySet.has('entryX')) // <-- this will print false
```

#### Please pay attention

Sets are not serializable object, as well as Maps:

```javascript
const mySet = new Set(['val1','val2','val3'])
console.log(mySet.toString()) // <-- this will print [object Set]
console.log(JSON.stringify(mySet)) // <-- this will print {}
```

But [Set() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set) requires a "simple array" and that's why an array is required to construct Sets.

### What about default values?

Default values must comply with the wanted conversion, otherwise an exception is thrown:

```shell
TO_ARRAY="[1,2,3,4]" TO_FUNCTION="x => x ** 2" TO_NUMBER="10" node my_script.js
```

```javascript
const { TypedEnv } = require('@matteodisabatino/typed-env')

const env = new TypedEnv()

const myArray = env.get('TO_ARRAY', 'array', [])
// myArray will assume [1,2,3,4] as value because TO_ARRAY is set and it's
// convertable to Array
const myFunction = env.get('TO_FUNCTION', 'function', () => {})
// myFunction will assume x => x ** 2 as value because TO_FUNCTION is set and
// it's convertable to Function
const myNumber = env.get('TO_NUMBER', 'number', Infinity)
// myNumber will assume 10 as value because TO_NUMBER is set and it's
// convertable to Number
const myObject = env.get('TO_OBJECT', 'object', {})
// myObject will assume {} as value because TO_OBJECT is not set

const myWrongConversion = env.get('TO_FUNCTION', 'function', { key1: 'value1' })
// The above line will throw an exception because { key1: 'value1' } is not a
// function. It doesn't matter if the environment variable is set or not: the
// default value always must comply with the wanted conversion
```

### What about default exists() and required()?

These are [getter methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and no argument can be passed. In other words, these methods work exactly as the ones of `@humanwhocodes/env` and are the only two methods that doesn't allow the conversion of environment variables: they always return environment variables as strings.

Have you got a solution for this? Please provide a pull request.
