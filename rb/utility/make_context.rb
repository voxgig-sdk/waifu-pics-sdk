# WaifuPics SDK utility: make_context
require_relative '../core/context'
module WaifuPicsUtilities
  MakeContext = ->(ctxmap, basectx) {
    WaifuPicsContext.new(ctxmap, basectx)
  }
end
