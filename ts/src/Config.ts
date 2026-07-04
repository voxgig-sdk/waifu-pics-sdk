
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.waifu.pics',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      image: {
      },

    }
  }


  entity = {
    "image": {
      "fields": [
        {
          "active": true,
          "name": "file",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 0
        }
      ],
      "name": "image",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "trap",
                    "kind": "param",
                    "name": "category",
                    "orig": "category",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "nsfw",
                    "kind": "param",
                    "name": "type",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "method": "GET",
              "orig": "/many/{type}/{category}",
              "parts": [
                "many",
                "{type}",
                "{category}"
              ],
              "select": {
                "exist": [
                  "category",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": [
          [
            "many"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

