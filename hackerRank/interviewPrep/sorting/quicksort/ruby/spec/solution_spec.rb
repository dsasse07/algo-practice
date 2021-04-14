require_relative '../solution.rb'

test1 = [5,1,1,19,3,9,6,1,8]

describe "solution" do 
  it "should " do
    solution = Solution.new
    expect( solution.solve( test1 ) ).to eql( [1,1,1,3,5,6,8,9,19] )
  end

end
