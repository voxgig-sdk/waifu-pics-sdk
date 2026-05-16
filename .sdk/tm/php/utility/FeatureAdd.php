<?php
declare(strict_types=1);

// WaifuPics SDK utility: feature_add

class WaifuPicsFeatureAdd
{
    public static function call(WaifuPicsContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
