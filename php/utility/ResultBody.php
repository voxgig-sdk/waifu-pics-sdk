<?php
declare(strict_types=1);

// WaifuPics SDK utility: result_body

class WaifuPicsResultBody
{
    public static function call(WaifuPicsContext $ctx): ?WaifuPicsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
