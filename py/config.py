# WaifuPics SDK configuration


def make_config():
    return {
        "main": {
            "name": "WaifuPics",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.waifu.pics",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "image": {},
            },
        },
        "entity": {
      "image": {
        "fields": [
          {
            "name": "file",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "image",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "trap",
                      "kind": "param",
                      "name": "category",
                      "orig": "category",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "nsfw",
                      "kind": "param",
                      "name": "type",
                      "orig": "type",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/many/{type}/{category}",
                "parts": [
                  "many",
                  "{type}",
                  "{category}",
                ],
                "select": {
                  "exist": [
                    "category",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "many",
            ],
          ],
        },
      },
    },
    }
