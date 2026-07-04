# frozen_string_literal: true

# Typed models for the WaifuPics SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Image entity data model.
#
# @!attribute [rw] file
#   @return [Array]
Image = Struct.new(
  :file,
  keyword_init: true
)

# Request payload for Image#list.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
ImageListMatch = Struct.new(
  :category,
  :type,
  keyword_init: true
)

