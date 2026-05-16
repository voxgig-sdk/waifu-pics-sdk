<?php
declare(strict_types=1);

// WaifuPics SDK utility: prepare_body

class WaifuPicsPrepareBody
{
    public static function call(WaifuPicsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
