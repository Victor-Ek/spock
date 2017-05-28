require 'erb'
require 'date'

def main
  @nameList = []
  @dateList = []
  @moneyList = []
  previousdate = nil
  times = 0
  1000.times do
    name = getName
    fullName = "#{name[0]} #{name[1]}"
    @nameList << fullName
    date = getDate(previousdate,times)
    previousdate = date
    @dateList << date.to_s
    money = getMoney
    @moneyList << money
    times += 1
  end
  erb_template = File.read("data.js.erb")
  erb_template = ERB.new(erb_template)
  File.write('../js/data.js', erb_template.result(binding))

end

def getName
  allNames = File.readlines("names.txt")
  allSurnames = File.readlines("surnames.txt")
  name = allNames[rand(0..allNames.length-1)]
  surname = allSurnames[rand(0..allSurnames.length-1)]
  name = name.chomp
  surname = surname.chomp
  return name, surname
end

def getDate(previousdate, times)
  #if previousdate == nil
    today = Time.now.strftime("%b,%d,%H,%M")
  #else
    #today = (previousdate.to_time - rand(1..60).hours).to_datetime
  #end
    return today
end

def getMoney
  money = rand(300..700)
  return money
end

main
