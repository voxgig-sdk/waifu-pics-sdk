# WaifuPics SDK

Fetch random anime images from waifu.pics across SFW and NSFW categories

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Waifu Pics API

[waifu.pics](https://waifu.pics) is a community image API that serves random anime artwork sorted into themed categories. The service is free, public, and requires no API key.

What you get from the API:

- Random single-image URLs by category (SFW and NSFW)
- Batch endpoints that return multiple image URLs in one call (POST `/many/{type}/{category}`)
- Categories cover common anime reaction and character tropes (e.g. `waifu`, `neko`, `hug`, `pat`, `cry`, `smile`)

The API is open and unauthenticated. Hosted at `https://api.waifu.pics`. NSFW endpoints exist alongside SFW ones, so callers should gate requests appropriately for their audience.

## Try it

**TypeScript**
```bash
npm install waifu-pics
```

**Python**
```bash
pip install waifu-pics-sdk
```

**PHP**
```bash
composer require voxgig/waifu-pics-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/waifu-pics-sdk/go
```

**Ruby**
```bash
gem install waifu-pics-sdk
```

**Lua**
```bash
luarocks install waifu-pics-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WaifuPicsSDK } from 'waifu-pics'

const client = new WaifuPicsSDK({})

// List all images
const images = await client.Image().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o waifu-pics-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "waifu-pics": {
      "command": "/abs/path/to/waifu-pics-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Image** | A single anime image resource returned as a URL, retrieved by category under `/sfw/{category}` or `/nsfw/{category}`, with batch variants at `/many/{type}/{category}`. | `/many/{type}/{category}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from waifupics_sdk import WaifuPicsSDK

client = WaifuPicsSDK({})

# List all images
images, err = client.Image(None).list(None, None)
```

### PHP

```php
<?php
require_once 'waifupics_sdk.php';

$client = new WaifuPicsSDK([]);

// List all images
[$images, $err] = $client->Image(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/waifu-pics-sdk/go"

client := sdk.NewWaifuPicsSDK(map[string]any{})

// List all images
images, err := client.Image(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "WaifuPics_sdk"

client = WaifuPicsSDK.new({})

# List all images
images, err = client.Image(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("waifu-pics_sdk")

local client = sdk.new({})

-- List all images
local images, err = client:Image(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WaifuPicsSDK.test()
const result = await client.Image().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WaifuPicsSDK.test(None, None)
result, err = client.Image(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WaifuPicsSDK::test(null, null);
[$result, $err] = $client->Image(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Image(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WaifuPicsSDK.test(nil, nil)
result, err = client.Image(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Image(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Waifu Pics API

- Upstream: [https://waifu.pics](https://waifu.pics)
- API docs: [https://waifu.pics/docs](https://waifu.pics/docs)

---

Generated from the Waifu Pics API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
