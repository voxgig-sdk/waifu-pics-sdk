<?php
declare(strict_types=1);

// WaifuPics SDK base feature

class WaifuPicsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WaifuPicsContext $ctx, array $options): void {}
    public function PostConstruct(WaifuPicsContext $ctx): void {}
    public function PostConstructEntity(WaifuPicsContext $ctx): void {}
    public function SetData(WaifuPicsContext $ctx): void {}
    public function GetData(WaifuPicsContext $ctx): void {}
    public function GetMatch(WaifuPicsContext $ctx): void {}
    public function SetMatch(WaifuPicsContext $ctx): void {}
    public function PrePoint(WaifuPicsContext $ctx): void {}
    public function PreSpec(WaifuPicsContext $ctx): void {}
    public function PreRequest(WaifuPicsContext $ctx): void {}
    public function PreResponse(WaifuPicsContext $ctx): void {}
    public function PreResult(WaifuPicsContext $ctx): void {}
    public function PreDone(WaifuPicsContext $ctx): void {}
    public function PreUnexpected(WaifuPicsContext $ctx): void {}
}
