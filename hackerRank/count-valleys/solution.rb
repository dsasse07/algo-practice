require 'pry'


steps1 = 8
path1 = "UDDDUDUU"

steps2 = 12
path2 = "DDUUDDUDUUUD"


def count_valleys(steps, path)
  elevation = 0
  valley_count = 0

  path.split('').each do |step|
    elevation += step == "U" ? 1 : -1
    if ( elevation < 0 && valley_count % 2 == 0 ) || ( elevation == 0 && valley_count % 2 == 1)
      valley_count += 1
    end
  end

  valley_count / 2
end

binding.pry
false
