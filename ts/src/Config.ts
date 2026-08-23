
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WaifuPics',
        slug: "waifu-pics",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.waifu.pics",

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
          "name": "files",
          "req": true,
          "short": "Array of image URLs",
          "type": "`$ARRAY`"
        }
      ],
      "name": "image",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "trap",
                    "kind": "param",
                    "name": "category",
                    "orig": "category",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": "nsfw",
                    "kind": "param",
                    "name": "type",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
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
              }
            }
          ]
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

