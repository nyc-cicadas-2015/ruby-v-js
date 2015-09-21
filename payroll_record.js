function PayrollRecord(name, hourly_rate) {
  this.name          = name;
  this.hourly_rate   = hourly_rate;
}





PayrollRecord.prototype.toString = function() {
  return "Hi I am " +
  this.name +
  " and I make " +
  this.hourly_rate +
  " an hour";
}

PayrollRecord.prototype.reverseName = function() {
  return this.name.split('').reverse().join('')
}

var mark = new PayrollRecord("Mark", 200)
console.log(mark.toString());
console.log(mark.reverseName());

var stevenInTheAughts = new PayrollRecord("StevenHarms", 300)
console.log(stevenInTheAughts.reverseName())
