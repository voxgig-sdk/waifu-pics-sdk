<?php
declare(strict_types=1);

// WaifuPics SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WaifuPicsUtility::setRegistrar(function (WaifuPicsUtility $u): void {
    $u->clean = [WaifuPicsClean::class, 'call'];
    $u->done = [WaifuPicsDone::class, 'call'];
    $u->make_error = [WaifuPicsMakeError::class, 'call'];
    $u->feature_add = [WaifuPicsFeatureAdd::class, 'call'];
    $u->feature_hook = [WaifuPicsFeatureHook::class, 'call'];
    $u->feature_init = [WaifuPicsFeatureInit::class, 'call'];
    $u->fetcher = [WaifuPicsFetcher::class, 'call'];
    $u->make_fetch_def = [WaifuPicsMakeFetchDef::class, 'call'];
    $u->make_context = [WaifuPicsMakeContext::class, 'call'];
    $u->make_options = [WaifuPicsMakeOptions::class, 'call'];
    $u->make_request = [WaifuPicsMakeRequest::class, 'call'];
    $u->make_response = [WaifuPicsMakeResponse::class, 'call'];
    $u->make_result = [WaifuPicsMakeResult::class, 'call'];
    $u->make_point = [WaifuPicsMakePoint::class, 'call'];
    $u->make_spec = [WaifuPicsMakeSpec::class, 'call'];
    $u->make_url = [WaifuPicsMakeUrl::class, 'call'];
    $u->param = [WaifuPicsParam::class, 'call'];
    $u->prepare_auth = [WaifuPicsPrepareAuth::class, 'call'];
    $u->prepare_body = [WaifuPicsPrepareBody::class, 'call'];
    $u->prepare_headers = [WaifuPicsPrepareHeaders::class, 'call'];
    $u->prepare_method = [WaifuPicsPrepareMethod::class, 'call'];
    $u->prepare_params = [WaifuPicsPrepareParams::class, 'call'];
    $u->prepare_path = [WaifuPicsPreparePath::class, 'call'];
    $u->prepare_query = [WaifuPicsPrepareQuery::class, 'call'];
    $u->result_basic = [WaifuPicsResultBasic::class, 'call'];
    $u->result_body = [WaifuPicsResultBody::class, 'call'];
    $u->result_headers = [WaifuPicsResultHeaders::class, 'call'];
    $u->transform_request = [WaifuPicsTransformRequest::class, 'call'];
    $u->transform_response = [WaifuPicsTransformResponse::class, 'call'];
});
