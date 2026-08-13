# WaifuPics SDK utility: make_context

from waifupics_sdk.core.context import WaifuPicsContext


def make_context_util(ctxmap, basectx):
    return WaifuPicsContext(ctxmap, basectx)
