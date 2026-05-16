package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WaifuPics",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.waifu.pics",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"image": map[string]any{},
			},
		},
		"entity": map[string]any{
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "file",
						"req": true,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 0,
					},
				},
				"name": "image",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "trap",
											"kind": "param",
											"name": "category",
											"orig": "category",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "nsfw",
											"kind": "param",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/many/{type}/{category}",
								"parts": []any{
									"many",
									"{type}",
									"{category}",
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"many",
						},
					},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
