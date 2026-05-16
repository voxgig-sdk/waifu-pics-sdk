# WaifuPics SDK exists test

require "minitest/autorun"
require_relative "../WaifuPics_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WaifuPicsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
