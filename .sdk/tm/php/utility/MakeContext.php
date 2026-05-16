<?php
declare(strict_types=1);

// WaifuPics SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WaifuPicsMakeContext
{
    public static function call(array $ctxmap, ?WaifuPicsContext $basectx): WaifuPicsContext
    {
        return new WaifuPicsContext($ctxmap, $basectx);
    }
}
