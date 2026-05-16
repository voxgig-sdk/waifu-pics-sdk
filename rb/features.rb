# WaifuPics SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WaifuPicsFeatures
  def self.make_feature(name)
    case name
    when "base"
      WaifuPicsBaseFeature.new
    when "test"
      WaifuPicsTestFeature.new
    else
      WaifuPicsBaseFeature.new
    end
  end
end
