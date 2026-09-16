

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WaifuPicsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WAIFU_PICS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WAIFU_PICS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WaifuPicsSDK.test()
    const ent = testsdk.Image()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WAIFU_PICS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"files","req":true,"short":"Array of image URLs","type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id","parts":["type","category"],"sep":"/"},"name":"image","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"trap","kind":"param","name":"category","orig":"category","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"nsfw","kind":"param","name":"type","orig":"type","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /many/{type}/{category}","json":"{\"operationId\":\"getManyPics\",\"parameters\":[{\"description\":\"The genre type of images to retrieve (e.g., 'sfw' for safe-for-work or 'nsfw' for not-safe-for-work)\",\"in\":\"path\",\"name\":\"type\",\"required\":true,\"schema\":{\"enum\":[\"sfw\",\"nsfw\"],\"example\":\"nsfw\",\"type\":\"string\"}},{\"description\":\"The category or tag of images to retrieve (e.g., 'waifu', 'neko', 'trap', etc.)\",\"in\":\"path\",\"name\":\"category\",\"required\":true,\"schema\":{\"example\":\"trap\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"files\":[\"https://cdn.waifu.pics/image1.jpg\",\"https://cdn.waifu.pics/image2.jpg\",\"https://cdn.waifu.pics/image3.jpg\"]},\"schema\":{\"properties\":{\"files\":{\"description\":\"Array of image URLs\",\"items\":{\"example\":\"https://cdn.waifu.pics/image123.jpg\",\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"files\"],\"type\":\"object\"}}},\"description\":\"Successful response with multiple image URLs\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid type or category\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid type or category\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"No images found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"No images found for the specified type and category\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/many/{type}/{category}","segments":[{"lit":"many"},{"var":"type"},{"var":"category"}],"select":{"exist":["category","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["many"]]},"key$":"image","name__orig":"image","Name":"Image","name_":"image","name-":"image","NAME":"IMAGE","index$":0}, {"active":true,"entity":"image","key$":"BasicImageFlow","kind":"basic","name":"BasicImageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"image_ref01","srcdatavar":"image_ref01_data","suffix":"_dt0"},"match":{"id":"image01","type":"type01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_ref01"}}],"index$":0}]}, 'Image')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_ref01_data = Object.values(setup.data.existing.image)[0] as any

    // LOAD
    const image_ref01_ent = client.Image()
    const image_ref01_match_dt0: any = {}
    image_ref01_match_dt0.id = image_ref01_data.id
    const image_ref01_data_dt0 = (await image_ref01_ent.load(image_ref01_match_dt0)).data()
    assert(image_ref01_data_dt0.id === image_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image/ImageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WaifuPicsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['image01','image02','image03','many01','many02','many03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WAIFU_PICS_TEST_IMAGE_ENTID': idmap,
    'WAIFU_PICS_TEST_LIVE': 'FALSE',
    'WAIFU_PICS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WAIFU_PICS_TEST_IMAGE_ENTID']

  const live = 'TRUE' === env.WAIFU_PICS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WAIFU_PICS_TEST_IMAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WaifuPicsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.WAIFU_PICS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
