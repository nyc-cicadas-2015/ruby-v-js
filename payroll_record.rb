class PayrollRecord
  attr_reader :name, :hourly_rate

  def initialize(name, hourly_rate)
    @name          = name
    @hourly_rate   = hourly_rate
  end
end

class PayrollRecord
  def to_s
    "Hi I am #{@name} and I make #{@hourly_rate} an hour"
  end
end



mark = PayrollRecord.new("Mark", 200)
puts mark
