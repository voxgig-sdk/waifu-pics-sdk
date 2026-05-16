
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WaifuPicsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WaifuPicsSDK.test()
    equal(null !== testsdk, true)
  })

})
