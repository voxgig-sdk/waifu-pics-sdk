<?php
declare(strict_types=1);

// WaifuPics SDK utility: result_headers

class WaifuPicsResultHeaders
{
    public static function call(WaifuPicsContext $ctx): ?WaifuPicsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
