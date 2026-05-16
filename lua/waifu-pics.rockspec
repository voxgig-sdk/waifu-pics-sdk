package = "voxgig-sdk-waifu-pics"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/waifu-pics-sdk.git"
}
description = {
  summary = "WaifuPics SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["waifu-pics_sdk"] = "waifu-pics_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
