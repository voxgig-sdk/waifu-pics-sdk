
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


  main = {
    name: 'WaifuPics',
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

