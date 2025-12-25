import { Env } from '@humanwhocodes/env'

import { is as checkIs } from './libs/check'
import { to as convertTo } from './libs/convert'

import manifest from '../package.json'

class TypedEnv {
  #env: Env

  constructor (source_?: object) {
    const source = checkIs(source_, 'object', { allowUndefined: true }) as Record<string, string | undefined>
    this.#env = new Env(source)
  }

  static get version () {
    return manifest.version
  }

  get (key_: string, toType_: string = 'string', defaultValue_?: unknown) {
    const key = checkIs(key_, 'string') as string
    const toType = checkIs(toType_, 'string') as string
    const defaultValue = checkIs(defaultValue_, toType, { allowUndefined: true })
    const val = this.#env.get(key)
    if (typeof val === 'undefined') {
      return defaultValue
    }

    return convertTo(val, toType)
  }

  has (key_: string) {
    const key = checkIs(key_, 'string') as string
    return this.#env.has(key)
  }

  first (keys_: string[], toType_: string = 'string', defaultValue_?: unknown) {
    const keys = checkIs(keys_, 'array', { of: 'string' }) as string[]
    const toType = checkIs(toType_, 'string') as string
    const defaultValue = checkIs(defaultValue_, toType, { allowUndefined: true })
    const val = this.#env.first(keys)
    if (typeof val === 'undefined') {
      return defaultValue
    }

    return convertTo(val, toType)
  }

  require (key_: string, toType_: string = 'string') {
    const key = checkIs(key_, 'string') as string
    const toType = checkIs(toType_, 'string') as string
    const val = this.#env.require(key)
    return convertTo(val, toType)
  }

  requireFirst (keys_: string[], toType_: string = 'string') {
    const keys = checkIs(keys_, 'array', { of: 'string' }) as string[]
    const toType = checkIs(toType_, 'string') as string
    const val = this.#env.requireFirst(keys)
    return convertTo(val, toType)
  }

  get exists () {
    return this.#env.exists
  }

  get required () {
    return this.#env.required
  }
}

export { TypedEnv }
