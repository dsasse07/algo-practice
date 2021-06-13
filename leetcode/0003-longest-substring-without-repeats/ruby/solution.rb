require 'pry'

s1 = "the sky is blue"
s2 = "  hello world  "
s3 = "a good   example"
s4 = "  Bob    Loves  Alice   "
s5 = "Alice does not even like bob"


def reverse_string(string)
    trimmed_string = string.strip
    normalized_string = trimmed_string.gsub( /\s{2,}/, " " )
    normalized_string.split(" ").reverse.join(" ")
end 


binding.pry

false