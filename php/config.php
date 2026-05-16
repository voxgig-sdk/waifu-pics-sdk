<?php
declare(strict_types=1);

// WaifuPics SDK configuration

class WaifuPicsConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WaifuPics",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.waifu.pics",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "image" => [],
                ],
            ],
            "entity" => [
        'image' => [
          'fields' => [
            [
              'name' => 'file',
              'req' => true,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 0,
            ],
          ],
          'name' => 'image',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'trap',
                        'kind' => 'param',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'nsfw',
                        'kind' => 'param',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/many/{type}/{category}',
                  'parts' => [
                    'many',
                    '{type}',
                    '{category}',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'many',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WaifuPicsFeatures::make_feature($name);
    }
}
