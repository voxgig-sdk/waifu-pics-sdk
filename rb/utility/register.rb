# WaifuPics SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WaifuPicsUtility.registrar = ->(u) {
  u.clean = WaifuPicsUtilities::Clean
  u.done = WaifuPicsUtilities::Done
  u.make_error = WaifuPicsUtilities::MakeError
  u.feature_add = WaifuPicsUtilities::FeatureAdd
  u.feature_hook = WaifuPicsUtilities::FeatureHook
  u.feature_init = WaifuPicsUtilities::FeatureInit
  u.fetcher = WaifuPicsUtilities::Fetcher
  u.make_fetch_def = WaifuPicsUtilities::MakeFetchDef
  u.make_context = WaifuPicsUtilities::MakeContext
  u.make_options = WaifuPicsUtilities::MakeOptions
  u.make_request = WaifuPicsUtilities::MakeRequest
  u.make_response = WaifuPicsUtilities::MakeResponse
  u.make_result = WaifuPicsUtilities::MakeResult
  u.make_point = WaifuPicsUtilities::MakePoint
  u.make_spec = WaifuPicsUtilities::MakeSpec
  u.make_url = WaifuPicsUtilities::MakeUrl
  u.param = WaifuPicsUtilities::Param
  u.prepare_auth = WaifuPicsUtilities::PrepareAuth
  u.prepare_body = WaifuPicsUtilities::PrepareBody
  u.prepare_headers = WaifuPicsUtilities::PrepareHeaders
  u.prepare_method = WaifuPicsUtilities::PrepareMethod
  u.prepare_params = WaifuPicsUtilities::PrepareParams
  u.prepare_path = WaifuPicsUtilities::PreparePath
  u.prepare_query = WaifuPicsUtilities::PrepareQuery
  u.result_basic = WaifuPicsUtilities::ResultBasic
  u.result_body = WaifuPicsUtilities::ResultBody
  u.result_headers = WaifuPicsUtilities::ResultHeaders
  u.transform_request = WaifuPicsUtilities::TransformRequest
  u.transform_response = WaifuPicsUtilities::TransformResponse
}
