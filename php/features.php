<?php
declare(strict_types=1);

// WaifuPics SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WaifuPicsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WaifuPicsBaseFeature();
            case "test":
                return new WaifuPicsTestFeature();
            default:
                return new WaifuPicsBaseFeature();
        }
    }
}
