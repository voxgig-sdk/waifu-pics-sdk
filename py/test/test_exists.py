# ProjectName SDK exists test

import pytest
from waifupics_sdk import WaifuPicsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WaifuPicsSDK.test(None, None)
        assert testsdk is not None
