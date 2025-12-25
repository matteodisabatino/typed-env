import { Env } from '@humanwhocodes/env'

import { is as checkIs } from './libs/check'
import { to as convertTo } from './libs/convert'

import manifest from '../package.json'

const privates = new WeakMap()
class TypedEnvPrivates {
  readonly env: Env
  constructor (env: Env) {
    this.env = env
  }
}

class TypedEnv {
  constructor (source_?: object) {
    const source = checkIs(source_, 'object', { allowUndefined: true })
    const env = new Env(source)
    privates.set(this, new TypedEnvPrivates(env))
  }

  static get version (): string {
    return manifest.version
  }

  get (key_: string, toType_: string = 'string', defaultValue_?: unknown): any {
    const key = checkIs(key_, 'string') as string
    const toType = checkIs(toType_, 'string') as string
    const defaultValue = checkIs(defaultValue_, toType, { allowUndefined: true })
    const { env } = privates.get(this) as { env: Env }
    const val = env.get(key)
    if (typeof val === 'undefined') {
      return defaultValue
    }

    return convertTo(val, toType)
  }

  has (key_: string): boolean {
    const key = checkIs(key_, 'string') as string
    const { env } = privates.get(this) as { env: Env }
    return env.has(key)
  }

  first (keys_: string[], toType_: string = 'string', defaultValue_?: unknown): any {
    const keys = checkIs(keys_, 'array', { of: 'string' }) as string[]
    const toType = checkIs(toType_, 'string') as string
    const defaultValue = checkIs(defaultValue_, toType, { allowUndefined: true })
    const { env } = privates.get(this) as { env: Env }
    const val = env.first(keys)
    if (typeof val === 'undefined') {
      return defaultValue
    }

    return convertTo(val, toType)
  }

  require (key_: string, toType_: string = 'string'): any {
    const key = checkIs(key_, 'string') as string
    const toType = checkIs(toType_, 'string') as string
    const { env } = privates.get(this) as { env: Env }
    const val = env.require(key)
    return convertTo(val, toType)
  }

  requireFirst (keys_: string[], toType_: string = 'string'): any {
    const keys = checkIs(keys_, 'array', { of: 'string' }) as string[]
    const toType = checkIs(toType_, 'string') as string
    const { env } = privates.get(this) as { env: Env }
    const val = env.requireFirst(keys)
    return convertTo(val, toType)
  }

  get exists (): any {
    const { env } = privates.get(this) as { env: Env }
    return env.exists
  }

  get required (): any {
    const { env } = privates.get(this) as { env: Env }
    return env.required
  }
}

export { TypedEnv }
