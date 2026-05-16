# WaifuPics SDK feature factory

from feature.base_feature import WaifuPicsBaseFeature
from feature.test_feature import WaifuPicsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WaifuPicsBaseFeature(),
        "test": lambda: WaifuPicsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
