require 'leap_year'
describe "LeapYear" do
    it "it checks if the method leap year takes a year argument" do
        leapyear = LeapYear.new
        test = leapyear.year?(2000)
        expect(test).to eq true
    end
end