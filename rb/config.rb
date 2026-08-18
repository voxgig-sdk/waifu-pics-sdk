# WaifuPics SDK configuration

module WaifuPicsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "name" => "files",
              "req" => true,
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "image",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "trap",
                        "kind" => "param",
                        "name" => "category",
                        "orig" => "category",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "nsfw",
                        "kind" => "param",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
