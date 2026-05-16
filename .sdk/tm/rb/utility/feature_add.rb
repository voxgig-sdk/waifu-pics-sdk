# WaifuPics SDK utility: feature_add
module WaifuPicsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
