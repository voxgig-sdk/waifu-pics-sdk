# WaifuPics SDK configuration

module WaifuPicsConfig
  def self.make_config
    {
      "main" => {
        "name" => "WaifuPics",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.waifu.pics",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "image" => {},
        },
      },
      "entity" => {
        "image" => {
          "fields" => [
            {
              "active" => true,
              "name" => "file",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 0,
            },
          ],
          "name" => "image",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "trap",
                        "kind" => "param",
                        "name" => "category",
                        "orig" => "category",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 0,
                      },
                      {
                        "active" => true,
                        "example" => "nsfw",
                        "kind" => "param",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "index$" => 1,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/many/{type}/{category}",
                  "parts" => [
                    "many",
                    "{type}",
                    "{category}",
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "many",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WaifuPicsFeatures.make_feature(name)
  end
end
