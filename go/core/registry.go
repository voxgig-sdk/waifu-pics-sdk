package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewImageEntityFunc func(client *WaifuPicsSDK, entopts map[string]any) WaifuPicsEntity

