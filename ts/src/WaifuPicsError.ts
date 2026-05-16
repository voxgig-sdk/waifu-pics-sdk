
import { Context } from './Context'


class WaifuPicsError extends Error {

  isWaifuPicsError = true

  sdk = 'WaifuPics'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WaifuPicsError
}

